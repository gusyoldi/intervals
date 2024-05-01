"use client";

import { IntervaloObj } from "../models/data";
import { getMusicData } from "@/app/api/route";
import { ButtonHTMLAttributes, ReactNode } from "react";

export const OptionsKeyboard = ({
  intervalos,
}: {
  intervalos: IntervaloObj[];
}) => {
  return (
    <div className="grid grid-cols-5 gap-1 bg-slate-100 rounded-xl p-6">
      {intervalos.map((int) => (
        <OptionButton key={int.nombre} value={int.nombre} action={getMusicData}>
          {int.nombre}
        </OptionButton>
      ))}
    </div>
  );
};

interface OptionButtonProps {
  //extiende del boton de had
  value: string;
  action: (value: string) => void;
  children: ReactNode;
}

const OptionButton = ({
  action,
  value,
  children,
  ...props
}: OptionButtonProps) => {
  function handleClick() {
    action(value);
  }

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};
