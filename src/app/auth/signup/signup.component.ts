import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service'



@Component({

  selector: 'signup',
  templateUrl:'./signup.component.html',
  styleUrls:['signup.component.css']

})



export class SignUpComponent{


  isLoading=false;

  constructor(public authService: AuthService){}


  onSignUp(form:NgForm){

    if(form.invalid){

      return;
    }

    this.authService.createUser(form.value.email,form.value.password);
  }

}
