import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoldadorEditPage } from './soldador-edit';

@NgModule({
  declarations: [
    SoldadorEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SoldadorEditPage),
  ],
})
export class SoldadorEditPageModule {}
