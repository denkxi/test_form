import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../message/message.component';

import { commaNumbers } from '../utils/commaNumbers.directive';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MessageComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})


export class FormComponent {
  message = {
    type: 'info',
    text: '',
    visible: false,
  };

  constructor(private formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required], updateOn: 'blur' }],  
    surname: ['', { validators: [Validators.required], updateOn: 'blur' }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
    experience: ['', { validators: [Validators.required, commaNumbers()], updateOn: 'blur' }],
  });

  fillForm() {
    this.form.patchValue({
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@mail.com',
      experience: '6',
    });
  }

  resetForm() {
    this.form.reset();
    this.message = {
      type: 'info',
      text: 'All form fields were reset',
      visible: true
    }
  }

  submitForm() {
    if(this.form.invalid) {
      this.message = {
        type: 'error',
        text: 'Please make sure all form fields are valid',
        visible: true
      }
    } else {
      this.message = {
        type: 'success',
        text: 'Submit successful!',
        visible: true
      }
      this.form.reset();
    }
  }
  
}
