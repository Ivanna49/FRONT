export class Cursos {
  id?: number;
  nombreE: string;
  descripcionE: string;

  constructor(nombreE: string, descripcionE: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
  }
}
