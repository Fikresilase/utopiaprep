// question controller file
const getQuestions = (req, res) => {
  res.status(200).json({ message: "Get Questions" });
};

// Getting answers
const getAnswers = (req, res) => {
  if(!req.body.text){res.status(400)
throw new error('please add a text field') 
};
  res.status(200).json({ message: "Get Answers" }); // Corrected message to indicate getting answers
};

module.exports = { getAnswers, getQuestions };
