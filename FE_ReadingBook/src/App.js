import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Ranking from "./Pages/Ranking";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/ranking/:rankingType">
        <Ranking />
      </Route>
    </div>
  );
}

export default App;
