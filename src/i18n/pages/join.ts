import type { Lang } from '../config';

type Card = { num: string; title: string; body: string };

export const join: Record<Lang, {
  seo: { title: string; description: string };
  hero: { kick: string; h1a: string; h1accent: string; sub: string };
  manifesto: { eyebrow: string; h2: string; paragraphs: string[] };
  values: { eyebrow: string; cards: Card[] };
  cta: { h2: string; sub: string; button: string };
}> = {
  en: {
    seo: {
      title: 'Join the Team',
      description: "We're a deliberately small group of senior B2B marketing strategists with a low tolerance for work that changes nothing. If that sounds like you, let's talk.",
    },
    hero: {
      kick: 'Join the team',
      h1a: "We're small on purpose. Every person here is someone we'd want ",
      h1accent: 'in the room when it matters.',
      sub: 'A curated network of senior B2B strategists across Europe and North America. Remote, flexible, and united mostly by a low tolerance for work that changes nothing.',
    },
    manifesto: {
      eyebrow: 'Who we are',
      h2: 'Senior people who never learned to leave the strategy alone.',
      paragraphs: [
        "The B2B Tinkerers doesn't grow by hiring juniors. We're a small collective of senior marketing strategists who spent years inside B2B companies before ending up here. Between us we've built teams, launched products, repositioned brands, and been on the receiving end of a few budget cuts that taught us more than the wins did.",
        "We work remotely, across time zones, on projects that matter. Nobody sits between the thinking and the doing: there's no hierarchy and there are no account managers. That's mostly a relief, and occasionally it means you're the one on the call at seven in the morning.",
        "A shared conviction holds us together better than a contract or a business card could: most B2B marketing underperforms because nobody ever really agreed on the strategy, and budget and tools have nothing to do with it.",
        "If you've spent your career frustrated by marketing that makes no visible difference to the business, you already know what we mean.",
      ],
    },
    values: {
      eyebrow: 'What we look for',
      cards: [
        { num: '01', title: "You've done this before", body: "We like enthusiasm, as long as it comes with senior experience. You've led marketing functions and built strategies from scratch, so you know what good looks like from having delivered it yourself." },
        { num: '02', title: 'You push back', body: "People who nod along are no use to us. We want the ones who ask the awkward question and will say 'that won't work' to a client who is paying us." },
        { num: '03', title: 'You strategize and you ship', body: "You'd rather ship something imperfect this month than present something flawless next quarter." },
        { num: '04', title: 'You think in business outcomes', body: "You can hold your own in a conversation about pipeline coverage and CAC payback, and you've had to defend a number to someone who didn't want to hear it." },
      ],
    },
    cta: {
      h2: 'No open positions. No application form.',
      sub: "If you saw yourself in any of this, get in touch. Some of the best people we work with did exactly that when we had nothing to offer them.",
      button: "Let's talk →",
    },
  },
  es: {
    seo: {
      title: 'Únete al equipo',
      description: 'Somos un grupo deliberadamente pequeño de estrategas senior de marketing B2B con poca paciencia para el trabajo que no cambia nada. Si encajas, hablemos.',
    },
    hero: {
      kick: 'Únete al equipo',
      h1a: 'Somos pequeños a propósito. Cada persona aquí es alguien a quien querríamos ',
      h1accent: 'en la sala cuando importa.',
      sub: 'Una red seleccionada de estrategas senior B2B por Europa y Norteamérica. En remoto, flexible, y unida sobre todo por la poca paciencia con el trabajo que no cambia nada.',
    },
    manifesto: {
      eyebrow: 'Quiénes somos',
      h2: 'Gente senior que nunca aprendió a dejar la estrategia en paz.',
      paragraphs: [
        'The B2B Tinkerers no crece fichando perfiles junior. Somos un colectivo pequeño de estrategas senior de marketing que pasó años dentro de empresas B2B antes de acabar aquí. Entre todos hemos montado equipos, lanzado productos, reposicionado marcas y comido unos cuantos recortes de presupuesto que nos enseñaron más que los aciertos.',
        'Trabajamos en remoto, entre husos horarios, en proyectos que importan. Nadie se interpone entre el pensar y el hacer: no hay jerarquía ni account managers. Casi siempre es un alivio, y de vez en cuando significa que te toca la llamada de las siete de la mañana.',
        'Nos une una convicción compartida, algo que pesa más que cualquier contrato o tarjeta de visita. Creemos que la mayor parte del marketing B2B rinde por debajo de su potencial porque nadie llegó a acordar de verdad la estrategia, y que el presupuesto y las herramientas no tienen nada que ver.',
        'Si te has pasado la carrera frustrándote con un marketing que no se nota en el negocio, ya sabes de qué hablamos.',
      ],
    },
    values: {
      eyebrow: 'Qué buscamos',
      cards: [
        { num: '01', title: 'Ya has hecho esto antes', body: 'Nos gusta el entusiasmo, siempre que venga con experiencia senior. Has dirigido funciones de marketing y construido estrategias desde cero, así que sabes cómo es un buen trabajo porque lo has sacado adelante tú.' },
        { num: '02', title: 'Plantas cara', body: 'La gente que asiente no nos sirve. Queremos a quien hace la pregunta incómoda y es capaz de decirle "eso no va a funcionar" a un cliente que nos está pagando.' },
        { num: '03', title: 'También ejecutas', body: 'Prefieres sacar algo imperfecto este mes a presentar algo impecable el trimestre que viene.' },
        { num: '04', title: 'Piensas en resultados de negocio', body: 'Te manejas bien en una conversación sobre cobertura de pipeline y payback del CAC, y has tenido que defender un número delante de alguien que no quería oírlo.' },
      ],
    },
    cta: {
      h2: 'Sin vacantes abiertas. Sin formulario de solicitud.',
      sub: 'Si te has reconocido en algo de esto, escríbenos. Algunas de las mejores personas con las que trabajamos lo hicieron cuando no teníamos nada que ofrecerles.',
      button: 'Hablemos →',
    },
  },
};
