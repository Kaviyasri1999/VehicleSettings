import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'sharedFolder/shared.module';
import { AudiosettingsModule } from 'sharedComponents/audiosettings/audiosettings.module';

import { SettingsService } from '../settings/settings.service';
import { SettingsComponent } from '../settings/settings.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ListCreationComponent } from './list-creation/list-creation.component';
import { Type1CheckboxComponent } from '../settings/list-creation/type1-checkbox/type1-checkbox.component';
import { Type2ArrowComponent } from '../settings/list-creation/type2-arrow/type2-arrow.component';
import { Type3IncDecComponent } from '../settings/list-creation/type3-inc-dec/type3-inc-dec.component';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { from } from 'rxjs';
import { GenericPopupComponent } from './generic-popup/generic-popup.component';

@NgModule({
  declarations: [SettingsComponent, SideMenuComponent,ListCreationComponent,Type1CheckboxComponent,Type2ArrowComponent,Type3IncDecComponent, InfoPopupComponent,  GenericPopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    AudiosettingsModule
  ],  
  exports:[SettingsComponent]
})
export class SettingsModule { }
