import { Component } from '@angular/core';

import { MallPage } from '../mall/mall';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from'../a/a';
import { BPage } from'../b/b';
import { CPage } from '../c/c';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MallPage;
  //tab3Root = ContactPage;
  tab4Root = BPage;
  tab5Root = CPage;

  constructor(public modalCtrl:ModalController) {
  }

  // constructor(public modalCtrl:ModalController,public navCtrl:NavController) {
  // }
  // ionViewDidLoad(){
    //弹框不带返回按钮
     // if(document.querySelector("#tab"-t0-2)){
  //   document.querySelector(#tab-t0-2).addEventListener('click',()={
  //     let profileModal=this.modalCtrl.create(AddPage);
      //  profileModel.present();
  //   },false)
  // }
  ionViewDidLoad() {
    
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      console.log('ionViewDidLoad CPage');
      let contactModal = this.modalCtrl.create(AddPage);
      contactModal.present();
    },false);
  }
}
