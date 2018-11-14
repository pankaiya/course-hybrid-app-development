import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { MallPage } from '../mall/mall';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
// import { BPage } from '../b/b';


@IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {
  // tab1Root = HomePage;
  // tab2Root = MallPage;
  // tab3Root = ContactPage;
  // tab4Root = BPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad APage');
  }

}
