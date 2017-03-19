import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import {CampsiteService} from '../../app/services/campsite.service';
import{CampsitesPage} from '../campsites/campsites';
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
  public address:String;
  public state:String;
  public lat:Number;
  public long:Number;
  public result:any;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams, private campsiteService:CampsiteService) {


  }
onSubmit(){
  let campsite = {
   name: this.name,
   type: this.type,
   description: this.description,
   picture: this.picture,
   confirmed: this.confirmed,
   video_url: this.video_url,
   address: this.address,
   state: this.state,
   lat: this.lat,
   long: this.long

}
this.campsiteService.addCampsite(campsite).subscribe(data =>{

this.result = data;
});

this.navCtrl.push(CampsitesPage);


  }
}
