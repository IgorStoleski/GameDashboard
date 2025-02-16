import { MaterialModule } from '../../../shared/material/material.module';
import { BackendService } from './../../../shared/services/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  players: any;
  
  constructor(private backend: BackendService) { }

  getRounds(player: any){
    return this.backend.rounds.map((round) => ({
      label: `Runde ${round.charAt(round.length - 1)}`,
      value: player[round]
    })).filter((round) => round.value);
  }
}
