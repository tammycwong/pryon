import React, { useState, useEffect } from "react";
import AstronautsTable from "./AstronautsTable";

export default function Astronauts() {
  const [astronauts, setAstronauts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((r) => r.json())
      .then((data) => {
        setAstronauts(data);
      });
  }, [setAstronauts]);

    console.log(astronauts);
    console.log(astronauts.people);

  return (
    <div>
      {hasError && <p>Something went wrong</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {astronauts.people.map((astronaut) => {
            return (
              <AstronautsTable key={astronaut.name} astronaut={astronaut} />
            );
          })}
        </div>
      )}
    </div>
  );
}
