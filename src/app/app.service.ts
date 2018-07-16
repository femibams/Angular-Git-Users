import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'https://api.github.com/users?since=1'

  constructor(
    private http: HttpClient
  ) { }

  getGitHubUsers(){
    return this.http.get<any>(this.url)
  }
  
}
