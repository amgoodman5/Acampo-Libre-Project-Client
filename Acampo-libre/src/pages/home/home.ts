// import { MainPage } from '../main/main';
import { CampsitesPage } from '../campsites/campsites';
import { Component,  ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';


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
