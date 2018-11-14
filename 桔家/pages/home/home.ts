import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { APage } from '../a/a';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ac')ac;
  icons:string="camera";
  items=[];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=['推荐','家居','餐厨','床上用品'];
  constructor(public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  doInfinite(infiniteScroll) {
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })
    // setTimeout(() => {
    //   for (let i = 0; i < 30; i++) {
    //     this.items.push( this.items.length );
    //   }
    //   infiniteScroll.complete();
    //   if(this.items.length>90){
    //   infiniteScroll.enable();
    //   }
    // }, 500);
  }
  // goSub(){
  //   this.navCtrl.push(APage,{id:1});
  // }
  // ionViewDidLoad(){
  //   this.ac.get();
  // }

}
