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
    negativa:
      'Un grupo impone sus decisiones sin escuchar a las minorías, justificándose en la mayoría numérica y el poder adquirido.',
    correcta: 'Respeto al derecho de los demás',
    opciones: [
      'Autoridad',
      'Respeto al derecho de los demás',
      'Orden'
    ],
    positiva:
      'Reconocer los derechos ajenos es esencial para una convivencia justa y plural.'
  },
  {
    negativa:
      'En una institución pública, cada departamento define sus propios criterios de trabajo sin una estructura común. Aunque todos cumplen con sus tareas individuales, los resultados generales son inconsistentes y se duplican esfuerzos.',
    correcta: 'Orden',
    opciones: [
      'Responsabilidad',
      'Respeto a la ley y a los reglamentos',
      'Orden'
    ],
    positiva:
      'Cuando existe una organización clara de procesos, funciones y objetivos, el trabajo colectivo se vuelve coherente y eficiente.'
  },
  {
    negativa:
      'Las normas se aplican de manera selectiva, dependiendo del estatus o la influencia de las personas involucradas.',
    correcta: 'Respeto a la ley y a los reglamentos',
    opciones: [
      'Honradez',
      'Responsabilidad',
      'Respeto a la ley y a los reglamentos'
    ],
    positiva:
      'La aplicación equitativa de las leyes garantiza estabilidad y justicia social.'
  },
  {
    negativa:
      'Un espacio comunitario recién rehabilitado comienza a deteriorarse rápidamente. No hay vandalismo evidente, pero pequeñas acciones cotidianas van acumulándose hasta generar un entorno descuidado.',
    correcta: 'Limpieza',
    opciones: [
      'Responsabilidad',
      'Limpieza',
      'Respeto al derecho de los demás'
    ],
    positiva:
      'La conservación consciente de los espacios refleja respeto por la comunidad y mejora la calidad de vida colectiva.'
  },
  {
    negativa:
      'El trabajo se percibe únicamente como una obligación necesaria para subsistir, sin compromiso ni sentido social.',
    correcta: 'Amor al trabajo',
    opciones: [
      'Responsabilidad',
      'Deseo de superación',
      'Amor al trabajo'
    ],
    positiva:
      'Valorar el trabajo dignifica a la persona y fortalece el desarrollo colectivo.'
  },
  {
    negativa:
      'Una decisión gubernamental genera beneficios inmediatos, pero ignora impactos sociales y ambientales que afectarán a generaciones futuras.',
    correcta: 'Responsabilidad',
    opciones: [
      'Honradez',
      'Responsabilidad',
      'Deseo de superación'
    ],
    positiva:
      'Asumir responsabilidades implica considerar consecuencias más allá del corto plazo y del interés individual.'
  },
  {
    negativa:
      'Reuniones clave se retrasan constantemente. Aunque el trabajo se realiza, los tiempos imprecisos generan desgaste, desconfianza y pérdidas económicas.',
    correcta: 'Puntualidad',
    opciones: [
      'Orden',
      'Amor al trabajo',
      'Puntualidad'
    ],
    positiva:
      'Respetar el tiempo de los demás fortalece la cooperación y el compromiso colectivo.'
  },
  {
    negativa:
      'Pequeños actos deshonestos son tolerados porque “no afectan a nadie directamente”, hasta que se normalizan y afectan la credibilidad institucional.',
    correcta: 'Honradez',
    opciones: [
      'Responsabilidad',
      'Respeto al derecho de los demás',
      'Honradez'
    ],
    positiva:
      'La integridad cotidiana construye confianza y solidez en las relaciones sociales.'
  },
  {
    negativa:
      'Una organización permanece estancada porque evita cuestionar prácticas obsoletas, aun cuando el contexto social y tecnológico ha cambiado.',
    correcta: 'Deseo de superación',
    opciones: [
      'Responsabilidad',
      'Deseo de superación',
      'Respeto a la ley y a los reglamentos'
    ],
    positiva:
      'El impulso por mejorar permite adaptarse, innovar y crecer de forma consciente.'
  },
  {
    negativa:
      'Los recursos económicos y naturales se utilizan sin planeación, priorizando beneficios inmediatos sobre la sostenibilidad futura.',
    correcta: 'Afán por el ahorro y la inversión',
    opciones: [
      'Responsabilidad',
      'Honradez',
      'Afán por el ahorro y la inversión'
    ],
    positiva:
      'La gestión consciente de los recursos permite estabilidad, crecimiento y bienestar a largo plazo.'
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
