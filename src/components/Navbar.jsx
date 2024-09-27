import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import avatar from "../assets/images/Ellipse 757.png"

const Navbar = () => {
  const userName = "John Doe"; 

  return (
    <nav className="navbar">
      <div className="navigation">
        <a href="#" className="navbutton">Movies</a>
        <a href="#" className="navbutton">Series</a>
        <a href="#" className="navbutton">Documentaries</a>
      </div>
      <div className="account">
        <button className="navButton">
          <FaSearch className="navIcon" />
        </button>
        <button className="navButton">
          <FiBell className="navIcon" />
        </button>
        <div className="userInfo">
          <img
            src={avatar}
            alt="avatar"
            className="userAvatar"
          />
          <span className="userName">{userName}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
