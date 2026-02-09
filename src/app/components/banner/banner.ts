import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-banner',
  imports: [CommonModule, MatIconModule, RouterLink, RouterModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() descripcion: string = '';
  @Input() botonPrincipalRuta: string = '/';
  @Input() botonSecundarioRuta: string = '/';
  @Input() botonPrincipalExterno: boolean = false;
  @Input() botonSecundarioExterno: boolean = false;

}
