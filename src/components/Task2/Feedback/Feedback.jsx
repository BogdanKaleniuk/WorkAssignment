import React from "react";

const Feedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positiveFeedback = ((good + neutral) / `${total}`) * 100;
  return (
    <div>
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {total > 0 ? `${positiveFeedback.toFixed(2)}%` : ""}</p>
        </div>
      ) : (
        <p>No feedback</p>
      )}
    </div>
  );
};

export default Feedback;
