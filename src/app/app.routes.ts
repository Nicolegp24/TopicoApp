import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { Home } from './pages/home/home';
import { Autora } from './pages/autora/autora';

import { Proyecto1 } from './pages/proyecto1/proyecto1';
import { Decalogo } from './pages/proyecto1/decalogo/decalogo';
import { Dinamica } from './pages/proyecto1/dinamica/dinamica';

import { Proyecto2 } from './pages/proyecto2/proyecto2';
import { Actividad2 } from './pages/proyecto2/actividad2/actividad2';
import { Dinamica2 } from './pages/proyecto2/dinamica2/dinamica2';

import { Netflix } from './pages/netflix/netflix';
import { Yokoi } from './pages/yokoi/yokoi';
import { Kasuga } from './pages/kasuga/kasuga';
import { Mexjap } from './pages/mexjap/mexjap';

import { Infografia } from './pages/infografia/infografia';

import { Cuestionario } from './pages/diagramas/cuestionario/cuestionario';
import { Welcome } from './pages/diagramas/welcome/welcome';
import { Eleccion } from './pages/diagramas/eleccion/eleccion';
import { Foda } from './pages/diagramas/foda/foda';
import { Catwda } from './pages/diagramas/catwda/catwda';
import { Sombreros } from './pages/diagramas/sombreros/sombreros';
import { Ishikawa } from './pages/diagramas/ishikawa/ishikawa';
import { Pareto } from './pages/diagramas/pareto/pareto';

import { Opiniones } from './pages/opiniones/opiniones';
import { Opinion1 } from './pages/opiniones/opinion1/opinion1';
import { Opinion2 } from './pages/opiniones/opinion2/opinion2';

import { Libro } from './pages/libro/libro';
import { Collage } from './pages/libro/collage/collage';
import { Video } from './pages/libro/video/video';
import { Presentacion } from './pages/libro/presentacion/presentacion';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'autora', component: Autora},

  {path: 'proyecto1', component: Proyecto1},
  {path: 'proyecto1/decalogo', component: Decalogo},
  {path: 'proyecto1/dinamica', component: Dinamica},

  {path: 'proyecto2', component: Proyecto2},
  {path: 'proyecto2/actividad2', component: Actividad2},
  {path: 'proyecto2/dinamica2', component: Dinamica2},

  {path: 'netflix', component: Netflix},
  {path: 'yokoi', component: Yokoi},
  {path: 'kasuga', component: Kasuga},
  {path: 'mexjap', component: Mexjap},

  {path: 'infografia', component: Infografia},

  {path: 'cuestionario', component: Cuestionario},
  {path: 'welcome', component: Welcome},
  {path: 'eleccion', component: Eleccion},
  {path: 'foda', component: Foda},
  {path: 'catwda', component: Catwda},
  {path: 'sombreros', component: Sombreros},
  {path: 'ishikawa', component: Ishikawa},
  {path: 'pareto', component: Pareto },

  {path: 'opiniones', component: Opiniones},
  {path: 'opiniones/opinion1', component: Opinion1},
  {path: 'opiniones/opinion2', component: Opinion2},

  {path: 'libro', component: Libro},
  {path: 'libro/collage', component: Collage},
  {path: 'libro/video', component: Video},
  {path: 'libro/presentacion', component: Presentacion}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
