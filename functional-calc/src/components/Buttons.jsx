import style from "../components/Buttons.module.css";

/* eslint-disable react/prop-types */
function Buttons({ calcButtons, buttonClick }) {
  return (
    <div className={style.buttons}>
      {calcButtons.map((items) => (
        <button
          className={style.eachBtn}
          key={items}
          onClick={() => buttonClick(items)}
        >
          {items}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
