"use client";
import { FaArrowRight } from "react-icons/fa";
import { Nota } from "../../../lib/models/data";

interface DisplayProps {
  notas: Nota[];
}

export const Display = ({ notas }: DisplayProps) => {
  const [notaRandom1, notaRandom2] = notas;

  return (
    <div className="flex justify-center items-center gap-8 p-10">
      <p className=" text-9xl font-bold">{notaRandom1}</p>
      <span className="text-4xl">
        <FaArrowRight />
      </span>
      <p className="text-8xl font-bold text-red-500">{notaRandom2}</p>
    </div>
  );
};

export default Display;
