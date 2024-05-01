import { IntervalosProvider } from "@/lib/provider/AppProvider/IntervalosProvider";
import { Display } from "@/lib/ui/Display";
import { OptionsKeyboard } from "@/lib/ui/OptionsKeyboard";

export default async function HomePage() {
  const res = await fetch("http://localhost:3020/backend");
  const { intervalos, notas } = await res.json();

  console.log(intervalos, notas);

  return (
    <IntervalosProvider value={intervalos}>
      <div className="flex flex-col justify-between p-12 gap-6">
        <h1 className="text-center text-red-500 text-2xl">Que intervalo es?</h1>

        <Display notas={notas} />

        <div>
          <OptionsKeyboard intervalos={intervalos} />
        </div>

        <div>
          <button>Enviar Respuesta</button>
        </div>
      </div>
    </IntervalosProvider>
  );
}
