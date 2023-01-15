import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';

@Component({
  selector: 'app-edicurso',
  templateUrl: './editcurso.component.html',
  styleUrls: ['./editcurso.component.css']
})
export class EditcursoComponent implements OnInit {
  cursosS: any;
  educacionS: any;
onCreate() {
throw new Error('Method not implemented.');
}
  cursos: Cursos = null;
nombreE: any;
descripcionE: any;

  constructor(
    private cursoS: CursosService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cursosS.detail(id).subscribe(
      (      data: Cursos) =>{
        this.cursos = data;
      }, (_err: any) =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      (      _data: any) => {
        this.router.navigate(['']);
      }, (_err: any) => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
  educacion(id: any, educacion: any) {
    throw new Error('Method not implemented.');
  }
}
