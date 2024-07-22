"use client";

import { IntervaloObj, Nota } from "@/lib/models/data";
import { ThickArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import ResponseModal from "../ResponseModal/ResponseModal";

interface DisplayProps {
  notasRandom: Nota[];
  esRespuestaCorrecta: boolean | null
  intervaloElegido: IntervaloObj
}

export const Display = ({notasRandom, intervaloElegido, esRespuestaCorrecta}: DisplayProps) => {
  const [notaRandom1, notaRandom2] = notasRandom;
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
    }, 600)
  }, [intervaloElegido])

  console.log(intervaloElegido)

  if(showModal){
    return <div className="flex justify-center items-center gap-8 p-8 h-96">
    <ResponseModal respuesta={esRespuestaCorrecta} intervaloElegido={intervaloElegido} showModal={showModal} onShowModal={setShowModal}/>
    </div>
  }

  return (
      <div className="flex justify-center items-center gap-8 p-8 h-96">
        <p className=" text-9xl font-bold">{notaRandom1}</p>
        <span className="text-4xl">
          <ThickArrowRightIcon className="animate-bounce-right w-12 h-12" />
        </span>
        <p className="text-8xl font-bold text-red-500">{notaRandom2}</p>
      </div>
  );
};

export default Display;
