import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const cartItemIds = [...cart.cartId];

  let inCart = <p>{"no items in cart"}</p>;

  if (cartItemIds.length >= 0) {
    inCart = cartItemIds.map((item) => {
      const productIndex = cart.products.findIndex(
        (product) => item === product._id
      );
      //save product with the current index to cart
      const productToAdd = cart.products[productIndex];
      return <li>{productToAdd.name}</li>;
    });
  }

  return (
    <div>
      <span>Shopping cart:</span>
      {inCart.length} items
      <ul>{inCart}</ul>
    </div>
  );
}

export default Cart;
