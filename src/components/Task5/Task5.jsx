import React from "react";
import Home from "./Home";
import { Routes, Route, NavLink } from "react-router-dom";
import MoviesSearch from "./MoviesList";
import MovieDetails from "./MovieDetails";
import ActorDetails from "./ActorDetails";

const Task5 = () => {
  return (
    <div className="p-4">
      <nav className="mb-4 flex space-x-4 border-b pb-2">
        <NavLink
          to="/task5/home"
          style={({ isActive }) => ({
            marginRight: "10px",
            color: isActive ? "blue" : "black",
          })}
          className={({ isActive }) =>
            `text-lg px-2 py-1 rounded transition-colors duration-200 ${
              isActive
                ? "text-white bg-blue-600"
                : "text-gray-800 hover:text-blue-600"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/task5/movies"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
          className={({ isActive }) =>
            `text-lg px-2 py-1 rounded transition-colors duration-200 ${
              isActive
                ? "text-white bg-blue-600"
                : "text-gray-800 hover:text-blue-600"
            }`
          }
        >
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="movies/test" element={<div>Test page works</div>} />
        <Route path="movies/:id/:tab" element={<MovieDetails />} />
        <Route
          path="movies/:movieId/actors/:actorID"
          element={<ActorDetails />}
        />
      </Routes>
    </div>
  );
};

export default Task5;
