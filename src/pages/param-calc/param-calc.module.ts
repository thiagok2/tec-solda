import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParamCalcPage } from './param-calc';

@NgModule({
  declarations: [
    ParamCalcPage,
  ],
  imports: [
    IonicPageModule.forChild(ParamCalcPage),
  ],
})
export class ParamCalcPageModule {}
