# 🧠 EduGenie - AI-Powered Educational Assistant

EduGenie is a modular system designed to provide personalized academic support for students by integrating a React frontend, Node.js backend, LangChain-based Python scripts, and Google Gemini LLM.

---

## 📁 Project Structure

├── Backend # Node.js backend to connect frontend with APIs and Python scripts.  
├── FrontEnd # Frontend (React-based, not detailed here).  
├── LangChain # Jupyter notebooks to test Python scripts (LangChain + Gemini).  
└── PythonScripts # Finalized Python scripts hosted via FastAPI.  

---

## ⚙️ Backend Setup

1. Navigate to the `Backend` folder:

```bash
cd Backend
```

2. Install the required dependencies
```bash
npm install
```

3. Create a .env file inside the Backend folder and add your Google Gemini API key:
```bash
GEMINI_API_KEY=your_google_gemini_api_key_here
```

## 🔬 LangChain + Jupyter Lab Environment Setup

This setup allows you to develop and test LangChain-based Python scripts using Gemini.

1. Navigate to the LangChain folder:
```bash
cd LangChain
```

2. Create a new Conda environment:
```bash
conda create --prefix ./EduGenie.env python=3.10
```

3. Activate the environment:
```bash
conda activate ./EduGenie.env
```

4. Install JupyterLab:
```bash
conda install jupyterlab
```

5. Install required Python packages:
```bash
pip install PyMuPDF langchain langchain-google-genai google-generativeai langchain-community python-dotenv
```

6. Launch JupyterLab:
```bash
jupyter lab
```

## 🚀 PythonScripts (FastAPI Backend)

The PythonScripts folder contains finalized Python APIs.
These are designed to be hosted using FastAPI for production usage.

```bash
uvicorn main:app --reload
```
