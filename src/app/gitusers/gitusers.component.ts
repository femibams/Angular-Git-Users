import { Component, OnInit } from '@angular/core';
import { GitUsers } from '../gitusers';

import { AppService }from '../app.service';
@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.css']
})
export class GitusersComponent implements OnInit {
  public users;
  selectedUser: GitUsers;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.appService.getGitHubUsers()
      .subscribe((data) => {
        this.users = data;
      })
  }

  onSelect(user: GitUsers): void {
    this.selectedUser = user;
  }

}
