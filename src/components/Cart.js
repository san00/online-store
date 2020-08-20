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
        (product) => item === product._id
      );
      //save product with the current index to cart
      const productToAdd = cart.products[productIndex];
      console.log(productToAdd);
      return <CartItem productToAdd={productToAdd} key={item.id} />;
    });
  }

  return (
    <article>
      <span>Shopping cart:</span>
      {inCart.length} items
      {inCart}
    </article>
  );
}

export default Cart;
