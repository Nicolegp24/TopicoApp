import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eleccion.html',
  styleUrls: ['./eleccion.css']
})
export class Eleccion {

  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
