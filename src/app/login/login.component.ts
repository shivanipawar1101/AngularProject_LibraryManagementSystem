import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string
  password: string

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onsubmitLogin(loginForm) {
    console.log(loginForm.username);
    console.log(loginForm.password);
    localStorage.setItem('user', this.username);
    if (this.password == "admin") {
      this.router.navigate(['/ahome']);
    } else if (this.password == "user") {

      this.router.navigate(['/home']);
    } else {
      alert("Hello " + this.username + ", please check login credential !")
    }
  }
}
