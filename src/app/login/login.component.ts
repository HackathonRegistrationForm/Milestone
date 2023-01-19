import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//   signupForm:any;
//   login=true;
//   showpopup=false;
// Obj: any;
//   register: any=[];
  constructor() { }
  ngOnInit(): void {
  }
  // toggle(){
  //   this.login = !this.login
  //   this.signupForm =false;        
  // }
  // toggleregister(){
  //   this.login=false;
  //   this.signupForm=true;
  // }
  // loginForm=new FormGroup({
  //     email : new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  //   password : new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   sid:new FormControl(0)
  // })
  



  // form(){
  //   this.showpopup=true;
  // }
// Onsubmit(){
//   if(this.loginForm.value.email ==""||this.loginForm.value.password ==""){
//     Swal.fire(  
//       'Cancelled',  
//       'You Must  Enter All fields !',           //give for condition to take all properties take empty values
//       'error'                                  //then take one alert message like not save all data
//     )  
//     }else{
//       this.loginForm.value.sid = this.register.length+1; 
//       Swal.fire('Register Successfully!', '', 'success').then(() => {
    
// })

//       var requestOptions = {
//         method: 'POST',
//         body:JSON.stringify(this.loginForm)
//       };
//       console.log(requestOptions);  
                  
//       fetch("http://localhost:2000/signup/addsignupdetails",{
//         method:'POST',
//         headers:{
//           "Access-Control-Allow-Origin":"*",
//           "Content-Type":'application/json'
//         },
//         body:JSON.stringify(this.loginForm)
       
//       })  .then(response => response.json())
      
//       .then(result =>
//         console.log(result))
       
//       .catch(error => console.log('error',error));                 
          
    
//     }
//   }
// Onsubmit(){
  
//   if(this.loginForm.value.email ==""||this.loginForm.value.password ==""){
//     Swal.fire(  
//       'Cancelled',  
//       'You Must  Enter All fields !',           //give for condition to take all properties take empty values
//       'error'                                  //then take one alert message like not save all data
//     )  
//     }else{
//       this.loginForm.value.sid = this.register.length+1; 
//       Swal.fire('Register Successfully!', '', 'success').then(() => {
       
// })

//       var requestOptions = {
//         method: 'POST',
//         body:JSON.stringify(this.loginForm.value)
//       };
//       console.log(requestOptions);  
                  
//       fetch("http://localhost:2000/signin/addsignin",{
//         method:'POST',
//         headers:{
//           "Access-Control-Allow-Origin":"*",
//           "Content-Type":'application/json'
//         },
//       body:JSON.stringify(this.loginForm.value)
       
//       })  .then(response => response.json())
      
//       .then(result =>
//         console.log(result))
       
//       .catch(error => console.log('error',error));                 
          
    
//     }
//   }
  

    
      // loginshow(){
      // }
      // get email()
      // {
      //  return this.loginForm.get('email');
      // }
      // get password()
      // {
      //  return this.loginForm.get('password');
      // }
}

