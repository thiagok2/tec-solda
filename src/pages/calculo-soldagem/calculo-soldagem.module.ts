import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculoSoldagemPage } from './calculo-soldagem';

@NgModule({
  declarations: [
    CalculoSoldagemPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculoSoldagemPage),
  ],
})
export class CalculoSoldagemPageModule {}
