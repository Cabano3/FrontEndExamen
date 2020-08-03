import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoService } from './services/alumno.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoFormComponent } from './components/alumno-main/alumno-form/alumno-form.component';
import { AlumnoListComponent } from './components/alumno-main/alumno-list/alumno-list.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MasmasPipe } from './shared/pipes/masmas.pipe';
import { SexdescPipe } from './shared/pipes/sexdesc.pipe';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { ClubMainComponent } from './components/club-main/club-main.component';
import { ClubCardComponent } from './components/club-card/club-card.component';
import { ClubFormComponent } from './components/club-main/club-form/club-form.component';
import { ClubListComponent } from './components/club-main/club-list/club-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoMainComponent,
    AlumnoFormComponent,
    AlumnoListComponent,
    AlumnoCardComponent,
    MasmasPipe,
    SexdescPipe,
    MateriaFormComponent,
    MatriculaFormComponent,
    ClubMainComponent,
    ClubCardComponent,
    ClubFormComponent,
    ClubListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnoService,{
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'es-EC'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
