import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface CauseNode {
  name: string;
  impact: number;
  subCauses?: CauseNode[];
}

export interface AnalysisData {
  problem: string;
  context?: string;
  causes: CauseNode[];
  effects: string[];
  internalFactors: string[];
  externalFactors: string[];
  strengths: string[];
  weaknesses: string[];
  stakeholders: string[];
  // Nuevos para CATWDA
  actors: string[];
  transformation: string[];
  weltanschauung: string[];
  owner: string[];
  environment: string[];
  // Opcional: para 6 sombreros podrías agregar arrays por color
  hatWhite?: string[];
  hatRed?: string[];
  hatBlue?: string[];
  hatGreen?: string[];
  hatBlack?: string[];
  hatYellow?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private storageKey = 'identificacion_problema';

  private data: AnalysisData = {
    problem: '',
    context: '',
    causes: [],
    effects: [],
    internalFactors: [],
    externalFactors: [],
    strengths: [],
    weaknesses: [],
    stakeholders: [],
    actors: [],
    transformation: [],
    weltanschauung: [],
    owner: [],
    environment: [],
    hatWhite: [],
    hatRed: [],
    hatBlue: [],
    hatGreen: [],
    hatBlack: [],
    hatYellow: []
  };


  constructor() {
    this.load();
  }

  private load(): void {
    if (!this.isBrowser) return;

    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.data = JSON.parse(saved);
    }
  }

  private save(): void {
    if (!this.isBrowser) return;

    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  getData(): AnalysisData {
    return this.data;
  }

  persist(): void {
    this.save();
  }

  clear(): void {
    this.data = {
      problem: '',
      context: '',
      causes: [],
      effects: [],
      internalFactors: [],
      externalFactors: [],
      strengths: [],
      weaknesses: [],
      stakeholders: [],
      actors: [],
      transformation: [],
      weltanschauung: [],
      owner: [],
      environment: [],
      hatWhite: [],
      hatRed: [],
      hatBlue: [],
      hatGreen: [],
      hatBlack: [],
      hatYellow: []
    };

    if (this.isBrowser) {
      localStorage.removeItem(this.storageKey);
    }
  }
}
