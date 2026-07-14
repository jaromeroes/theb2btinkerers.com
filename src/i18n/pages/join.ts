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
      description: "We're a deliberately small group of senior B2B marketing strategists who challenge the status quo. If that resonates, let's talk.",
    },
    hero: {
      kick: 'Join the team',
      h1a: "We're small on purpose. Every person here is someone we'd want ",
      h1accent: 'in the room when it matters.',
      sub: 'A curated network of senior B2B strategists across Europe and North America. Remote, flexible, united by the obsession with work that actually moves the needle.',
    },
    manifesto: {
      eyebrow: 'Who we are',
      h2: 'A small group of experts with the itch to challenge the status quo.',
      paragraphs: [
        "The B2B Tinkerers is not an agency that scales by adding junior staff. We are a deliberately small collective of senior marketing strategists who've spent years inside B2B companies. We've built teams, launched products, repositioned brands, and sat in the rooms where strategies get funded or killed.",
        'We work remotely, across time zones, on projects that matter. No hierarchy, no account managers, no layers between the thinking and the doing. When a client works with us, they get the senior person. Always.',
        "What holds us together is not a contract or a business card. It's a shared belief that most B2B marketing is underperforming not because of budget or tools but because of misaligned strategy. We exist to fix that.",
        "If you've spent your career getting frustrated by marketing that doesn't connect to business outcomes, you already know what we mean.",
      ],
    },
    values: {
      eyebrow: 'What we look for',
      cards: [
        { num: '01', title: "You've done this before", body: "Senior experience, not enthusiasm alone. You've led marketing functions, built strategies from scratch, and know what good looks like because you've delivered it." },
        { num: '02', title: 'You challenge, not comply', body: "We don't want people who nod along. We want people who push back, ask hard questions, and aren't afraid to say 'that won't work' when it won't." },
        { num: '03', title: 'You ship, not just strategise', body: 'Ideas without execution are just opinions. You have a bias for getting things done, testing, learning, and iterating.' },
        { num: '04', title: 'You think in business outcomes', body: 'Not impressions, not MQLs, not vanity dashboards. Revenue, pipeline, market position. You keep score the way the business does.' },
      ],
    },
    cta: {
      h2: 'No open positions. No application form.',
      sub: "If what you've read here resonates, reach out. The best conversations start without a job description.",
      button: "Let's talk →",
    },
  },
  es: {
    seo: {
      title: 'Únete al equipo',
      description: 'Somos un grupo deliberadamente pequeño de estrategas senior de marketing B2B que reta el statu quo. Si te resuena, hablemos.',
    },
    hero: {
      kick: 'Únete al equipo',
      h1a: 'Somos pequeños a propósito. Cada persona aquí es alguien a quien querríamos ',
      h1accent: 'en la sala cuando importa.',
      sub: 'Una red seleccionada de estrategas senior B2B por Europa y Norteamérica. En remoto, flexible, unida por la obsesión con el trabajo que de verdad mueve la aguja.',
    },
    manifesto: {
      eyebrow: 'Quiénes somos',
      h2: 'Un grupo pequeño de expertos con la comezón de retar el statu quo.',
      paragraphs: [
        'The B2B Tinkerers no es una agencia que escala metiendo perfiles junior. Somos un colectivo deliberadamente pequeño de estrategas senior de marketing que ha pasado años dentro de empresas B2B. Hemos montado equipos, lanzado productos, reposicionado marcas y estado en las salas donde las estrategias se financian o se matan.',
        'Trabajamos en remoto, entre husos horarios, en proyectos que importan. Sin jerarquía, sin account managers, sin capas entre el pensar y el hacer. Cuando un cliente trabaja con nosotros, tiene a la persona senior. Siempre.',
        'Lo que nos une no es un contrato ni una tarjeta de visita. Es la convicción compartida de que la mayoría del marketing B2B rinde por debajo de su potencial no por presupuesto ni herramientas, sino por una estrategia desalineada. Existimos para arreglar eso.',
        'Si te has pasado la carrera frustrándote con un marketing que no conecta con resultados de negocio, ya sabes de qué hablamos.',
      ],
    },
    values: {
      eyebrow: 'Qué buscamos',
      cards: [
        { num: '01', title: 'Ya has hecho esto antes', body: 'Experiencia senior, no solo entusiasmo. Has dirigido funciones de marketing, construido estrategias desde cero y sabes cómo es lo bueno porque lo has entregado.' },
        { num: '02', title: 'Retas, no acatas', body: 'No queremos gente que asienta. Queremos gente que planta cara, hace preguntas difíciles y no teme decir "eso no va a funcionar" cuando no va a funcionar.' },
        { num: '03', title: 'Ejecutas, no solo estrategizas', body: 'Las ideas sin ejecución son solo opiniones. Tienes sesgo por sacar las cosas adelante: probar, aprender e iterar.' },
        { num: '04', title: 'Piensas en resultados de negocio', body: 'Ni impresiones, ni MQL, ni dashboards de vanidad. Ingresos, pipeline, posición de mercado. Llevas la cuenta como la lleva el negocio.' },
      ],
    },
    cta: {
      h2: 'Sin vacantes abiertas. Sin formulario de solicitud.',
      sub: 'Si lo que has leído aquí te resuena, escríbenos. Las mejores conversaciones empiezan sin una descripción de puesto.',
      button: 'Hablemos →',
    },
  },
};
