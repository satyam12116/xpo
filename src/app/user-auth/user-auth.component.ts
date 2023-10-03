import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {
  isLogin=true;
  isSign=false;
  signFlag=false;
  LoginForm!:FormGroup;
  SignUpForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private ss:SharedService){

  }
  ngOnInit(): void {
    this.SignUpForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phoneNo:['',Validators.required],
      gender:['',Validators.required],
      password:['',Validators.required],
    }) 
    this.LoginForm=this.fb.group({
      email1:['',Validators.required],
      password1:['',Validators.required],
    }) 
}
get email1() {
  return this.LoginForm.get('email1')!;
}

get password1() {
  return this.LoginForm.get('password1')!;
}
validate1(): void {
  if (this.LoginForm.invalid) {
    for (const control of Object.keys(this.LoginForm.controls)) {
      this.LoginForm.controls[control].markAsTouched();
    }
    return;
  }
}
loginHandler(){
  this.http.get<any>('http://localhost:3000/signUp').subscribe((res: any) => {
    let user = res.find((a: any) => {
      return (
        a.email === this.LoginForm.get('email1')?.value &&
        a.password === this.LoginForm.get('password1')?.value
      );
    });
    console.log(user, 'sdjjd');
    if (user) {
      this.ss.sharedSubject.next({state:'user',emailId:user.email,userId:user.id})
      this.router.navigate(['/user-dashboard']);
    } else {
   
    }
  });
}
submitHandler(){ 
  let body={
  name:this.SignUpForm.get('name')?.value,
  email:this.SignUpForm.get('email')?.value,
  phoneNo:this.SignUpForm.get('phoneNo')?.value,
  gender:this.SignUpForm.get('gender')?.value,
  password:this.SignUpForm.get('password')?.value,
 }

  if(this.SignUpForm.valid){
    this.http.post('http://localhost:3000/signUp',body).subscribe(res=>{
      console.log(res)
       this.isLogin=true;
       this.isSign=false;
      
      })
      
  }
  
}
isSignUp(){
this.isLogin=true
}
get name() {
  return this.SignUpForm.get('name')!;
}

get phoneNo() {
  return this.SignUpForm.get('phoneNo')!;
}

get email() {
  return this.SignUpForm.get('email')!;
}
get gender() {
  return this.SignUpForm.get('gender')!;
}

get password() {
  return this.SignUpForm.get('password')!;
}
validate(): void {
  if (this.SignUpForm.invalid) {
    for (const control of Object.keys(this.SignUpForm.controls)) {
      this.SignUpForm.controls[control].markAsTouched();
    }
    return;
  }
}
}