import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.scss']
})
export class ViewTasksComponent implements OnInit {

  task: Task = {
    taskName: "Placeholder Existing Task",
    taskDescription: "Placeholder Existing Task Description",
    assignedTo: "user1"
  }

  constructor() { }

  ngOnInit() {
  }

}
