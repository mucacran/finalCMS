// frontend/src/app/tarea/tarea.service.ts
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Tarea } from './tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  //private apiUrl = '/api/tareas';
  private apiUrl = 'http://localhost:3000/api/tareas';
  
  private tarea: Tarea[] = [];
  private postsUpdated = new Subject<Tarea[]>();

  constructor(private http: HttpClient) {}


  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<{ tarea: Tarea[] }>(this.apiUrl)
      .pipe(
        map((postData) => {
          return postData.tarea.map(tarea => {
            return {
              nombre: tarea.nombre,
              completada: tarea.completada,
              id: tarea.id
            };
          });
        })
      );
  }

  /*
  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl).pipe(
      map((tareas) => {
        this.tarea = tareas;
        console.log("hola pancho");
        return tareas;
      })
    );
  }*/
  /*
  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }
  */

  agregarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }

  eliminarTarea(id: string): Observable<Tarea> {
    return this.http.delete<Tarea>(`${this.apiUrl}/${id}`);
  }
}
