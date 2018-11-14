// import { Component ,ViewChild} from '@angular/core';
// import { NavController ,Slides} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html'
})
export class MallPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=['客厅','卧室','餐厅','书房','门厅'];

  //@ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  // change(){
  //   console.log(this.slides.getActiveIndex() );
  // }

}
