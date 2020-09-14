// Impprt quiz model
const Quiz = require("../model/quiz");

// Handle create quiz
exports.create = (req, res) => {
  const quiz = new Quiz();
  quiz.moduleName = req.body.moduleName;
  quiz.moduleQuestions = req.body.moduleQuestions;
  quiz
    .save()
    .then(() => {
      res.status(201).json({
        success: true,
        message: "Question created",
      });
    })
    .catch((err) => console.log(err));
};

// Get questions by module name
exports.getAllQuestionOfModule = (req, res) => {
  Quiz.find({ moduleName: req.body.moduleName })
    .then((docs) => {
      res.status(200).json({
        success: true,
        data: docs,
      });
    })
    .catch((err) => console.log(err));
};
