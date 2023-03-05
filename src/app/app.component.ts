import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'registration-form';
  formdata:any;


  ngOnInit(): void {
    this.formdata = new FormGroup({
      name : new FormControl(""),
      email : new FormControl(""),
      mob : new FormControl(""),
      college : new FormControl(""),

    })
  }





   Submit(data:any){
    console.log(data);
   if(data.Username == "aniket"  && data.password == "aniket"){
   alert("welcome")
   }
   else{
     alert("Invalid USername or Password")
   }




   }

}
