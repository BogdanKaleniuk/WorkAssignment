import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import "modern-normalize";
import { createContext } from "react";

const MyContext = createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </StrictMode>
);
