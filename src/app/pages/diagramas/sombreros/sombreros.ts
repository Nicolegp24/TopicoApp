import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService, AnalysisData } from '../analysis.service';

@Component({
  selector: 'app-sombreros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sombreros.html',
  styleUrls: ['./sombreros.css']
})
export class Sombreros implements OnInit {

  data!: AnalysisData;

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {
    this.data = this.analysisService.getData();
  }
}
