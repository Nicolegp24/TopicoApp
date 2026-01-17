import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dinamica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dinamica.html',
  styleUrl: './dinamica.css'
})
export class Dinamica {

  index = 0;
  seleccion: string | null = null;
  mostrarResultado = false;
  finalizado = false;

  correctas = 0;
  incorrectas = 0;

  dinamica = [
    {
      negativa: 'Un proyecto colectivo fracasa porque cada área trabaja sin criterios comunes ni estructura compartida.',
      correcta: 'Orden',
      opciones: ['Orden', 'Disciplina', 'Responsabilidad'],
      positiva: 'Los procesos se definen, se respetan roles y la coordinación permite avanzar sin fricciones.'
    },
    {
      negativa: 'Los espacios públicos se deterioran porque nadie se siente responsable de su cuidado.',
      correcta: 'Limpieza',
      opciones: ['Limpieza', 'Orden', 'Honradez'],
      positiva: 'La comunidad mantiene entornos dignos que favorecen la salud y la convivencia.'
    },
    {
      negativa: 'Las decisiones se toman sin considerar sus consecuencias a largo plazo.',
      correcta: 'Responsabilidad',
      opciones: ['Responsabilidad', 'Honradez', 'Puntualidad'],
      positiva: 'Se asumen compromisos entendiendo el impacto personal y colectivo de cada acción.'
    },
    {
      negativa: 'Los acuerdos pierden valor cuando el tiempo de los demás no es respetado.',
      correcta: 'Puntualidad',
      opciones: ['Puntualidad', 'Orden', 'Respeto'],
      positiva: 'El respeto a los horarios fortalece la confianza y la eficiencia social.'
    },
    {
      negativa: 'Una sociedad se estanca cuando deja de cuestionarse y aprender.',
      correcta: 'Deseo de superación',
      opciones: ['Deseo de superación', 'Amor al trabajo', 'Disciplina'],
      positiva: 'La búsqueda constante de mejora impulsa el desarrollo personal y colectivo.'
    },
    {
      negativa: 'La normalización de pequeñas faltas erosiona la confianza institucional.',
      correcta: 'Honradez',
      opciones: ['Honradez', 'Responsabilidad', 'Respeto'],
      positiva: 'La integridad fortalece las relaciones y legitima las acciones públicas y privadas.'
    },
    {
      negativa: 'El poder se impone sin reconocer la dignidad ni la voz de otros.',
      correcta: 'Respeto al derecho de los demás',
      opciones: ['Respeto al derecho de los demás', 'Orden', 'Disciplina'],
      positiva: 'La convivencia se construye reconociendo límites, libertades y diferencias.'
    },
    {
      negativa: 'Las normas se aplican solo cuando convienen a ciertos intereses.',
      correcta: 'Respeto a la ley y a los reglamentos',
      opciones: ['Respeto a la ley y a los reglamentos', 'Honradez', 'Autoridad'],
      positiva: 'El cumplimiento equitativo de las reglas genera justicia y estabilidad social.'
    },
    {
      negativa: 'Las actividades se realizan solo por obligación, sin sentido ni propósito.',
      correcta: 'Amor al trabajo',
      opciones: ['Amor al trabajo', 'Responsabilidad', 'Superación'],
      positiva: 'El compromiso con la labor dignifica a la persona y fortalece a la sociedad.'
    },
    {
      negativa: 'Los recursos se consumen sin visión, comprometiendo el futuro común.',
      correcta: 'Afán por el ahorro y la inversión',
      opciones: ['Afán por el ahorro y la inversión', 'Honradez', 'Orden'],
      positiva: 'La administración consciente permite crecimiento sostenible y bienestar colectivo.'
    }
  ];

  seleccionar(opcion: string) {
    this.seleccion = opcion;
  }

  validar() {
    if (!this.seleccion) return;

    if (this.seleccion === this.actual.correcta) {
      this.correctas++;
    } else {
      this.incorrectas++;
    }

    this.mostrarResultado = true;
  }

  siguiente() {
    this.mostrarResultado = false;
    this.seleccion = null;

    if (this.index < this.dinamica.length - 1) {
      this.index++;
    } else {
      this.finalizado = true;
    }
  }

  get actual() {
    return this.dinamica[this.index];
  }

  get mensajeFinal() {
    if (this.correctas >= 8) {
      return 'Demuestras una comprensión sólida de los principios del decálogo. Mantener estos valores fortalece tu entorno personal y social.';
    }

    if (this.correctas >= 5) {
      return 'Tienes una buena base. Reflexionar sobre estos principios te ayudará a aplicarlos con mayor conciencia en tu vida diaria.';
    }

    return 'Este ejercicio es una oportunidad para reflexionar. Reconocer estos principios es el primer paso para fortalecerlos.';
  }
}
