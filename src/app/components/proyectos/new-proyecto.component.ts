import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/sproyectos.service';


@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const pro = new Proyectos(this.nombreE, this.descripcionE);
{    this.sProyectos.save(pro)
  .subscribe(
    (_data): void => {
      alert("Proyecto añadido");
    this.router.navigate(['']);
  }, _err => {
    alert("Falló");
    this.router.navigate(['']);
  })
}
}

}
