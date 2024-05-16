import { INTERVALOS, NOTAS } from "../data/db";
import { IntervaloObj, Nota, Semitono } from "../models/data";

export const obtenerIntervalo = (notas: Nota[]): IntervaloObj => {
  const [primerNota, segundaNota] = notas;

  const posicionPrimerNota = posicionDeLaNotaEnLaEscala(primerNota);
  const posicionSegundaNota = posicionDeLaNotaEnLaEscala(segundaNota);

  const distanciaEnSemitonos = calcularDistanciaEnSemitonos(
    posicionSegundaNota,
    posicionPrimerNota
  );

  const buscarIntervaloPorDistanciaEnSemitonos = (distanciaEnSt) =>
    INTERVALOS.find(({ semitonos }) => semitonos === distanciaEnSt);

  const intervalo =
    buscarIntervaloPorDistanciaEnSemitonos(distanciaEnSemitonos);

  return intervalo;
};

export const generarNotasRandom = (): Nota[] => {
  const obtenerNumeroRandom = () =>  Math.trunc(Math.random() * 12 + 1);
  const numeroRandom1 = obtenerNumeroRandom()
  const numeroRandom2 = obtenerNumeroRandom()

  const notaRandom1 = NOTAS[numeroRandom1];
  const notaRandom2 = NOTAS[numeroRandom2];
  
  return [notaRandom1, notaRandom2]
};

export const posicionDeLaNotaEnLaEscala = (notaBuscada: Nota): number =>
  NOTAS.findIndex((nota) => nota === notaBuscada) + 1;

export const calcularIntervaloOpuesto = (intervalo: number) => 12 - Math.abs(intervalo);

export const calcularDistanciaEnSemitonos = (
  posicionSegundaNota: number,
  posicionPrimerNota: number
): number => {
  const distanciaEnSemitonos = posicionSegundaNota - posicionPrimerNota;

  if (distanciaEnSemitonos < 0) {
    return calcularIntervaloOpuesto(distanciaEnSemitonos);
  } else {
    return distanciaEnSemitonos;
  }
};
