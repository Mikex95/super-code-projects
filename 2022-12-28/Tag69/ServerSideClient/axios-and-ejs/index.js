const axios = require("axios")
const ejs = require("ejs")
const express = require("express");
const app = express();
const API_KEY = "f3a2b22a69edb2f4a40f00ee2c54fcdd";
const { paginationMenu } = require("./utils");



app.set("view engine", "ejs");

app.use((req, _, next) => {
    console.log("neue request:", req.url, req.method);
    next();
});

app.use(express.static("public"));

const movieListRequestHandler = (req, res) => {
    const genres = req.params.genre 
    const page = req.params.page ? Number(req.params.page) : 1;
    const pagination = paginationMenu(page)
      // Abruf der Liste der aktuell im Kino laufenden Filme
  const moviesPromise = axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=${genres}`,
    {
      headers: { "Accept-Encoding": "application/json" },
    }
  );
  // Abruf der Liste der Genres
  const genresPromise = axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=f3a2b22a69edb2f4a40f00ee2c54fcdd&language=en-US`,
    {
      headers: { "Accept-Encoding": "application/json" },
    }
  );
    Promise.all([moviesPromise, genresPromise])
    .then(([moviesResponse, genresResponse]) => {
        const genresData = genresResponse.data.genres;
        const users = moviesResponse.data.results
        res.render("home", {
            currentPage: page,
            pagination,
            genresData,
            users
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

app.get("/", movieListRequestHandler);
app.get("/movies/:page", movieListRequestHandler);
app.get("/genre/:genre", movieListRequestHandler)

app.get("/movie/:movieId", (req, res) => {
    const movieId = Number(req.params.movieId);
    const axiosOptions =  {headers: { "Accept-Encoding": "application/json"}};
   axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`, axiosOptions
    )
    .then((movieDetails) => {
        const details = movieDetails.data;
        const detailsGenre = movieDetails.data.genres;
        res.render("details", { details ,detailsGenre });
    })
    .catch((err) => {
        console.log(err);
        res.status(404).sendFile("Error")
    })   
})


const PORT = 3000;
app.listen(PORT, () => console.log("Server ready at Port: ", PORT));