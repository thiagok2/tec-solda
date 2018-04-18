import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoldadorListPage } from './soldador-list';

@NgModule({
  declarations: [
    SoldadorListPage,
  ],
  imports: [
    IonicPageModule.forChild(SoldadorListPage),
  ],
})
export class SoldadorListPageModule {}
