import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Banner } from '../../components/banner/banner';
import { MovieRow } from '../../components/movie-row/movie-row';
import { MovieCard } from '../../components/movie-card/movie-card';

@Component({
  selector: 'app-netflix',
  imports: [Navbar, Banner, MovieRow, MovieCard],
  templateUrl: './netflix.html',
  styleUrl: './netflix.css',
})
export class Netflix {

}
