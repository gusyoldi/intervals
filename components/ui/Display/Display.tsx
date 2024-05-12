"use client";
import { FaArrowRight } from "react-icons/fa";
import { Nota } from "../../../lib/models/data";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

interface DisplayProps {
  notas: Nota[];
}

export const Display = ({ notas }: DisplayProps) => {
  const [notaRandom1, notaRandom2] = notas;
  const [showSuccess, setShowSucess] = useState(false);

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
