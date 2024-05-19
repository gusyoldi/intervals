import { NOTAS } from "@/lib/data/db";
import { IntervaloObj, IntervaloStr, Nota } from "@/lib/models/data";
import { useAdivinarIntervaloStore } from "@/lib/store/useAdivinarIntervaloStore";
import { generarNotasRandom, obtenerIntervalo } from "@/lib/utils/utils";
import { useEffect, useState } from "react";

type AdivinarIntervaloData = {
  notasRandom?: Nota[];
  intervaloElegido: string;
  elegirIntervalo: (intervalo: IntervaloStr) => void;
  respuestaCorrecta: string;
};

// interface AdivinarIntervaloProps {
//   intervaloElegido?: IntervaloStr;
// }

const useAdivinarIntervalo = (): AdivinarIntervaloData => {
  // return {
  //   notasRandom,
  //   intervaloElegido,
  //   respuestaCorrecta: intervaloCorrecto.nombre,
  //   elegirIntervalo: setIntervaloElegido,
  // };
};

export default useAdivinarIntervalo;
