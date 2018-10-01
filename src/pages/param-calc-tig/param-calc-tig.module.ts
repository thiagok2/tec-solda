import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParamCalcTigPage } from './param-calc-tig';

@NgModule({
  declarations: [
    ParamCalcTigPage,
  ],
  imports: [
    IonicPageModule.forChild(ParamCalcTigPage),
  ],
  exports: [
    ParamCalcTigPage,
  ]
})
export class ParamCalcTigPageModule {}
