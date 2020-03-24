require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
console.log(process.env.API_TOKEN);

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

//search by genre, country, or avg_vote
app.get("/movie", (req, res) => {
  if (req.query.name) {
    response = movieData.filter(movie =>
      movie.film_title.toLowerCase().includes(request.query.name.toLowerCase())
    );
  }
  if (req.query.country) {
    response = movieData.filter(movie =>
      movie.country.toLowerCase().includes(request.query.country.toLowerCase())
    );
  }
  if (req.query.avg_vote) {
    response = movieData.filter(movie =>
      movie.avg_vote
        .toLowerCase()
        .includes(request.query.avg_vote.toLowerCase())
    );
  }
});

// function validateAuthorization(req, res, next) {}

// function handleTypes(req, res) {
//   let response = movieData;
//   //

//   // if(country)

//   // if(avg_vote)

//   res.json(response);
// }

// //GET types
app.get("/types", handleGetMovies);
// app.get("/valid-types", handleTypes);

// // app.get ("/movie", (req, res) {

// // })
