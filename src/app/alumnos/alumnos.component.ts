import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from '../models/alumno';
import { AlumnosService } from '../services/alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.sass']
})

export class AlumnosComponent implements OnInit {

  formulario: FormGroup
  listaAlumnos: Alumno[] = [];

  constructor(public Backend: AlumnosService, public routes: Router) {
    this.buildForm();
    this.getAlumno();

  }

  ngOnInit(): void {
  }

  buildForm() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
    });

  }

  onSubmit() {
  }

  getAlumno() {
    this.Backend.getAlumnos().subscribe(data =>
      this.listaAlumnos = data
    )
  }


  addAlumno() {
    let alumno: Alumno = this.formulario.value;

    this.Backend.addAlumno(alumno).subscribe(() => {
      this.getAlumno();
    }, error => console.log(error));
    this.formulario.reset();
  }

  editAlumno(alumno: Alumno) {
    this.routes.navigate([`/editar/${alumno.id}`])
  }

  deleteAlumno(id: number) {
    this.Backend.deleteAlumno(id).subscribe(() => {
    }, error => console.log(error))
    alert("Alumno Eliminado")
    this.getAlumno();
  }

}
