"use client";

import { IntervaloStr } from "@/lib/models/data";
import { Button } from "@/ui/button/button";

interface KeyProps {
  name: string;
  setIntervaloElegido: (intervaloElegido: IntervaloStr) => void;
}
const Key = ({ name, setIntervaloElegido }: KeyProps) => {

  //Cambiar el tipo any
  function handleClick(e: any) {
    setIntervaloElegido(e.target.value)
  }

  return (
    <Button
      onClick={handleClick}
      value={name}
      className="text-primary-foreground"
      variant={"default"}
    >
      {name}
    </Button>
  );
};

export default Key;
