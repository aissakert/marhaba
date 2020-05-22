import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-about',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  constructor(private userService: UserService,private  formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.success = true;
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.userService.login(email, password);
  }

  ngOnInit() {
  }

}
