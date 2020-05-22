import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
inscriptionForm: FormGroup;
submitted = false;
success = false;
  constructor(private  formBuilder: FormBuilder, private userService : UserService) {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      prenom: ['', Validators.required],
      password: ['', Validators.required],
      dateDeNaissance: ['', Validators.required]
    })
  }
onSubmit() {
  this.submitted = true;
  if (this.inscriptionForm.invalid){
    return;
  }
  this.success = true;
}
  ngOnInit() {
  }

  saveUser(){

    let nom = this.inscriptionForm.get('nom').value;
    let prenom = this.inscriptionForm.get('prenom').value;
    let email = this.inscriptionForm.get('email').value;
    let password = this.inscriptionForm.get('password').value;
    let ddn  =this.inscriptionForm.get('dateDeNaissance').value;
    let user = new User(nom, prenom, email , password , ddn);
    this.userService.saveUser(user);
  }

}
