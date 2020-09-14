const mongoose = require("mongoose");

// Setup Schema
const quizSchema = mongoose.Schema({
  moduleName: {
    type: String,
    required: true,
    unique: true,
  },
  moduleQuestions: [
    {
      id: mongoose.Schema.Types.ObjectId,
      question: { type: String, required: true },
      inputType: {
        type: String,
        required: true,
      },
      explanation: {
        type: String,
      },
      options: [
        {
          id: mongoose.Schema.Types.ObjectId,
          value: String,
          isCorrect: Boolean,
        },
      ],
    },
  ],
});

//Export quiz model
const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
