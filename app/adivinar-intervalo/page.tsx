import Display from "@/components/ui/Display/Display";
import Keyboard from "@/components/ui/Keyboard/Keyboard";
import { INTERVALOS } from "@/lib/data/db";

export default async function Page() {
  return (
    <div className="flex flex-col justify-between p-12 gap-6 bg-slate-100">
      <h1 className="text-center text-red-500 text-2xl">Que intervalo es?</h1>

      <Display />

      <Keyboard />
    </div>
  );
}
