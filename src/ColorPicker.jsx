import { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [timesClicked, setTimesClicked] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    handleTimesClicked();
  };

  const handleTimesClicked = () => {
    setTimesClicked(timesClicked + 1);
  }

  return (
    <div
      className="ColorPicker"
      style={{
        backgroundColor,
      }}
    >
      <p>You clicked {timesClicked} times</p>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorPicker;
