import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general-nominations',
  templateUrl: './general-nominations.component.html',
  styleUrls: ['./general-nominations.component.css']
})
export class GeneralNominationsComponent implements OnInit {

  // form: FormGroup;
  // headers: any;
  // res: any;
  // entries: any;
  // constructor(public fb: FormBuilder, private http: HttpClient) { 
  //   this.form = this.fb.group({
  //     sno:[''],
  //     nomineename:[''],
  //     nomineeaddress:[''],
  //     nomineerelationship:[''],
  //     nomineeage:[''],
  //     nomineeper:[''],
  //     date:[''],
  //     witness1:[''],
  //     witness2:[''],
  //     employeename:[''],
  //     employeeid:[''],
  //     designation:['']
  //   });
  // }

  public validationMessages = {
    'nomineeaddress': [
      { type: 'required', message: 'Address is required' }
    ],
    'nomineerelationship': [
      { type: 'required', message: 'Relationship with employee is required' },
      { type: 'pattern', message: 'Enter a valid input' }
    ],
    'nomineeage': [
      { type: 'required', message: 'Age is required' },
      { type: 'pattern', message: 'Enter a valid age' },
      { type: 'maxlength', message: 'Invalid age' }
    ],
    'nomineeper': [
      { type: 'required', message: 'Share percentage is required' },
      { type: 'pattern', message: 'Enter a valid number' },
      { type: 'maxlength', message: 'Invalid share' }
    ],
    'nomineename': [
      { type: 'required', message: 'Nominee name is required' },
      { type: 'pattern', message: 'Enter a valid name' },
      { type: 'maxlength', message: 'Name is too long' }
    ],
    'sno': [
      { type: 'required', message: 'Sr no is required' },
      { type: 'pattern', message: 'Enter a valid no' }
    ],
    'witness1': [
      { type: 'required', message: 'Witness 1 is required' },
      { type: 'pattern', message: 'Enter a valid witness name' }
    ],
    'witness2': [
      { type: 'required', message: 'Witness 2 is required' },
      { type: 'pattern', message: 'Enter a valid witness name' }
    ],
    'designation': [
      { type: 'required', message: 'Designation is required' },
      { type: 'pattern', message: 'Enter a valid designation' }
    ],
    'employeeid': [
      { type: 'required', message: 'Employee ID is required' },
      { type: 'pattern', message: 'Enter a valid Employee ID' },
      { type: 'maxlength', message: 'Employee ID should be less than 5 digits' }
    ],
    'employeename': [
      { type: 'required', message: 'Employee name is required' },
      { type: 'pattern', message: 'Enter a valid name' }
    ]
  }
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
    sno:new FormControl('',[Validators.pattern('0*[1-9][0-9]*'),Validators.required]),
    nomineename:new FormControl('',[Validators.pattern('^[a-zA-Z ]*$'),Validators.required]),
    nomineeaddress:new FormControl('',[Validators.required]),
    nomineerelationship:new FormControl('',[Validators.pattern('^[a-zA-Z ]*$'),Validators.required]),
    nomineeage:new FormControl('',[Validators.pattern('[1-9]|[1-9][0-9]'),Validators.required]),
    nomineeper:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    witness1:new FormControl('', [Validators.pattern('^[A-Za-z]+$'),Validators.required]),
    witness2:new FormControl('',[Validators.pattern('^[A-Za-z]+$'),Validators.required]),
    employeename:new FormControl('',[Validators.pattern('^[A-Za-z]+$'),Validators.required]),
    employeeid:new FormControl('',[Validators.maxLength(5),Validators.required]),
    designation:new FormControl('',[Validators.pattern('^[a-zA-Z ]*$'),Validators.required]),

  })
  get sno() {
    return this.nomineeForm.get('sno');
  }
  get nomineename() {
    return this.nomineeForm.get('nomineename');
  }
  get nomineeaddress() {
    return this.nomineeForm.get('nomineeaddress');
  }
  get nomineerelationship() {
    return this.nomineeForm.get('nomineerelationship');
  }
  get nomineeage() {
    return this.nomineeForm.get('nomineeage');
  }
  get nomineeper() {
    return this.nomineeForm.get('nomineeper');
  }
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
  
  submitForm(){
    console.log("hurray!");
    console.log(this.nomineeForm.get('nomineename'));
  }
}
