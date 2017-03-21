import { NgModule, ErrorHandler } from '@angular/core';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth, JwtHelper, tokenNotExpired, } from 'angular2-jwt';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SinglePage } from '../pages/campsite-single/campsite-single';
import {CampsitesPage} from '../pages/campsites/campsites';
import{MapPage} from '../pages/maps/maps';
import{AddCampsitePage} from '../pages/add-campsite/add-campsite';
import {MembersComponent} from '../pages/members/members';
import {AuthService} from '../services/auth.service';
import { provide } from 'angular2/core';
import {LoginPage} from '../pages/login/login'

@NgModule({
  declarations: [
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
  providers: [AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}, JwtHelper, AuthHttp,
    provideAuth({
           headerName: 'Authorization',
           headerPrefix: '',
           tokenName: 'token',
           tokenGetter: (() => localStorage.getItem('token')),
           globalHeaders: [{ 'Content-Type': 'application/json' }],
           noJwtError: true
       })]
})
export class AppModule {}
