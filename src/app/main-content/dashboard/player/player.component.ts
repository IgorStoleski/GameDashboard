import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { PlayerWebsocketService } from '../../../shared/services/player-websocket.service';
import { BackendService } from './../../../shared/services/backend.service';
import { Component, Input } from '@angular/core';

interface Player {
  id: number;
  name: string;
  rounds: number[];
  points: number;
  total_score: number;
}

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() player!: Player; // Spieler-Daten von Dashboard

  constructor(private backendService: BackendService, private wsService: PlayerWebsocketService) {}

  updateScores() {
    const updateData: any = {};

    // Füllt das Request-Objekt mit `round_1` bis `round_10`
    this.player.rounds.forEach((score, index) => {
      updateData[`round_${index + 1}`] = score;
    });

    updateData["points"] = this.player.points; // Falls `points` benötigt wird

    this.backendService.updatePlayerScores(this.player.id, updateData).subscribe(
      (response) => {
        console.log('Punkte aktualisiert:', response);
        this.wsService.requestRefresh(); // WebSocket sendet Update-Anfrage
      },
      (error) => {
        console.error('Fehler beim Speichern:', error);
      }
    );
  }
}