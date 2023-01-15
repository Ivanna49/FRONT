import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/sproyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  [x: string]: any;
  pro: Proyectos[] = [];

  constructor(private sProyectos: SProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto():void{
  this.sProyectos.lista().subscribe(data =>{
    this.nuePro = data;
    }, err =>{
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    }
  )

  }

delete(id?:number){
  if(id != undefined){
    this.sProyectos.delete(id).subscribe((_data: any) =>{
        this.cargarProyecto();
      }, (_err: any) => {
        alert("No se pudo borrar el proyecto");
      })
    }
  }
}

