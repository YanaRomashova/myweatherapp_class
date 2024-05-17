import React from "react";

const citynameField = {
  borderRadius: "15px", 
  borderColor: "#4C4DDB",
  width: "334px",
  height: "42px",
  color: "black"
};

function LocationField({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
        style={citynameField}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default LocationField;
