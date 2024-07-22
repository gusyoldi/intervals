import { create } from "zustand";
import { Nota } from "../models/data";
import { generarNotasRandom, obtenerIntervalo } from "../utils/utils";

interface AdivinarIntervloData {
  isRespuestaCorrecta: boolean | null;
  intervaloElegido: string | null;
  notasRandom: Nota[];
  elegirIntervalo: (intervalo: string) => void;
  updateNotasRandom: () => void;
  resetAllStates: () => void;
}

export const useAdivinarIntervaloStore = create<AdivinarIntervloData>(
  (set, get) => ({
    elegirIntervalo: (intervaloIngresado) => {
      const notas = get().notasRandom;
      const respuestaCorrecta = obtenerIntervalo(notas);

      if (intervaloIngresado === respuestaCorrecta.nombre) {
        set(() => ({
          intervaloElegido: intervaloIngresado,
          isRespuestaCorrecta: true,
        }));
      } else {
        set(() => ({
          intervaloElegido: intervaloIngresado,
          isRespuestaCorrecta: false,
        }));
      }
    },
    notasRandom: ["C", "E"],
    updateNotasRandom: () => {
      const newNotasRandom = generarNotasRandom();
      set(() => ({ notasRandom: newNotasRandom, isRespuestaCorrecta: null }));
    },
    intervaloElegido: null,
    isRespuestaCorrecta: null,
    resetAllStates: () =>
      set({ isRespuestaCorrecta: null, intervaloElegido: "" }),
  })

 
);
