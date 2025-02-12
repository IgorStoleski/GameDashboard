import { Component } from '@angular/core';
import { SettingsComponent } from "../../dashboard/settings/settings.component";
import { MaterialModule } from '../../../shared/material/material.module';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SettingsComponent,
    DashboardComponent,
    MaterialModule,
    RouterLink,
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
