import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController) {
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  popThis() {
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInUser() {
    this.afAuth.auth.signInWithEmailAndPassword(this.user.value +'@domain.xta', this.password.value)
    .then( data => {
      console.log('got some data', this.afAuth.auth.currentUser);
      this.alert('Success! You are logged in');
      this.navCtrl.setRoot( ContactPage );

    })
    .catch( error => {
      console.log('error ',error);
      this.alert(error.message);
    })
    console.log('Would sign in with ', this.user.value, this.password.value);
  }

}
