import { describe, expect, test, vi } from "vitest";
import {
    calcularDistanciaEnSemitonos,
    calcularIntervaloOpuesto,
  generarNotasRandom,
  obtenerIntervalo,
  posicionDeLaNotaEnLaEscala,
} from "./utils";
const fn = vi.fn();

test("devuelve el nombre y la distancia en semitonos entre dos notas", () => {
  const intervalo = obtenerIntervalo(["C", "E"]);
  const intervalo2 = obtenerIntervalo(["C", "F"]);
  expect(intervalo).toEqual({ nombre: "3M", semitonos: 4 });
  expect(intervalo2).toEqual({ nombre: "4J", semitonos: 5 });
});

test("devuelve un array con dos notas al azar", () => {
  const notasRandom = generarNotasRandom();
  expect(notasRandom).toHaveLength(2);
});

test("devuelve la posicion de la nota dentro de la escala cromática menos 1", () => {
  const posicion = posicionDeLaNotaEnLaEscala("C");
  expect(posicion).toEqual(1);
});

test("devuelve el intervalo opuesto", () => {
    const posicion = calcularIntervaloOpuesto(3);
    const posicion2 = calcularIntervaloOpuesto(3);
    // const posicion2 = calcularIntervaloOpuesto(0);
    expect(posicion).toEqual(9);
    expect(posicion2).toEqual(9);
    // expect(posicion2).toBeNull();
    // console.log(calcularIntervaloOpuesto(0));
});

test("devuelve la distancia en semitonos entre dos notas", () => {
    const semitonos = calcularDistanciaEnSemitonos(2, 1);
    const semitonos2 = calcularDistanciaEnSemitonos(1, 2);  
    // const semitonos3 = calcularDistanciaEnSemitonos(1, 13);  

    expect(semitonos).toEqual(1);
    expect(semitonos2).toEqual(11);
    // expect(semitonos3).toBeNull();
    // console.log(calcularDistanciaEnSemitonos(1, 13));
});
