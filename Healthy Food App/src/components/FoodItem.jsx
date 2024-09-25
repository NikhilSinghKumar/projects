/* eslint-disable react/prop-types */
function FoodItem({ foodList, onBuy, handleBuyButtonClick }) {
  return (
    <>
      <li className={`list-group-item ${onBuy && "active"}`}>
        <span className="float-start">{foodList}</span>
        <button
          className="btn btn-info float-end"
          onClick={() => handleBuyButtonClick(alert(`${foodList} is ordered`))}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default FoodItem;
