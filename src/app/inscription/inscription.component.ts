import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
messageForm: FormGroup;
submitted = false;
success = false;
  constructor(private  formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      prenom: ['', Validators.required],
      password: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
      photo: ['', Validators.required]
    })
  }
onSubmit() {
  this.submitted = true;
  if (this.messageForm.invalid){
    return;
  }
  this.success = true;
}
  ngOnInit() {
  }

}
