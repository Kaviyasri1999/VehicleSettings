import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { CheckboxComponent } from 'sharedFolder/components/checkbox/checkbox.component'
@Component({
  selector: 'type1-checkbox',
  templateUrl: './type1-checkbox.component.html',
  styleUrls: ['./type1-checkbox.component.css']
})
export class Type1CheckboxComponent implements OnInit {

  @Output() checkboxChanged:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('check1Mc') chkbox1: CheckboxComponent;
  @ViewChild('check2Mc') chkbox2: CheckboxComponent;
  @ViewChild('check3Mc') chkbox3: CheckboxComponent;

  public listTitle : string;
  public checkboxValues : any[];
  constructor() { }

  ngOnInit(): void {
  }
  public setValue(title,cbVal) 
  {
   this.listTitle = title;
   this.checkboxValues = cbVal;
  }
  check1Clicked(e,len){
    if(len == 3){
      e?(this.chkbox2.hideCheck(),this.chkbox3.hideCheck()):'';
    }
    else if(len == 2){
      e?this.chkbox2.hideCheck():'';
    }
  }
  check2Clicked(e,len){
    if(len == 3){
      e?(this.chkbox1.hideCheck(),this.chkbox3.hideCheck()):'';
    }
    else if(len == 2){
      e?this.chkbox1.hideCheck():'';
    }
  }
  check3Clicked(e,len){
    e?(this.chkbox1.hideCheck(),this.chkbox2.hideCheck()):'';
  }


}
