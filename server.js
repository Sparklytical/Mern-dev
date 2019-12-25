const express = require("express");
const mongoose = require("mongoose");
const app = express();

//DB config

const db = require(`./config/keys.js`).mongoURI;

// connect to mongodb

mongoose
  .connect(db)
  .then(() => console.log("Connected to mongodb"))
  .catch(() => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
