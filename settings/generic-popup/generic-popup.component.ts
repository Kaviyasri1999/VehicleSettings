import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'generic-popup',
  templateUrl: './generic-popup.component.html',
  styleUrls: ['./generic-popup.component.css']
})
export class GenericPopupComponent implements OnInit {

  
  @Output() popupClosed:EventEmitter<any> = new EventEmitter<any>();
 popupVisible:boolean = false;
searchBrakePopup:boolean = false;
//screen ="brakeServiceStart"
@Input() screen : string;
@Input() description : string;
@Input() title : string;
showCircle = 1;
  loadingTimer;
  constructor() { }

  ngOnInit(): void {
  }
  onOpenPopup(){
 this.popupVisible=true;
  }
  searchBrake(){
this.searchBrakePopup = true;
this.screen = "Initialize"
this.startLoading();
  }
  public startLoading(){
    var count = 1;
    this.showCircle = 1;
    this.loadingTimer = setInterval(()=>{
      if(count==5){
        if(this.screen=="Initialize"){
          this.screen = "PedalActivate"
          this.exitpopup()
        }
        else{
          this.showCircle = 5;
        }
        clearInterval(this.loadingTimer);
      }
      this.showCircle++;
      count++;
    },1000);

  }
  exitpopup(){
    if(this.screen ="PedalActivate"){
      setTimeout(() => {
        this.screen="BrakeReset" 
      }, 3000);
    }
  
    }
    closePopup(){
    	this.popupClosed.emit();
    }

}
