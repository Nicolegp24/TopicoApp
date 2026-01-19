import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-boton-sub',
  imports: [RouterModule],
  templateUrl: './boton-sub.html',
  styleUrl: './boton-sub.css',
})
export class BotonSub {
  @Input() texto!: string;
  @Input() ruta!: string;
  @Input() color!: string;
}
