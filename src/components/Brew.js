import React, { useContext } from "react";
import { CartContext } from "./CartContext";

import Text from "./styles/Text";
import Image from "./styles/Image";
import Card from "./styles/Card";
import Heading from "./styles/Heading";

function Brew({ brew }) {
  const { setCartIds } = useContext(CartContext);

  return (
    <Card>
      <Image
        src={`http://localhost:1337${brew.image.url}`}
        alt="brew logo"
      ></Image>
      <Heading h5>{brew.name}</Heading>
      <Text>{brew.description}</Text>
      <Text>{brew.price}</Text>
      <button
        onClick={() => {
          setCartIds(brew.id);
        }}
      >
        Add to cart
      </button>
    </Card>
  );
}

export default Brew;
