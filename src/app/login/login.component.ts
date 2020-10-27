import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AuthServiceService } from '../service/auth/auth-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mandar: boolean = false;
  pasa: String = '';
  loginFormGroup: FormGroup;

  constructor(private router: Router, private afAuth: AngularFireAuth, private _formBuilder: FormBuilder, private _authService: AuthServiceService) {
      if(_authService.isAuthenticated()){
        router.navigate(['dashboard'])
      }
   }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    const data = this.loginFormGroup.value;
    //this.router.navigate(['dashboard'])
    if(data.user && data.password){
      this._authService.login(data.user, data.password).subscribe(access => {
        localStorage.setItem('user',JSON.stringify(access));
        console.log("Datos validos");
        this.router.navigate(['dashboard'])
        
      }, error =>{
        console.log("Datos invalidos");
        
      }
      );
    }
    
    
  }

  goRegister() {
    this.router.navigate(['/register'])
    console.log('conseguido')
  }

  async loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log('entra');

    firebase.auth().signInWithPopup(provider).then(res => {
      console.log('Successfully logged in!')
      this.router.navigate(['dashboard'])
    }).catch(error => {
      console.log(error)
    });

  }



}
