import React, { useState, useEffect } from "react";
import AstronautsTable from "./AstronautsTable";

export default function Astronauts() {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((astronautsObj) => {
        setAstronauts(astronautsObj);
      });
  }, []);

  console.log(astronauts);
  console.log(astronauts.people);

  return (
    <div>
      {astronauts.people.map((astronaut) => {
        return (
            <AstronautsTable key={astronaut.name} astronaut={astronaut}/>
        );
      })}
    </div>
  );
}
