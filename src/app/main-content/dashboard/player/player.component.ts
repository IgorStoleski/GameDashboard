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
  

  
}
