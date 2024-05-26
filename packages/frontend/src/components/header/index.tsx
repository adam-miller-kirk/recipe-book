import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div className="Header">
    <h1>What's For Tonight</h1>
    <nav className="HeaderLinks">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
  </div>
);

export default Header;
