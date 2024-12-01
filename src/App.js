// src/App.js
import React from "react";
import "./App.css";
import fartSoundFile from "./assets/fart-noise.mp3";

const App = () => {
  const handleButtonClick = () => {
    const audio = new Audio(fartSoundFile);
    audio.play();
  };

  return (
    <div className="app">
      <div className="container">
        <button className="fart-button" onClick={handleButtonClick}>
          🍌 Click Me!
        </button>
      </div>
    </div>
  );
};

export default App;
