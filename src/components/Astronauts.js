import React, { useState, useEffect } from "react";
import image from "../images/main.jpg";

export default function Astronauts() {
  const [astronauts, setAstronauts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        setAstronauts(data);
        setIsLoaded(true);
      });
  }, []);

  // const url = "http://api.open-notify.org/astros.json";

  // const data = async () => {
  //   const response = await fetch(url);
  //   const astronauts = await response.json();
  //   setAstronauts(astronauts)
  // }

  // useEffect(() => {
  //   data();
  // }, [])

  if (isLoaded) {
    return (
      <div className="table-container">
        <img src={image} alt="astronaut" className="astronaut-secondary" />
        <div className="overlay">
          <div className="content">
            <table className="astronaut-table">
              <thead className="astronaut-table-header">
                <tr>
                  <th>Name</th>
                  <th>Craft</th>
                </tr>
              </thead>

              <tbody>
                {astronauts.people.map((astronaut) => {
                  return (
                    <tr key={astronaut.name}>
                      <td>{astronaut.name}</td>
                      <td>{astronaut.craft}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <p className="loading">Loading ... </p>;
  }
}
