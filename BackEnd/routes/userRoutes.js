const express = require("express");
const router = express.Router();

const { createStudent } = require("../controllers/studentController");
const { createTeacher } = require("../controllers/teacherController");
const { login } = require("../controllers/userController");

router.post("/login", login);
router.post("/registerStudent", createStudent);
router.post("/registerTeacher", createTeacher);

module.exports = router;
