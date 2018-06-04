import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/checkout" component={Checkout} />
    </div>
  </Router>
);


export default App;
