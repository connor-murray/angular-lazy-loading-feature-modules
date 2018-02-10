import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskComponent} from './task/task.component';

export const routes: Routes = [
  {
    path: '', component: TasksComponent,
    children: [{path: 'task', component: TaskComponent}, {path: 'list', component: TaskListComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
