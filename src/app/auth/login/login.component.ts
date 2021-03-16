import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({

    selector: 'login',
    templateUrl:'login.component.html',
    styleUrls:['login.component.css']

})


export class LoginComponent{

  isLoading= false;

  data= [];

  onLogin(form:NgForm){

      console.log(form.value.email + form.value.password)



  }

}
