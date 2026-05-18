import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grievances',
  templateUrl: './grievances.component.html',
  styleUrls: ['./grievances.component.scss']
})
export class GrievancesComponent {

  grievanceForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  submitError = false;

  constructor(private fb: FormBuilder) {
    this.grievanceForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      grievantName: ['', [Validators.required, Validators.minLength(2)]],
      nature: [''],
      email: ['', [Validators.email]],
      contactNo: ['', [Validators.pattern(/^[6-9]\d{9}$/)]],
      preferableTime: ['']
    });
  }

  get f() {
    return this.grievanceForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = false;

    if (this.grievanceForm.invalid) {
      return;
    }

    // Simulate submission — replace with actual HTTP call
    console.log('Grievance submitted:', this.grievanceForm.value);
    this.submitSuccess = true;
    this.submitted = false;
    this.grievanceForm.reset();
  }
}
