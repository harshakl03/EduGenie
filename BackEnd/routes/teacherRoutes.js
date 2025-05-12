const express = require("express");
const { getStudentsList } = require("../controllers/teacherController");
const router = express.Router();

router.get("/getStudentsList/:username/:subjectId", getStudentsList);

module.exports = router;
