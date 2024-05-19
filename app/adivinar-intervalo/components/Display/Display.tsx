"use client";

import { CheckCircledIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useAdivinarIntervaloStore } from "@/lib/store/useAdivinarIntervaloStore";

// interface DisplayProps {
//   notas: Nota[];
// }

export const Display = () => {
  const [showSuccess, setShowSucess] = useState(false);
  // const intervaloElegido = useAdivinarIntervaloStore(
  //   (state) => state.intervaloElegido
  // );
  const notasRandom = ["C", "E"];
  // const notasRandom = generarNotasRandom();
  // const respuestaCorrecta = obtenerIntervalo(notasRandom);

  const [notaRandom1, notaRandom2] = notasRandom;

  const successIcon = (
    <CheckCircledIcon className="text-9xl m-auto" color="#5cb85c" />
  );

  return (
    <div className="flex justify-center items-center gap-8 p-10 min-h-40">
      {showSuccess ? (
        successIcon
      ) : (
        <>
          <p className=" text-9xl font-bold">{notaRandom1}</p>
          <span className="text-4xl">
            <ThickArrowRightIcon />
          </span>
          <p className="text-8xl font-bold text-red-500">{notaRandom2}</p>
        </>
      )}
    </div>
  );
};

export default Display;
