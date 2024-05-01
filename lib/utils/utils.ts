import { Nota } from "../models/data";

const obtenerNumeroRandom = () =>  Math.trunc(Math.random() * 12 + 1);

export const generarNotasRandom = (notas: Nota[]) => {
    const numeroRandom1 = obtenerNumeroRandom()
    const numeroRandom2 = obtenerNumeroRandom()
    const notaRandom1 = notas[numeroRandom1];
    const notaRandom2 = notas[numeroRandom2];
    

    return [notaRandom1, notaRandom2]
}

