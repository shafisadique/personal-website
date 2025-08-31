import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  projectForm: FormGroup;
  data='@'
  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject:[''],
      reason:[],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      description: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }
  get formControls() {
    return this.projectForm.controls;
  }

  // Method to handle form submission
  onSubmit() {
    if (this.projectForm.valid) {
      console.log('Form Submitted', this.projectForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
