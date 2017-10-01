import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
 

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public afAuth: AngularFireAuth,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

    alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
  	this.afAuth.auth.createUserWithEmailAndPassword(this.user.value + '@domain.xta', this.password.value)
  	.then(data => {
  		console.log('got data ', data); 
  		this.alert('Successful Register!');
  	})
  	.catch (error => {
  		console.log('got an error ', error)
      this.alert(error.message);
  	})
  	console.log('Would register user with ', this.user.value, this.password.value);
  }

}
