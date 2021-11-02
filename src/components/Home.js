import React from "react";
// import { Link } from "react-router-dom";
import image from "../images/main.jpg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from '@auth0/auth0-react';



export default function Home() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="banner">
      <img src={image} alt="astronaut" className="astronaut"/>
      <div className="overlay">
        <div className="content">
          <h1 className="title">
            Your up to date International Space Station tracker
          </h1>
          <LoginButton/>
          <LogoutButton/>
        </div>
      </div>
    </div>
  );
}
