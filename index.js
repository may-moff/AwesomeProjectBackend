const express = require("express");
// const dotenv = require("dotenv")
const apiRoutes = require("./routes/index.js");
require("dotenv").config();
const app = express();
const port = 8000 || process.env.port;
const connection = require("./db.js");

app.use(express.json());

connection();
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.use("/api", apiRoutes);
// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.get("/test", (req, res) => {
  console.log(req.body);
});

// app.post('/api/')
