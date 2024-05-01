"use client";

import { Nota } from "../models/data";
import { generarNotaRandom, generarNotasRandom } from "../utils/utils";
import { IntervalosContext } from "../provider/AppProvider/IntervalosProvider";
import { useContext } from "react";

interface DisplayProps {
  notas: Nota[];
}

export function Display({ notas }: DisplayProps) {
  const {
    intervalos: { intervaloParaAdivinar, intervaloElegido },
    setIntervalos,
  } = useContext(IntervalosContext);

  console.log(intervaloParaAdivinar, intervaloElegido);

  const [notaRandom1, notaRandom2] = intervaloParaAdivinar;

  return (
    <div className="flex justify-center items-center gap-8">
      <p className="text-[200px]">{notaRandom1}</p>
      <span className="text-[60px]">➡️</span>
      <p className="text-[150px]">{notaRandom2}</p>
    </div>
  );
}
