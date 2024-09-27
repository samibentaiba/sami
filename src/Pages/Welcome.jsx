import './Welcome.css';
import React from 'react';
import logo from '../assets/images/logo.svg';
import { NavLink } from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome-container">
            <div className="flex-column-section">
                <div className="flex-row-section">
                    <img className="movie-image" src={logo} alt="alt text" />
                </div>
                <p className="highlight-text">
                    Enjoy the newest movies
                </p>
                <NavLink to="/login" className="login-button">Log in</NavLink>
                <p className="highlight-box-text-box">
                    <span className="highlight-box-text">
                        <span className="highlight-box-text-span0">No account? </span>
                        <NavLink to="/signup" className="highlight-box-text-span1">Sign up</NavLink>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Welcome;
