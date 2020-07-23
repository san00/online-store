import React from "react";

function Brand({ brand }) {
  return (
    <article>
       <img
        src={`http://localhost:1337${brand.image[0].url}`}
        alt="brand logo"
      ></img> 
      <p>{brand.name ? brand.name : "Name unavailable"}</p>
      <p>{brand.description ? brand.description : "Description unavailable"}</p> 
    </article>
  );
}

export default Brand;
