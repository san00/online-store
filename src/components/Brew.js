import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import styled from "styled-components";

function Brew({ brew }) {
  const setCartIds = useContext(CartContext).setCartIds;
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
      <button onClick={() => setCartIds(brew.id)}> add to cart</button>
    </div>
  );
}

export default Brew;
