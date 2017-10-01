import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FeedPage } from '../pages/feed/feed';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { RssProvider } from '../providers/rss/rss';
import { HttpModule } from "@angular/http";
import  { InAppBrowser } from '@ionic-native/in-app-browser';


 export const firebaseConfig = {
    apiKey: "AIzaSyC48UdFuWj4lNKcmkXwtdaUHBIBuT6Y9ME",
    authDomain: "yogago-7981a.firebaseapp.com",
    databaseURL: "https://yogago-7981a.firebaseio.com",
    projectId: "yogago-7981a",
    storageBucket: "yogago-7981a.appspot.com",
    messagingSenderId: "680431329139"
  };

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    LoginPage,
    RegisterPage,
    TabsPage,
    HomePage,
    AboutPage,
    FeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    LoginPage,
    RegisterPage,
    TabsPage,
    HomePage,
    AboutPage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    RssProvider
    
  ]
})
export class AppModule {}
