import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl:string='https://localhost:44350/api/alumnos/'

  constructor(public http:HttpClient) { }

  getAlumnos():Observable<Alumno[]>{
   return this.http.get<Alumno[]>(this.baseUrl);
  }

  getAlumnosById(id:number):Observable<Alumno>{
    return this.http.get<Alumno>(this.baseUrl+id);
   }

  addAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.post<Alumno>(this.baseUrl,alumno)
  }

  editAlumno(id:number,alumno:Alumno):Observable<Alumno>{
    return this.http.put(this.baseUrl+id,alumno)
  }

  deleteAlumno(id:number):Observable<Alumno>{
    return this.http.delete<Alumno>(this.baseUrl+id);
  }

}
