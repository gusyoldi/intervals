import { create } from "zustand";

interface AdivinarIntervloData {
  isCorrectAnswer: boolean | null;
  intervaloElegido: string;
  resetAllStates: () => void;
  elegirIntervalo: (intervalo: string) => void;
}

export const useAdivinarIntervaloStore = create<AdivinarIntervloData>(
  (set) => ({
    elegirIntervalo: (intervaloIngresado) =>
      set(() => ({ intervaloElegido: intervaloIngresado })),
    intervaloElegido: "",
    isCorrectAnswer: null,
    resetAllStates: () => set({ isCorrectAnswer: null, intervaloElegido: "" }),
  })
);
