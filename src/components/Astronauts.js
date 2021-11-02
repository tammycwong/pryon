import React, { useState, useEffect } from "react";
import AstronautsTable from "./AstronautsTable";

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
      <div>
        {astronauts.people.map((astronaut) => {
          return <AstronautsTable key={astronaut.name} astronaut={astronaut} />;
        })}
      </div>
    );
  } else {
    return <p>Loading ... </p>;
  }
}
