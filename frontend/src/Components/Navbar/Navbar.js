import './Navbar.css';
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="site-name">Contact Manager</span>
      <ul>
          <a href="/">Home</a>
          <a href="/add-contact">Add Contact</a>
      </ul>
    </nav>
  );
}
