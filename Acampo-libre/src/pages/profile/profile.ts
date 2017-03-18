import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AuthService} from '../../app/services/auth.service';

@Component({
  templateUrl: 'profile.html',
})
export class ProfilePage {

  // We need to inject AuthService so that we can
  // use it in the view
  constructor(public auth: AuthService) {}
}
