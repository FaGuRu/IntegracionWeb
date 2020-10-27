import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor(private router: Router,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
    })
  }

  goLogin(){
    this.router.navigate(['login'])
    console.log('conseguido')
  }


}
