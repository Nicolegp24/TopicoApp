import { Component } from '@angular/core';
import { BotonSub } from '../../components/boton-sub/boton-sub';
import { HomeButton } from '../../components/home-button/home-button';
import { BackButton } from '../../components/back-button/back-button';

@Component({
  selector: 'app-libro',
  imports: [BotonSub, HomeButton, BackButton],
  templateUrl: './libro.html',
  styleUrl: './libro.css',
})
export class Libro {

}
