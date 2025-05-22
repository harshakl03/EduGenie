const express = require("express");
const {
  getStudentsList,
  getStudentResultsById,
} = require("../controllers/teacherController");
const router = express.Router();

router.get("/getStudentsList/:username/:subjectId", getStudentsList);
router.get("/getStudentResults/:username/:subject_id", getStudentResultsById);

module.exports = router;
