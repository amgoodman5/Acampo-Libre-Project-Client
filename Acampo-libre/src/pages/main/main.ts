import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { SinglePage } from '../campsite-single/campsite-single';
import { CampsitesPage } from '../campsites/campsites';
import {MapPage} from '../maps/maps';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  private rootPage;
  private HomePage;
  private AboutPage;
  private CampsitesPage;
  private SinglePage;
  private LoginPage;
  private MapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.AboutPage = AboutPage;
    this.CampsitesPage = CampsitesPage;
    this.SinglePage = SinglePage;
    this.MapPage = MapPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }
  goToOtherPage() {
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(AboutPage,CampsitesPage,MapPage);
    };

}
