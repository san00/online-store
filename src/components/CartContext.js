import React from "react";
export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState({
    products: [],
    cartId: [],
  });

  const setProducts = (products) => {
    let allProducts = [...products] || [];
    const updatedObject = {
      cartId: [...cart.cartId],
      products: allProducts,
    };

    setCart(updatedObject);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        setProducts: setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
