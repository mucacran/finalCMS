// frontend/src/app/tarea/tarea.component.ts
import { Component, Input } from '@angular/core';
import { Tarea } from './tarea.model';
import { TareaService } from './tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  tareas: Tarea[] = [];
  @Input() tarea: Tarea;

  constructor(private tareaService: TareaService) {}

  ///
  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareaService.obtenerTareas()
      .subscribe(
        tareas => this.tareas = tareas,
        error => console.error('Error al obtener las tareas', error)
      );
  }
  ////

  eliminarTarea(id: string) {
    this.tareaService.eliminarTarea(id).subscribe(() => {
      console.log('Tarea eliminada');
    });
  }
}
