/* eslint-disable react/prop-types */
import { useState } from "react";
import FoodItem from "./FoodItem";

function FoodItems({ foodItems }) {
  let [activeFood, setActiveFood] = useState([]);

  function onBuyButtonClick(items) {
    let newFoodList = [...activeFood, items];
    setActiveFood(newFoodList);
  }

  return (
    <div className="container col-4">
      <ul className="list-group">
        {foodItems.map((items) => (
          <FoodItem
            key={items}
            foodList={items}
            onBuy={activeFood.includes(items)}
            handleBuyButtonClick={(event) => onBuyButtonClick(items, event)}
          />
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
