import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell.component';
import { ContactsComponent } from './pages/contacts.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'home/contacts',
        loadComponent: () =>
          import('./pages/contacts.component').then((m) => m.ContactsComponent),
      },
      {
        path: 'resources',
        loadComponent: () =>
          import('./pages/resources.component').then(
            (m) => m.ResourcesComponent,
          ),
      },
      {
        path: 'wish',
        loadComponent: () =>
          import('./pages/wish.component').then((m) => m.WishComponent),
      },
      {
        path: 'other',
        loadComponent: () =>
          import('./pages/other.component').then((m) => m.OtherComponent),
      },
      {
        path: 'earn',
        loadComponent: () =>
          import('./pages/earn.component').then((m) => m.EarnComponent),
      },
    ],
  },
];
