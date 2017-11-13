import { SignInPage } from './../pages/sign-in/sign-in';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quote/quote';
import { SettingsPage } from '../pages/settings/settings';

import { QuotesService } from '../services/quotes';
import { SettingsService } from '../services/settings';
import { AuthService } from '../services/authService'; 

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LibraryPage,
    FavoritesPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    SignInPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LibraryPage,
    FavoritesPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    SignInPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService,
    AuthService
  ]
})
export class AppModule {}
