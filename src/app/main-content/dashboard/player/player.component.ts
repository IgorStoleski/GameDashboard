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
  players: Player[] = [];

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
  


  ngOnInit() {
    // Initial Spieler vom Backend holen
    this.backendService.getPlayers().subscribe((players) => {
      this.players = players.map((p) => ({
        ...p,
        rounds: [
          p.round_1, p.round_2, p.round_3, p.round_4, p.round_5,
          p.round_6, p.round_7, p.round_8, p.round_9, p.round_10
        ]
      }));
    });

    // WebSocket-Updates abonnieren
    this.wsService.getPlayers().subscribe((players) => {
      console.log("Live-Update erhalten:", players);
      this.players = players.map((p) => ({
        ...p,
        rounds: [
          p.round_1, p.round_2, p.round_3, p.round_4, p.round_5,
          p.round_6, p.round_7, p.round_8, p.round_9, p.round_10
        ]
      }));
    });
  }
}