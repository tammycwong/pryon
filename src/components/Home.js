import React from "react";
import { Link } from "react-router-dom";
import image from "../images/main.jpg";
import LoginButton from "./LoginButton";



export default function Home() {

  return (
    <div className="banner">
      <img src={image} alt="astronaut" className="astronaut"/>
      <div className="overlay">
        <div className="content">
          <h1 className="title">
            Your up to date International Space Station tracker
          </h1>
          <LoginButton/>
          <button className="">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
