import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-newcurso',
  templateUrl: './newcurso.component.html',
  styleUrls: ['./newcurso.component.css']
})
export class NewcursoComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private cursosS: CursosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const cursos = new Cursos(this.nombreE, this.descripcionE);
    this.cursosS.save(cursos).subscribe( data =>{
      alert("Curso añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("falló");
      this.router.navigate([""]);
    })
  }
}
