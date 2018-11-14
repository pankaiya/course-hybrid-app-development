import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SettingPage } from '../setting/setting';

/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  ionViewDidLoad() {
    //页面加载完之后，执行的周期函数
    //let profileModel=this.modelctrl=create(AddPade);
    //profileModel=present();
    console.log('ionViewDidLoad CPage');
  }
  goSub(){
    this.navCtrl.push(SettingPage,{id:1});
  }

}
