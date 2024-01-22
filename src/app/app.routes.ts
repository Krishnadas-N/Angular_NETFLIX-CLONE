import { Routes } from '@angular/router';
import { BrowseComponentComponent } from './page/browse-component/browse-component.component';

export const routes: Routes = [
  
    {
        path:"browse",
        component:BrowseComponentComponent,
    },
    {
        path:"**",
        redirectTo:"browse"
    }
];
