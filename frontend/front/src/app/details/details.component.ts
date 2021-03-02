import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators, FormBuilder} from '@angular/forms';
import {InterviewserviceService} from '../interviewserviceservice.service';


interface Lang {
  value: string;
  viewValue: string;
}
interface Db {
  value: string;
  viewValue: string;
}
interface Level {
  value: string;
  viewValue: string;
}
interface Shell {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {

  selectedLang: string;
  languages: Lang[] = [
    {value: 'python', viewValue: 'Python'},
    {value: 'java', viewValue: 'Java'},
    {value: 'cpp', viewValue: 'Cpp'}
  ];
  
  databases: Db[] = [
    {value:'sql',viewValue:'SQL'},
    {value:'Nosql',viewValue:'NoSQL'},
  ]
  levels: Level[]= [
    {value:'beginner', viewValue:"Beginner"},
    {value: 'intermediate', viewValue:'Intermediate'},
    {value: 'expert', viewValue:'Expert'}
  ]
  shells: Shell[] = [
    {value:'yes', viewValue:'yes'},
    {value:'no', viewValue:'no'}
  ]
  constructor (private fb: FormBuilder,public http: HttpClient, private iService: InterviewserviceService){}

    studentData = this.fb.group({

    firstName : ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName : ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    lang: ['',Validators.required],
    db : ['',Validators.required],
    shell: ['',Validators.required],
    dslevel: ['',Validators.required]


    })

    
  

  ngOnInit() {

  }

  
  get firstName(){
   return this.studentData.controls['firstName'];
  }
  get lastName(){
    return this.studentData.controls['lastName'];
  }
  get language(){
    return this.studentData.controls['lang'];
  }
  get db(){
    return this.studentData.controls['db'];
  }
  get shell(){
    return this.studentData.controls['shell'];

  }
  get ds(){
    return this.studentData.controls['dslevel'];

  }


  
onSubmit(studentData) {

console.log(this.studentData.value);
    console.log(this.firstName);
    console.log(studentData.controls['firstName'].value)

    this.studentData.reset();
    this.studentData.markAsUntouched();
    this.studentData.markAsPristine();

  this.iservice.postVal(this.studentData.value).subscribe((response)=>{
    console.log(response);
  }),
  }  
}




}
