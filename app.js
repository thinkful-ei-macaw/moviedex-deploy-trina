require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const movieData = require("./movieData");

const app = express();

const API_TOKEN = process.env.API_TOKEN;

app.use(morgan("dev"));

const cors = require("cors");
app.use(cors);

app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});

function validateAuthorization(req, res, next) {}

function handleTypes(req, res) {}

//GET types
app.get("/types", handleTypes);
app.get("/valid-types", handleTypes);

// app.get ("/movie", (req, res) {

// })
