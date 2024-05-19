"use client";

import { useAdivinarIntervaloStore } from "@/lib/store/useAdivinarIntervaloStore";
import { Button } from "@/ui/button/button";

interface KeyProps {
  name: string;
}
const Key = ({ name }: KeyProps) => {
  const elegirIntervalo = useAdivinarIntervaloStore(
    (state) => state.elegirIntervalo
  );
  //Cambiar el tipo any
  function handleClick(e: any) {
    elegirIntervalo(e.target.value);
    // console.log("Click", e.target.value);
  }

  return (
    <Button
      onClick={handleClick}
      value={name}
      // className="rounded-md shadow-md dark: bg-black"
      variant={"destructive"}
    >
      {name}
    </Button>
  );
};

export default Key;
