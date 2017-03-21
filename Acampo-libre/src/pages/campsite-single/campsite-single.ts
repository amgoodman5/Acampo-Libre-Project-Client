import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CampsiteService} from '../../services/campsite.service';
import {CampsitesPage} from '../campsites/campsites';
import {MapPage} from '../maps/maps';

@Component({
  templateUrl: 'campsite-single.html'
})
export class SinglePage {
  result: any;
  item: any;

  constructor(public navCtrl: NavController, public campsiteService: CampsiteService, public navParams: NavParams) {
    this.item = navParams.get('location');
  }
  ngOnInit() {
    console.log(this.item)
  }

  deleteCampsite(campsiteId) {
    this.campsiteService.deleteCampsite(campsiteId).subscribe(data => {
      this.result = data;
    })
    this.navCtrl.push(CampsitesPage)
  }

  goToMap() {
    this.navCtrl.push(MapPage)
  }
}
