import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  static CLASS_NAME = 'UserListComponent';

  constructor() {
  }

  ngOnInit() {
    console.log(`${UserListComponent.CLASS_NAME}: ngOnInit`);
  }

  ngOnDestroy() {
    console.log(`${UserListComponent.CLASS_NAME}: ngOnDestroy`);
  }

}
