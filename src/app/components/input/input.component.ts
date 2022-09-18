import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [TodoService],
})
export class InputComponent implements OnInit {
  public newTask: string;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTask() {
    this.todoService.add({
      id: new Date().getTime(),
      description: this.newTask,
      completed: false,
    });

    this.newTask = '';
  }
}
