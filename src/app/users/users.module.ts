import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {UserListComponent} from './user-list/user-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [UserListComponent]
})
export class UsersModule {
}
