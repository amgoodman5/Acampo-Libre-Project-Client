import { NgModule, ErrorHandler } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SinglePage } from '../pages/campsite-single/campsite-single';
import {CampsitesPage} from '../pages/campsites/campsites';
import{LoginPage} from '../pages/login/login';
import{MapPage} from '../pages/maps/maps';
import{AddCampsitePage} from '../pages/add-campsite/add-campsite';
import { MembersComponent } from '../pages/members/members';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SinglePage,
    CampsitesPage,
    MapPage,
    LoginPage,
    AddCampsitePage,
     MembersComponent,
     LoginPage



    // MainPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SinglePage,
    CampsitesPage,
    MapPage,
    AddCampsitePage,
   MembersComponent,
      LoginPage




  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
