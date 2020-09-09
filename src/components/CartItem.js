import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function CartItem({ productToAdd }) {
  const { cart } = useContext(CartContext);
  const basket = [...cart.cartId];
  let productAmount = basket.filter((item) => item.id === productToAdd.id);

  return (
    <React.Fragment>
      <p>
        {productToAdd.name} X {productAmount.map((item) => item.quantity)} = 
        £{productAmount.map((item) => item.quantity) * productToAdd.price}
      </p>
    </React.Fragment>
  );
}

export default CartItem;
