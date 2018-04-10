import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspecaoNewPage } from './inspecao-new';

@NgModule({
  declarations: [
    InspecaoNewPage,
  ],
  imports: [
    IonicPageModule.forChild(InspecaoNewPage),
  ],
})
export class InspecaoNewPageModule {}
