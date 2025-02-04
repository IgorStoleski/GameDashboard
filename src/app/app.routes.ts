import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';


export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainContentComponent },
];
