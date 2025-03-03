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
  form: FormGroup;
  private backendService = inject(BackendService);
  public dialogRef = inject(MatDialogRef<EditScoreDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { player: any }) {
    const fb = inject(FormBuilder);
    this.form = fb.group({
      points: [data.player.points, [Validators.required, Validators.min(-2), Validators.max(100)]]
    });
  }

  submit() {
    if (this.form.valid) {
      const newPoints = this.form.value.points;
      
      this.backendService.updatePlayerPoints(this.data.player.id, newPoints).subscribe(
        response => {
          console.log("Update erfolgreich!", response);
          this.dialogRef.close(response);
        },
        error => {
          console.error("Fehler beim Update!", error);
        }
      );
    }
  }
}
