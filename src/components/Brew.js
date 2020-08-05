import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import styled from "styled-components";

function Brew({ brew }) {
  const context = useContext(CartContext);

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

      {/* Update CartContext value */}
      <button
        type="submit"
        onClick={() => {
          let quantity = 1;
          //check whether brew exists
          if (context.cart[brew.id]) {
            quantity = context.cart[brew.id].quantity + 1;
          }
          context.setCart({
            ...context.cart,
            [brew.id]: {
              price: brew.price,
              name: brew.name,
              quantity: quantity,
            },
          });
        }}
      >
        Add to cart
      </button>
      {context.cart[brew.id] && <p>"item added to cart"</p>}
    </div>
  );
}

export default Brew;
