import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
