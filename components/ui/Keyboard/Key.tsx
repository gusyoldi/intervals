"use client";

import { IntervaloStr } from "@/lib/models/data";
import { Button } from "../button";

interface KeyProps {
  name: string;
  onChange: (e: IntervaloStr) => void;
}
const Key = ({ name, onChange }: KeyProps) => {
  return null;

  // function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  //   const button = e.target as HTMLButtonElement;
  //   onChange(button.value);
  //   console.log("Click", button.value);
  // }

  return (
    <Button onClick={handleClick} value={name} className="rounded-md shadow-md">
      {name}
    </Button>
  );
};

export default Key;
