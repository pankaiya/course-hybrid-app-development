import { Component, OnInit } from '@angular/core';
import{ HttpClient }from'@angular/common/http';
@Component({
selector: 'app-tongbu',
templateUrl: './tongbu.component.html',
styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

constructor(private http:HttpClient) { }
course;
   ngOnInit() {
  this.http.get('/api/course').subscribe(data=>{
      this.course=data;
      console.log(this.course);
      console.log(1);
    });
  }
}