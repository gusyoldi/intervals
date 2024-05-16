"use client";

import useAdivinarIntervalo from "@/app/adivinar-intervalo/hooks/useAdivinarIntervalo";
import { IntervaloObj } from "../../../lib/models/data";
import { Button } from "../button";
import Key from "./Key";
import { INTERVALOS } from "@/lib/data/db";
import { useState } from "react";

// interface KeyboardProps {
//   intervalos: IntervaloObj[];
// }

const Keyboard = () => {
  return null;
  const { elegirIntervalo } = useAdivinarIntervalo();

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 bg-slate-300 p-4 rounded-md shadow-md max-w-64 m-auto">
      {INTERVALOS.map((int) => (
        <Key key={int.nombre} name={int.nombre} onChange={elegirIntervalo} />
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
