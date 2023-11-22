import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/User';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 user:User= {
    UserName:"",
    UserEmail:"",
    UserMobileNumber :0,
    UserPassword:"",
    UserRepeatPassword :""
 }

  homeArray:Array<any>=[];

  constructor(private homeService:UserService,private fb: FormBuilder){
  this.getUser();
  // this.createForm();
  }

  getUser(){
    this.homeService.getUserService().subscribe((data)=>{
this.homeArray=data;
    })
  }
  create(){
    this.homeService.createUserService(this.user).subscribe((data)=>{
      console.log(data);
      this.getUser();
      this.user.UserName="",
      this.user.UserEmail="",
      this.user.UserMobileNumber=0,
      this.user.UserPassword="",
      this.user.UserRepeatPassword=""
    })
  }

  // form!:FormGroup;

  // createForm() {
  //   this.form = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     mobile: ['', Validators.required,Validators.maxLength(10)],
  //     password:['',Validators.required],
  //     cpassword:['',Validators.required]
  //   });
  // }

  // onSubmit(){
  //   // this.createForm();
  //   if (this.form.valid) { 
  //     console.log('Form submitted:', this.form.value);
  //   }
  // }

  // updateset(data:any){
  //   this.user.UserName=data.name;
  //   this.user.UserEmail=data.email;
  //   this.user.UserMobileNumber=data.mobileNumber;
  //   this.user.UserPassword=data.password;
  //   this.user.UserRepeatPassword=data.confirm_Password;
  // }

edit(i:number){
this.homeService.updateService(i,this.user).subscribe((data)=>{
  console.log(data);
  this.getUser();
  
})}

remove(i:number){
this.homeService.deleteService(i).subscribe((data)=>{
  console.log("deleted !");
  this.getUser();
})
}

}
