import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserControllerService } from '../../../api/services/user-controller.service';
import { Admin, Doctor, Patient, Secretary, User } from 'src/api/models';
import { CreateuserComponent } from '../User/createuser/createuser.component';
import { UpdateuserComponent } from '../User/updateuser/updateuser.component';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  searchValue: string = '';
  public userDataSource: MatTableDataSource<(User | Admin | Doctor | Patient | Secretary)> = new MatTableDataSource();

  public displayedColumns: string[] = ['id','firstname', 'lastname','email','phone','dateOfBirth','address','sexe','userRole','actions'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private userControllerService: UserControllerService,
    private router: Router,private dialog: MatDialog) {
  
     }


  ngOnInit():void {
    this.refreshUserDataSource();
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userDataSource.filter = filterValue.trim().toLowerCase();
}

  public refreshUserDataSource(){
    this.userControllerService.findAll().subscribe(
    
      userList => {

        this.userDataSource.data = userList;
        this.userDataSource.paginator = this.paginator;
        this.userDataSource.sort = this.sort; 
      
         this.userDataSource.filterPredicate = (data: (User | Admin | Doctor | Patient | Secretary), filter: string) => {
          const searchData = data.id + ' ' + data.firstname + ' ' + data.lastname + ' ' + data.email + ' ' + data.phone + ' ' + data.dateOfBirth+''+data.address+''+data.sex+''+data.userRole;
          return searchData.toLowerCase().includes(filter);
        };
      }


    ); }
    delete(id: number) {
      const params = { id: id };
    this.userControllerService.delete(params).subscribe(
      () => {
        // La suppression a réussi, vous pouvez mettre à jour la liste des utilisateurs ou effectuer d'autres actions nécessaires.
        console.log('User deleted successfully.');
        this.refreshUserDataSource();
      },
      (error) => {
        // Une erreur s'est produite lors de la suppression de l'utilisateur. Gérez l'erreur comme vous le souhaitez.
        console.error('Error deleting user:', error);
      }
    );
 
    }
  
  
    openAddUserDialog() {
      const dialogRef = this.dialog.open(CreateuserComponent);

      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.success) {
          this.refreshUserDataSource(); // Refresh the user data after a user is updated.
        }
      });
    }
    
    openUpdateUserDialog( user: User) {
      console.log(user);
      const dialogRef = this.dialog.open(UpdateuserComponent, {
        data: user // Pass the selected user as data to the UpdateUserComponent
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.success) {
          this.refreshUserDataSource(); // Refresh the user data after a user is updated.
        }
      });
    }

  }
  
  
  

