import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CampsitesPage } from '../campsites/campsites';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  private rootPage;
  private HomePage;
  private AboutPage;
  private ContactPage;
  private CampsitesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;


    this.AboutPage = AboutPage;
    this.CampsitesPage = CampsitesPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }

}
