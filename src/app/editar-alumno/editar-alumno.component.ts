import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../models/alumno';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.sass']
})
export class EditarAlumnoComponent implements OnInit {

  formulario:FormGroup
  listaAlumnos:Alumno[]=[];
  id:number;

  constructor(
    public Backend:AlumnosService, 
    public routes:Router ,
    public activeRoute:ActivatedRoute,
    private backEnd:AlumnosService
    ) 
  { 
    this.buildForm(); 
    console.log(this.activeRoute.snapshot.params);
  } 


  buildForm(){
    
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]), 
      id:new FormControl(this.id)
    })

    this.id=this.activeRoute.snapshot.params.id    
    this.Backend.getAlumnosById(this.id).subscribe(data=>{
    this.formulario.setValue({
        id:this.id,
        nombre:data.nombre,         
        apellido:data.apellido ,
        dni:data.dni,
        edad: data.edad, 
     
      })
    })
   
  }

  editAlumno(){
     let alumno= this.formulario.value
     console.log(alumno)
      this.backEnd.editAlumno(this.id,alumno).subscribe(res=>{
        console.log(res)
        alert("Alumno Editado")
        this.routes.navigate(["/"]);
      });
  }
  
  ngOnInit(): void {

  }


}
