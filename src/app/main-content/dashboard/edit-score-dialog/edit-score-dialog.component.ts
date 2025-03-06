import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { BackendService, Player } from '../../../shared/services/backend.service';
import { PlayerComponent } from '../player/player.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-score-dialog',
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    NgFor,
    FormsModule,
  ],
  templateUrl: './edit-score-dialog.component.html',
  styleUrl: './edit-score-dialog.component.scss'
})
export class EditScoreDialogComponent {
  player: Player;
  updatedScores: { [key: string]: string } = {};

  constructor(
    public dialogRef: MatDialogRef<PlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { player: Player },
    private backendService: BackendService
  ) {
    this.player = { ...data.player };
    this.initializeScores();
  }

  initializeScores(): void {
    this.getRoundKeys().forEach(key => {
      this.updatedScores[key] = this.player[key] ? String(this.player[key]) : ""; // Vorhandene Werte als String speichern
    });
  }

  updateScores(): void {
    const updatedData: any = { id: this.player.id };
  
    for (let key in this.updatedScores) {
      const value = this.updatedScores[key].trim(); // Leere Zeichen entfernen
      updatedData[key] = value === "" ? 0 : parseInt(value, 10) || 0; // Leere Werte oder ungültige Eingaben in 0 umwandeln
    }
  
    this.backendService.updatePlayerScores(updatedData).subscribe(() => {
      this.dialogRef.close(true); // Dialog schließen und Liste aktualisieren
    });
  }

  resetScores(): void {
    this.getRoundKeys().forEach(key => {
      this.updatedScores[key] = "0"; // Alle Werte auf 0 setzen
    });
  }

  getRoundKeys(): string[] {
    return Object.keys(this.player).filter(k => k.startsWith('round_'));
  }
}
