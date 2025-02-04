import { Component } from '@angular/core';
import { NavbarComponent } from "./header/navbar/navbar.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    NavbarComponent,
    DashboardComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
