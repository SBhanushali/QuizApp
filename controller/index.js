const _ = require("lodash");

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
  Quiz.find({ moduleName: req.query.moduleName })
    .then((docs) => {
      res.status(200).json({
        success: true,
        data: docs,
      });
    })
    .catch((err) => console.log(err));
};

// Get all modules
exports.getAllModules = (req, res) => {
  Quiz.find({}, { moduleName: 1 })
    .then((docs) => {
      res.status(200).json({
        success: true,
        data: docs,
      });
    })
    .catch((err) => console.log(err));
};

// Check answer
exports.checkAnswer = async (req, res) => {
  try {
    const docs = await Quiz.findOne(
      { moduleName: req.body.moduleName },
      { moduleQuestions: 1, _id: 0 }
    );
    const questionId = req.body.questionId;
    const userSelectedOptions = req.body.selectedOptions;
    const moduleQuestions = docs.moduleQuestions;
    const question = moduleQuestions.find(
      (moduleQuestion) => moduleQuestion._id == questionId
    );
    const correctOptions = question.options.filter(
      (option) => option.isCorrect
    );
    const correctOptionsIds = correctOptions.map((option) =>
      option._id.toString()
    );
    if (
      userSelectedOptions.length != correctOptionsIds.length ||
      !_.isEqual(userSelectedOptions.sort(), correctOptionsIds.sort())
    ) {
      res.status(200).json({
        success: true,
        isCorrect: false,
        correctOptions: correctOptions,
        explanation: question.explanation,
      });
    } else if (
      _.isEqual(userSelectedOptions.sort(), correctOptionsIds.sort())
    ) {
      res.status(200).json({
        success: true,
        isCorrect: true,
        correctOptions: correctOptions,
        explanation: question.explanation,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
