"use client";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import useAdivinarIntervalo from "@/app/adivinar-intervalo/hooks/useAdivinarIntervalo";

// interface DisplayProps {
//   notas: Nota[];
// }

export const Display = () => {
  return null;
  const [showSuccess, setShowSucess] = useState(false);
  // const { notasRandom } = useAdivinarIntervalo();
  // const [notaRandom1, notaRandom2] = notasRandom;

  const successIcon = (
    <FaRegCheckCircle className="text-9xl m-auto" color="#5cb85c" />
  );

  return (
    <div className="flex justify-center items-center gap-8 p-10 min-h-40">
      {showSuccess ? (
        successIcon
      ) : (
        <>
          <p className=" text-9xl font-bold">{notaRandom1}</p>
          <span className="text-4xl">
            <FaArrowRight />
          </span>
          <p className="text-8xl font-bold text-red-500">{notaRandom2}</p>
        </>
      )}
    </div>
  );
};

export default Display;
