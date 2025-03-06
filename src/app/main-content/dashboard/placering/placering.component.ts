import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { BackendService } from '../../../shared/services/backend.service';
import { MaterialModule } from '../../../shared/material/material.module';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { PlayerWebsocketService } from '../../../shared/services/player-websocket.service';
import { MatDialog } from '@angular/material/dialog';
import { EditScoreDialogComponent } from '../edit-score-dialog/edit-score-dialog.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

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
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  constructor(private playerWebsocketService: PlayerWebsocketService) {}

  ngOnInit(): void {
    this.subscribeToPlayers();
    this.refreshPlayers(); 

  }

  ngOnDestroy(): void {
    this.playersSubscription.unsubscribe();
  }

  subscribeToPlayers() {
    this.playersSubscription = this.playerWebsocketService.getPlayers().subscribe(
      (data) => {
        console.log("Players received", data);
        this.players = data.sort((a, b) => a.total_score - b.total_score);
      },
      (error) => {
        console.error("Error receiving players", error);
      }
    );
  }

  refreshPlayers() {
    this.playerWebsocketService.requestRefresh();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
  

  openEditDialog(player: any) {
    const dialogRef = this.dialog.open(EditScoreDialogComponent, {
      width: '400px',
      data: { player }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Neues Ergebnis gespeichert:", result);
        this.refreshPlayers(); // Spieler-Daten nach dem Bearbeiten erneut laden
      }
    });
  }
}