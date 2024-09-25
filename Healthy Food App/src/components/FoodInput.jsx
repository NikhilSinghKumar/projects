import { useState } from "react";

/* eslint-disable react/prop-types */
function FoodInput({ handleFood, addFood }) {
  let [addFoodInput, setAddIFoodInput] = useState("");

  function handleInput(event) {
    setAddIFoodInput(event.target.value);
  }

  function handleAddButtonClick() {
    addFood(addFoodInput);
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter food.."
        onKeyDown={handleFood}
        value={addFoodInput}
        onChange={handleInput}
      />
      <button className="btn btn-success" onClick={handleAddButtonClick}>
        Add
      </button>
    </div>
  );
}

export default FoodInput;
