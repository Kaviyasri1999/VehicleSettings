import { Component, AfterViewInit, Output,EventEmitter } from '@angular/core';
import { SettingsService } from '../settings.service';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements AfterViewInit {

 @Output() sideMenuChanged :EventEmitter<any> = new EventEmitter<any>();
  sideMenus = [];
  selectedItem = "My Profile"; 
  public curdownarrScrn = "showfirstpart";
  public curuparrScrn = '';
  private boxselect = false;
  private positionfinder = 0;

  constructor(private settingsService : SettingsService) { 
      this.resetSideMenuTabs();
    
  }

  ngAfterViewInit() {
    this.sideMenus = this.settingsService.settingsList;
    this.settingsService.changedSideMenu.subscribe(val =>{
      this.boxselect = true;
      this.selectedItem = val;
      // this.notificationScr = true;
    }); 
  }
  onSideMenuClick(sideMenu){
    // this.selectedItem = sideMenu;
    // this.sideMenuChanged.emit(sideMenu);
    this.settingsService.updateSideMenu(sideMenu);
    // this.boxselect = true;
  }

  public resetSideMenuTabs()
  {
    this.curdownarrScrn = "showfirstpart";
    this.curuparrScrn = '';
    this.positionfinder = 0;
    $("#box-list").css("top", - 123*this.positionfinder+"px");
  }



  public presetdown(e){
   
  //   var firstpartlist = $("#box-list").position().top;
  //  var mainlist = $(".showpart").offset().top;
  //   var sublist =  $("#box-list").offset().top;
    
    this.positionfinder+=4;
    if(this.positionfinder > 24)
    this.positionfinder = 24;

    $("#box-list").css("top", - 123*this.positionfinder+"px");
    this.curuparrScrn = "showsecondpart";

    if($("#downarr").offset().top  >= $(".box:last-child").offset().top){
      this.curdownarrScrn = '';
    }
   
  }

  public presetup(e){
    // var firstpartlist = $("#box-list").position().top;
    
    this.positionfinder-=4;

    if(this.positionfinder<0)
    this.positionfinder = 0 ;
    $("#box-list").css("top", - 123*this.positionfinder+"px");
    var mainlist = $(".showpart").offset().top;
    var sublist =  $("#box-list").offset().top;

    if(sublist == mainlist){
      this.curuparrScrn = '';
    }

    this.curdownarrScrn = "showfirstpart";
    
  }

}
