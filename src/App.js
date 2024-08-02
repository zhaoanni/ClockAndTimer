import React from "react";
import './App.css';
import { Timers } from './timer.js';
import { Clock } from "./clock.js";
import NewClock from "./Clock3.js"


function App() {
  return (
    <div className="App">
      <Timers/>
      <Clock/>
      <NewClock/>
    </div>
  );
}

export default App;
