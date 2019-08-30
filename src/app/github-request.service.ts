import { Injectable } from '@angular/core';
import { User } from './user';
// import {RequestService}from '../request.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', 0,new Date());
   }
   githubRequest() {
     interface ApiResponse{
       login: string;
       name: string;
       avatar_url: string;
       public_repos: number;
       created_at: Date;
     }
     let promise = new Promise((resolve, reject) => {
       this.http.get<ApiResponse>("https://api.github.com/users/inesuwase?access_token="+environment.key)
       .toPromise().then((response) => {
       this.user.login = response.login;
       this.user.name = response.name;
       this.user.avatar_url = response.avatar_url;
       this.user.public_repos = response.public_repos;
       this.user.created_at = response.created_at;
       resolve();
      },
        (error) => {
          this.user.login = "User not found"
          this.user. name = "No name is found"
          this.user.avatar_url = "No profile picture"
          this.user.public_repos = 0
          reject(error);

        });
    });
    return promise
  }
}
  
  