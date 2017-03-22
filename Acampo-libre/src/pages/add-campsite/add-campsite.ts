import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import {CampsiteService} from '../../services/campsite.service';
import{CampsitesPage} from '../campsites/campsites';
import{MapPage} from '../maps/maps';
/*
  Generated class for the AddCampsite page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-campsite',
  templateUrl: 'add-campsite.html'
})
export class AddCampsitePage {
  public name: String;
  public type: String;
  public description:String;
  public picture:String;
  public confirmed:Boolean;
  public video_url:String;
  public result:any;
  public state:String;
  public latitude:any;
  public longitude:any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams, private campsiteService:CampsiteService) {


  }

onSubmitLocation(){
  let location = {
   name: this.name,
   latitude: this.latitude,
   longitude:this.longitude,
   state: this.state,
   type: this.type,
   description: this.description,
   picture: this.picture,
   confirmed: this.confirmed,
   video_url: this.video_url
 }

 this.campsiteService.addLocation(location).subscribe(data =>{
 this.result = data;
 });

 this.navCtrl.push(CampsitesPage);
  }
}
