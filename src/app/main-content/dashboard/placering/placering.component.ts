import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { BackendService } from '../../../shared/services/backend.service';
import { MaterialModule } from '../../../shared/material/material.module';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { PlayerWebsocketService } from '../../../shared/services/player-websocket.service';
import { MatDialog } from '@angular/material/dialog';
import { EditScoreDialogComponent } from '../edit-score-dialog/edit-score-dialog.component';

@Component({
  selector: 'app-placering',
  standalone: true,
  imports: [
    MaterialModule,
    NgFor
  ],
  templateUrl: './placering.component.html',
  styleUrl: './placering.component.scss'
})
export class PlaceringComponent implements OnInit, OnDestroy {
  players: any[] = [];
  private playersSubscription!: Subscription;

  private dialog = inject(MatDialog);

  constructor(private playerWebsocketService: PlayerWebsocketService) {}

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.playersSubscription.unsubscribe();
  }

  refreshPlayers() {
    this.playerWebsocketService.requestRefresh();
  }

  openEditDialog(player: any) {
    const dialogRef = this.dialog.open(EditScoreDialogComponent, {
      width: '400px',
      data: { player }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Neues Ergebnis gespeichert:", result);
      }
    });
  }

 
}