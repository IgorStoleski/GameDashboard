import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { PlayerComponent } from './player/player.component';
import { PlaceringComponent } from './placering/placering.component';
import { Router, RouterModule } from '@angular/router';
import { PlayerWebsocketService } from '../../shared/services/player-websocket.service';
import { BackendService } from '../../shared/services/backend.service';



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
export class DashboardComponent{
  
}

