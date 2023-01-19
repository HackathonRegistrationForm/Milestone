import { Component } from '@angular/core';

@Component({
  selector: 'app-granites',
  templateUrl: './granites.component.html',
  styleUrls: ['./granites.component.css']
})
export class GranitesComponent {
  sub: any;
  subdata: any;
  toggle(){
    this.sub=!this.sub
  }
  toggledata(){
    this.subdata=!this.subdata
  }
  loginform(){
    window.location.href="/login"
  }
}
