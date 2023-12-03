const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(express.json()); // accepts json data

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
