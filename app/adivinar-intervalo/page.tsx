'use client'

import Display from "@/app/adivinar-intervalo/components/Display/Display";
import Keyboard from "@/app/adivinar-intervalo/components/Keyboard/Keyboard";
import { Nota } from "@/lib/models/data";
import { generarNotasRandom, obtenerIntervalo } from "@/lib/utils/utils";
import { Switch } from "@/ui/switch/switch";
import { useEffect, useState } from "react";
import Score from "./components/Score/Score";
import Title from "./components/Title/Title";

const AdivinarIntervaloPage = () => {

  const [notasRandom, setNotasRandom] = useState<Nota[]>(["C", "C"])
  const [intervaloElegido, setIntervaloElegido] = useState('')
  const [respuestaCorrecta, setRestpuestaCorrecta] = useState({nombre: '', semitonos: 0})
  const esRespuestaCorrecta = (intervaloElegido === respuestaCorrecta.nombre)

  useEffect(() => {
    setRestpuestaCorrecta(obtenerIntervalo(notasRandom))

    if(intervaloElegido === respuestaCorrecta.nombre){
      setNotasRandom(generarNotasRandom())
    }
    console.log("Respuesta Correcta", respuestaCorrecta)
    console.log("Intervalo Elegido", intervaloElegido)
  }, [intervaloElegido])

  return (
    <div className="flex flex-col justify-between p-12 gap-6 ">
      <Title />
      Cambiaria entre notas con # y notas con b.
      <Score />
      <Switch />
      <Display notasRandom={notasRandom} esRespuestaCorrecta={esRespuestaCorrecta} intervaloElegido={intervaloElegido} />
      <Keyboard setIntervaloElegido={setIntervaloElegido} />
    </div>
  );
}

export default AdivinarIntervaloPage
