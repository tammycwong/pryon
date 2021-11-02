import React, { useState, useEffect } from "react";
// import AstronautsTable from "./AstronautsTable";

export default function Astronauts() {
  const [astronauts, setAstronauts] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((r) => r.json())
      .then((data) => {
        setAstronauts(data);
        setIsLoaded(true);
      });
  }, [setAstronauts]);

  // console.log(astronauts);
  // console.log(astronauts.people);

  if (isLoaded) {
    return (
      <table className="">
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Craft</th>
          </tr>
          </thead>

          <tbody>
        {astronauts.people.map((astronaut) => {
          return (
            <tr>
              <td>{astronaut.name}</td>
              <td>{astronaut.craft}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    );
  } else {
    return <p>Loading ... </p>;
  }
}
