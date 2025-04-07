import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODgwZjEwMjA4MTI5ZGY0MDVmMGYzZDUyNjQxNDFlZSIsIm5iZiI6MTY2NjM0MjEwNy4xMzMsInN1YiI6IjYzNTI1Y2RiOTU5MGUzMDA5MTVhZjA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vKfXAl-0fdHQ-PP0LkuqkdAPs9Ooz8DxPdxqCEDg9Ss", // Замінити на свій ключ
        },
      };

      try {
        const response = await axios.get(url, options);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Помилка при завантаженні фільмів", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Новинки кіно</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
