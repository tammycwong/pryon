import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import pin from "../images/pin.png";
import image from "../images/main.jpg";

export default function IssLocation({ setIsLoaded, isLoaded, zoom, center }) {
  const [isLoading, setIsLoading] = useState(false);
  const [longitude, setLongitude] = useState(40.7128);
  const [latitude, setLatitude] = useState(74.006);

  useEffect(() => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((r) => r.json())
      .then((data) => {
        setLongitude(data.iss_position.longitude);
        setLatitude(data.iss_position.latitude);
        setIsLoading(false);
      });
  }, []);

  if (!isLoading) {
    return (
      <div className="">
        <img src={image} alt="astronaut" className="astronaut-secondary" />
        <div className="overlay">
          <div className="content">
            <div className="map">
              <GoogleMapReact
                boostrapURLKeys={{
                  key: "AIzaSyCqbcmEEYfn_MhRM-ax_ukDrr0-efbJqsw",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <img
                  src={pin}
                  alt="Pin Icon"
                  className="pin-icon"
                  lat={center.lat}
                  lng={center.lng}
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading ... </p>;
  }
}

IssLocation.defaultProps = {
  center: {
    lat: 74.006,
    lng: 40.7128,
  },
  zoom: 3,
};
