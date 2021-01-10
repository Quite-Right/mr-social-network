import React from 'react';
import Header from "./Components/Header/Header";
import Screen from "./Components/Screen/Screen";
import Footer from "./Components/Footer/Footer";
import './Scss/App.scss';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Screen />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Screen />
//       {/* <Footer /> */}
//     </div>
//   );
// }