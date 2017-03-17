import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CampsiteService} from '../../app/services/campsite.service';
import { HomePage } from '../home/home';
import{SinglePage}from '../campsite-single/campsite-single';
@Component({

  templateUrl: 'campsites.html'
})
export class CampsitesPage {
items:any;
constructor(public navCtrl: NavController, private campsiteService:CampsiteService) {

  }
ngOnInit(){
  this.getCampsites("The spot");

  }
  getCampsites(campsite){
    this.campsiteService.getCampsites(campsite)
    .subscribe(response => {
     this.items = response;

  });

}
ViewBack(){
  this.navCtrl.setRoot(HomePage)
}
getCampsite(campsite){
  this.navCtrl.push(SinglePage, {
    campsite:campsite
  })
}
}
