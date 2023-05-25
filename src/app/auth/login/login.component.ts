import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  phoneNumber: any;
  reCaptchaVerifier!: any;
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    firebase.initializeApp(environment.firebase)
  }

  getOTP(){
    // this.reCaptchaVerifier = new firebase.RecaptchaVerifier('sign-in-button', {size: 'invisible'})
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {size: 'visible'})


    firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier).then((confirmationResult: any) => {
      localStorage.setItem('verificationId', JSON.stringify(confirmationResult.verificationId));
      console.log('confirmationResult: ', confirmationResult);
      this.router.navigate(['/otps'])
    })
      .catch((error) => {
        alert(error.message);
        setTimeout(() =>{
          window.location.reload()
        }, 5000);
      });
  }

}
