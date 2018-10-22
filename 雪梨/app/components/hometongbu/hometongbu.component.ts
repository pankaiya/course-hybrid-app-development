import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hometongbu',
  templateUrl: './hometongbu.component.html',
  styleUrls: ['./hometongbu.component.css']
})
export class HometongbuComponent implements OnInit {

  constructor(private http: HttpClient) { }
  course;
  ngOnInit() {
    this.http.get('/api/course').subscribe((data) => {
      this.course = data;
    });
  }

}
