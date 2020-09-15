const {
  create,
  getAllQuestionOfModule,
  checkAnswer,
  getAllModules,
} = require("../controller");

//Initialize express router
const router = require("express").Router();

// Set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API working",
    message: "Welcome to QuizApp made with love!",
  });
});
// Create questions
router.post("/create", create);

// Get all the modules
router.get("/modules", getAllModules);

// Get all the question from module
router.get("/questions", getAllQuestionOfModule);

// Check answer
router.get("/check", checkAnswer);

// Export API routes
module.exports = router;
