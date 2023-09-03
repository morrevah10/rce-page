import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogContantComponent } from '../../cmps/health/dialog-contant/dialog-contant.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessageModalComponent } from 'src/app/cmps/message-modal/message-modal.component';



@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  healthConditionsConfirmed = false
  registrationForm: FormGroup;
  submittedForm: any;
  isLoading = false;

  constructor(
    private router: Router,
    private dialog : MatDialog,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      identityCard: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      section: ['', Validators.required],
      healthConditions: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.userService.registerUser(this.registrationForm.value).subscribe(
      (response) => {
        console.log('User successfully registered:', response);
        // Handle a response from the server, such as displaying a success message or navigating to another page
        this.isLoading = false;

        this.openMessageModal();

        // this.snackBar.open('הרשמה בוצעה בהצלחה', 'סגירה', {
        //   duration: 1000000, 
        //   panelClass: ['blue-snackbar']
        // });

        // setTimeout(() => {
        //   this.router.navigate(['/donation']);
        // }, 144000); 

        
      },
      (error) => {
        console.error('Error registering user:', error);
       
        this.isLoading = false;
      }
    );

    // Reset the form
    this.registrationForm.reset();
    this.healthConditionsConfirmed = false;
  }

  openHealthConditionsModal() {
    const dialogRef = this.dialog.open(DialogContantComponent);
  
    dialogRef.componentInstance.confirmed.subscribe((result: boolean) => {
      if (result) {
        this.healthConditionsConfirmed = true;
        this.registrationForm.get('healthConditions')?.setValue(true); // Update the form control value
      }
      console.log(`Dialog result: ${result}`);
    });
  }


  openMessageModal() {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      disableClose: true, // Prevent closing by clicking outside or pressing Esc
    });

    // Set a timeout to navigate to another page after a certain duration
    setTimeout(() => {
      dialogRef.close(); // Close the modal
      this.router.navigate(['/donation']); // Navigate to another page
    }, 5000); // Adjust the timeout duration as needed (e.g., 5000 milliseconds = 5 seconds)
  }


  }


