import React from "react";
export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState({});
 
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
