import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosicoesMateriaisTigPage } from './posicoes-materiais-tig';

@NgModule({
  declarations: [
    PosicoesMateriaisTigPage,
  ],
  imports: [
    IonicPageModule.forChild(PosicoesMateriaisTigPage),
  ],
  exports : [
    PosicoesMateriaisTigPage
  ]
})
export class PosicoesMateriaisTigPageModule {}
