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

  getTask() {
    this.tasks = this.todoService.get();
    this.taskCompleted = this.tasks.filter((task) => task.completed).length;
  }

  ngOnInit(): void {
    this.getTask();
  }
}
