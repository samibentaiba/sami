//Sidebar.jsx
import { FaRegHeart } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { PiFilmStrip,  } from "react-icons/pi";
import { FiSliders } from "react-icons/fi";
import { LuMessageCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import React from "react";
import "./Sidebar.css";
import logo from "../assets/images/logo.svg";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sideLinks">
        <div className="logoContainer">
          <img className="movie-image" src={logo} alt="alt text" />
        </div>

        <Link to="/home" className="sideItem" aria-label="Home">
          <div style={{ transform: "rotate(90deg)" }}>
            <PiFilmStrip />
          </div>
          <p>home</p>
        </Link>

        <Link to="/favourites" className="sideItem" aria-label="Favourites">
          <FaRegHeart />
          <p>Favourites</p>
        </Link>

        <Link to="/trending" className="sideItem" aria-label="Trending">
          <IoIosTrendingUp />
          <p>Trending</p>
        </Link>

        <Link to="/coming-soon" className="sideItem" aria-label="Coming soon">
          <MdOutlineCalendarToday />
          <p>Coming soon</p>
        </Link>

        <Link to="/community" className="sideItem" aria-label="Community">
          <GoPeople />
          <p>Community</p>
        </Link>
        <Link to="/social" className="sideItem" aria-label="Social">
          <LuMessageCircle />
          <p>Social</p>
        </Link>
        <Link to="/settings" className="sideItem" aria-label="Settings">
          <FiSliders />
          <p>Settings</p>
        </Link>

        <Link to="/logout" className="sideItem" aria-label="Logout">
          <FiLogOut />
          <p>Logout</p>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
