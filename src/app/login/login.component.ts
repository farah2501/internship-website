import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginObj: any = {
    email: '',
    password: ''
  };
  constructor(private router: Router)  {}
  ngOnInit(): void {
    
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
