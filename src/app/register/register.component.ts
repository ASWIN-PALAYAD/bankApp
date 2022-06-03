import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno=""
  pswd=""
  uname=""

  //form group
  registerForm=this.fb.group({
    acno:[''],
    pswd:[''],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]
  })


  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.registerForm.value.uname
    var acno= this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd

    if(this.registerForm.valid){
      const result=this.ds.register(acno,uname,pswd)
    if(result){
      alert("successfully Registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("Already existion customer, please login")
    }

    }
    else{
      alert("invalid form")
    }

    
  }

}
