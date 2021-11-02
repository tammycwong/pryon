import React from "react";
// import image from "../images/main.jpg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <div className="profile">
      {/* <img src={image} alt="astronaut" /> */}
      {/* <div className="overlay">
        <div className="content"> */}
          <h1 className="title">
              Hi {user.name}, welcome to your ISS Watch dashboard
            </h1>
          {/* {JSON.stringify(user,null,2)} */}
          <img src={user.picture} alt={user.name} className="profile-picture"/>
          {/* <h2>{user.name}</h2> */}
          <p>{user.email}</p>
          {/* <JSONPretty data={user} /> */}
          <Link to="/astronauts"><button className="">See Astronauts</button></Link>
          <button className="">See ISS Position</button>
        </div>
    //   </div>
    // </div>
    )
  );
}
