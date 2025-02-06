import { Component } from '@angular/core';
import { NavbarComponent } from "./header/navbar/navbar.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
