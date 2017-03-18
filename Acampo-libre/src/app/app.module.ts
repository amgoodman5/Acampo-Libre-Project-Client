import { NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SinglePage } from '../pages/campsite-single/campsite-single';
import {CampsitesPage} from '../pages/campsites/campsites';
import{LoginPage} from '../pages/login/login';
import{MapPage} from '../pages/maps/maps';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../app/services/auth.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SinglePage,
    CampsitesPage,
    MapPage,
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
    MapPage




  ],
  providers: [
      AuthService,
      {
        provide: AuthHttp,
        useFactory: getAuthHttp,
        deps: [Http]
      }
    ]
  })
export class AppModule {}
