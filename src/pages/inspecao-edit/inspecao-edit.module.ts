import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspecaoEditPage } from './inspecao-edit';

@NgModule({
  declarations: [
    InspecaoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(InspecaoEditPage),
  ],
})
export class InspecaoEditPageModule {}
