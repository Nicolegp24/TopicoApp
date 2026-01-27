import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Proyecto1 } from './pages/proyecto1/proyecto1';
import { Decalogo } from './pages/proyecto1/decalogo/decalogo';
import { Dinamica } from './pages/proyecto1/dinamica/dinamica';
import { Autora } from './pages/autora/autora';
import { Proyecto2 } from './pages/proyecto2/proyecto2';
import { Actividad2 } from './pages/proyecto2/actividad2/actividad2';
import { Dinamica2 } from './pages/proyecto2/dinamica2/dinamica2';
import { Netflix } from './pages/netflix/netflix';


export const routes: Routes = [
  //{path: '', component: Home},
  {path: '', component: Netflix},
  {path: 'proyecto1', component: Proyecto1},
  {path: 'proyecto1/decalogo', component: Decalogo},
  {path: 'proyecto1/dinamica', component: Dinamica},
  {path: 'autora', component: Autora},
  {path: 'proyecto2', component: Proyecto2},
  {path: 'proyecto2/actividad2', component: Actividad2},
  {path: 'proyecto2/dinamica2', component: Dinamica2},
  //{path: 'netflix', component: Netflix},
];


