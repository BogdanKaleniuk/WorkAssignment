import React, { useEffect, useState } from "react";
import axios from "axios";

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("matrix");

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODgwZjEwMjA4MTI5ZGY0MDVmMGYzZDUyNjQxNDFlZSIsIm5iZiI6MTY2NjM0MjEwNy4xMzMsInN1YiI6IjYzNTI1Y2RiOTU5MGUzMDA5MTVhZjA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vKfXAl-0fdHQ-PP0LkuqkdAPs9Ooz8DxPdxqCEDg9Ss",
        },
      };

      try {
        const response = await axios.get(url, options);
        setMovies(response.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div>
      <h1>Movie List</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSearch;
