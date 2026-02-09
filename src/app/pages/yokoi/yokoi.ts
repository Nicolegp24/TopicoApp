import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Banner } from '../../components/banner/banner';

@Component({
  selector: 'app-yokoi',
  imports: [Navbar, Banner],
  templateUrl: './yokoi.html',
  styleUrl: './yokoi.css',
})
export class Yokoi {

}
