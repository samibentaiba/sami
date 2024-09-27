// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import Error from "./Pages/Error.jsx";
import Home from "./Pages/Home.jsx";
import Favourites from "./Pages/Favourites.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Trending from "./Pages/Trending.jsx";
import Welcome from "./Pages/Welcome.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Navigate to="/welcome" replace={true} />, // Redirect to Welcome page
  },
  {
    path: "/welcome", // Welcome path
    element: <Welcome />, // Show Welcome page
  },
  {
    path: "/home", // Home path
    element: <App />, // Main layout component
    children: [
      {
        path: "", // Default to Home
        element: <Home />,
      },
      {
        path: "favourites", // Favourites page
        element: <Favourites />,
      },
      {
        path: "trending", // Trending page
        element: <Trending />,
      },
    ],
  },
  {
    path: "/login", // Login path
    element: <Login />,
  },
  {
    path: "/signup", // Signup path
    element: <Signup />,
  },
  {
    path: "*", // Catch-all for undefined routes
    element: <Error />, // Show Error page for unknown routes
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
