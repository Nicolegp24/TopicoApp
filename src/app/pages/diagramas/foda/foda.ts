import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService, AnalysisData } from '../analysis.service';

@Component({
  selector: 'app-foda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foda.html',
  styleUrls: ['./foda.css']
})
export class Foda implements OnInit {

  data!: AnalysisData;

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {
    this.data = this.analysisService.getData();
  }
}
