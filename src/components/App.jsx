import React from "react";
import Task1 from "./1Task/Task1";
import Task2 from "./Task2/Task2";
import Task3 from "./Task3/Task3";
import Task4 from "./Task4/Task4";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import Task5 from "./Task5/Task5";
import { Task6 } from "./Task6/Task6";

const Home = () => {
  return <h1>Ласкаво просимо! 👋 Обери завдання з меню</h1>;
};

const App = () => {
  const navigate = useNavigate(); //  Ініціалізуємо navigate

  return (
    <div>
      <nav>
        <NavLink to="/task1">Task1 </NavLink>
        <NavLink to="/task2">Task2 </NavLink>
        <NavLink to="/task3">Task3 </NavLink>
        <NavLink to="/task4">Task4 </NavLink>
        <NavLink to="/task5">Task5 </NavLink>
        <NavLink to="/task6">Task6 </NavLink>
        <button onClick={() => navigate(-1)}>Back</button>{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5/*" element={<Task5 />} />
        <Route path="/task6/*" element={<Task6 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
