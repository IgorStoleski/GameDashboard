import { Component } from '@angular/core';
import { MaterialModule } from '../../../../shared/material/material.module';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
