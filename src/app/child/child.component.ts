import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() fname:any
  @Input() varname:any
  @Output() parentfunc:EventEmitter<any>=new EventEmitter()
  @Output() callparentfunc:EventEmitter<any>=new EventEmitter()

  username=false;

  constructor() { }

  ngOnInit(): void {

    // console.log(this.fname);
    // if(this.fname['username']!=""){
    //   this.username=true
    // } 
    if(this.fname)
    {
      this.username=true;
    }
    // this.parentfunc.emit("hello");
  }
  

  // flag=this.fname['username']
  senddatatoparent()
  {
    if(this.fname!="hello"){
    this.parentfunc.emit(this.fname);
    }
    else {
      this.parentfunc.emit("zeus")
    }
    // this.parentfunc.emit("zeus")
  }
  callparent()
  {
    this.callparentfunc.emit(this.varname);
  }

  dict=[
    {
      title:"Parent",
      routename :"/parent"
    },
    {
      title:"child",
      routename:"/child"
    }
  ]

}
