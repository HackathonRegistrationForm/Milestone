import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img: any;
 
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
  });
  
  
  get(){
    
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
