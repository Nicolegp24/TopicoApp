import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Proyecto1 } from './pages/proyecto1/proyecto1';
import { Decalogo } from './pages/proyecto1/decalogo/decalogo';
import { Dinamica } from './pages/proyecto1/dinamica/dinamica';
import { Autora } from './pages/proyecto1/autora/autora';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'proyecto1', component: Proyecto1},
  {path: 'proyecto1/decalogo', component: Decalogo},
  {path: 'proyecto1/dinamica', component: Dinamica},
  {path: 'proyecto1/autora', component: Autora}
];


