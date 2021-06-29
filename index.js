const express = require("express");
// const dotenv = require("dotenv");
require("dotenv").config();
const app = express();
const port = 8000 || process.env.port;
const connection = require("./db");

app.use(express.json());

connection();
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/test", (req, res) => {
  console.log(req.body);
});
