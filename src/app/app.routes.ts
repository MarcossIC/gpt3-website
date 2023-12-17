import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

export const routes: Routes = [
  {
    title: 'GPT 3 - Home page',
    path: '',
    //component: HomeComponent
    loadComponent: ()=>import("@pages/home/home.component").then( (c)=> c.HomeComponent),
  }
];
