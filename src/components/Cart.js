import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const context = useContext(CartContext);

  return (
    <div>
      <span>Shopping cart:</span>
      <div>
        {Object.entries(context.cart).map(([key, item]) => {
          console.log(key, item);
          return (
            <div key={key.id}>
              <p>{item.name}</p>
              {item.price}
              <span> GBP </span>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
