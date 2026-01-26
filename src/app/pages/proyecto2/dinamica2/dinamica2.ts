import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dinamica2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dinamica2.html',
  styleUrl: './dinamica2.css'
})
export class Dinamica2 {

  tarjetas = [
    { titulo: 'Ser proactivo', texto: 'Identifica hoy una situación en la que normalmente culpas a factores externos y decide qué sí está bajo tu control.', volteada: false, color: 'c1' },
    { titulo: 'Ser proactivo', texto: 'Durante el día, sustituye frases como “no puedo” o “tengo que” por “elijo” o “decido”.', volteada: false, color: 'c2' },

    { titulo: 'Comenzar con un fin en mente', texto: 'Escribe cómo te gustaría ser recordado dentro de cinco años y compáralo con tus acciones actuales.', volteada: false, color: 'c3' },
    { titulo: 'Comenzar con un fin en mente', texto: 'Antes de tomar una decisión importante hoy, pregúntate si te acerca o te aleja de tu propósito.', volteada: false, color: 'c4' },

    { titulo: 'Primero lo primero', texto: 'Identifica una tarea importante que has estado posponiendo y hazla antes de cualquier distracción.', volteada: false, color: 'c5' },
    { titulo: 'Primero lo primero', texto: 'Elimina o reduce conscientemente una actividad que te roba tiempo sin aportar valor.', volteada: false, color: 'c6' },

    { titulo: 'Pensar ganar–ganar', texto: 'Busca hoy una solución donde ambas partes se beneficien, incluso si implica ceder un poco.', volteada: false, color: 'c7' },
    { titulo: 'Pensar ganar–ganar', texto: 'En una conversación difícil, prioriza el beneficio mutuo antes que “tener la razón”.', volteada: false, color: 'c8' },

    { titulo: 'Buscar primero entender', texto: 'Escucha a alguien sin interrumpir ni preparar tu respuesta hasta que termine.', volteada: false, color: 'c9' },
    { titulo: 'Buscar primero entender', texto: 'Reformula lo que la otra persona dijo para asegurarte de haber comprendido su punto.', volteada: false, color: 'c10' },

    { titulo: 'Sinergizar', texto: 'Colabora con alguien que piense distinto a ti y encuentra un punto en común.', volteada: false, color: 'c11' },
    { titulo: 'Sinergizar', texto: 'Integra una idea ajena a tu trabajo actual y observa cómo mejora el resultado.', volteada: false, color: 'c12' },

    { titulo: 'Afilar la sierra', texto: 'Dedica al menos 30 minutos a una actividad que fortalezca tu cuerpo o tu mente.', volteada: false, color: 'c13' },
    { titulo: 'Afilar la sierra', texto: 'Identifica un área personal que has descuidado y define una acción concreta para atenderla.', volteada: false, color: 'c14' },

    { titulo: 'Reflexión final', texto: '¿Qué hábito necesitas fortalecer hoy para avanzar con mayor equilibrio y conciencia?', volteada: false, color: 'c15' }
  ];

  voltear(tarjeta: any) {
    tarjeta.volteada = !tarjeta.volteada;
  }
}
