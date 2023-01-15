import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/sproyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  nuePro: Proyectos = null!;

  constructor(private sProyectos: SProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(data =>{
      this.nuePro = data;
      }, (_err): void =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.update(id, this.nuePro).subscribe(data =>{
      this.router.navigate(['']);
      }, _err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )

  }

}
