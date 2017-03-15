import { MainPage } from '../main/main';
import { CampsitesPage } from '../campsites/campsites';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ViewCampsite(){
    this.navCtrl.setRoot(CampsitesPage)
  }

}
