const Teacher = require("../Models/Teacher");
const Student = require("../Models/Student");
const { isExisting, createUser, isLoggedIn } = require("./userController");

const createTeacher = async (req, res) => {
  try {
    const {
      username,
      password,
      name,
      DOB,
      Address,
      Phone_Number,
      Designation,
      Department,
    } = req.body;

    const exists = await isExisting(username);

    if (exists) return res.status(401).json({ message: "User already exists" });

    const newTeacher = new Teacher({
      _id: username,
      name,
      DOB,
      Address,
      Phone_Number,
      Designation,
      Department,
    });

    await newTeacher.save();

    const userResponse = await createUser(username, password, 2, "Teacher");

    return res
      .status(200)
      .json({ ...userResponse, message: "Teacher registered successfully" });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ error: err.message });
  }
};

const getStudentsList = async (req, res) => {
  try {
    const token = req.cookies.user_token;
    const { subjectId, username } = req.params;
    const status = await isLoggedIn(username, token);

    if (status == -1)
      return res
        .status(403)
        .json({ message: "Unauthorized: No token provided" });

    const teacher = await Teacher.findById(username);

    if (!teacher)
      return res
        .status(400)
        .json({ message: `Teacher with id:${id} doesn't exist` });

    if (status == 0 || status == 1)
      return res
        .status(403)
        .json({ message: "Unauthorized: You don't have access" });

    const takesSubject = await Teacher.findOne({
      _id: username,
      Subjects_Undertaken: { $elemMatch: { $in: [subjectId] } },
    });

    if (!takesSubject)
      return res.status(404).json({
        message: "Unauthorized: You don't have access to this subject",
      });

    const students = await Student.find(
      { "attendance.code": subjectId },
      { _id: 1, Name: 1, "attendance.$": 1 }
    );

    return res.status(200).json({ students });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ error: err.message });
  }
};

module.exports = { createTeacher, getStudentsList };
