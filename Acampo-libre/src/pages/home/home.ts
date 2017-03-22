// import { MainPage } from '../main/main';
import { CampsitesPage } from '../campsites/campsites';
import { Component,  ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
     let loader = this.loadingCtrl.create({
       content: "Please wait...",
       duration: 3000
     });
     loader.present();
   }

  ViewCampsite(){
    this.navCtrl.setRoot(CampsitesPage)
  }


}
