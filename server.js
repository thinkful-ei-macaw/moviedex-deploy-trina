//require("dotenv").config(); add .env file to hide the api key

const express = require("express");
const morgan = require("morgan");

const movieData = require("./movies-data-small.json");

const app = express();

// const API_TOKEN = process.env.API_TOKEN; get uuid for api token

app.use(morgan("dev"));

const cors = require("cors");
app.use(cors);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

app.get("/movie", (req, res) => {});

// function validateAuthorization(req, res, next) {}

// function handleTypes(req, res) {
//   let response = movieData;
//   // if (req.query.genre)

//   // if(country)

//   // if(avg_vote)

//   res.json(response);
// }

// //GET types
// app.get("/types", handleTypes);
// app.get("/valid-types", handleTypes);

// // app.get ("/movie", (req, res) {

// // })
