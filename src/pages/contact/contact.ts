import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-contact', 
  templateUrl: 'contact.html'
})

export class ContactPage {
  items: FirebaseListObservable<any[]>;
  @ViewChild('username') uname;
  @ViewChild('password') password;
  

  provider = {
    name: '',
    profilePicture: '',
    email: '',
    loggedin: false
  }

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
  	public afAuth: AngularFireAuth,
  	public platform: Platform,
    public ref: ChangeDetectorRef
    ) {
}

signIn() {
  this.navCtrl.push(LoginPage);
}

register() {
  this.navCtrl.push(RegisterPage);
}

login(provider) {
  let signInProvider = null;
  switch (provider) {
    case "facebook":
      signInProvider = new firebase.auth.FacebookAuthProvider;     
      break;

     case "twitter":
     signInProvider = new firebase.auth.TwitterAuthProvider();
     break;

     case "google":
     signInProvider = new firebase.auth.GoogleAuthProvider();
    
  }

   this.afAuth.auth.signInWithRedirect(signInProvider)
   .then( () => {
     this.afAuth.auth.getRedirectResult().then( res =>{
     console.log('Logging in with - '+provider);
     this.provider.loggedin = true;
     this.provider.name = res.user.displayName;
     this.provider.email = res.user.email;
     this.provider.profilePicture = res.user.photoURL;
     this.ref.detectChanges();
     console.log(res);   
     })  
  })
}


logout() {
        this.afAuth.auth.signOut();
        this.provider.loggedin = false;
    }
}