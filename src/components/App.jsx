// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Alert } from "./Alert";
import "./App.css";
import Product from "./Product";

export default function App() {
  const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "gray",
    color: "white",
  };
  return (
    <div style={alertStyles}>
      <h1>Products</h1>
      <Product />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction.
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase.
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information.
    </div>
  );
}
