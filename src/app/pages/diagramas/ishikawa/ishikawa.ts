import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService, AnalysisData, CauseNode } from '../analysis.service';

@Component({
  selector: 'app-ishikawa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ishikawa.html',
  styleUrls: ['./ishikawa.css']
})
export class Ishikawa implements OnInit {
  data!: AnalysisData;

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {
    this.data = this.analysisService.getData();
  }
}
