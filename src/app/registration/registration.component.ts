import { Component } from '@angular/core';
import { UserService } from './user.service';
import { FormControl, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {}
//   registrationStatus: string | null = null;
//   goToLoginPage() {
//     // Redirection vers la page de connexion
//     window.location.href = "";
//   }



  
//   user = {
//     id: '',
//     lastname: '',
//     firstname: '',
//     email: '',
//     dateOfBirth: '',
//     phone: '',
//     address: '',
//     password: '',
//     userRole: '',
//     sexe:''
//   };

//   constructor(private userService: UserService) {}

//   onSubmit() {
//     this.userService.registerUser(this.user)
//       .subscribe(
//         response => {
//           this.registrationStatus = 'Utilisateur enregistré avec succès';
//           console.log('Utilisateur enregistré avec succès', response);
//         },
//         error => {
//           if (error.status === 409) {
//             this.registrationStatus = 'Utilisateur déjà ajouté';
//           } else {
//             this.registrationStatus = 'Erreur lors de l\'enregistrement de l\'utilisateur';
//           }
//           console.log('Erreur lors de l\'enregistrement de l\'utilisateur', error);
//         }
//       );
//   }
  

// }
