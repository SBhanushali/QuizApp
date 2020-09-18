const {
  create,
  getAllQuestionOfModule,
  checkAnswer,
  getAllModules,
} = require("../controller");

//Initialize express router
const router = require("express").Router();

// Create questions
router.post("/create", create);

// Get all the modules
router.get("/modules", getAllModules);

// Get all the question from module
router.get("/questions", getAllQuestionOfModule);

// Check answer
router.post("/check", checkAnswer);

// Export API routes
module.exports = router;
