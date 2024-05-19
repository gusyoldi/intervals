import Display from "@/app/adivinar-intervalo/components/Display/Display";
import Keyboard from "@/app/adivinar-intervalo/components/Keyboard/Keyboard";

export default async function AdivinarIntervaloPage() {
  return (
    <div className="flex flex-col justify-between p-12 gap-6 ">
      <h1 className="text-center text-red-500 text-2xl underline">
        Que intervalo es?
      </h1>
      <Display />
      <Keyboard />
    </div>
  );
}
