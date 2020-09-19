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
      // console.log(productToAdd)
      return <CartItem productToAdd={productToAdd} key={item.id} />;
    });
  }

  return (
    <article>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-shopping-cart"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="9" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
        </svg>
      </span>
      {inCart}
    </article>
  );
}

export default Cart;
