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
  pasa : String ='';
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
    
    firebase.auth().signInWithPopup(provider).then(res => {
      console.log('Successfully logged in!')
      this.router.navigate(['/landing-page'])
    }).catch(error => {
      console.log(error)
  });
    
  }

}
