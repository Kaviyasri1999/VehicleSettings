import { Component, AfterViewInit, ViewChild, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { CheckboxComponent } from 'sharedFolder/components/checkbox/checkbox.component';
import { SettingsService } from '../../settings.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'type1-checkbox',
  templateUrl: './type1-checkbox.component.html',
  styleUrls: ['./type1-checkbox.component.css']
})
export class Type1CheckboxComponent implements AfterViewInit {

  @Output() checkboxChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() infoIconClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() settingsListUpdated: EventEmitter<any> = new EventEmitter<any>();
  @Output() languageChanged: EventEmitter<any> = new EventEmitter<any>();

  public listTitle: string;
  public checkboxValues: [any];
  public visible;
  public id;
  public infoDesc: string;
  public elem;
  public settingsList = [];
  public settingsListindex = 0;
  public selectedScreenId;
  selectedScreenIdThirdLvl;

  constructor(private e: ElementRef, public settingsService: SettingsService) {
    this.elem = e.nativeElement;
    // this.settingsService.changedSettingsList.subscribe(list => {
    //   this.settingsList = list;
    // });
  }

  ngAfterViewInit() {
    this.settingsService.changedSideMenu.subscribe(val => {
      this.findIndex(val);
    });
    this.settingsService.changedSettingsList.subscribe(list => {
      this.settingsList = list;
    });
  }
  findIndex(sideMenu) {
    for (var k = 0; k < this.settingsService.settingsList.length; k++) {
      if (sideMenu == this.settingsService.settingsList[k].sideMenu) {
        this.settingsListindex = k;
      }
    }
  }
  public setValue(id, title, cbVal, multiChkBox, infoIconVisible, infoDesc) {
    this.id = id;
    this.listTitle = title;
    this.checkboxValues = cbVal;
    this.visible = infoIconVisible;
    this.infoDesc = infoDesc;
  }
  checkBoxClicked(eventTrue, index) {
    if (eventTrue) {
      for (var i = 0; i < this.checkboxValues.length; i++) {
        if (i == index) {
          this.checkboxValues[i].state = true;
          if (this.checkboxValues[i].name == "Auto" && this.id == "displaymode") {
            this.updateHiddenValue(true, 0);
          }
          else if (this.checkboxValues[i].name == "Auto" && this.id == "displaymode1") {
            this.updateHiddenValue(true, 1);
          }
          else if (this.id == "clock_SGPS") {
            this.updateHiddenValue(true, 6);
          }
          if (this.id == "english" || this.id == "chinese" || this.id == "french") {
            if (this.id != "chinese") {
              this.languageChanged.emit({ title: "", desc: "Language updated, Voice Command change in process..." });
            }
            else {
              this.languageChanged.emit({ title: "", desc: "Language updates in progress, Driver screen only will display language in chinese" });
            }
            this.selectedScreenId = "language";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "theme1" || this.id == "theme2" || this.id == "theme3") {
            this.selectedScreenId = "settheme";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "hct_T1" || this.id == "hct_T2" || this.id == "hct_T3" || this.id == "hct_T4") {
            this.selectedScreenId = "hct";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "HUD_Si" || this.id == "HUD_St" || this.id == "HUD_A" || this.id == "HUD_Cus") {
            this.selectedScreenId = "HUD";
            this.selectedScreenIdThirdLvl = "HUD_C";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "thirdLevelScreen");
          }
          else if (this.id == "EV_S1" || this.id == "EV_S2" || this.id == "EV_S3" || this.id == "EV_S4") {
            this.selectedScreenId = "HE_EV";
            this.selectedScreenIdThirdLvl = "HE_IEST";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "thirdLevelScreen");
          }
          else if (this.id == "HE_P1" || this.id == "HE_P2" || this.id == "HE_P3" || this.id == "HE_P4" || this.id == "HE_P5" || this.id == "HE_OFF") {
            this.selectedScreenId = "HE_KOKOA";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          // else if (this.id == "WAM" || this.id == "TJM" || this.id == "TM") {
          //   this.selectedScreenId = this.id;
          //   this.unCheckOtherOptions(this.id, this.settingsListindex, "firstLevelScreen");
          // }
          else if (this.id == "voice_off" || this.id == "voice_w1" || this.id == "voice_w2") {
            this.selectedScreenId = "voice_WUW";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "voice_alexa" || this.id == "voice_uc") {
            this.selectedScreenId = "voice_PVA";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "T_N1" || this.id == "T_N2" || this.id == "T_N3" || this.id == "T_N4" || this.id == "T_N5" 
          || this.id == "T_N6" || this.id == "T_N7" || this.id == "T_N8" || this.id == "T_N9"
          || this.id == "T_N10" || this.id == "T_N11" || this.id == "T_N12" || this.id == "T_N13" 
          || this.id == "T_N14" || this.id == "T_N15") {
            this.selectedScreenId = "T_TN";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "T_B1" || this.id == "T_B2" 
          || this.id == "T_B3" || this.id == "T_B4"  || this.id == "T_B5"  || this.id == "T_B6") {
            this.selectedScreenId = "T_braking";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "NF" || this.id == "PRG" || this.id == "DGR" || this.id == "TBY") {
            this.selectedScreenId = "CC";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
          else if (this.id == "SDA_OFF" || this.id == "SDA_VO" || this.id == "SDA_VC" || this.id == "SDA_VCT") {
            this.selectedScreenId = "SDA_UACC";
            this.unCheckOtherOptions(this.id, this.settingsListindex, "secondLevelScreen");
          }
        }
        else {
          this.checkboxValues[i].state = false;
          if (this.checkboxValues[i].name == "Auto" && this.id == "displaymode") {
            this.updateHiddenValue(false, 0);
          }
          else if (this.checkboxValues[i].name == "Auto" && this.id == "displaymode1") {
            this.updateHiddenValue(false, 1);
          }
        }
      }
    }
    else {
      this.checkboxValues[index].state = false;
      if (this.id == "clock_SGPS") {
        this.updateHiddenValue(false, 6);
      }
    }
  }
  onInfoIconClick(e) {
    this.infoIconClicked.emit({ title: this.listTitle, desc: this.infoDesc });
  }
  unCheckOtherOptions(id, index, scr) {
    let list = this.settingsList[index].list;
    let thirdLvlIndex;
    let localIndex ;
    for (let i = 0; i < list.length; i++) {

      if (list[i].id == this.selectedScreenId) {
        localIndex = i;
        if (scr == 'firstLevelScreen') {
          if (list[i].id == id) {
            list[i].cbValues[0].state = true;
          }
          else {
            list[i].cbValues[0].state = false;
          }
        }
        else if (scr == 'secondLevelScreen') {
          for (let j = 0; j < list[i].cbValues.length; j++) {
            if (list[i].cbValues[j].id == id) {
              list[i].cbValues[j].cbValues[0].state = true;
            }
            else {
              list[i].cbValues[j].cbValues[0].state = false;
            }
          }
        }
        else if (scr == 'thirdLevelScreen') {
          for (let k = 0; k < list[i].cbValues.length; k++) {
            if (list[i].cbValues[k].id == this.selectedScreenIdThirdLvl) {  
              thirdLvlIndex = k;           
              for(let m=0;m<list[i].cbValues[k].cbValues.length;m++){
                if(list[i].cbValues[k].cbValues[m].id == id){
                  list[i].cbValues[k].cbValues[m].cbValues[0].state = true;
                }
                else {
                  list[i].cbValues[k].cbValues[m].cbValues[0].state = false;
                }
              }
            }            
          }
        }
      }

    }
    this.settingsList[index].list = list;
    switch(scr){
      case "firstLevelScreen":
        this.settingsListUpdated.emit(this.settingsList[index].list);
        break;
      case "secondLevelScreen":
        this.settingsListUpdated.emit(this.settingsList[index].list[localIndex].cbValues);
        break;
      case "thirdLevelScreen":
        this.settingsListUpdated.emit(this.settingsList[index].list[localIndex].cbValues[thirdLvlIndex].cbValues);
        break;
    }
    // this.settingsListUpdated.emit(this.settingsList[index].list[localIndex].cbValues);
    this.settingsService.updateSettingsList(this.settingsList);

  }

  // function to update hidden value on settings list
  public updateHiddenValue(boo, index) {
    let list = this.settingsList[index].list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == 'headlighton' || list[i].id == 'headlighoff') {
        list[i].hidden = boo;
      }
      if (list[i].id == 'headlighton1' || list[i].id == 'headlighoff1') {
        list[i].hidden = boo;
      }
      if (list[i].id == 'clock_STH' || list[i].id == 'clock_STM') {
        list[i].hidden = boo;
      }
    }
    this.settingsList[index].list = list;
    this.settingsListUpdated.emit(this.settingsList[index].list);
    this.settingsService.updateSettingsList(this.settingsList);
  }
}