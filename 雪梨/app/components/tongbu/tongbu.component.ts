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
     //console.log(1);
    });
  }
}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute,Router}from '@angular/router';
// import{ HttpClient }from'@angular/common/http';
// @Component({
//   selector: 'app-tongbu',
//   templateUrl: './tongbu.component.html',
//   styleUrls: ['./tongbu.component.css']
// })
// export class TongbuComponent implements OnInit {

//   constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
//   //construstor(private http:HttpClient,private )
//   courseId:number;
//   courses;
//   ngOnInit() {
//     this.http.get('/api/courses').subscribe(data=>{
//       this.courses=data;
//     })

//     //参数快照
//     //this.courseId=this.router.snapshot.params['courseId'];
//     //参数订阅
//     this.router.params.subscribe((params)=>{
//       this.courseId=params['courseId'];
//     });
//     //该写法只执行一次，如果视图切换都切换到了这个组件，那么在第一次执行得到的属性值即使之后改变也在其他
//     //视图中无法看到（参数快照）
//   //   this.router.params.subscribe((params)=>{this.courseId=params['courseId']});
//   //   //该写法是订阅了参数，一旦参数发生了变化，视图中就会得到最新的属性值（参数订阅形式）
//   // }
//   // go(){
//   //   this.rout.navigate(['/community']);//js跳转到社区视图
//   // this.http.get('/api/courses').subscribe(data)
//     }
//   go(){
//     //js跳转,点击按钮跳转组件之间的切换
//     //this.route.navigate(['/community']);
//     this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});
//   }
// }
//   export class Course{
//     constructor(
//         public id:number,
//         public courseName:string,
//         public images:string, 
//         public task:number,
//         public person:number
//     ){}
