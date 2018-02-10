import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  static CLASS_NAME = 'TaskComponent';

  constructor() {
  }

  ngOnInit() {
    console.log(`${TaskComponent.CLASS_NAME}: ngOnInit`);
  }

  ngOnDestroy() {
    console.log(`${TaskComponent.CLASS_NAME}: ngOnDestroy`);
  }
}
