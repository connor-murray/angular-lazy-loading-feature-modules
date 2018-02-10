import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  static CLASS_NAME = 'TaskListComponent';

  constructor() {
  }

  ngOnInit() {
    console.log(`${TaskListComponent.CLASS_NAME}: ngOnInit`);
  }

  ngOnDestroy() {
    console.log(`${TaskListComponent.CLASS_NAME}: ngOnDestroy`);
  }
}
