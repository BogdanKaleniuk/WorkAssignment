import React from "react";

const Options = ({ onLeaveFeedback, onReset, hasFeedback }) => {
  return (
    <>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {hasFeedback && <button onClick={onReset}>Reset</button>}
    </>
  );
};

export default Options;
