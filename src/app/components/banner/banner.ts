import { Component } from '@angular/core';
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

}
