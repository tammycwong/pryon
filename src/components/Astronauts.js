import React, { useState, useEffect } from "react";
import AstronautsTable from "./AstronautsTable";

export default function Astronauts() {
  const [astronauts, setAstronauts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // useEffect(() => {
  //   fetch("http://api.open-notify.org/astros.json")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setAstronauts(data);
  //     });
  // }, [setAstronauts]);

  const url = "http://api.open-notify.org/astros.json";

  const userData = async () => {
    const response = await fetch(url);
    const astronauts = await response.json();
    setAstronauts(astronauts);
  };

  useEffect(()=> {
    userData();
  })

    console.log(astronauts);
    console.log(astronauts.people);

  return (
    <div className="">
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
