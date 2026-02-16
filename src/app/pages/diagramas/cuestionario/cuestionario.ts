import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalysisService, AnalysisData } from '../analysis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuestionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cuestionario.html',
  styleUrls: ['./cuestionario.css']
})


export class Cuestionario implements OnInit {

  data!: AnalysisData;

  newCause = '';
  newImpact: number | null = null;
  newEffect = '';
  newInternal = '';
  newExternal = '';
  newStrength = '';
  newWeakness = '';
  newStakeholder = '';

  constructor(
    private analysisService: AnalysisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.data = this.analysisService.getData();
  }

  save(): void {
    this.analysisService.persist();
  }

  addCause(): void {
    if (!this.newCause || !this.newImpact) return;

    this.data.causes.push({
      name: this.newCause,
      impact: this.newImpact
    });

    this.newCause = '';
    this.newImpact = null;

    this.save();
  }

  addItem(type: string, value: string): void {
    if (!value) return;

    switch (type) {
      case 'effect':
        this.data.effects.push(value);
        this.newEffect = '';
        break;
      case 'internal':
        this.data.internalFactors.push(value);
        this.newInternal = '';
        break;
      case 'external':
        this.data.externalFactors.push(value);
        this.newExternal = '';
        break;
      case 'strength':
        this.data.strengths.push(value);
        this.newStrength = '';
        break;
      case 'weakness':
        this.data.weaknesses.push(value);
        this.newWeakness = '';
        break;
      case 'stakeholder':
        this.data.stakeholders.push(value);
        this.newStakeholder = '';
        break;
    }

    this.save();
  }

  submit(): void {
    this.save();
    this.router.navigate(['/eleccion']);
  }

  limpiarDatos(): void {
    this.analysisService.clear();
    this.data = this.analysisService.getData();
  }
}
