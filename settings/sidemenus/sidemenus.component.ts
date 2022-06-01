import { Component, AfterViewInit } from '@angular/core';
import { SettingsService } from '../settings.service'

@Component({
  selector: 'sidemenus',
  templateUrl: './sidemenus.component.html',
  styleUrls: ['./sidemenus.component.css']
})
export class SidemenusComponent implements AfterViewInit {

  sideMenus = [];
  selectedItem = "Display";
  constructor(private settingsService : SettingsService) { }

  ngAfterViewInit() {
    this.sideMenus = this.settingsService.settingsList;
  }

}
