import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthServiceService, private router: Router) {}

  ngOnInit() {
  }

  login() {

    if ( this.auth.login(this.username, this.password)) {
        this.router.navigate(['/']);
    }
  }
}
