"use client";

import { IntervaloObj } from "../../../lib/models/data";
import { Button } from "../button";
import Key from "./Key";

const Keyboard = ({ intervalos }: { intervalos: IntervaloObj[] }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 bg-slate-300 p-2 rounded-md shadow-md max-w-60 m-auto">
      {intervalos.map((int) => (
        <Key key={int.nombre} name={int.nombre} />
      ))}
      <Button
        size={"lg"}
        className="w-full rounded-md shadow-md"
        onClick={() => console.log("Submit")}
      >
        Enter
      </Button>
    </div>
  );
};

export default Keyboard;
