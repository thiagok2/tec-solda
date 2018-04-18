import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipeHomePage } from './equipe-home';

@NgModule({
  declarations: [
    EquipeHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EquipeHomePage),
  ],
})
export class EquipeHomePageModule {}
