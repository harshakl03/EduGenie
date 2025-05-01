const express = require("express");
const router = express.Router();
const {
  extractData,
  getStudentResultsById,
  queryStudentChatbot,
  initializeStudentChatbot,
} = require("../controllers/PyhtonScripts");

router.post("/extractData", extractData);
router.get("/studentResultsById/:id", getStudentResultsById);
router.get("/initializeStudentChatbot/:username", initializeStudentChatbot);
router.get("/studentChatbot", queryStudentChatbot);

module.exports = router;
