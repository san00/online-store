import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Signin from "./components/Signin";
import Checkout from "./components/Checkout";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import FetchBrands from "./components/FetchBrands";
import FetchBrews from "./components/FetchBrews";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext"

function App() {
  return (
    <CartContextProvider>
    <Router>
      <Navbar />
      <Cart/>
      <FetchBrands />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/brews/:brandId" component={FetchBrews} />
    </Router>
    </CartContextProvider>
  );
}

export default App;
