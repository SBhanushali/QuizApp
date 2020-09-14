let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./routes/index");

// Parse JSON bodies
app.use(express.json());
//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Connect to Mongoose and set connection variable
const dbURI =
  "mongodb+srv://snbhanushali:00000000@cluster0.t7lll.mongodb.net/quizapp?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

//Setup server port
var port = process.env.PORT || 8080;

//Send message to default URL
app.get("/", (req, res) => res.send("Hello world with express"));

// Use Api routes in the App
app.use("/api", apiRoutes);

// Launch app to listen to port
app.listen(port, () => {
  console.log("Running on port" + port);
});
