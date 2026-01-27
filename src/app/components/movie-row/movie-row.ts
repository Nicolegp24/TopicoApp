import { Component, ElementRef, ViewChild } from '@angular/core';
import {Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-row',
  imports: [CommonModule],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.css',
})
export class MovieRow {

  constructor(private router: Router) {}

  @ViewChild('contenedor', { static: false }) contenedor!: ElementRef;

  peliculas = [
    { titulo: 'P1', img: '/netflix/1.jpeg' },
    { titulo: 'P2', img: '/netflix/1.jpeg' },
    { titulo: 'P3', img: '/netflix/1.jpeg' },
    { titulo: 'P4', img: '/netflix/1.jpeg' },
    { titulo: 'P5', img: '/netflix/1.jpeg' },
    { titulo: 'P6', img: '/netflix/1.jpeg' },
    { titulo: 'P7', img: '/netflix/1.jpeg' }
  ];

  scrollIzquierda() {
    this.contenedor.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollDerecha() {
    this.contenedor.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  irProyecto() {
    this.router.navigate(['/../pages/proyecto1']);
  }
}
