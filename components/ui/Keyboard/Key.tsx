"use client";

import { Button } from "../button";

interface KeyProps {
  name: string;
}
const Key = ({ name }: KeyProps) => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.target as HTMLButtonElement;
    console.log("Click", button.value);
  }

  return (
    <Button onClick={handleClick} value={name} className="rounded-md shadow-md">
      {name}
    </Button>
  );
};

export default Key;
