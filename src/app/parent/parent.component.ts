import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
  data="hello"
  flag=false
  getUserValue(val : any){
    // console.log(val);
    this.data=val;
  }
  dat="holaaaaaa"
  tempname=""
  parentpassingfunc(datareceived:any)
  {
    console.log("this is received data",datareceived);
    this.dat=datareceived['username']
  }
  passchild(dtareceived:any)
  {
    this.tempname=dtareceived
  }


}
