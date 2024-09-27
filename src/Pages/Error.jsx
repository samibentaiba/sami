// src/ErrorPage.jsx
import React from 'react';
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>Page Not Found</h1>
      <p>It seems like the page you're looking for doesn't exist.</p>
      <NavLink to="/">Go back to Home</NavLink>
    </div>
  );
};

export default Error;
