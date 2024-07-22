"use client";

import { INTERVALOS } from "@/lib/data/db";
import { IntervaloStr } from "@/lib/models/data";
import Key from "./Key";

interface KeyboardProps {
  setIntervaloElegido: (intervaloElegido: IntervaloStr) => void;
}

const Keyboard = ({setIntervaloElegido}: KeyboardProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 bg-slate-300 p-4 rounded-md shadow-md max-w-64 m-auto">
      {INTERVALOS.map((int) => (
        <Key key={int.nombre} name={int.nombre} setIntervaloElegido={setIntervaloElegido} />
      ))}
    </div>
  );
};

export default Keyboard;
