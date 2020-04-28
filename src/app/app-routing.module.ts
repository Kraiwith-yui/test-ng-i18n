import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/landing/landing.module').then((C) => C.LandingModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./views/calendar/calendar.module').then((C) => C.CalendarModule),
  },
  {
    path: 'computer',
    loadChildren: () =>
      import('./views/computer/computer.module').then((C) => C.ComputerModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./views/profile/profile.module').then((C) => C.ProfileModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
