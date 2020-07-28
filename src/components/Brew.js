import React from "react";

function Brew({ brew }) {
  return (
    <div>
      <img src={`http://localhost:1337${brew.image.url}`} alt="brew logo"></img>
      <p>{brew.name ? brew.name : "Unavailable"}</p>
      <p>{brew.description ? brew.description : "Unavailable"}</p>
      <p>£{brew.price ? brew.price : "Unavailable"}</p>
    </div>
  );
}

export default Brew;
