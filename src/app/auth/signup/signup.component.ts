import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({

  selector: 'signup',
  templateUrl:'./signup.component.html',
  styleUrls:['signup.component.css']

})



export class SignUpComponent{

  isLoading=false;


  onSignUp(form:NgForm){

    console.log(form.value);
  }

}
