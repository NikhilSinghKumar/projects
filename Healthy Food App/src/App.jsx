import { useState } from "react";
import "./App.css";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let [foodItems, SetFoodItems] = useState([]);

  function handleFood(event) {
    if (event.key === "Enter") {
      let enteredFood = event.target.value;
      let listOfFood = [...foodItems, enteredFood];
      SetFoodItems(listOfFood);
    }
  }

  function addFood(foodName) {
    let newFoodList = [...foodItems, foodName];
    SetFoodItems(newFoodList);
  }

  return (
    <center>
      <h1>Welcome - Food App</h1>
      <p className="placeholder-glow">
        <span className="placeholder col-5 placeholder-xs bg-success"></span>
      </p>
      <FoodInput handleFood={handleFood} addFood={addFood} />
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </center>
  );
}

export default App;
