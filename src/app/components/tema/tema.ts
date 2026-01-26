import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tema',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tema.html',
  styleUrl: './tema.css',
})
export class Tema {
  @Input() texto!: string;
  @Input() ruta!: string;
  @Input() color!: string;
}
