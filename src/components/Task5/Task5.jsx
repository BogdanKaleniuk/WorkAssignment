import React from "react";
import Home from "./Home";
import Movies from "./Movies";
import { Routes, Route, NavLink } from "react-router-dom";
import MoviesSearch from "./MoviesList";

const Task5 = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/task5/home"
          style={({ isActive }) => ({
            marginRight: "10px",
            color: isActive ? "blue" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/task5/movies"
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
        >
          Movies
        </NavLink>
      </nav>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<MoviesSearch />} />
      </Routes>
    </div>
  );
};

export default Task5;
