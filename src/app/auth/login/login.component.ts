import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any;
  public loginForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['', [Validators.required, Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]]
    })
  }

  login() {
    this.http.get<any>("http://localhost:3000/signUpUsers")//this.loginForm.value
    .subscribe(res=> {
      // console.log(res)
      // this.data = res;
      const user = res.find((a:any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(user){
        // alert("Login Successful");
        console.log(user);
        this.loginForm.reset();
        this.router.navigate(['/']);
      } else{
        alert("User not found");
      }
    });
  }

}
