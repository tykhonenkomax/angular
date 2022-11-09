import {Component, Input, OnInit} from '@angular/core';

import {IUser} from "../../interfaces";
import {UserServices} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  users: IUser[]

  selectedUser: IUser

  constructor(private UserServices: UserServices) {
  }

  ngOnInit(): void {
    this.UserServices.getAllUsers().subscribe(value => this.users = value)
  }

  getUser(user: IUser) {
    this.selectedUser = user
  }
}
