import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();

  
      this.slides = [
          {
            title: 'Processo Eletrodo Revestido',
            description: 'Qual o tipo de eletrôdo usar em determinada situação?',
            image: 'assets/img/icon-arcoeletrico.jpg',
          }
          ,{
            title: 'Processo MIG/MAG',
            description: 'Aprenda a realizar os calculos sobre...',
            image: 'assets/img/icon-migmag.png',
          },
          {
            title: 'Processo TIG',
            description: 'Qual segmentação usar? Qual temperatura? Aprenda junto com esse app',
            image: 'assets/img/icon-tig.png',
          }
         
        ];
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    this.menu.enable(true);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
