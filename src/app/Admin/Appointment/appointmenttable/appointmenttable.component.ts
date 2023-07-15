import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Admin,  Appointment, AppointmentUpdateModel, Doctor, Patient, Secretary, User } from 'src/api/models';
import { AppointmentControllerService } from 'src/api/services';
import { CreateAppointmentComponent } from '../create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';

@Component({
  selector: 'app-appointmenttable',
  templateUrl: './appointmenttable.component.html',
  styleUrls: ['./appointmenttable.component.css']
})
export class AppointmenttableComponent {
  searchValue: string = '';
  public AppointmentDataSource: MatTableDataSource<(Appointment)> = new MatTableDataSource();

  public displayedColumns: string[] = ['id','patient', 'doctor','reason','status','date','actions'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private appointmentControllerService: AppointmentControllerService,
    private router: Router,private dialog: MatDialog) {
  
     }


  ngOnInit():void {
    this.refreshAppDataSource();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.AppointmentDataSource.filter = filterValue.trim().toLowerCase();
}

  public refreshAppDataSource(){
    this.appointmentControllerService.findAll1({ filter: { patient: this.searchValue } }).subscribe(
    
      appointmentList => {

        this.AppointmentDataSource.data = appointmentList;
        this.AppointmentDataSource.paginator = this.paginator;
        this.AppointmentDataSource.sort = this.sort; 
        this.AppointmentDataSource.filterPredicate = (data: Appointment, filter: string) => {
          const searchData = data.id + ' ' + data.patient.firstname + ' ' + data.doctor.firstname + ' ' + data.reason + ' ' + data.status + ' ' + data.date;
          return searchData.toLowerCase().includes(filter);
        };

      }
   
      

    );    
    
      
    
    
    }
    openAddappDialog() {
      const dialogRef = this.dialog.open(CreateAppointmentComponent);

      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.success) {
          this.refreshAppDataSource(); // Refresh the user data after a user is updated.
        }
      })
    }
  
    openUpdateAppointmentDialog( appointment: Appointment) {
      console.log(appointment);
      const dialogRef = this.dialog.open(UpdateAppointmentComponent, {
        data: appointment // Pass the selected user as data to the UpdateUserComponent
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.success) {
          this.refreshAppDataSource(); // Refresh the user data after a user is updated.
        }
      });
    }
    cancelAppointment(id: number, appointment: Appointment) {
      const appointmentUpdateModel: AppointmentUpdateModel = {
        // Assign the appointment's reason
        status: 'ANNULE' // Set the status to 'CANCELLED'
        ,
        date: appointment.date, // Assign the appointment's date
      reason: appointment.reason,
      };
  
      this.appointmentControllerService
        .cancelAppointment({ id: id, body: appointmentUpdateModel })
        .subscribe(
          () => {
            // Cancel appointment success
            this.refreshAppDataSource(); // Refresh appointment data
          },
          (error) => {
            // Handle cancel appointment error
            console.error('Failed to cancel appointment:', error);
          }
        );
 

  
  
  
  


        }}
