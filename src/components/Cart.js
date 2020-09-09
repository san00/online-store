import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useContext(CartContext);

  const cartItemIds = [...cart.cartId];

  let inCart = <p>{"no items in cart"}</p>;

  if (cartItemIds.length >= 0) {
    inCart = cartItemIds.map((item) => {
      const productIndex = cart.products.findIndex(
        (product) => item.id === product._id
      );
      //save product with the current index to cart
      const productToAdd = cart.products[productIndex];
      return <CartItem productToAdd={productToAdd} key={item.id} />;
    });
  }

  return (
    <article>
      <span>Shopping cart:</span>
      {inCart}
    </article>
  );
}

export default Cart;
