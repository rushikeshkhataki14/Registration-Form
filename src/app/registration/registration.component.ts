import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

formdata:any ;
formArray:any=[];



constructor(private router:Router){}


  ngOnInit(): void {




    this.load()




  }
  load(){
    this.formdata = new FormGroup({
      Fname: new FormControl("", Validators.required) ,
      lname: new FormControl("", Validators.required) ,
      Birthday: new FormControl("", Validators.required) ,
      Gender: new FormControl("" , Validators.required ) ,
      email: new FormControl("", Validators.required) ,
      mobino: new FormControl("", Validators.required) ,
      select: new FormControl("", Validators.required) ,
      Username : new FormControl("", Validators.required),
      password : new FormControl("", Validators.required),

    })

  }


  save(data:any){




    this.formArray.push(data);
    console.log(this.formArray);

    localStorage.setItem("info",JSON.stringify(this.formArray));
    this.load();
    this.router.navigate(["login"])


    // console.log(this.formdata);
    // this.formdata.push(this.formdataObj);




  }


}
