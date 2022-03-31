import React from "react";
import './default.css';
import Header from './components/header';
import HomePage from './pages/Homepage'




function App() {
  return (
    <div className="App">
       <Header />
      <div className="main">
    
      <HomePage />
      </div>
    </div>
  );
}

export default App;
