import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Appointment,AppointmentCreateModel,Doctor, Patient } from 'src/api/models';
import { AppointmentControllerService } from 'src/api/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointmentCreratemodel: AppointmentCreateModel = {
    date: '',
    doctor_id:0 ,
   
    patient_id:0 ,
    reason: '',
    status: 'EN_COURS'
  }; errorMessage: string = '';
  @ViewChild('appointmentForm', { static: true })
  appointmentForm!: NgForm;

  constructor(
    private appointmentControllerService: AppointmentControllerService,
    private router: Router,
    private dialogRef: MatDialogRef<CreateAppointmentComponent>,private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}
  formatDate(date: string): string {
    const momentDate = moment(date, 'YYYY-MM-DD'); // Conversion de la chaîne en objet Moment
    return momentDate.format('YYYY-MM-DD');
  }
  addAppointment() {  
    if (!this.isFormValid()) {
      return;
    }


    const formattedDate = this.formatDate(this.appointmentCreratemodel.date);
    this.appointmentCreratemodel.date = formattedDate;

    this.appointmentControllerService.create2({ body: this.appointmentCreratemodel }).subscribe(
      () => {
        this.dialogRef.close({ success: true });},
        (error) => {
          let errorMessage = 'Error adding appointment.';
          if (error.status === 404) {
            errorMessage = 'Verify patient_id and doctor_id';
          }
      
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000, // Durée pendant laquelle la boîte de dialogue sera affichée (en millisecondes)
            verticalPosition: 'top' // Position verticale de la boîte de dialogue (par exemple 'top', 'bottom')
          });
        }
      );
  }

  isFormValid(): boolean {
   
    // Check if all required fields are filled and the form is valid
    return (
      this.appointmentForm.valid &&
      this.appointmentForm.value.date &&
      this.appointmentForm.value.doctor_id &&
      this.appointmentForm.value.patient_id &&
      this.appointmentForm.value.reason&&
      this.appointmentForm.value.status
    );
  }
}
