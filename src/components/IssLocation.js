import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import pin from "../images/pin.png";
import image from "../images/main.jpg";

export default function IssLocation({ zoom, center }) {
  const [isLoading, setIsLoading] = useState(false);
  const [longitude, setLongitude] = useState(40.7128);
  const [latitude, setLatitude] = useState(74.006);

  // const googleApiKey="AIzaSyCqbcmEEYfn_MhRM-ax_ukDrr0-efbJqsw";

  useEffect(() => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((r) => r.json())
      .then((data) => {
        setLongitude(longitude);
        setLatitude(latitude);
        setIsLoading(false);
      });
  });

  //longitude and latitude in dependency array, otherwise remove

  if (!isLoading) {
    return (
      <div className="">
        <img src={image} alt="astronaut" className="astronaut" />
        <div className="overlay">
          <div className="content">
            <div className="map">
              <GoogleMapReact
                boostrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_MAP_KEY,
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
  zoom: 4,
};