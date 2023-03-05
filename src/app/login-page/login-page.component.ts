import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formdata: any;
  // User:any = new Array();

  formArray: any = [];
  posting = false;

  constructor(private router: Router) {
    this.formArray = JSON.parse(localStorage.getItem('info') || '[]');
    console.log(this.formArray);
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.formdata = new FormGroup({
      Username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  submit(data: any) {
    //   console.log(data);
    //  if(data.Username == "rushi"  && data.password == "rushi"){
    //  alert("welcome")
    //  }
    //  else{
    //    alert("Invalid USername or Password")

    // console.log(data);
if(data.Username != ""){
  for (let i = 0; i < this.formArray.length; i++) {
    if (
      data.Username == this.formArray[i].Username &&
      data.password == this.formArray[i].password
    ) {
      // alert('success');

      this.router.navigate(['home']);
    }
  }
}
else{
  // document.getElementById("demo").style.color : "red";
   alert('enter correct information');

}


  }
}
