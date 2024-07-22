export type IntervaloStr =
  | "Unisono"
  | "2m"
  | "2M"
  | "3m"
  | "3M"
  | "4J"
  | "4+"
  | "5J"
  | "6m"
  | "6M"
  | "7m"
  | "7M"
  | "8va";

export type Nota =
  | "C"
  | "Db"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "Gb"
  | "G"
  | "Ab"
  | "A"
  | "Bb"
  | "B";

export type Semitono = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IntervaloObj {
  nombre: string;
  semitonos: number
}

