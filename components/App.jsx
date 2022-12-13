import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  const [isMouseOver, setMouseOver] = useState(false);

  function HandleClick() {
    setHeadingText("Submitted");
  }

  function MyMouseOver() {
    setMouseOver(true);
  }

  function MyMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={HandleClick}
        onMouseOver={MyMouseOver}
        onMouseOut={MyMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
