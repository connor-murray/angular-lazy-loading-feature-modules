import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  static CLASS_NAME = 'TasksComponent';

  constructor() {
  }

  ngOnInit() {
    console.log(`${TasksComponent.CLASS_NAME}: ngOnInit`);
  }

  ngOnDestroy() {
    console.log(`${TasksComponent.CLASS_NAME}: ngOnDestroy`);
  }
}
