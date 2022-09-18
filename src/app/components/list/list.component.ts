import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [TodoService],
})
export class ListComponent implements OnInit {
  public tasks: Task[];
  public taskCompleted: number;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.tasks = this.todoService.get();
    this.getTotalTaskCompleted();
  }

  getTotalTaskCompleted() {
    this.taskCompleted = this.tasks.filter((task) => task.completed).length;
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
    this.getTotalTaskCompleted();
  }
}
