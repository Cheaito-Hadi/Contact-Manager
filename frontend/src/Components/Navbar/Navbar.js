import "./Navbar.css";
import React from "react";
import Image from "./contactLogo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-logo">
        <span className="site-name">Contact Manager</span>
        <img src={Image} alt="logo" width="50px"/>
      </div>
      <ul>
        <a href="/">Home</a>
        <a href="/add-contact">Add Contact</a>
      </ul>
    </nav>
  );
}
