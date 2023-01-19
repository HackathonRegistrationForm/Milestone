import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent {
  img:any=[];
  details=true;
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

 
  
  
  // onSelectFile(e:any){
  //   if(e.target.files){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //       this.url=event.target.result
  //     }
  //   }
  
      
  // }
  get(){
this.details=true
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
