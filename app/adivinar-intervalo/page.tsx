import Display from "@/components/ui/Display/Display";
import Keyboard from "@/components/ui/Keyboard/Keyboard";
import { Nota } from "@/lib/models/data";
import { Suspense, useState } from "react";
import { NOTAS, INTERVALOS } from "@/lib/data/db";
import { generarNotasRandom } from "@/lib/utils/utils";

export default async function Page() {
  const notasRandom: Nota[] = generarNotasRandom(NOTAS);

  return (
    <div className="flex flex-col justify-between p-12 gap-6 bg-slate-100">
      <h1 className="text-center text-red-500 text-2xl">Que intervalo es?</h1>

      <Suspense fallback={"Cargando..."}>
        <Display notas={notasRandom} />
      </Suspense>

      <Keyboard intervalos={INTERVALOS} />
    </div>
  );
}
