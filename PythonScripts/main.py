from fastapi import FastAPI
import fitz
import re

app = FastAPI()

@app.get("/")
def extract_text_from_pdf(pdf_path="C:/Users/Admin/Downloads/Pavan.pdf"):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text()
    
    pattern = re.compile(
        r"(B[A-Z]{2,6}\d{3}[A-Z]?)\s+((?:[A-Z&\-\n\s]+)+?)\s+(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+(P|F|A|W|X|NE)\s+(\d{4}-\d{2}-\d{2})",
        re.MULTILINE
    )

    matches = pattern.findall(text)
    results = []

    for match in matches:
        subject_code, subject_name, internal, external, total, result, date = match
        # Clean up extra whitespace and line breaks in subject name
        subject_name = ' '.join(subject_name.strip().split())
        results.append({
            "subject_code": subject_code.strip(),
            "subject_name": subject_name,
            "internal": int(internal),
            "external": int(external),
            "total": int(total),
            "result": result,
            "date": date
        })

    return results

@app.get("/auth")
def auth():
    return "You Just Clicked Auth"