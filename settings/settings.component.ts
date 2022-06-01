import { Component, ViewChild,ViewContainerRef,ComponentFactory,ComponentFactoryResolver,ComponentRef,ChangeDetectorRef, AfterViewInit, ElementRef } from '@angular/core';
import { Type1CheckboxComponent } from './list-creation/type1-checkbox/type1-checkbox.component';
import { Type2ArrowComponent } from './list-creation/type2-arrow/type2-arrow.component';
import { Type3IncDecComponent } from './list-creation/type3-inc-dec/type3-inc-dec.component';
import { SettingsService } from '../settings/settings.service';
import { ScrollpaneComponent } from 'sharedComponents/scrollpane/scrollpane.component';
import { AudioComponent } from 'sharedComponents/audiosettings/audiosettings.component';
import { ListCreationComponent } from '../settings/list-creation/list-creation.component';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements AfterViewInit {


  @ViewChild(ListCreationComponent) listAreaComp :ListCreationComponent;
  public defaultSettingsList;
  constructor(private CFR: ComponentFactoryResolver,private CDR: ChangeDetectorRef,public settingsService : SettingsService,private e:ElementRef) {
   
   }
  
  ngAfterViewInit() {
    this.defaultSettingsList = this.settingsService.settingsList;
  }
  createListToDisp(sideMenu){
      this.settingsService.updateSideMenu(sideMenu);
   }
    
  backBtnClickHandler(){
    this.settingsService.hideParentScreen = false;
    this.settingsService.isAudioSettings = false;
    this.settingsService.generic_popup = false;
    this.settingsService.infoPopupVisible = false;
    this.listAreaComp.createComponent(this.settingsService.currentList[0],0);
  }
}
