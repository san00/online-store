import React from "react";
import styled from "styled-components";

function Brew({ brew }) {
  const Image = styled.img`
    width: 15em;
  `;

  return (
    <div>
      <Image
        src={`http://localhost:1337${brew.image.url}`}
        alt="brew logo"
      ></Image>
      <p>{brew.name ? brew.name : "Unavailable"}</p>
      <p>{brew.description ? brew.description : "Unavailable"}</p>
      <p>£{brew.price ? brew.price : "Unavailable"}</p>
      <button type="submit"> Add to cart </button>
    </div>
  );
}

export default Brew;
