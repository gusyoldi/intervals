import { useState } from "react";

const useAnswerCounter = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  // console.log("useAnswerCounter", correctAnswers, wrongAnswers);

  const addCorrectAnswer = () => setCorrectAnswers(correctAnswers + 1);
  const addWrongAnswer = () => setWrongAnswers(wrongAnswers + 1);

  return {
    correctAnswers,
    wrongAnswers,
    addCorrectAnswer,
    addWrongAnswer,
  };
};

export default useAnswerCounter ;
