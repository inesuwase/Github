import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   user: User;
  constructor(private githubRequestService: GithubRequestService) {
    this.githubRequestService = githubRequestService;
   }

  ngOnInit() {
    this.githubRequestService.githubRequest()
    this.user = this.githubRequestService.user
  }

}
