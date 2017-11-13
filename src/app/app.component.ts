import { AuthService } from './../services/authService';
import { TabsPage } from './../pages/tabs/tabs';
import { SignInPage } from './../pages/sign-in/sign-in';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';




import { SettingsPage } from '../pages/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage;
  settingsPage = SettingsPage;
  signInPage=SignInPage;
  signUpPage=SignUpPage;

  signin=false;

  @ViewChild('sideMenuContent') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authService:AuthService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey:"AIzaSyDp2WMf2Uo988pr6xUwXHFG3RZqzOBMVms",
      authDomain:"favorite-quote-app-abfb6.firebaseapp.com"
    });

    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        //kalo logen
        this.signin=true;
        this.nav.setRoot(TabsPage);
      }else{
        //kalo ga logen
        this.signin=false;
        this.nav.setRoot(SignInPage);
        this.menuCtrl.close();
      }
    })

  }

  logout(){
    this.authService.logout();
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

}
