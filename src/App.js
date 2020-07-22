import React from 'react';

import './App.css';
import Signin from './components/Signin';
import Checkout from './components/Checkout';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import FetchData from './components/FetchData';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
       <Navbar/>
       <FetchData/>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
}

export default App;
