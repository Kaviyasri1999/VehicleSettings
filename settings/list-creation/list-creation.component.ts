import { Component, OnInit, AfterViewInit,ViewContainerRef,ViewChild,ComponentFactoryResolver, ChangeDetectorRef,ElementRef} from '@angular/core';
import { ScrollpaneComponent } from 'sharedFolder/components/scrollpane/scrollpane.component';
import { Type1CheckboxComponent } from './type1-checkbox/type1-checkbox.component';
import { Type2ArrowComponent } from './type2-arrow/type2-arrow.component';
import { Type3IncDecComponent } from './type3-inc-dec/type3-inc-dec.component';
import { SettingsService } from '../settings.service';
import { AudioComponent } from 'sharedComponents/audiosettings/audiosettings.component';
import { Screen } from 'sharedClasses/stringReference';
import { CommonDataService } from 'sharedService/common-data.service';

@Component({
  selector: 'list-creation',
  templateUrl: './list-creation.component.html',
  styleUrls: ['./list-creation.component.css']
})
export class ListCreationComponent implements AfterViewInit {

  
  @ViewChild('listContainer',{read:ViewContainerRef}) viewContainer:ViewContainerRef;  
  @ViewChild('scrollpane') scrrPane: ScrollpaneComponent;
  
  public infoTitle;
  public infoDesc;
  constructor(private CFR: ComponentFactoryResolver,private CDR: ChangeDetectorRef,
    public settingsService : SettingsService,private commonDataService:CommonDataService) {  
         
   }
  
  private classArray=[
    {name:"Type1CheckboxComponent",cls:Type1CheckboxComponent},
    {name:"Type2ArrowComponent",cls:Type2ArrowComponent},
    {name:"Type3IncDecComponent",cls:Type3IncDecComponent}
  ];
  ngAfterViewInit() {
   this.createComponent(this.settingsService.settingsList[0].list,0);
   this.settingsService.changedSideMenu.subscribe(val =>{
    this.createListToDisp(val);
  }); 
  // this.settingsService.changedSettingsList.subscribe(list => {
  //   this.createComponent(list,0);
  // });
  }

  createListToDisp(sideMenu){
    for(var k=0;k<this.settingsService.settingsList.length;k++){
      if(sideMenu == this.settingsService.settingsList[k].sideMenu){
       this.createComponent(this.settingsService.settingsList[k].list,0);
      }
    }
    this.settingsService.infoPopupVisible=false;
 }
  
  createComponent(arr,index){
    this.viewContainer.clear(); 
    this.settingsService.currentList[index] = arr; 
    for(var i=0;i<arr.length;i++){
             
    let compType:any=this.findComponent(arr[i].type );      
    const factory = this.CFR.resolveComponentFactory(compType);
    const componentRef = this.viewContainer.createComponent(factory); 
      (<any>componentRef.instance).setValue(arr[i].id,arr[i].title,arr[i].cbValues,arr[i].hidden,arr[i].infoIconVisible,arr[i].infoDesc)
    
    if(compType == this.classArray[0].cls)  {
      (<Type1CheckboxComponent>componentRef.instance).languageChanged.subscribe(e => {
         this.settingsService.generic_popup = true;
         this.settingsService.popupScreen = "language";
        this.settingsService.popupTitle = e.title;
        this.settingsService.popupDesc = e.desc;
      })
    }

      if(compType == this.classArray[1].cls)  {
      (<Type2ArrowComponent>componentRef.instance).listArrowClicked.subscribe(e => {
        this.settingsService.hideParentScreen = true;

      if( e == "audioSettings"){
        this.settingsService.isAudioSettings  = true;        
        this.settingsService.breadCrumbTitle = "Audio";
      }
      else if(e == "SWC"){
         this.settingsService.hideParentScreen = false;
         this.commonDataService.updateCrntScreen(Screen.RSWC);
      }
      else if(e == "siriusXM"){
        this.settingsService.hideParentScreen = false;
      }
      else if(e == "deviceManager"){
        this.settingsService.hideParentScreen = false;
        this.commonDataService.updateCrntScreen(Screen.DVC_MGR);
      }
      else if(e == "keySense"){
        this.settingsService.breadCrumbTitle = "KeySense";
        this.createComponent(this.settingsService.settingsList[29].list,1);
      }
      else if(e == "brakeService"){
        this.settingsService.generic_popup = true;
        this.settingsService.popupScreen = "brakeService";
        this.settingsService.popupTitle = "Brake Service";
        this.settingsService.popupDesc = "";
      }
      else if(e.name == "factoryReset"){
         this.settingsService.generic_popup = true;
         this.settingsService.popupScreen = "factoryReset";
        this.settingsService.popupTitle = e.title;
        this.settingsService.popupDesc = e.desc;
      }
      else{        
        this.settingsService.breadCrumbTitle = e.title;
        this.createComponent(e.comp,1);
      }
    });
  }
  (<any>componentRef.instance).infoIconClicked.subscribe(e => {
    this.settingsService.infoPopupVisible = true;
    this.infoTitle = e.title;
    this.infoDesc = e.desc;
});

 (<Type1CheckboxComponent>componentRef.instance).settingsListUpdated.subscribe(list =>{
      this.createComponent(list,1);
    }); 
    }
    this.CDR.detectChanges();
    this.scrrPane.updateScroll(true);
    this.scrrPane.resetScroll();
   this.scrrPane.scrcontentHeight=(arr.length*120)+((arr.length-1));
  }
  private findComponent(str)
  {
    for(var i=0;i<this.classArray.length;i++)
    {
      if(str == this.classArray[i].name)
      {
        return this.classArray[i].cls
      }
    }
  }

}
