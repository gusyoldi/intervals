"use client";

import { useEffect } from "react";
import useAnswerCounter from "../../hooks/useAnswerCounter";

const Score = () => {
  const { correctAnswers, wrongAnswers } = useAnswerCounter();

  useEffect(() => {
    console.log("Score", correctAnswers, wrongAnswers);
    
  }, [correctAnswers, wrongAnswers])


  return (
    <div className="flex flex-col">
      <span>Correctas: {correctAnswers}</span>
      <span>Incorrectas: {wrongAnswers}</span>
    </div>
  );
};

export default Score;
