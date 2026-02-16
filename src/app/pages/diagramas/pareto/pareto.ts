import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService } from '../analysis.service';

interface ParetoItem {
  name: string;
  impact: number;
  percentage: number;
  cumulative: number;
}

@Component({
  selector: 'app-pareto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pareto.html',
  styleUrls: ['./pareto.css']
})
export class Pareto implements OnInit {

  items: ParetoItem[] = [];
  totalImpact = 0;

  constructor(private service: AnalysisService) {}

  ngOnInit() {
    const data = this.service.getData();

    if (!data || !data.causes.length) return;

    const sorted = [...data.causes]
      .sort((a, b) => b.impact - a.impact);

    this.totalImpact = sorted.reduce((sum, c) => sum + c.impact, 0);

    let cumulative = 0;

    this.items = sorted.map(c => {
      const percentage = (c.impact / this.totalImpact) * 100;
      cumulative += percentage;

      return {
        name: c.name,
        impact: c.impact,
        percentage,
        cumulative
      };
    });
  }
}
