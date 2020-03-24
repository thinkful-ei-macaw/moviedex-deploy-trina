require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const MOVIES = require("./movies-data-small.json");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get("Authorization");
  if (!authToken || authToken.split(" ")[1] !== apiToken) {
    return res.status(401).json({ error: "unauthorised request" });
  }

  next();
});

//search by genre, country, or avg_vote
app.get("/movie", function handleGetMovies(req, res) {
  let response = MOVIES;

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
  res.json(response);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
