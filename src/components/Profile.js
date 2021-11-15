import React from "react";
import image from "../images/main.jpg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="banner">
        <img src={image} alt="astronaut" className="astronaut" />
        <div className="overlay">
          <div className="content">
            <h1 className="title">
              Hi {user.name}, welcome to your ISS Watch dashboard
            </h1>
            </div>

            <div className="button-container">
              <Link to="/astronauts">
                <button className="profile-button-primary">
                  See Astronauts
                </button>
              </Link>
              <Link to="/isslocation">
                <button className="profile-button">See ISS Position</button>
              </Link>
          </div>
        </div>
      </div>
    )
  );
}
