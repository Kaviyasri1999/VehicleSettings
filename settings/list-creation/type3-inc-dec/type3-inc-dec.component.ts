import { Component, ElementRef,Output, EventEmitter, AfterViewInit} from '@angular/core';
import { CounterComponent } from 'sharedComponents/counter/counter.component';
import { SettingsService } from '../../settings.service';

@Component({
  selector: 'type3-inc-dec',
  templateUrl: './type3-inc-dec.component.html',
  styleUrls: ['./type3-inc-dec.component.css']
})
export class Type3IncDecComponent implements AfterViewInit {

  
  @Output() infoIconClicked:EventEmitter<any> = new EventEmitter<any>();

  @Output() settingsListUpdated:EventEmitter<any> = new EventEmitter<any>();
  settingsList;
  public listTitle : string;
  public counterInput : [any];
  public visible ;
  public infoDesc : string;
  public id;
  public hidden;
  public longPress;
  public defVal;
  public arr;

  constructor(e:ElementRef,private settingsService:SettingsService) {
  // this.settingsService.changedSettingsList.subscribe(list => {
  //     this.settingsList = list;
  //   });
   }
   //called from list-creation comp with inputs from settings service 
  public setValue(id,title,cbVal,hidden,infoIconVisible,infoDesc) 
  {
    this.id = id; 
   this.listTitle = title;
   this.counterInput = cbVal;
   this.visible = infoIconVisible;
   this.infoDesc = infoDesc;
     this.hidden = hidden;
     this.arr = cbVal[0];
     if(this.arr.stringState){
      this.updateStringValue(this.arr.defaultVal);
    }
  }

  ngAfterViewInit() {    
    this.settingsService.changedSettingsList.subscribe(list => {
      this.settingsList = list;
    });
  }
  onInfoIconClick(){
    this.infoIconClicked.emit({title:this.listTitle ,desc:this.infoDesc});
    // this.settingsListUpdated.emit("");
  }
 public changeValue(val: string) { 
      if (val == 'dec') {  // To decrement countVal
        if (this.arr.defaultVal > this.arr.minVal) {
          this.arr.defaultVal = this.arr.defaultVal - this.arr.offsetVal;
        } else if (this.arr.defaultVal == this.arr.minVal && this.arr.isCyclic) {
          this.arr.defaultVal = this.arr.maxVal;
        }
      } else if (val == 'inc') {  // To increment countVal
        if (this.arr.defaultVal < this.arr.maxVal) {
          this.arr.defaultVal = this.arr.defaultVal + this.arr.offsetVal;
        } else if (this.arr.defaultVal == this.arr.maxVal && this.arr.isCyclic) {
          this.arr.defaultVal = this.arr.minVal;
        }
      }
      if(this.arr.stringState){
        this.updateStringValue(this.arr.defaultVal);
      }
  }

  // To display state value
  public updateStringValue(val){
    for(let i =1 ; i<= this.arr.valArr.length;i++){
      if(i == val){
        this.defVal = this.arr.valArr[i-1];  
      }
    }
  }


  // To change countVal with long press
  onMouseDown(e: any, val: string) {
    if (!this.arr.isCyclic) {
      this.longPress = setInterval(() => {
        this.changeValue(val);
      }, 500);
    }
  }
  onMouseUp(e) {
    clearTimeout(this.longPress);
  }
}
