import { Component, OnInit, Output,EventEmitter,ViewChild } from '@angular/core';
import { SettingsService } from  '../../settings.service';
import { ScrollpaneComponent } from 'sharedComponents/scrollpane/scrollpane.component';

@Component({
  selector: 'type2-arrow',
  templateUrl: './type2-arrow.component.html',
  styleUrls: ['./type2-arrow.component.css']
})
export class Type2ArrowComponent implements OnInit {

  @Output() listArrowClicked:EventEmitter<any> = new EventEmitter<any>();
  @Output() infoIconClicked:EventEmitter<any> = new EventEmitter<any>();
    
  @Output() settingsListUpdated:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('scrollpane') scrrPane: ScrollpaneComponent;  
  constructor(private settingsService : SettingsService) { }
  public listTitle ;
  public id;
  public hidden = false;
  public checkboxValues = [];
  public checkboxValuesMulti = [];
  public visible ;
  public infoDesc;
  public infoPopupTitleL2;
  public infoPopupDescL2;
  public infoIconVisibleL2 = [];
  ngOnInit(): void {
  }

  //called from list-creation comp with inputs from settings service 
  public setValue(id,title,cbVal,hidden,infoIconVisible,infoDesc){  
    this.id = id;  
    this.hidden = hidden;
    this.checkboxValuesMulti = cbVal;
      this.listTitle = title;
      this.checkboxValues = cbVal;
      this.visible = infoIconVisible;
      this.infoDesc = infoDesc;      
  }

listClicked(){
  if(this.id == "audio"){
    this.listArrowClicked.emit("audioSettings"); 
  }
  else if(this.id == "sxm"){
    this.listArrowClicked.emit("siriusXM");
  }
  else if(this.id == "brakeserv"){
    this.listArrowClicked.emit("brakeService");
  }
  else if(this.id == "SDA_KEY"){
    this.listArrowClicked.emit("keySense");
  }
  else if(this.id == "PB_DM"){
    this.listArrowClicked.emit("deviceManager");
  }
  else if(this.id == "SWRC"){//steering wheel controls
    this.listArrowClicked.emit("SWC");
  }
  else if(this.id == "RADFDR"){
    this.listArrowClicked.emit({name:"factoryReset",title:"Reset App Drawer",desc:"Are you sure you want to reset App Drawer Favorites to default order?"})
  }
  else if(this.id == "RSD"){
  this.listArrowClicked.emit({name:"factoryReset",title:"Restore Settings Defaults",desc:"Are you sure you want to reset your settings to default?(Includes Clock, Audio, and Radio )"})
  }
  else if(this.id == "CPD"){
    this.listArrowClicked.emit({name:"factoryReset",title:"Clear Personal Data",desc:"Are you sure you want to clear all personal data? (Includes All Profiles, Clock, Audio, Radio, Bluetooth devices, Apps, Favorites)"})
  }
  else if(this.id == "RPP"){
    this.listArrowClicked.emit({name:"factoryReset",title:"Reset Wi-Fi Password for Projection",desc:"Are you sure you want to reset your Wi-Fi password for projection?"})
  }
  else if(this.id == "RPV"){
    this.listArrowClicked.emit({name:"factoryReset",title:"Restore All Performance Values?",desc:"Are you sure you want to reset Performance Values?"})
  }
  else if(this.id == "FR"){
    this.listArrowClicked.emit({name:"factoryReset",title:"Factory Reset",desc:"Are you sure you want to reset this radio to factory defaults? This will cause the radio to restart and the backup camera, radio, SOS, and several driving assistance features will not be available. This could take several minutes"})
  }
  else if(this.id == "PL" || this.id == "VI" || this.id == "LI" || this.id == "FCC" || this.id == "SD"|| this.id == "DK"|| this.id == "T_TSC"|| this.id == "T_TP"|| this.id == "RA"){
    this.settingsService.hideParentScreen = false;
  }
  else{    
    this.listArrowClicked.emit({comp:this.checkboxValues,title:this.listTitle}); 
  }
}

onInfoIconClick(index){
    this.infoIconClicked.emit({title:this.listTitle ,desc:this.infoDesc});
}
}
