import React, { useState, useEffect } from "react";

export default function App() {
  const [astronauts, setAstronauts] = useState([]);
  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((astronautsArr) => {
        setAstronauts(astronautsArr);
        console.log(astronautsArr);
      });
  }, []);

  return <div></div>;
}

