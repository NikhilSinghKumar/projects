import style from "../components/Display.module.css";
// eslint-disable-next-line react/prop-types
function Display({ displayValue }) {
  return (
    <input
      className={style.display}
      type="text"
      placeholder="Welcome"
      value={displayValue}
      readOnly
    />
  );
}

export default Display;
