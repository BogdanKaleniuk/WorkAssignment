import React from "react";
import Task1 from "./1Task/Task1";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";
import Task4 from "./Task4/Task4";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/task1">Task1 </NavLink>
          <NavLink to="/task2">Task2 </NavLink>
          <NavLink to="/task3">Task3 </NavLink>

          <NavLink to="/task4">Task4 </NavLink>
          <NavLink to="/">"Back</NavLink>
        </nav>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
