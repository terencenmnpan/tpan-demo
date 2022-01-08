import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  users = ['user1', 'user2']
  task: Task = {
    taskName: null,
    taskDescription: null,
    assignedTo: null
  }
  constructor() { }

  ngOnInit() {
  }

}
