import type { Lang } from '../config';

type ValueCard = { num: string; title: string; body: string };

export const about: Record<Lang, {
  seo: { title: string; description: string };
  hero: { kick: string; h1a: string; h1accent: string };
  manifesto: { eyebrow: string; h2: string; paragraphs: string[] };
  values: { eyebrow: string; cards: ValueCard[] };
  who: { eyebrow: string; h2: string; paragraphs: string[]; fitTitle: string; fit: string[]; notFitTitle: string; notFit: string[] };
  cta: { h2: string; sub: string; button: string };
}> = {
  en: {
    seo: {
      title: 'About',
      description: "We're not an agency. We're not a consultancy. We're the person you wish you'd hired sooner.",
    },
    hero: {
      kick: 'About us',
      h1a: "We're not an agency. We're not a consultancy. We're the person you ",
      h1accent: "wish you'd hired sooner.",
    },
    manifesto: {
      eyebrow: 'Who we are',
      h2: "A small group of B2B marketing experts who've seen what works — and what doesn't.",
      paragraphs: [
        "The B2B Tinkerers exists because most B2B companies spend too much on marketing that doesn't connect to business outcomes — and not enough on the thinking that would make it work.",
        "We're a deliberately small group of senior strategists with deep roots in B2B tech, industrial, and financial services markets. We've led marketing teams, built GTM motions from scratch, repositioned brands, and sat in the rooms where budgets get cut and strategies get questioned.",
        "We don't subcontract. We don't scale by adding junior staff. When you work with us, you get the senior thinking — every time.",
      ],
    },
    values: {
      eyebrow: 'How we think',
      cards: [
        { num: '01', title: 'Strategy before tactics', body: 'Most marketing problems are strategy problems wearing a tactics costume. We fix the strategy first — then the tactics follow.' },
        { num: '02', title: 'Honest over comfortable', body: "We'll tell you what we actually think, not what you want to hear. That's the only way the work produces real results." },
        { num: '03', title: 'Business outcomes, not marketing metrics', body: 'Impressions and MQLs are not the goal. Revenue, pipeline, and market position are. We keep score the way the business does.' },
        { num: '04', title: 'Small on purpose', body: "We don't want to be a 50-person agency. We want to do exceptional work for a small number of companies who take marketing seriously." },
      ],
    },
    who: {
      eyebrow: 'Who we work with',
      h2: 'B2B companies that are serious about growth — and honest about where they are.',
      paragraphs: [
        'We work best with B2B tech, industrial, and financial services companies — typically at an inflection point. Entering a new market. Scaling past founder-led sales. Repositioning after a pivot. Building the marketing function for the first time.',
        'What they have in common: a leadership team that knows marketing matters, and a willingness to do the work properly.',
      ],
      fitTitle: "You're a good fit if:",
      fit: [
        "Your marketing spend isn't generating predictable pipeline",
        "Sales and marketing aren't pulling in the same direction",
        "You're entering a new market or repositioning",
        'You need senior marketing leadership without the full-time cost',
        'You want honest feedback, not flattery',
      ],
      notFitTitle: "We're probably not the right fit if:",
      notFit: [
        'You need someone to execute without strategic input',
        "You're looking for the cheapest option — we're not the most expensive, but we're not competing on price either",
        'You want a large team with account managers and weekly status calls',
      ],
    },
    cta: {
      h2: "If this sounds like the kind of thinking your business needs, let's have a conversation.",
      sub: 'No pitch deck. No proposal on the first call. Just an honest conversation about where you are and whether we can help.',
      button: 'Get in touch →',
    },
  },
  es: {
    seo: {
      title: 'Quiénes somos',
      description: 'No somos una agencia. No somos una consultora. Somos la persona a la que ojalá hubieras contratado antes.',
    },
    hero: {
      kick: 'Quiénes somos',
      h1a: 'No somos una agencia. No somos una consultora. Somos la persona a la que ',
      h1accent: 'ojalá hubieras contratado antes.',
    },
    manifesto: {
      eyebrow: 'Quiénes somos',
      h2: 'Un grupo pequeño de expertos en marketing B2B que ha visto lo que funciona, y lo que no.',
      paragraphs: [
        'The B2B Tinkerers existe porque la mayoría de empresas B2B gasta demasiado en marketing que no conecta con resultados de negocio, y demasiado poco en el pensamiento que lo haría funcionar.',
        'Somos un grupo deliberadamente pequeño de estrategas senior con raíces profundas en los mercados B2B de tecnología, industria y servicios financieros. Hemos dirigido equipos de marketing, montado motions de GTM desde cero, reposicionado marcas y estado en las salas donde se recortan presupuestos y se cuestionan estrategias.',
        'No subcontratamos. No escalamos metiendo perfiles junior. Cuando trabajas con nosotros, tienes el pensamiento senior. Siempre.',
      ],
    },
    values: {
      eyebrow: 'Cómo pensamos',
      cards: [
        { num: '01', title: 'Estrategia antes que táctica', body: 'La mayoría de problemas de marketing son problemas de estrategia disfrazados de táctica. Arreglamos la estrategia primero, y luego la táctica cae sola.' },
        { num: '02', title: 'Honestos antes que cómodos', body: 'Te diremos lo que pensamos de verdad, no lo que quieres oír. Es la única forma de que el trabajo dé resultados reales.' },
        { num: '03', title: 'Resultados de negocio, no métricas de marketing', body: 'Las impresiones y los MQL no son el objetivo. Lo son los ingresos, el pipeline y la posición de mercado. Llevamos la cuenta como la lleva el negocio.' },
        { num: '04', title: 'Pequeños a propósito', body: 'No queremos ser una agencia de 50 personas. Queremos hacer un trabajo excepcional para un número reducido de empresas que se toman el marketing en serio.' },
      ],
    },
    who: {
      eyebrow: 'Con quién trabajamos',
      h2: 'Empresas B2B que van en serio con el crecimiento, y son honestas sobre dónde están.',
      paragraphs: [
        'Trabajamos mejor con empresas B2B de tecnología, industria y servicios financieros, normalmente en un punto de inflexión. Entrando en un mercado nuevo. Escalando más allá de la venta liderada por el fundador. Reposicionándose tras un pivote. Montando la función de marketing por primera vez.',
        'Lo que tienen en común: un equipo directivo que sabe que el marketing importa, y disposición a hacer el trabajo bien.',
      ],
      fitTitle: 'Encajas bien si:',
      fit: [
        'Tu inversión en marketing no genera pipeline predecible',
        'Ventas y marketing no reman en la misma dirección',
        'Estás entrando en un mercado nuevo o reposicionándote',
        'Necesitas liderazgo de marketing senior sin el coste de un full-time',
        'Quieres feedback honesto, no halagos',
      ],
      notFitTitle: 'Probablemente no encajemos si:',
      notFit: [
        'Necesitas a alguien que ejecute sin aportar estrategia',
        'Buscas la opción más barata. No somos los más caros, pero tampoco competimos por precio',
        'Quieres un equipo grande con account managers y calls de seguimiento semanales',
      ],
    },
    cta: {
      h2: 'Si esto suena al tipo de pensamiento que tu negocio necesita, hablemos.',
      sub: 'Sin dosier de venta. Sin propuesta en la primera llamada. Solo una conversación honesta sobre dónde estás y si podemos ayudar.',
      button: 'Hablemos →',
    },
  },
};
