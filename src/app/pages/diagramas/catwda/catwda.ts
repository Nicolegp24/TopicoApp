import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService, AnalysisData } from '../analysis.service';

@Component({
  selector: 'app-catwda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catwda.html',
  styleUrls: ['./catwda.css']
})
export class Catwda implements OnInit {

  data!: AnalysisData;

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {
    this.data = this.analysisService.getData();
  }
}
