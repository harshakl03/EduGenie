const Result = require("../Models/Result");
const Student = require("../Models/Student");
const { isLoggedIn } = require("./userController");
const jwt = require("jsonwebtoken");
const ENV = require("../config/env");

const extractData = async (req, res) => {
  try {
    const { pdf_path, username } = req.body;
    const response = await fetch("http://127.0.0.1:8000/extract_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdf_path,
        username,
      }),
    });

    const data = await response.json();

    await Result.insertMany([
      {
        student_id: "1BI22CD015",
        ...data,
      },
    ]);

    return res.status(200).json({
      message: "Data Recieved Successfully",
      student_id: "1BI22CD015",
      semester: data.semester,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getStudentResultsById = async (req, res) => {
  try {
    const token = req.cookies.user_token;
    const username = req.params.id;
    const status = await isLoggedIn(username, token);

    if (status == 0)
      return res
        .status(403)
        .json({ message: "Unauthorized: You don't have access" });

    const student = await Student.findById(username);
    const data = await Result.find({ student_id: username });

    if (!student)
      return res
        .status(400)
        .json({ message: `Student with id:${id} doesn't exist` });

    const overall_results = data.map(({ semester, results }) => ({
      semester,
      results,
    }));

    const results = {
      name: student.Name,
      overall_results,
    };

    return res
      .status(200)
      .json({ message: "Data retrived successfully", results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const initializeStudentChatbot = async (req, res) => {
  try {
    const username = req.params.username;
    const token = req.cookies.user_token;
    const status = await isLoggedIn(username, token);

    if (status == -1)
      return res
        .status(403)
        .json({ message: "Unauthorized: No token provided" });

    if (status == 0)
      return res
        .status(403)
        .json({ message: "Unauthorized: You don't have access" });

    const response = await fetch(
      `http://127.0.0.1:8000/initialize_chatbot/${username}`
    );

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const queryStudentChatbot = async (req, res) => {
  const query = req.body.query;
  try {
    const response = await fetch("http://127.0.0.1:8000/student_chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  extractData,
  getStudentResultsById,
  initializeStudentChatbot,
  queryStudentChatbot,
};
