import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private router: Router) { }
 
  //ตัวแปร ธรรมดา
  message : string = "Hello Angular";

  //ตัวแปร object
  profile={
    "name":"chalermwut",
    "tel":"000000000",
    "gender":"Male"
  }

  //2 way Data bidding
  userData = {
    "email":"",
    "password":""
  }

  ngOnInit(): void {
  }

  submitLogin(){
    // alert('Hey Angular');
    if(this.userData.email=="admin@email.com" && this.userData.password=="1234"){
      this.router.navigate(['backend']);
    } else{
      alert("Login Fail");
    }
  }

}
