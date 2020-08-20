import React from "react";
export const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState({
    products: [],
    cartId: [],
  });

  const setProducts = (products) => {
    let allProducts = [...products];
    const updatedObject = {
      cartId: [...cart.cartId],
      products: allProducts,
    };

    setCart(updatedObject);
  };

  const setCartIds = (productId) => {
    let itemToAddToCart = [productId];

    const updatedObject = {
      cartId: [...cart.cartId, ...itemToAddToCart],
      products: [...cart.products],
    };

    setCart(updatedObject);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        setProducts: setProducts,
        setCartIds: setCartIds,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
