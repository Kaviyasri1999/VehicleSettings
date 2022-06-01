import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../settings.service';

@Component({
  selector: 'type2-subscreen',
  templateUrl: './type2-subscreen.component.html',
  styleUrls: ['./type2-subscreen.component.css']
})
export class Type2SubscreenComponent implements OnInit {

  constructor(private settingsService: SettingsService) { 
  }

  ngOnInit(): void {

  }

  public setDisplayData(){
  }
}
