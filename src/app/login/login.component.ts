import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { HttpClient, HttpParams } from '@angular/common/http';

declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User = new User();
  username: string="";
  password: string="";

  private googleAuth: any;

  constructor(private userService: UserService, private router: Router,private http: HttpClient) { }

  onSubmit(){
    this.login();
  }
  
  login() {
    const params = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);
    this.userService.loginUser(params).subscribe({
      next: () => {
        alert('Login successful!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Login failed: ' + err.message);
      }
    });
  }
  home(){
    
  }
  gg():void{
    
  }
  fb(){

  }

}
