// frontend/src/app/tarea/tarea.model.ts
/*
export interface Tarea {
  _id?: string;
  nombre: string;
  completada: boolean;
}
*/

export class Tarea {
  constructor(
    public _id?: string,
    public id?: string,
    public nombre?: string,
    public completada?: boolean,
  ) {}
}