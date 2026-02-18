import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisService } from '../analysis.service';

interface ParetoItem {
  name: string;
  impact: number;
  percentage: number;
  cumulative: number;
  highlight: boolean; // para marcar el 80%
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

  constructor(private service: AnalysisService) {}

  ngOnInit() {
    const data = this.service.getData();

    if (!data || !data.causes.length) return;

    // Generar una lista plana con todas las causas y subcausas
    const flattenCauses = (causes: any[]): any[] => {
      let result: any[] = [];
      for (let c of causes) {
        result.push({ name: c.name, impact: c.impact });
        if (c.subCauses?.length) {
          result = result.concat(flattenCauses(c.subCauses));
        }
      }
      return result;
    };

    const allCauses = flattenCauses(data.causes);

    // Ordenar de mayor a menor impacto
    const sorted = allCauses.sort((a, b) => b.impact - a.impact);

    const totalImpact = sorted.reduce((sum, c) => sum + c.impact, 0);
    let cumulative = 0;

    this.items = sorted.map(c => {
      const percentage = (c.impact / totalImpact) * 100;
      cumulative += percentage;
      return {
        name: c.name,
        impact: c.impact,
        percentage,
        cumulative,
        highlight: cumulative <= 80 // resaltar hasta llegar al 80%
      };
    });
  }
}
