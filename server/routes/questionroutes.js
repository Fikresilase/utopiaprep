// question router file
const express = require("express");
const router = express.Router();

const { getAnswers, getQuestions } = require("../controllers/questioncontroller");

// Define route for GET requests to /api/questions
router.get("/api/questions", getQuestions);

// Define route for POST requests to /api/questions
router.post("/api/answers", getAnswers);

module.exports = router;
