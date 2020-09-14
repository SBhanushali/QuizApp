const { create } = require("../controller");

//Initialize express router
const router = require("express").Router();

// Set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API working",
    message: "Welcome to QuizApp made with love!",
  });
});

router.post("/create", create);

// Export API routes
module.exports = router;
