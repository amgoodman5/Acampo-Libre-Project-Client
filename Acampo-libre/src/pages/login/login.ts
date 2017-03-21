import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { MainPage } from '../main/main';
import { HomePage } from '../home/home';
// import { SignupPage } from '../signup/signup';
import { AuthService } from '../../services/auth.service';
/*
  Generated class for the Login2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email:any;
  password:any;
  member:any;
  response:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
    this.member = {
      email:this.email,
      password:this.password
    }
  }

  login(){
    this.authService.login(this.member)
      .then(res => {
        if(res.status == 200){
          this.response = JSON.parse(res._body)
          console.log(this.response.member)
          localStorage.setItem('id', this.response.member.id);
          localStorage.setItem('username', this.response.member.username);
          localStorage.setItem('email', this.response.member.email);
          localStorage.setItem('bio', this.response.member.bio);
          localStorage.setItem('profile_pic', this.response.member.profile_pic);
          localStorage.setItem('token', this.response.token);
          this.navCtrl.setRoot(HomePage);
        }else{
          alert('Invaild login please try again');
        }
      })
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('bio');
    localStorage.removeItem('profile_pic');
    localStorage.removeItem('token');
    this.navCtrl.setRoot(LoginPage);
  }

}
