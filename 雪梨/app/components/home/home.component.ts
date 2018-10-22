import { Component, OnInit } from '@angular/core';
// import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //constructor(private http:HttpClient) { }
  flag1 = true;
  flag2 = false;
  flag3 = false;
  num = 1;
  constructor(){}
  //course;
  //headers = new HttpHeaders({});
  ngOnInit() {
    // this.http.get('').subscribe((data)=>{
    //   this.course=data;
    // })
    // this.http.post('/api',{name:'liuguanjun',pwd:123456},{headers:this.headers}).subscribe((data)=>{
    //   console.log(data);
    // })
  }
  change(i) {
    this.flag1 = false;
    this.flag2 = false;
    this.flag3 = false;
    this['flag' + i] = true;
    this.num = i;
  }
}
