import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task = { _id: '', title: '', description: '' };

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTask(id)
        .subscribe(task => this.task = task);
    }
  }

  updateTask(): void {
    if (!this.task.title.trim() || !this.task.description.trim()) {
      return; // Evita actualizar tareas con campos vacíos
    }
    this.taskService.updateTask(this.task)
      .subscribe(() => {
        console.log('Tarea actualizada correctamente');
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
