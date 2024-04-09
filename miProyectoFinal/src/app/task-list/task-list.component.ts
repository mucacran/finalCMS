import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  editTask(task: Task): void {
    // Implementa la lógica para editar una tarea
    console.log('Editando tarea:', task);
  }

  deleteTask(taskId: string): void {
    // Implementa la lógica para eliminar una tarea
    console.log('Eliminando tarea con ID:', taskId);
  }
}
