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
    let quantity = 1;
    let idExists = cart.cartId.findIndex((item) => item.id === productId);

    if (idExists === -1) {
      let itemsToAddToCart = { id: productId, quantity: quantity };

      const updatedObject = {
        cartId: [...cart.cartId, itemsToAddToCart],
        products: [...cart.products],
      };
      setCart(updatedObject);
    } else {
      const cartClone = {
        ...cart,
      };
      quantity = cartClone.cartId[idExists].quantity++;
      setCart(cartClone);
    }
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
