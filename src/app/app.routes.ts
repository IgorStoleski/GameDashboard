import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SettingsComponent } from './main-content/dashboard/settings/settings.component';
import { DashboardComponent } from './main-content/dashboard/dashboard.component';


export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { 
        path: 'main', component: MainContentComponent, children: [        
            { path: 'settings', component: SettingsComponent },
            { path: 'dashboard', component: DashboardComponent },
        ]
    },
    
]
