import { PollAddComponent } from './pages/poll-add/poll-add.component';
import { Routes, RouterModule  } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: PollAddComponent},
];

export const APP_ROUTES = RouterModule.forRoot ( appRoutes, { useHash: true});
