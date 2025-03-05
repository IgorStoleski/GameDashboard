import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { PlayerComponent } from './player/player.component';
import { PlaceringComponent } from './placering/placering.component';
import { RouterModule } from '@angular/router';
import { PlayerWebsocketService } from '../../shared/services/player-websocket.service';
import { BackendService } from '../../shared/services/backend.service';

interface Player {
  id: number;
  name: string;
  points: number;
  total_score: number;
  rounds: number[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  players: Player[] = [];

  constructor(private backendService: BackendService, private wsService: PlayerWebsocketService) {}

  /* ngOnInit() {
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
  } */
}

