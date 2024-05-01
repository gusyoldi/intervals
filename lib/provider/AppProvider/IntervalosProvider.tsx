"use client";

import { IntervaloStr, Nota } from "@/lib/models/data";
import { generarNotasRandom } from "@/lib/utils/utils";
import { createContext, useState } from "react";

export const IntervalosContext = createContext(0);

interface IntervalosContextProviderProps {
  children: React.ReactNode;
  value: {
    intervalos: {
      intervaloParaAdivinar: Nota[];
      intervaloElegido: IntervaloStr;
    };
  };
}

export function IntervalosProvider({
  children,
}: IntervalosContextProviderProps) {
  //   const [notarandom1, notarandom2] = generarNotasRandom(notas);
  const intervalosIniciales = {
    intervaloParaAdivinar: ["C", "G"],
    intervaloElegido: "5j",
  };

  const [intervalos, setIntervalos] = useState(intervalosIniciales);

  const data = { intervalos, setIntervalos };

  return (
    <IntervalosContext.Provider value={data}>
      {children}
    </IntervalosContext.Provider>
  );
}
