import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required]
    },
    {
      // validators: [Validation.match('password', 'confirmPassword')]
    })
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/signUpUsers", this.signUpForm.value)
    .subscribe(res => {
      // alert("Signup Succcessful");
      this.signUpForm.reset();
      this.router.navigate(['login']);
    },err=> {
      alert("Something went wrong")
    })
  }

}
