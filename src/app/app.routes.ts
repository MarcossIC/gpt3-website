import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'GPT 3 - Home page',
    path: '',
    loadComponent: ()=> import('@pages/home/home.component').then(
      (c)=> c.HomeComponent
    )
  }
];
