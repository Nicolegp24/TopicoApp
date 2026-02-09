import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Banner } from '../../components/banner/banner';

@Component({
  selector: 'app-kasuga',
  imports: [Navbar, Banner],
  templateUrl: './kasuga.html',
  styleUrl: './kasuga.css',
})
export class Kasuga {

}
