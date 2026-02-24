import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CardItem {
  title: string;
  text: string;
  image: string;
  flipped: boolean;
}

@Component({
  selector: 'app-collage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collage.html',
  styleUrl: './collage.css'
})
export class Collage {

  cards: CardItem[] = [

    // INTRODUCCIÓN
    {
      title: 'El misterio del éxito',
      image: 'collage/1.webp',
      text: 'Gladwell plantea que el éxito extraordinario no puede explicarse únicamente por talento individual. Detrás de cada historia hay estructuras sociales, oportunidades acumuladas y condiciones históricas que influyen silenciosamente.',
      flipped: false
    },
    {
      title: 'Factores invisibles',
      image: 'collage/111webp.webp',
      text: 'Las historias tradicionales ignoran variables como acceso a educación, apoyo familiar, redes sociales y contexto económico. Estos factores crean ventajas que se fortalecen con el tiempo.',
      flipped: false
    },
    {
      title: 'El mérito no es aislado',
      image: 'collage/OIP.webp',
      text: 'El éxito no ocurre en el vacío. Incluso las personas más talentosas dependen de sistemas que les permiten desarrollarse. El mérito existe, pero opera dentro de estructuras.',
      flipped: false
    },

    // EFECTO MATEO
    {
      title: 'Efecto Mateo',
      image: 'collage/2.webp',
      text: 'En ligas juveniles de hockey, muchos jugadores profesionales nacen en los primeros meses del año. La diferencia de edad relativa les da ventajas físicas temporales que se convierten en oportunidades permanentes.',
      flipped: false
    },
    {
      title: 'Ventaja acumulativa',
      image: 'collage/22.webp',
      text: 'Los jugadores ligeramente más desarrollados reciben mejor entrenamiento y más atención. Con el tiempo, esas ventajas iniciales se multiplican, creando brechas significativas.',
      flipped: false
    },
    {
      title: 'Desigualdad estructural',
      image: 'collage/222.webp',
      text: 'El talento está distribuido ampliamente, pero las oportunidades no. El sistema selecciona a quienes comienzan con pequeñas ventajas y los impulsa hacia niveles superiores.',
      flipped: false
    },

    // 10,000 HORAS
    {
      title: 'La regla de las 10,000 horas',
      image: 'collage/3.webp',
      text: 'La maestría en áreas complejas requiere aproximadamente diez mil horas de práctica deliberada. No es repetición mecánica, sino entrenamiento estructurado y exigente.',
      flipped: false
    },
    {
      title: 'Práctica deliberada',
      image: 'collage/33.webp',
      text: 'La práctica efectiva implica disciplina constante, retroalimentación y mejora continua. Los expertos invierten años antes de alcanzar reconocimiento público.',
      flipped: false
    },
    {
      title: 'Momento histórico',
      image: 'collage/333.webp',
      text: 'Además del esfuerzo, el contexto histórico importa. Tener acceso temprano a recursos tecnológicos o educativos permite acumular experiencia antes que otros.',
      flipped: false
    },

    // PROBLEMA DE LOS GENIOS I
    {
      title: 'El límite del IQ',
      image: 'collage/4.webp',
      text: 'Un coeficiente intelectual alto es útil, pero después de cierto punto deja de marcar diferencia significativa. La inteligencia extrema no garantiza éxito extraordinario.',
      flipped: false
    },
    {
      title: 'Más que inteligencia',
      image: 'collage/444.webp',
      text: 'El éxito requiere habilidades sociales, iniciativa, resiliencia y capacidad de adaptación. La inteligencia cognitiva es solo una parte del conjunto.',
      flipped: false
    },
    {
      title: 'Potencial desaprovechado',
      image: 'collage/44.avif',
      text: 'Existen personas con capacidades excepcionales que no alcanzan reconocimiento debido a falta de oportunidades o habilidades prácticas para desenvolverse socialmente.',
      flipped: false
    },

    // PROBLEMA DE LOS GENIOS II
    {
      title: 'Inteligencia práctica',
      image: 'collage/5.jpg',
      text: 'La inteligencia práctica incluye saber comunicarse, negociar y comprender normas sociales. Estas habilidades permiten convertir conocimiento en oportunidades reales.',
      flipped: false
    },
    {
      title: 'Influencia familiar',
      image: 'collage/55.webp',
      text: 'El estilo de crianza influye en la seguridad personal y la capacidad de interactuar con figuras de autoridad. Algunos entornos fomentan iniciativa; otros promueven pasividad.',
      flipped: false
    },
    {
      title: 'Éxito como construcción social',
      image: 'collage/555.webp',
      text: 'El éxito es una combinación de talento, práctica prolongada, contexto histórico y habilidades sociales aprendidas. No es un fenómeno puramente individual.',
      flipped: false
    }

  ];

  toggle(card: CardItem) {
    card.flipped = !card.flipped;
  }
}
