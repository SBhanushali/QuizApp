// Impprt quiz model
const Quiz = require("../model/quiz");

// Handle create quiz
exports.create = (req, res) => {
  const quiz = new Quiz();
  quiz.moduleName = req.body.moduleName;
  quiz.question = req.body.question;
  quiz.inputType = req.body.inputType;
  quiz.explanation = req.body.explanation;
  quiz.options = req.body.options;
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
