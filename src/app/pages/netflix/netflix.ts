import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Banner } from '../../components/banner/banner';
import { MovieRow } from '../../components/movie-row/movie-row';

@Component({
  selector: 'app-netflix',
  imports: [Navbar, Banner, MovieRow],
  templateUrl: './netflix.html',
  styleUrl: './netflix.css',
})
export class Netflix {

  peliculas1 = [
    { img: '/netflix/1.webp', ruta: '/proyecto1' },
    { img: '/netflix/2.webp', ruta: '/proyecto2' },
    { img: '/netflix/3.webp', ruta: '/proyecto1' },
    { img: '/netflix/4.webp', ruta: '/proyecto2' },
    { img: '/netflix/5.webp', ruta: '/proyecto1' },
    { img: '/netflix/6.webp', ruta: '/proyecto2' },
    { img: '/netflix/7.webp', ruta: '/proyecto1' }
  ];

  peliculas2 = [
    { img: '/netflix/8.webp', ruta: '/proyecto1' },
    { img: '/netflix/3.webp', ruta: '/proyecto2' },
    { img: '/netflix/6.webp', ruta: '/proyecto1' },
    { img: '/netflix/1.webp', ruta: '/proyecto2' },
    { img: '/netflix/2.webp', ruta: '/proyecto1' },
    { img: '/netflix/4.webp', ruta: '/proyecto2' },
    { img: '/netflix/7.webp', ruta: '/proyecto1' }
  ];

  peliculas3 = [
    { img: '/netflix/1.webp', ruta: '/proyecto1' },
    { img: '/netflix/2.webp', ruta: '/proyecto2' },
    { img: '/netflix/5.webp', ruta: '/proyecto1' },
    { img: '/netflix/8.webp', ruta: '/proyecto2' },
    { img: '/netflix/3.webp', ruta: '/proyecto1' },
    { img: '/netflix/4.webp', ruta: '/proyecto2' },
    { img: '/netflix/6.webp', ruta: '/proyecto1' }
  ];
}
