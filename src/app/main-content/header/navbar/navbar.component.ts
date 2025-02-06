import { Component } from '@angular/core';
import { SettingsComponent } from "../../dashboard/settings/settings.component";
import { MaterialModule } from '../../../shared/material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SettingsComponent,
    MaterialModule,
    RouterLink,
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
