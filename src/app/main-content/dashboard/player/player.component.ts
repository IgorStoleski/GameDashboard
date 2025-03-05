import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material.module';
import { PlayerWebsocketService } from '../../../shared/services/player-websocket.service';
import { BackendService } from './../../../shared/services/backend.service';
import { Component, OnInit } from '@angular/core';

export interface Player {
  id: number;
  name: string;
  total_score: number;
  round_1: number;
  round_2: number;
  round_3: number;
  round_4: number;
  round_5: number;
  round_6: number;
  round_7: number;
  round_8: number;
  round_9: number;
  round_10: number;
  [key: string]: number | string;
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
export class PlayerComponent implements OnInit {
  players: Player[] = [];
  rounds: { key: string, label: string }[] = [];

  constructor(private backendService: BackendService, private wsService: PlayerWebsocketService) { }

  /* updateScores() {
    const updateData: any = {};

    // Füllt das Request-Objekt mit `round_1` bis `round_10`
    this.player.rounds.forEach((score, index) => {
      updateData[`round_${index + 1}`] = score;
    });
// Falls `points` benötigt wird

    this.backendService.updatePlayerScores(this.player.id, updateData).subscribe(
      (response) => {
        console.log('Punkte aktualisiert:', response);
        this.wsService.requestRefresh(); // WebSocket sendet Update-Anfrage
      },
      (error) => {
        console.error('Fehler beim Speichern:', error);
      }
    );
  } */



  ngOnInit(): void {
    this.generateRounds();
    this.loadPlayers();
  }

  generateRounds(): void {
    this.rounds = Array.from({ length: 10 }, (_, i) => ({
      key: `round_${i + 1}`,
      label: `Runde ${i + 1}`
    }));
  }
  loadPlayers(): void {
    this.backendService.getPlayers().subscribe(data => {
      console.log(data);  // Prüfen, ob `round_1`, `round_2`, ... enthalten sind.
      this.players = data;
    });
  }
}