import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CampsiteService} from '../../services/campsite.service';
import { HomePage } from '../home/home';
import {SinglePage}from '../campsite-single/campsite-single';
@Component({

  templateUrl: 'campsites.html'
})
export class CampsitesPage {
  items: any;
  constructor(public navCtrl: NavController, private campsiteService: CampsiteService) {

  }
  ngOnInit() {
    this.getLocation("The spot");

  }
  ionViewWillEnter(campsite) {
    this.campsiteService.getLocation(campsite)
      .subscribe(response => {
        this.items = response;
      });
  }

  getLocation(location) {
    this.campsiteService.getLocation(location)
      .subscribe(response => {
        this.items = response;
      });
  }
  ViewBack() {
    this.navCtrl.setRoot(HomePage)
  }
  getSingleLocation(location) {
    this.navCtrl.push(SinglePage, {
      location: location
    })
  }

}
