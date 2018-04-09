import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEmBrevePage } from './modal-em-breve';

@NgModule({
  declarations: [
    ModalEmBrevePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalEmBrevePage),
  ],
})
export class ModalEmBrevePageModule {}
