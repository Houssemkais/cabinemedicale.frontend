import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { Appointment, AppointmentUpdateModel } from 'src/api/models';
import { AppointmentControllerService } from 'src/api/services/appointment-controller.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
  appointment: Appointment;
  date: Date = new Date();
  @ViewChild('appointmentForm', { static: true }) appointmentForm!: NgForm;
  constructor(
    private appointmentControllerService: AppointmentControllerService,
    private dialogRef: MatDialogRef<UpdateAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Appointment,
  ) {
    this.appointment = { ...data };
    this.date = new Date(this.appointment.date);
  }

  formatDate(date: Date): string {
    const momentDate = moment(date); // Conversion de la date en objet Moment
    return momentDate.format('YYYY-MM-DD');
  }

  ngOnInit(): void {
  }
  updateAppointment() {
    if (this.appointmentForm.invalid) {
      return;
      const formattedDate = this.formatDate(this.date);
    }
  
    const updatedAppointment: AppointmentUpdateModel = {
      date: this.formatDate(this.date),
      reason: this.appointmentForm.value.reason,
      status: this.appointment.status,
    };

    this.appointmentControllerService
      .update1({ id: this.appointment.id, body: updatedAppointment })
      .subscribe(
        (response: Appointment) => {
          this.dialogRef.close({ success: true });
        },
        (error) => {
          console.error('Error updating appointment:', error);
        }
      );
  }

  isFormValid(): boolean {
    return (
      this.appointmentForm.valid &&
      this.appointmentForm.value.reason &&
      this.appointmentForm.value.status
    );

}}
