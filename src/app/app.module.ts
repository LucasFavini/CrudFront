import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';


const roots = [
  { path: '', component:AlumnosComponent},
  { path: 'editar/:id', component:EditarAlumnoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    EditarAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  
  ],
  exports :[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
