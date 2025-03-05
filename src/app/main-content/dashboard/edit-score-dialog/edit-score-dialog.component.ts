import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { BackendService } from '../../../shared/services/backend.service';

@Component({
  selector: 'app-edit-score-dialog',
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-score-dialog.component.html',
  styleUrl: './edit-score-dialog.component.scss'
})
export class EditScoreDialogComponent {
  
}
