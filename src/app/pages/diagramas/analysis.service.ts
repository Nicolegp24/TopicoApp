import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Cause {
  name: string;
  impact: number;
}

export interface AnalysisData {
  problem: string;
  context: string;
  causes: Cause[];
  effects: string[];
  internalFactors: string[];
  externalFactors: string[];
  strengths: string[];
  weaknesses: string[];
  stakeholders: string[];
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
    stakeholders: []
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
      stakeholders: []
    };

    if (this.isBrowser) {
      localStorage.removeItem(this.storageKey);
    }
  }
}
