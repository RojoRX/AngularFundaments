import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value:any=undefined;
  edad=13;
  statusBoolean=true;
  itsTrue=false;

  constructor() { }
  
  ngOnInit(): void {
    /*
    let identify=()=>{
       this.value=prompt("Cual es tu nombre","No identificado");
    }
    identify();
    console.log(this.value);
    */
  }
  statusButton=()=>{
    if(this.edad>=18){
      this.statusBoolean=false;
      this.itsTrue=true;
      return;
    }
    this.statusBoolean=true;
    this.itsTrue=false;
  }
}
