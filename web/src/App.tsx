import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header/Header";
import Screen from "./Components/Screen/Screen";

import './Scss/App.scss';

const Wrapper =() => {
  return (
  <Router>
    <App />
  </Router>)
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Screen />
    </div>
  );
}

export default Wrapper;