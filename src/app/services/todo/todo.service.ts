import { Injectable } from '@angular/core';
import { Task } from 'src/app/interface/Task.interface';

const tasks: Task[] = [
  { id: 1, description: 'test', completed: false },
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
}
