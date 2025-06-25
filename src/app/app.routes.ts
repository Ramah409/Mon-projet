import { Routes } from '@angular/router';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { CalculetteComponent } from './calculette/calculette.component';

export const routes: Routes = [

    {path: 'calculatrice', component:CalculatriceComponent},
    {path: 'calculette', component:CalculetteComponent}, 
];
