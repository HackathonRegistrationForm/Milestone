import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobilenumber',
  templateUrl: './mobilenumber.component.html',
  styleUrls: ['./mobilenumber.component.css']
})
export class MobilenumberComponent {
  otp:any;
  mobileForm=new FormGroup({
    mobile : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  })
  mobilenum(){

  }
  get mobile()
      {
       return this.mobileForm.get('email');
      } 

      
}
