import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalysisService, AnalysisData, CauseNode } from '../analysis.service';
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
  newActors = '';
  newTransformation = '';
  newWeltanschauung = '';
  newOwner = '';
  newEnvironment = '';
  newWhiteHat = '';
  newRedHat = '';
  newBlueHat = '';
  newGreenHat = '';
  newBlackHat = '';
  newYellowHat = '';

  currentCauseStack: CauseNode[] = []; // Pila de jerarquía

  constructor(private analysisService: AnalysisService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.analysisService.getData();
    if (!this.data.context) {
      this.data.context = '';
    }
  }

  save(): void {
    this.analysisService.persist();
  }

  // --- Gestión de causas jerárquicas ---
  addMainCause() {
    if (!this.newCause || this.newImpact === null) return;

    const newCause: CauseNode = { name: this.newCause, impact: this.newImpact, subCauses: [] };
    this.data.causes.push(newCause);

    this.currentCauseStack = [newCause]; // nueva jerarquía
    this.newCause = '';
    this.newImpact = null;
    this.save();
  }

  addSubCause() {
    if (!this.newCause || this.newImpact === null || this.currentCauseStack.length === 0) return;

    const parent = this.currentCauseStack[this.currentCauseStack.length - 1];
    const newSub: CauseNode = { name: this.newCause, impact: this.newImpact, subCauses: [] };

    parent.subCauses = parent.subCauses || [];
    parent.subCauses.push(newSub);

    this.currentCauseStack.push(newSub); // profundizamos la jerarquía
    this.newCause = '';
    this.newImpact = null;
    this.save();
  }

  popCauseStack() {
    if (this.currentCauseStack.length > 1) {
      this.currentCauseStack.pop(); // sube un nivel
    }
  }

  trackByName(index: number, item: CauseNode) {
    return item.name; // cada nodo debe tener un nombre único
  }

  // --- Otros items ---
  addItem(type: string, value: string): void {
    if (!value) return;
    switch(type) {
      case 'effect': this.data.effects.push(value); this.newEffect=''; break;
      case 'internal': this.data.internalFactors.push(value); this.newInternal=''; break;
      case 'external': this.data.externalFactors.push(value); this.newExternal=''; break;
      case 'strength': this.data.strengths.push(value); this.newStrength=''; break;
      case 'weakness': this.data.weaknesses.push(value); this.newWeakness=''; break;
      case 'stakeholder': this.data.stakeholders.push(value); this.newStakeholder=''; break;
      case 'actor': this.data.actors.push(value); this.newActors=''; break;
      case 'transformation': this.data.transformation.push(value); this.newTransformation=''; break;
      case 'weltanschauung': this.data.weltanschauung.push(value); this.newWeltanschauung=''; break;
      case 'owner': this.data.owner.push(value); this.newOwner=''; break;
      case 'environment': this.data.environment.push(value); this.newEnvironment=''; break;
      case 'hatWhite': this.data.hatWhite?.push(value); this.newWhiteHat=''; break;
      case 'hatRed': this.data.hatRed?.push(value); this.newRedHat=''; break;
      case 'hatBlue': this.data.hatBlue?.push(value); this.newBlueHat=''; break;
      case 'hatGreen': this.data.hatGreen?.push(value); this.newGreenHat=''; break;
      case 'hatBlack': this.data.hatBlack?.push(value); this.newBlackHat=''; break;
      case 'hatYellow': this.data.hatYellow?.push(value); this.newYellowHat=''; break;
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
    this.currentCauseStack = [];
  }

}
