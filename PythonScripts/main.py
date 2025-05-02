import requests.cookies
from fastapi import FastAPI, HTTPException

import google.generativeai as genai

from langchain.memory import ConversationBufferMemory
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI

import fitz
import re
import os
import requests

from models.InitializeRequest import InitializeRequest
from models.DataExtractRequest import DataExtractRequest
from models.ChatRequest import ChatRequest


from models.ResultsResponse import ResultsResponse
from models.StudentChatbotResponse import StudentChatbotResponse

from core.config import settings



app = FastAPI()
sessions = requests.Session()

os.environ["GOOGLE_API_KEY"] = settings.gemini_api_key
genai.configure(api_key = settings.gemini_api_key)

student_data = {}
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True,
    input_key="query"
)

template = """
You are a student assistant bot. Use the following conversation and context to answer questions.

{chat_history}

Student's query: {query}
"""

prompt = PromptTemplate(
    input_variables=["chat_history", "query"],
    template=template
)

llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro", temperature=0.5)
chain = LLMChain(llm=llm, prompt=prompt, memory=memory)


@app.post("/extract_data", response_model = ResultsResponse)
def extract_data_from_pdf(student: DataExtractRequest):
    print(student)
    pdf_path = student.pdf_path
    username = student.username
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    
    if username in text :
        match = re.search(r"Semester\s*:\s*(\d+)", text)
        if match:
            semester = match.group(1)
        pattern = re.compile(
            r'(?P<code>B\w{2,10})\n'                                      
            r'(?P<name>(?:[A-Z][^\n]*\n?)+?)'                              
            r'(?P<internal>\d{1,3})\n'                                    
            r'(?P<external>\d{1,3})\n'                                    
            r'(?P<total>\d{1,3})\n'                                    
            r'(?P<result>[PFWAX])',                                       
            re.MULTILINE
        )

        results = []
        for match in pattern.finditer(text):
            subject_data = {
                'subject_code': match.group('code').strip(),
                'subject_name': match.group('name').replace('\n', ' ').strip(),
                'internal': int(match.group('internal')),
                'external': int(match.group('external')),
                'total': int(match.group('total')),
                'result': match.group('result')
            }
            results.append(subject_data)

        return {"semester":semester, "results":results}
    
    else:
        raise HTTPException(
            status_code=401,
            detail="Invalid Student Username",
            headers={"X-Error": "AuthorizationFailed"},
        )
    
@app.get("/config_key")
def config_key():
    genai.configure(api_key = settings.gemini_api_key)
    return settings.gemini_api_key
    

def get_student_data(username):
    data = requests.get(f"http://localhost:3000/api/PythonScripts/studentResultsById/{username}")
    student_data = data.json()['data']
    return student_data

@app.get("/initialize_chatbot/{username}")
def initialize_student_chatbot(username: str):
    student_data = get_student_data(username)
    if(len(student_data['overall_results']) == 0): return {"message":"Cannot Initialize Chatbot. Update your attendance and results first"}
    initial_context = f"""
    Student Name: {student_data['name']}
    Overall Result : {student_data['overall_results']}

    SGPA is calculated sem wise whereas CGPA is calculated for overall subjects
    Grade Point for each subject is calculated using total marks for that subject / 10 and floor the value + 1. If total marks for that subject / 10 is 10 then grade points is 10
    SGPA = (Credits X Grade Points)/Total Credits.
    CGPA = (Sum of all semesters (SGPA X Total Credits in that semester))/Overall Credits of all semesters
    """
    memory.clear()
    memory.chat_memory.add_user_message("Student data for chatbot context:")
    memory.chat_memory.add_ai_message(initial_context)

    return {"message":"Chatbot initialized successfully"}

@app.post("/student_chatbot", response_model = StudentChatbotResponse, response_model_exclude_none=True)
def student_chatbot(chat : ChatRequest):
    try:
        response = chain.run(chat.query)
        return {"response":response, "message":"Response Obtained Successfully"}
    except Exception as e:
        return {"error": str(e), "message": "Error Occured"}