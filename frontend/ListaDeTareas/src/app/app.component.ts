// frontend/src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea/tarea.model';
import { TareaService } from './tarea/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  tareas: Tarea[] = [];
  nombreTarea: string = 'Este es el nombre de la tareas';

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  obtenerTareas() {
    this.tareaService.obtenerTareas()
    .subscribe(
      tareas => {
      this.tareas = tareas,
      error => console.error('Error al obtener las tareas', error)
    });
  }

  agregarTarea(nombre: string) {
    const nuevaTarea: Tarea = {
      nombre: nombre,
      completada: false
    };

    this.tareaService.agregarTarea(nuevaTarea).subscribe(tarea => {
      this.tareas.push(tarea);
    });
  }

}
