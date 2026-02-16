import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService, AnalysisData } from '../analysis.service';

@Component({
  selector: 'app-ishikawa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ishikawa.html',
  styleUrls: ['./ishikawa.css']
})

export class Ishikawa implements OnInit {

  data!: AnalysisData;
  colors = ['#e74c3c', '#f1c40f', '#1abc9c', '#9b59b6', '#3498db', '#e67e22'];

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {
    this.data = this.analysisService.getData();
  }
}
