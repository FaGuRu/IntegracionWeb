import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AuthServiceService } from '../service/auth/auth-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor(private router: Router,private _formBuilder: FormBuilder,private _authService: AuthServiceService) { }

  ngOnInit(): void {
    this.registerFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      username: ['', Validators.required],
    })
  }

  goLogin(){
    const data = this.registerFormGroup.value;
    this._authService.registerUser(data.email,data.password1,data.password2,data.username)
    this.router.navigate(['login'])
    
  }


}
