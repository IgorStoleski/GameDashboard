import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { PlayerComponent } from './player/player.component';
import { PlaceringComponent } from './placering/placering.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MaterialModule,
    PlayerComponent,
    PlaceringComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
   


}
