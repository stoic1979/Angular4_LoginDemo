import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


	username = '';
	password = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  loginUser() {

    console.log("-- loginUser --");

    console.log("--> username: " + this.username);
    console.log("--> password: " + this.password);

    this.router.navigate(['dashboard']);

  }

}//LoginFormComponent
