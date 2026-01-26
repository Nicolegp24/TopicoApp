import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autora',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autora.html',
  styleUrl: './autora.css'
})
export class Autora {

  indiceGaleria = 0;

  galerias = [
    [
      '/p1/f1.jpeg',
      '/p1/f2.jpeg',
      '/p1/f3.jpeg',
      '/p1/f4.jpeg',
      '/p1/f5.jpeg',
      '/p1/f6.jpeg',
      '/p1/f7.jpeg',
      '/p1/f8.jpeg',
      '/p1/f9.jpeg',
      '/p1/f10.png'
    ],
    [
      '/p2/1.jpeg',
      '/p2/2.jpeg',
      '/p2/3.jpeg',
      '/p2/4.jpeg',
      '/p2/5.jpeg',
      '/p2/6.jpeg',
      '/p2/7.jpeg',
      '/p2/8.jpeg',
      '/p2/9.jpeg',
      '/p2/10.jpeg'
    ]
  ];

  siguiente() {
    if (this.indiceGaleria < this.galerias.length - 1) {
      this.indiceGaleria++;
    }
  }

  anterior() {
    if (this.indiceGaleria > 0) {
      this.indiceGaleria--;
    }
  }
}
