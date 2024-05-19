"use client";

import { Button } from "@/ui/button/button";
import Key from "./Key";
import { INTERVALOS } from "@/lib/data/db";

// interface KeyboardProps {
//   intervalos: IntervaloObj[];
// }

const Keyboard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 bg-slate-300 p-4 rounded-md shadow-md max-w-64 m-auto">
      {INTERVALOS.map((int) => (
        <Key key={int.nombre} name={int.nombre} />
      ))}
      <Button
        size="lg"
        className="w-full rounded-md shadow-md"
        onClick={() => {
          console.log("Siguiente intervalo");
        }}
      >
        Siguiente intervalo
      </Button>
    </div>
  );
};

export default Keyboard;
