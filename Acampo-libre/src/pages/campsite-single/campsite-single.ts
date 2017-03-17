import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'campsite-single.html'
})
export class SinglePage {

item:any;
constructor(public navCtrl: NavController, public navParams: NavParams) {
this.item = navParams.get('campsite');
  }
  ngOnInit(){
  console.log(this.item)

    }
    

  }
