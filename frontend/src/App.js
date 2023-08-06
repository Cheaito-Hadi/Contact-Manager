import "./App.css";
import AppRouter from "./AppRouter";
import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
