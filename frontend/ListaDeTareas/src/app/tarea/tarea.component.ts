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
  @Input() tarea: Tarea;

  constructor(private tareaService: TareaService) {}

  eliminarTarea(id: string) {
    this.tareaService.eliminarTarea(id).subscribe(() => {
      console.log('Tarea eliminada');
    });
  }
}
