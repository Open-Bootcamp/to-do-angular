import { Injectable } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';

let tasks: Task[] = [
  { id: 1, description: 'test', completed: true },
  { id: 2, description: 'test2', completed: false },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  get() {
    return tasks;
  }

  add(newTask: Task) {
    tasks.push(newTask);
  }

  delete(id: number) {
    tasks = tasks.filter((task) => task.id !== id);
  }

  toggleTodo(id: number) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
}
