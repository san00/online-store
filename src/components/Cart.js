import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const context = useContext(CartContext);

  const products = Object.entries(context.cart).map(([, item]) => {
    return item;
  });

  return (
    <div>
      {products && <span>Items in cart: {products.length}</span>}
      <span>Total :0 </span>
    </div>
  );
}

export default Cart;
