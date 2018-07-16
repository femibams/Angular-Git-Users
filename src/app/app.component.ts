import { Component } from '@angular/core';
import { AppService }from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github users application';
  public users;
  constructor(
    private appService:AppService
  ){

  }

  getUsers(){
    this.appService.getGitHubUsers()
      .subscribe((data) => {
        this.users = data;
        console.log('Users', this.users);
      })
  }


}
