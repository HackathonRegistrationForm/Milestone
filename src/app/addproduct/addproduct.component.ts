import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  productform=new FormGroup({
    price:new FormControl(),
    Image:new FormControl(),
    name:new FormControl(),
    Style:new FormControl(),
    Size:new FormControl(),
    Color:new FormControl(),
    Capacity:new FormControl(),
    Dimensions:new FormControl(),
    Weight:new FormControl(),
    Description:new FormControl(),
    sid:new FormControl(0)
  });
  img: any=[];
  sid:any=0
  get: any;


  Add(){ 
    if(this.productform.value.price ==""||this.productform.value.name ==""||this.productform.value.Size ==""||this.productform.value.Style ==""||this.productform.value.Weight ==""||this.productform.value.Description ==""||this.productform.value.Dimensions ==""||this.productform.value.Image ==""||this.productform.value.Capacity ==""){
      Swal.fire(  
        'Cancelled',  
        'You Must  Enter All fields !',           //give for condition to take all properties take empty values
        'error'                                  //then take one alert message like not save all data
      )  
      }else{
        this.productform.value.sid = this.img.length+1; 
        Swal.fire('Added Successfully!', '', 'success').then(() => {
          window.location.href="/home"  
    })  
   
    var requestOptions = {
      method: 'POST',
      body:JSON.stringify(this.productform.value)
    };
    console.log(requestOptions);  
    fetch("http://localhost:8000/products/addproducts",{
      method:'POST',
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":'application/json'
      },
    body:JSON.stringify(this.productform.value)
     
    })  .then(response => response.json())
    
    .then(result =>
      console.log(result))
     
    .catch(error => console.log('error',error));                 
        
}
fetch("http://localhost:8000/products/getproduct",{
  method:"GET",
  headers:{
    "access-Control-Allow-Origin":"*",
  },
  body:JSON.stringify(this.get)
})

.then(response => response.json())
.then(result =>{
  console.log(result),
  this.img = result.RawproductInfo
console.log(this.img)
}
).catch(err =>
  console.log('error',err))
}

}
    
