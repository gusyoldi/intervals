import { NOTAS } from "@/lib/data/db";
import { IntervaloObj, IntervaloStr, Nota } from "@/lib/models/data";
import { generarNotaRandom, obtenerIntervalo } from "@/lib/utils/completeUtils";
import { useEffect, useState } from "react";

type AdivinarIntervaloData = {
  notasRandom?: Nota[];
  intervaloElegido: string;
  elegirIntervalo: (intervalo: IntervaloStr) => void;
};

// interface AdivinarIntervaloProps {
//   intervaloElegido?: IntervaloStr;
// }

const useAdivinarIntervalo = (): AdivinarIntervaloData => {
  const [isLoading, setIsLoading] = useState(false);
  const [intervaloElegido, setIntervaloElegido] = useState("3M");
  const [respuestaCorrecta, setRespuestaCorrecta] = useState("");

  const notasRandom = generarNotaRandom();
  // const intervaloCorrecto = obtenerIntervalo();

  return {
    notasRandom,
    intervaloElegido,
    elegirIntervalo: setIntervaloElegido,
  };
};

export default useAdivinarIntervalo;
