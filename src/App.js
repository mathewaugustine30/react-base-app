import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import FirstComponent from "./components/learning/FirstComponent";
import SecondComponent from "./components/learning/SecondComponent";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      My Hello World!!
      <Counter />
    </div>
  );
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="App">
        My Hello World!!
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      </div>
    );
  }
}
export default App;
