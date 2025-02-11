import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { UsersComponent } from './users/users.component';
import { MatDialog } from '@angular/material/dialog';
import { EditUsersComponent } from './edit-users/edit-users.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(private dialog: MatDialog) { }
  openUserDialog() {
    const dialogRef = this.dialog.open(UsersComponent, {
      width: '600px',
      height: '600px'
    }) 
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditUsersComponent, {
      width: '600px',
      height: '600px'
    }) 
  }

}
