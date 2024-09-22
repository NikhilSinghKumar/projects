import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Heading from "./components/Heading";
import "./App.css";

function App() {
  let clacVariables = [
    "C",
    "9",
    "8",
    "+",
    "7",
    "6",
    "-",
    "5",
    "4",
    "x",
    "3",
    "2",
    "/",
    "1",
    "0",
    "=",
    ".",
  ];

  let [displayIn, setDisplayIn] = useState("");

  function getButtonClick(buttonChar) {
    if (buttonChar === "C") {
      setDisplayIn("");
    } else if (buttonChar === "=") {
      let result = eval(displayIn);
      setDisplayIn(result);
    } else {
      let newDisplay = displayIn + buttonChar;
      setDisplayIn(newDisplay);
    }
  }

  return (
    <div className="container">
      <Heading />
      <Display displayValue={displayIn} />
      <Buttons calcButtons={clacVariables} buttonClick={getButtonClick} />
    </div>
  );
}

export default App;
