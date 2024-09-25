/* eslint-disable react/prop-types */
function ErrorMessage({ foodItems }) {
  if (foodItems.length === 0) {
    return <h4>Nothing to Eat. Please Add Food</h4>;
  }
}

export default ErrorMessage;
