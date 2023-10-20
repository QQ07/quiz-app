const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000; // Change the port number as needed

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let answers = ["demo1"];

app.post("/saveAnswer", (req, res) => {
  const { question, answer } = req.body;
  answers.push({ question, answer });
  res.send("Answer saved successfully.");
  console.log("answer inserted \n" + answers);
});

app.get("/getAnswers", (req, res) => {
  res.json(answers);
  console.log(answers);
});
app.get("/", (req, res) => {
  res.json("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(answers);
});
