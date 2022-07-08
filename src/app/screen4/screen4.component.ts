import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {
   @Input() result:any;

  constructor(private http: HttpClient ,private router:Router) {}
  onBack():void{
    this.http.get<any>('http://localhost:8080/nomineecontroller/nominee/getNomineeDetails').subscribe({
      //next: (response) => console.log(response),
       next: (response) => this.result = response,
      error: (error) => console.log(error),
    });
    
    this.router.navigate(['']);
 }
 onPrevious(){
  this.onBack();
  
  const details = JSON.parse(localStorage.getItem('nomineedetails'));
  console.log(details.empId);
  console.log(details.nominees[0].nomineeFullName);
 }
  ngOnInit(): void {
  }

}
