import React from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import Screen from "./Components/Screen/Screen";
import Footer from "./Components/Footer/Footer";
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
      {/* <Footer /> */}
    </div>
  );
}

export default Wrapper;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Screen />
//       {/* <Footer /> */}
//     </div>
//   );
// }