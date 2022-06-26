import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-nominations',
  templateUrl: './general-nominations.component.html',
  styleUrls: ['./general-nominations.component.css']
})
export class GeneralNominationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public checked1:boolean;

  public oncheck1(value:boolean){
      this.checked1 = value;
      console.log(this.checked1);
  }
  public checked2:boolean;

  public oncheck2(value:boolean){
      this.checked2 = value;
      console.log(this.checked2);
  }
  nomineeForm = new FormGroup({
    name:new FormControl('',
    [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    date:new FormControl('',[Validators.required]),
    witness1:new FormControl('', [Validators.required]),
    witness2:new FormControl('',[Validators.required]),
    employeename:new FormControl('',[Validators.required]),
    employeeid:new FormControl('',[Validators.required]),
    designation:new FormControl('',[Validators.required]),

  })

  get date(){
    return this.nomineeForm.get('date');
    }
 get witness1() {
     return this.nomineeForm.get('witness1');
   }
   get witness2() {
    return this.nomineeForm.get('witness2');
  }
  get employeename() {
    return this.nomineeForm.get('employeename');
  }
  get employeeid() {
    return this.nomineeForm.get('employeeid');
  }
  get designation() {
    return this.nomineeForm.get('designation');
  }
}
