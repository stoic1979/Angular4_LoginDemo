import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


	username = '';
	password = '';

  constructor(private router: Router, private user: UserService) {
  }

  ngOnInit() {
  }

  loginUser() {

    console.log("-- loginUser --");

    console.log("--> username: " + this.username);
    console.log("--> password: " + this.password);

    if(this.username == "admin" && this.password == "123") {
      this.router.navigate(['dashboard']);
      this.user.setUserLoggedIn();
    }

  }

}//LoginFormComponent
