import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { ClubMainComponent } from './components/club-main/club-main.component';
import { ClubCardComponent } from './components/club-card/club-card.component';
import { ClubFormComponent } from './components/club-main/club-form/club-form.component';

const routes : Routes =[
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: AlumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaFormComponent},
  {path: 'materias/:id', component: MateriaFormComponent},
  {path: 'matriculas', component: MatriculaFormComponent},
  {path: 'clubes', component: ClubMainComponent},
  {path: 'clubes/:id', component: ClubCardComponent},
  {path: 'club/form', component: ClubFormComponent},
  {path: 'club/form/:id', component: ClubFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
