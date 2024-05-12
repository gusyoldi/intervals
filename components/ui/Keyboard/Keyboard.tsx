"use client";

import { IntervaloObj } from "../../../lib/models/data";
import { Button } from "../button";
import Key from "./Key";

interface KeyboardProps {
  intervalos: IntervaloObj[];
}

const Keyboard = ({ intervalos }: KeyboardProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 bg-slate-300 p-4 rounded-md shadow-md max-w-64 m-auto">
      {intervalos.map((int) => (
        <Key key={int.nombre} name={int.nombre} />
      ))}
      <Button
        size="lg"
        className="w-full rounded-md shadow-md"
        onClick={() => {
          console.log("Submit");
        }}
      >
        Enter
      </Button>
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
