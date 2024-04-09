import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { NgForm, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  newTask: Task = { title: '', description: '' };

  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.taskService.addTask(this.newTask)
      .subscribe(() => {
        // Reset the form after adding the task
        this.newTask = { title: '', description: '' };
        // You can add any additional logic here, such as displaying a success message
      });
  }
}
