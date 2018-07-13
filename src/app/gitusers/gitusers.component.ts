import { Component, OnInit } from '@angular/core';
import { GitUsers } from '../gitusers';
import { USERS } from '../mock-users';
@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.css']
})
export class GitusersComponent implements OnInit {
  // user: GitUsers = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  users = USERS;
  // users: GitUsers[];
  selectedUser: GitUsers;
  constructor() { }

  ngOnInit() {
  }

  onSelect(user: GitUsers): void {
    this.selectedUser = user;
  }

}
