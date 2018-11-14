import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MallPage } from '../pages/mall/mall';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { CPage } from '../pages/c/c';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

import { AddPage } from '../pages/add/add';
import { SettingPage } from '../pages/setting/setting';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    MallPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    CPage,
    AddPage,
    SettingPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      tabsHideOnSubPages:true
    }),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MallPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    CPage,
    AddPage,
    SettingPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
