import React from "react";
import styled from "styled-components";

function Brew({ brew }) {
  const Image = styled.img`
    width: 15em;
  `;

  return (
    <div>
      <p>{brew.name}</p>
      <Image
        src={`http://localhost:1337${brew.image.url}`}
        alt="brew logo"
      ></Image>
      <p>{brew.description}</p>
      <p>{brew.price}</p>
    </div>
  );
}

export default Brew;
