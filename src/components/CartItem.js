import React from "react";

function CartItem({ productToAdd }) {
    console.log(productToAdd)
  return (
    <React.Fragment>
      <p>{productToAdd.name}</p>
      <p>{productToAdd.price}</p>
    </React.Fragment>
  );
}

export default CartItem;
