import React, { useEffect, useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import "./style.css";

const Task2 = () => {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedBack = localStorage.getItem("key");

    return saveFeedBack
      ? JSON.parse(saveFeedBack)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options
        hasFeedback={
          feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0
        }
        onLeaveFeedback={handleFeedback}
        onReset={handleReset}
      />
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </div>
  );
};

export default Task2;
