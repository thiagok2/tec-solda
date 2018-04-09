import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspecaoListPage } from './inspecao-list';

@NgModule({
  declarations: [
    InspecaoListPage,
  ],
  imports: [
    IonicPageModule.forChild(InspecaoListPage),
  ],
})
export class InspecaoListPageModule {}
