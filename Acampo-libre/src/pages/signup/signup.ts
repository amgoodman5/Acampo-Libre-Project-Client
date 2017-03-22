import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/auth.service';

/*
  Generated class for the Signup page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  username:any;
  email:any;
  password:any;
  bio:any;
  profile_pic:any;
  newMember:any;
  response:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
    this.newMember = {
      username:this.username,
      email:this.email,
      password:this.password
    }
  }

  signup(){
    this.authService.signup(this.newMember)
      .then(res => {
        if(res.status == 200){
          this.response = JSON.parse(res._body)
          localStorage.setItem('username', this.response.member[0].username);
          localStorage.setItem('email', this.response.member[0].email);
          localStorage.setItem('passowrd', this.response.member[0].password);
          localStorage.setItem('id', this.response.member[0].id);
          localStorage.setItem('token', this.response.token);
          this.navCtrl.setRoot(LoginPage);
        }else{
          alert('Invaild login please try again');
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  goHome(){
    this.navCtrl.setRoot(MainPage);
  }

}
