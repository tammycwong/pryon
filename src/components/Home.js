import React from "react";
import image from "../images/main.jpg";

export default function Home() {
  return (
    <div className="banner">
      <img src={image} alt="astronaut" />
      <div className="overlay">
        <div className="content">
          <h1 className="title">
            Your up to date International Space Station tracker
          </h1>
          <button className="">Log In</button>
          <button className="">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
