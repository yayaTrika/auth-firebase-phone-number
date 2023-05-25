import {Component, OnInit} from '@angular/core';
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit{

  otp!: any;
  verify: any
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    firebase.initializeApp(environment.firebase)
    this.verify = JSON.parse(localStorage.getItem('verificationId' ) || '{}');

    console.log('verify: ', this.verify)
  }
  onOtpChange(otp: string) {
    this.otp = otp;
    console.log('otp: ',this.otp)
  }

  handleClick(){
    var credentials = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    )
    console.log('credentials: ',credentials);

    firebase
      .auth()
      .signInWithCredential(credentials)
      .then((response) => {
        console.log('response: ', response);
        localStorage.setItem('user_data', JSON.stringify(response));
        this.router.navigate(['/dashboard'])
      })
      .catch((error) => {
        alert(error.message);
        setTimeout(() =>{
          window.location.reload()
        }, 5000);
      });
  }

}
