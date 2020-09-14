const { create, getAllQuestionOfModule } = require("../controller");

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

// Get all the question from module
router.get("/get", getAllQuestionOfModule);

// Export API routes
module.exports = router;
