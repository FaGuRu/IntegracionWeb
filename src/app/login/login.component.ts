import { Component, OnInit } from '@angular/core';
 import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
 import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mandar : boolean = false;
  
//private afAuth: AngularFireAuth 
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['/landing-page'])
    console.log('conseguido')
  }

  goRegister(){
    this.router.navigate(['/register'])
    console.log('conseguido')
  }

  async loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log('entra');
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    
    
    
  }

}
