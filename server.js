const express = require("express");
// const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());

const DBpass = process.env.DBString;
const dataSchema = new mongoose.Schema({
  answer: String,
});
const port = 80;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const data = mongoose.model("data", dataSchema);
mongoose.connect(
  `mongodb+srv://vaidya_jiii:${DBpass}@cluster0.ckqj4dt.mongodb.net/quizAnswers`
);
let answers = ["demo1"];

app.post("/saveAnswer", (req, res) => {
  const { ans } = req.body;
  console.log("new answer " + ans);
  const newData = new data({ answer: ans });
  newData.save().then(()=>{

    // answers.push(answer);
    res.json("Answer saved successfully.");
    console.log("answer inserted \n" + answers);
  });

});

app.get("/getAnswers", (req, res) => {
  res.json(answers);
  console.log("getAnswers " + answers);
});
app.get("/", (req, res) => {
  res.json("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(answers);
});
