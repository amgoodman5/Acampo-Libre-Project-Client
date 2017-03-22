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
  location:any;
  constructor(public navCtrl: NavController, private campsiteService: CampsiteService) {

  }
  ngOnInit() {
    this.getLocation("The spot");

  }
  ionViewWillEnter(location) {
    this.getLocation(location);
  }

  getLocation(location) {
    this.campsiteService.getLocation(location)
      .subscribe(response => {
        this.items = response;
      });
  }


//   deleteLocation(location) {
//    var locations = this.location;
//     this.campsiteService.deleteLocation(location.id)
//       .subscribe(data => {
//        if(data.n == 1)
//        for(var i = 0; i <location.length;i++){
//          console.log(location[i])
//          if(locations[i].id == location.id){
//            location.splice(i, 1);
//          }
//      }
//    })
// }
  ViewBack() {
    this.navCtrl.setRoot(HomePage)
  }
  getSingleLocation(location) {
    this.navCtrl.push(SinglePage, {
      location: location
    })
  }




}
