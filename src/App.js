import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Signin from './components/Signin';
import Checkout from './components/Checkout';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import FetchBrands from './components/FetchBrands';

function App() {
  return (
    <Router>
       <Navbar/>
       <FetchBrands/>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
}

export default App;
