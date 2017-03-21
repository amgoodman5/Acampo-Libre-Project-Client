import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {CampsiteService} from './services/campsite.service';
// import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SinglePage } from '../pages/campsite-single/campsite-single';
import { CampsitesPage } from '../pages/campsites/campsites';
import {MapPage} from '../pages/maps/maps';
import {LoginPage} from '../pages/login/login';
import{AddCampsitePage} from '../pages/add-campsite/add-campsite';
import { Facebook, NativeStorage } from 'ionic-native';
import {MembersComponent} from '../pages/members/members';


@Component({
  templateUrl: 'app.html',
  providers: [CampsiteService]
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  rootPage:any = HomePage;
  activePage:any;

  pages:Array<{title:string, component:any}>;

  constructor(public platform: Platform) {
   this.initializeApp();

    this.pages = [
      {title:'Home', component: HomePage},
      {title:'About', component: AboutPage},
      {title:'Campsite', component: CampsitesPage},
      {title:'Map', component: MapPage},
      {title:'AddCampsite', component: AddCampsitePage}

    ];
    this.activePage = this.pages[0];
  }
    initializeApp(){
    this.platform.ready().then(() => {
      let env = this;
     NativeStorage.getItem('user')
     .then( function (data) {
       // user is previously logged and we have his data
       // we will let him access the app
       env.nav.push(MembersComponent);
       Splashscreen.hide();
     }, function (error) {
       //we don't have the user data so we will ask him to log in
       env.nav.push(LoginPage);
       Splashscreen.hide();
     });


        StatusBar.styleDefault();
        Splashscreen.hide();
      });
    }
      openPage(page){
        this.nav.setRoot(page.component);
        this.activePage = page;
      }

      checkActive(page){
        return page = this.activePage;
      }

  }
