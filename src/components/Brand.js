import React from "react";

function Brand({ brand }) {
  return (
    <article>
      <p>{brand.name ? brand.name : "Unavailable"}</p>
      <p>{brand.description ? brand.description : "Unavailable"}</p>
      <img src={`http:${brand.image.url}`} alt="brand logo"></img>
    </article>
  );
}

export default Brand;
