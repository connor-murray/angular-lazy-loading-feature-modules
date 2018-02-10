import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  static CLASS_NAME = 'AppComponent';

  title = 'Angular Lazy Loading Feature Modules';

  ngOnInit() {
    console.log(`${AppComponent.CLASS_NAME}: ngOnInit`);
  }

  ngOnDestroy() {
    console.log(`${AppComponent.CLASS_NAME}: ngOnDestroy`);
  }
}
