import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {CampsiteService} from '../services/campsite.service';
// import { MainPage } from '../pages/main/main';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SinglePage } from '../pages/campsite-single/campsite-single';
import { CampsitesPage } from '../pages/campsites/campsites';
import {MapPage} from '../pages/maps/maps';
import{LoginPage} from '../pages/login/login'
import{AddCampsitePage} from '../pages/add-campsite/add-campsite';
import { Facebook, NativeStorage } from 'ionic-native';
import {MembersComponent} from '../pages/members/members';


@Component({
  templateUrl: 'app.html',
  providers: [CampsiteService]
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = LoginPage;
  activePage:any;
  token:string;
  pages:Array<{title:string, component:any}>;

  constructor(public platform: Platform) {
   this.initializeApp();

this.pages = [
  { title: 'Home', component: HomePage },
  { title: 'About', component: AboutPage },
  { title: 'Campsite', component: CampsitesPage },
  { title: 'Map', component: MapPage },
  { title: 'Register a Campsite', component: AddCampsitePage },
  { title: 'Logout', component: LoginPage }


];
this.activePage = this.pages[0];
  }
ionViewDidLoad(){
  this.token = localStorage.getItem('token')

}
initializeApp(){
  this.platform.ready().then(() => {
    let env = this;
    StatusBar.styleDefault();
    Splashscreen.hide();
  });
}
openPage(page){
  this.nav.setRoot(page.component);
  this.activePage = page;
}

goLogin(){
  this.nav.push(LoginPage);
}


checkActive(page){
  return page = this.activePage;
}

  }
// /if status === 200
// else 500 fuck off
