import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewcursoComponent } from './components/cursos/newcurso.component';
import { EditcursoComponent } from './components/cursos/editcurso.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevopro', component: NewProyectoComponent},
  {path: 'editpro/:id', component: EditProyectoComponent},
  {path: 'nuevocur/:id', component: NewcursoComponent},
  {path: 'editcur/:id', component: EditcursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
