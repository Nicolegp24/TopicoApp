import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import {RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-row',
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-row.html',
  styleUrl: './movie-row.css',
})
export class MovieRow {

  constructor(private router: Router) {}

  @ViewChild('contenedor', { static: false }) contenedor!: ElementRef;

  @Input() items: { img: string, ruta: string }[] = [];
  @Input() titulo: string = '';
  
  scrollIzquierda() {
    this.contenedor.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollDerecha() {
    this.contenedor.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

}
