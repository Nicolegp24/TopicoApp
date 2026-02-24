import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  standalone: true,
  templateUrl: './home-button.html',
  styleUrl: './home-button.css'
})
export class HomeButton {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}
