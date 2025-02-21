import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../../../shared/services/backend.service';
import { MaterialModule } from '../../../shared/material/material.module';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { PlayerWebsocketService } from '../../../shared/services/player-websocket.service';

@Component({
  selector: 'app-placering',
  standalone: true,
  imports: [
    MaterialModule,
    NgFor,
  ],
  templateUrl: './placering.component.html',
  styleUrl: './placering.component.scss'
})
export class PlaceringComponent implements OnInit, OnDestroy {
  players: any[] = [];
  private playersSubscription!: Subscription;

  constructor(private playerWebsocketService: PlayerWebsocketService) {}

  ngOnInit(): void {
    this.playersSubscription = this.playerWebsocketService.getPlayers().subscribe(
      (data) => {
        console.log("Players received 🏆", data);
        this.players = data.sort((a, b) => a.points - b.points);
      },
      (error) => {
        console.error("Error receiving players 🚨", error);
      }
    );
  }

  ngOnDestroy(): void {
    this.playersSubscription.unsubscribe();
  }
}