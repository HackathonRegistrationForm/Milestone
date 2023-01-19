import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as e from 'express';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
register:any=[];
sid:any=0;

  SignupForm = new FormGroup({
    Firstname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Lastname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
    sid: new FormControl(0)
  });
  signupdata(SignupForm:FormGroup){
    
  
  }

    signup(){
  
      if(this.SignupForm.value.Firstname ==""||this.SignupForm.value.Lastname ==""||this.SignupForm.value.email ==""||this.SignupForm.value.password ==""||this.SignupForm.value.mobile==""){
        Swal.fire(  
          'Cancelled',  
          'You Must  Enter All fields !',           //give for condition to take all properties take empty values
          'error'                                  //then take one alert message like not save all data
        )  
        }else{
          this.SignupForm.value.sid = this.register.length+1; 
          Swal.fire('Register Successfully!', '', 'success').then(() => {
           
    })

          var requestOptions = {
            method: 'POST',
            body:JSON.stringify(this.SignupForm.value)
          };
          console.log(requestOptions);  
                      
          fetch("http://localhost:2000/signup/addsignupdetails",{
            method:'POST',
            headers:{
              "Access-Control-Allow-Origin":"*",
              "Content-Type":'application/json'
            },
          body:JSON.stringify(this.SignupForm.value)
           
          })  .then(response => response.json())
          
          .then(result =>
            console.log(result))
           
          .catch(error => console.log('error',error));                 
              
        
        }
      }
      
    
  get Firstname()
  {
   return this.SignupForm.get('Firstname');
  }
  get Lastname()
  {
   return this.SignupForm.get('Lastname');
  }
  get mobile()
  {
   return this.SignupForm.get('mobile');
  }
  get email()
  {
   return this.SignupForm.get('email');
  }
  get password()
  {
   return this.SignupForm.get('password');
  }
}