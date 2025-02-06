import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SettingsComponent } from './main-content/dashboard/settings/settings.component';


export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { 
        path: 'main', component: MainContentComponent, children: [        
            { path: 'settings', component: SettingsComponent },
        ]
    },
    
]
