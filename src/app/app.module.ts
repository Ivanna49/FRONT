import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewcursoComponent } from './components/cursos/newcurso.component';
import { EditcursoComponent } from './components/cursos/editcurso.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PresentacionComponent,
    ProyectosComponent,
    CursosComponent,
    AcercaDeComponent,
    BannerComponent,
    FooterComponent,
    HabilidadesComponent,
    HomeComponent,
    LoginComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewcursoComponent,
    EditcursoComponent,



  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
