import type { Lang } from '../config';
import type { ServiceSlug } from '../services-nav';

/* ─────────── Services index (/services listing) ─────────── */

type IndexCard = { slug: ServiceSlug; title: string; body: string };

export const servicesIndex: Record<Lang, {
  seo: { title: string; description: string };
  hero: { kick: string; h1a: string; h1accent: string; sub: string };
  more: string;
  cards: IndexCard[];
  cta: { h2: string; sub: string; button: string };
}> = {
  en: {
    seo: {
      title: 'B2B Marketing Services | The B2B Tinkerers',
      description: 'Six ways we help B2B tech, industrial, and financial services companies get more from marketing: strategy, positioning, GTM, AI, and fractional leadership.',
    },
    hero: {
      kick: 'What we do',
      h1a: 'Six ways we turn marketing into a ',
      h1accent: 'growth engine.',
      sub: 'We help B2B tech, industrial, and financial services companies get more from marketing without spending more. Understanding your business comes first, and the strategy follows from it.',
    },
    more: 'Learn more →',
    cards: [
      { slug: 'marketing-audit', title: 'Marketing Audit', body: 'Honest assessment of where you are: positioning, team, budget, and alignment with business goals.' },
      { slug: 'ai-strategy', title: 'AI & Hybrid Marketing Strategy', body: 'The marketing team of the future will be part human, part automated. We help you define the hybrid model.' },
      { slug: 'brand-strategy', title: 'Brand Strategy & Positioning', body: "Define what you stand for, who you're for, and why someone should choose you. Everything else is built on it." },
      { slug: 'go-to-market', title: 'Go-To-Market Strategy', body: 'A clear GTM motion that connects your positioning to pipeline, from channels and messages to timing.' },
      { slug: 'marketing-plan', title: 'Marketing Plan & Business Alignment', body: 'A marketing plan that reflects real business objectives and that your team will actually follow.' },
      { slug: 'fractional-cmo', title: 'Fractional CMO', body: 'Senior marketing leadership without the full-time cost. We lead your team and maintain direction.' },
    ],
    cta: {
      h2: "Not sure which service fits? Let's figure it out together.",
      sub: 'Every engagement starts with a conversation. No pitch. No commitment. Just an honest look at where you are and where you could be.',
      button: "Let's talk →",
    },
  },
  es: {
    seo: {
      title: 'Servicios de marketing B2B | The B2B Tinkerers',
      description: 'Estrategia, posicionamiento, GTM, IA y CMO fraccional para que empresas B2B de tecnología, industria y servicios financieros saquen más partido al marketing.',
    },
    hero: {
      kick: 'Qué hacemos',
      h1a: 'Seis formas de convertir el marketing en un ',
      h1accent: 'motor de crecimiento.',
      sub: 'Ayudamos a empresas B2B de tecnología, industria y servicios financieros a sacar más partido al marketing sin gastar más. Primero entendemos tu negocio, y la estrategia sale de ahí.',
    },
    more: 'Saber más →',
    cards: [
      { slug: 'marketing-audit', title: 'Auditoría de marketing', body: 'Una evaluación honesta de dónde estás: posicionamiento, equipo, presupuesto y alineación con los objetivos de negocio.' },
      { slug: 'ai-strategy', title: 'Estrategia de marketing con IA e híbrida', body: 'El equipo de marketing del futuro será en parte humano y en parte automatizado. Te ayudamos a definir el modelo híbrido.' },
      { slug: 'brand-strategy', title: 'Estrategia de marca y posicionamiento', body: 'Define qué defiendes, para quién eres y por qué alguien debería elegirte. Todo lo demás se apoya en eso.' },
      { slug: 'go-to-market', title: 'Estrategia Go-To-Market', body: 'Un motion de GTM claro que conecta tu posicionamiento con el pipeline: canales, mensajes y timing.' },
      { slug: 'marketing-plan', title: 'Plan de marketing y alineación con negocio', body: 'Un plan de marketing que refleja objetivos de negocio reales y que tu equipo va a seguir de verdad.' },
      { slug: 'fractional-cmo', title: 'CMO fraccional', body: 'Liderazgo de marketing senior sin el coste de un CMO a tiempo completo. Dirigimos tu equipo y mantenemos el rumbo.' },
    ],
    cta: {
      h2: '¿No sabes qué servicio encaja? Lo averiguamos juntos.',
      sub: 'Cada proyecto empieza con una conversación. Sin pitch. Sin compromiso. Solo un repaso honesto de dónde estás y de hasta dónde podrías llegar.',
      button: 'Hablemos →',
    },
  },
};

/* ─────────── Shared section labels for detail pages ─────────── */

export const servicesCommon: Record<Lang, {
  challenge: string;
  whatWeDeliver: string;
  howWeWork: string;
  theNumbers: string;
  caseInPoint: string;
  relatedInsights: string;
  allArticles: string;
  readMore: string;
}> = {
  en: {
    challenge: 'The challenge',
    whatWeDeliver: 'What we deliver',
    howWeWork: 'How we work',
    theNumbers: 'The numbers',
    caseInPoint: 'Case in point',
    relatedInsights: 'Related insights',
    allArticles: 'All articles →',
    readMore: 'Read more →',
  },
  es: {
    challenge: 'El reto',
    whatWeDeliver: 'Qué entregamos',
    howWeWork: 'Cómo trabajamos',
    theNumbers: 'Los números',
    caseInPoint: 'Un caso real',
    relatedInsights: 'Insights relacionados',
    allArticles: 'Todos los artículos →',
    readMore: 'Leer más →',
  },
};

/* ─────────── Per-service detail content ─────────── */

type DeliverCard = { label: string; desc: string };
type ProcessStep = { num: string; title: string; body: string; tag: string };
type Stat = { num: string; label: string; source: string };

export type ServiceDetail = {
  seo: { title: string; description: string };
  heroNum: string;
  heroImgAlt: string;
  titleLines: string[];
  subtitle: string;
  problem: { titleLines: string[]; paragraphs: string[] };
  deliver: { h2: string; intro: string; cards: DeliverCard[] };
  process: { h2: string; steps: ProcessStep[] };
  stats: { h2: string; items: Stat[] };
  caseStudy: { h2: string; paragraphs: string[]; imgAlt: string };
  relatedH2: string;
  cta: { h2: string; sub: string };
};

export const serviceDetail: Record<Lang, Record<ServiceSlug, ServiceDetail>> = {
  en: {
    'marketing-audit': {
      seo: { title: 'B2B Marketing Audit | The B2B Tinkerers', description: 'An honest assessment of where your marketing stands. We audit positioning, team, budget, and alignment with business goals for B2B companies.' },
      heroNum: 'Service 01',
      heroImgAlt: 'Scattered analytics reports and dashboards on a desk with a magnifying glass',
      titleLines: ['Marketing Audit'],
      subtitle: "You suspect your marketing isn't working as hard as it should, but you can't tell where the gaps are, what's driving results, and what's just noise. We find out.",
      problem: {
        titleLines: ["You're spending.", 'But are you investing?'],
        paragraphs: [
          "Marketing budgets keep growing, headcount goes up, and new tools keep arriving in the stack, but pipeline doesn't follow. When the board asks why, there's no clear answer. The team is working hard, but nobody has agreed on which part of that work is holding the numbers up.",
          "Campaigns, content, and events keep the team busy, and the activity metrics look healthy enough. Those metrics can't show what produces revenue, and that's exactly what leadership asks about. The gap between what marketing does and what the business needs widens a little more every quarter nobody measures it.",
          "Without a clear picture of what's working, every decision is a guess, and the guesses pile up. You keep funding the channel that had a good month two years ago. You cut the one nobody happened to defend in the meeting. Eventually leadership stops trusting marketing altogether, and that's the expensive part, because winning that trust back takes far longer than losing it did.",
        ],
      },
      deliver: {
        h2: "A clear picture of what's working, what's wasted, and what to fix first.",
        intro: "You get a practical, honest assessment of your current marketing, based on your data, your market, and what the business is trying to achieve. A 90-page report full of best practices wouldn't help you act on any of it, so we don't write one.",
        cards: [
          { label: 'Positioning & messaging review', desc: 'How your brand shows up versus how it should. We assess whether your positioning is clear, differentiated, and consistent across every touchpoint your buyers encounter.' },
          { label: 'Channel & budget audit', desc: 'Where money goes, what it produces, and what to cut or double down on. We map spend to outcomes so you can see which channels earn their keep and which are just burning budget.' },
          { label: 'Sales-marketing alignment assessment', desc: 'How well the two functions connect and where the handoffs break. We look at lead definitions, SLAs, feedback loops, and shared metrics to find the friction that costs you pipeline.' },
          { label: 'Prioritized recommendations with business impact', desc: 'Out of the 50 ideas we could hand you, we pick the five that will change something, each with its expected impact, the effort it takes, and a clear rationale tied to your business objectives.' },
        ],
      },
      process: {
        h2: 'From kickoff to recommendations in 3-4 weeks.',
        steps: [
          { num: '01', title: 'Discovery', body: 'Stakeholder interviews, data collection, access to tools and dashboards. We learn how your marketing works before we judge it.', tag: 'Week 1' },
          { num: '02', title: 'Analysis', body: 'A close look at channels, content, pipeline data, and competitor positioning. We follow the numbers and talk to the people who know the reality on the ground.', tag: 'Week 2' },
          { num: '03', title: 'Diagnosis', body: 'Pattern identification, gap analysis, opportunity mapping. This is where we connect what we found to what it means for your business.', tag: 'Week 3' },
          { num: '04', title: 'Recommendations', body: 'Presentation to leadership with a prioritized action plan, specific enough that someone can own each item by the end of the meeting.', tag: 'Week 4' },
        ],
      },
      stats: {
        h2: 'The cost of flying blind.',
        items: [
          { num: '65%', label: 'of B2B marketing budgets are considered ineffective by the companies spending them', source: 'Forrester 2024' },
          { num: '$1T', label: 'lost annually due to sales and marketing misalignment across B2B', source: 'G2 / Industry 2024' },
          { num: '27%', label: 'faster profit growth in companies with tightly aligned marketing and sales', source: 'ZoomInfo / Marketo 2024' },
        ],
      },
      caseStudy: {
        h2: 'A manufacturing company cut marketing waste by 40% and redirected budget to channels that actually produced pipeline.',
        paragraphs: [
          'The company was spreading its marketing budget across eight channels with no clear attribution model. Every channel had an internal champion, and nobody could prove which ones were working. There was plenty of activity and only modest pipeline, and leadership\'s frustration with marketing ROI kept growing.',
          'The audit showed that three of those eight channels drove roughly 80% of qualified leads. Two produced almost nothing measurable. The remaining three had potential but were underfunded and poorly executed. The problem wasn\'t the total budget. It was how it was distributed.',
          'The company redirected spend, simplified the tech stack, and focused execution on the channels with proven results. Within a quarter, pipeline quality improved noticeably while total marketing spend actually went down. The marketing team had been defending its budget; now it could show a clear contribution to revenue.',
        ],
        imgAlt: 'Printed data visualizations and charts with pencil annotations',
      },
      relatedH2: "What we're writing about marketing and strategy.",
      cta: { h2: "Not sure what's working and what's not? That's exactly where we start.", sub: '30 minutes. No pitch. Just an honest look at where your marketing stands.' },
    },
    'ai-strategy': {
      seo: { title: 'AI & Hybrid Marketing Strategy for B2B | The B2B Tinkerers', description: "AI won't replace your marketing team, but teams that use it well will outcompete the ones that don't. We help B2B companies build a hybrid model that works." },
      heroNum: 'Service 05',
      heroImgAlt: 'Circuit board pattern merging with organic leaf veins',
      titleLines: ['AI & Hybrid', 'Marketing Strategy'],
      subtitle: "AI won't replace your marketing team, but teams that use it well will outcompete the ones that don't. We help B2B companies find where AI adds real value in their marketing operation, then build the workflows that make it stick.",
      problem: {
        titleLines: ['What is AI actually supposed', 'to do for your marketing team?'],
        paragraphs: [
          'There is enormous pressure to "do something with AI" right now. Leadership reads the headlines, sees competitors announcing AI initiatives, and wants to know the plan by Friday. If they\'re honest, most B2B marketing teams have no idea what AI should do for them, and no comfortable way to say so out loud.',
          'So teams experiment. Someone starts drafting blog posts in ChatGPT, someone else tries a tool for ad copy, a third person has a go at automated reporting. The tools are powerful, but none of these experiments connects to a strategy or outlives the person who set it up, so when leadership asks about ROI there is nothing to point at.',
          'Worse, some teams rush to automate processes that were broken to begin with, and AI pointed at a bad content strategy just produces bad content faster. The usual question is "where can we use AI?" A more useful one is "where is human judgment worth the time it takes, and where is it only habit?" Teams that answer that honestly end up with an advantage that is hard to copy, because it lives in how they work.',
        ],
      },
      deliver: {
        h2: 'A practical AI strategy built around the team you have.',
        intro: "Every recommendation starts from what your team can absorb and the workflows you run today. If it wouldn't change how the operation works day to day, it doesn't make the list.",
        cards: [
          { label: 'AI readiness assessment', desc: "A clear-eyed look at where your team, data, and processes stand today and what's ready for AI, before anyone starts buying tools or building workflows." },
          { label: 'Content and campaign automation strategy', desc: 'A practical map of what to automate, what to augment, and what to leave alone because it needs human judgment, including where the handoffs fall.' },
          { label: 'Tool selection and stack integration', desc: 'We pick tools that fit your workflows and your existing stack, and that your team will use, whether or not they\'re the trendiest or the cheapest on the market.' },
          { label: 'Team capability building', desc: 'Hands-on training so your team works with AI confidently and competently, and can keep going without external consultants, us included.' },
        ],
      },
      process: {
        h2: 'From assessment to operational AI in 6-8 weeks.',
        steps: [
          { num: '01', title: 'Assessment', body: 'Current workflows, team capabilities, the data you have, tool audit. Recommendations come later, once we know where you\'re starting from.', tag: 'Week 1-2' },
          { num: '02', title: 'Strategy', body: 'Use case prioritization, build vs buy decisions, integration architecture. This is the stage that settles where AI fits and where it doesn\'t.', tag: 'Week 3-4' },
          { num: '03', title: 'Pilot', body: 'We implement 2-3 high-impact workflows, measure the results, and iterate, so you have real proof of value before committing to a full rollout.', tag: 'Week 5-6' },
          { num: '04', title: 'Scale', body: 'Team training, documentation, rollout plan for remaining use cases. Everything your team needs to run this without us.', tag: 'Week 7-8' },
        ],
      },
      stats: {
        h2: 'The AI gap is already here.',
        items: [
          { num: '64%', label: 'of B2B marketers say AI will significantly impact their strategy but only 19% have a formal plan', source: 'Salesforce State of Marketing 2024' },
          { num: '40%', label: 'productivity increase in marketing teams that have successfully integrated AI into core workflows', source: 'McKinsey 2024' },
          { num: '5x', label: 'faster content production with AI-augmented workflows while maintaining quality standards', source: 'HubSpot 2024' },
        ],
      },
      caseStudy: {
        h2: 'A B2B SaaS company reduced content production time by 60% and increased output quality by integrating AI into their editorial workflow.',
        paragraphs: [
          'The marketing team was producing 4 pieces of content per month and struggling to keep up. Demand from sales for case studies, thought leadership, and product content was growing, but headcount was not. The team was stuck in a cycle of producing just enough to stay visible, without the bandwidth to focus on quality or strategy.',
          'We mapped their editorial workflow end to end, identified where AI could handle research, outlines, and first drafts, and built a human-AI pipeline with clear quality gates. Each piece still went through human editorial review, but the time spent on the low-value production work dropped dramatically.',
          'Within 8 weeks, output went from 4 to 12 pieces per month, and the team was spending more of its time on strategy, positioning, and distribution. Quality went up because writers were editing and refining drafts instead of staring at blank pages. The bottleneck moved from "can we produce enough" to "what should we produce next."',
        ],
        imgAlt: 'Human fingerprint pattern merging with digital circuit traces',
      },
      relatedH2: "What we're writing about AI and marketing.",
      cta: { h2: 'Ready to make AI work for your marketing team?', sub: '30 minutes. No pitch. Just an honest conversation about where AI can help your operation.' },
    },
    'brand-strategy': {
      seo: { title: 'B2B Brand Strategy & Positioning', description: 'Most B2B brands are built by accident. We build them on purpose. Positioning, messaging, and brand strategy for B2B companies.' },
      heroNum: 'Service 02',
      heroImgAlt: 'Brand strategy documents and color swatches on a conference table',
      titleLines: ['Brand Strategy', '& Positioning'],
      subtitle: "Most B2B companies compete on product features and price. The ones that win compete on clarity: they know exactly who they are and who they serve, and they can say why that matters. That kind of clarity has to be built on purpose.",
      problem: {
        titleLines: ['Everything you say about yourself,', 'your competitor could say too.'],
        paragraphs: [
          "Most B2B brands are accidental. Built from a founder's pitch that stuck, a tagline nobody hated enough to change, and a website that says roughly the same thing as every competitor's. That holds up for longer than you would expect, and then it stops holding up all at once.",
          'The cost is invisible at first. You lose a deal and blame pricing. A prospect picks a competitor whose product isn\'t as good but whose story is sharper. Your sales team describes what you do five different ways. Marketing produces content that reads as generic because nobody ever agreed on what makes you different. None of this shows up as a line item, and the pipeline drains slowly enough that you put it down to something else.',
          'Your product may well be better. It won\'t matter much while your positioning is fuzzy, because the market reliably picks the company that communicates more clearly. Buyers have no patience for working out your value on your behalf, and no particular reason to.',
        ],
      },
      deliver: {
        h2: 'A positioning and messaging system your whole company can use.',
        intro: 'We build a practical framework that gives sales, marketing, and leadership one shared language for what you do, who you do it for, and why it matters.',
        cards: [
          { label: 'Market & competitor positioning map', desc: 'Where you sit relative to the alternatives, how buyers see you next to competitors, and which gaps in the market you could realistically own, all based on real market signals.' },
          { label: 'ICP definition and buyer journey', desc: "A practical map of how your best customers buy: who you're really selling to, what they care about at each stage, and what makes them choose you." },
          { label: 'Core messaging architecture', desc: 'Your value proposition, key messages by audience, and the proof points behind them, in one framework that works across your website, sales decks, campaigns, and conversations.' },
          { label: 'Brand voice and tone guidelines', desc: 'How you sound and write, including the words you use and the ones you avoid. The guidelines are practical enough for your team to apply without anyone having to police the brand.' },
        ],
      },
      process: {
        h2: 'From diagnosis to delivery in 6-8 weeks.',
        steps: [
          { num: '01', title: 'Discovery', body: 'Stakeholder interviews, a close study of competitors, an audit of your current positioning. We form opinions only after talking to your team and your customers and looking hard at your market.', tag: 'Week 1-2' },
          { num: '02', title: 'Strategy', body: 'Positioning framework, value proposition, ICP definition. Most of the difficult trade-offs get made at this stage. We facilitate the decisions, and you own them.', tag: 'Week 3-4' },
          { num: '03', title: 'Build', body: 'Messaging architecture, brand voice guidelines, visual direction brief: the material your team will use to put the strategy to work.', tag: 'Week 5-6' },
          { num: '04', title: 'Activate', body: 'Team workshop, rollout plan, internal adoption. A brand strategy that lives in a slide deck is worthless. We make sure it reaches the people who need it.', tag: 'Week 7-8' },
        ],
      },
      stats: {
        h2: 'Why positioning is not optional.',
        items: [
          { num: '77%', label: 'of B2B buyers say brand is a critical factor in their purchase decision', source: 'Gartner 2024' },
          { num: '2.5x', label: 'higher win rates for companies with clear, differentiated positioning', source: 'Forrester 2024' },
          { num: '60%', label: 'of B2B companies cannot clearly articulate what makes them different', source: 'LinkedIn B2B Institute 2024' },
        ],
      },
      caseStudy: {
        h2: 'A SaaS company repositioned from "feature-rich" to "category leader" and doubled inbound pipeline in 6 months.',
        paragraphs: [
          'The company had a strong product and a loyal customer base. But every pitch started with a feature comparison. Prospects were evaluating them as one of four similar vendors, and price was becoming the deciding factor.',
          'We ran a positioning sprint, and the insight was that customers bought them because the platform eliminated a specific operational bottleneck, one that cost mid-market companies between 15 and 40 hours per month. That was the position: not "we do more" but "we remove this problem entirely."',
          'The repositioning cascaded through everything: website, sales deck, outbound sequences, event messaging. Within six months, inbound pipeline had doubled. Average deal size increased by 30% because they were no longer competing on price. The sales team reported that conversations changed. Prospects started saying "we heard you\'re the ones who solve [specific problem]" instead of "can you walk me through your features?"',
        ],
        imgAlt: 'Strategic mapping diagram on a whiteboard with connected nodes',
      },
      relatedH2: "What we're writing about brand and strategy.",
      cta: { h2: 'Ready to own your position in the market?', sub: '30 minutes. No pitch. Just an honest conversation about where your brand stands and where it could go.' },
    },
    'go-to-market': {
      seo: { title: 'B2B Go-To-Market Strategy | The B2B Tinkerers', description: 'A clear GTM motion that connects positioning to pipeline. Market entry, channel strategy, and demand generation for B2B companies.' },
      heroNum: 'Service 03',
      heroImgAlt: 'Wall map with pins and colored threads connecting different points',
      titleLines: ['Go-To-Market', 'Strategy'],
      subtitle: "A GTM strategy answers four questions: who are we selling to, what do we say, where do we show up, and how do sales and marketing move together. We build it from scratch or fix what's broken.",
      problem: {
        titleLines: ['The product works.', 'Getting it in front of the right people is still guesswork.'],
        paragraphs: [
          'You have a good product, maybe even a great one. What you don\'t have is a systematic way to get it in front of the right buyers at the right time. Leads trickle in from channels nobody chose deliberately. Some deals close and nobody can explain why those and not the others, which makes growth feel like weather: something that happens to you.',
          'Meanwhile sales and marketing are both busy, each doing its own thing and pulling in different directions. Sales blames marketing for lead quality, marketing blames sales for follow-up, and the pipeline stays unpredictable while the board keeps asking the same question: when does this become a machine?',
          'Entering a new market without a playbook is where this gets expensive. Companies assume that what worked in one geography or segment will transfer to the next, and it rarely does. The gap between product-market fit and repeatable revenue is where most B2B companies stall, and the product is almost never the reason. The go-to-market motion simply never got built properly.',
        ],
      },
      deliver: {
        h2: 'The playbook that connects your product to your pipeline.',
        intro: 'The result is a working GTM motion with clear ownership and measurable targets, plus a shared plan that sales and marketing execute together.',
        cards: [
          { label: 'Market entry or expansion planning', desc: 'Which segments and geographies to go after, in what order, and with what resources, laid out in a roadmap prioritized by market size, competitive intensity, and your real capacity to win.' },
          { label: 'Channel mix and prioritization', desc: 'Where to show up, what to invest in, and what to skip. The channel strategy follows where your buyers spend their attention, not where everyone else is spending their budget.' },
          { label: 'Demand generation architecture', desc: 'The engine that turns awareness into qualified pipeline: clear stages, conversion targets, and content mapped to every step of the buyer journey, connected so each tactic feeds the next.' },
          { label: 'Sales and marketing playbook', desc: 'How both teams work as one: messaging by segment, lead handoff criteria, shared pipeline targets, and a common language that ends the usual finger-pointing.' },
        ],
      },
      process: {
        h2: 'From strategy to motion in 8-10 weeks.',
        steps: [
          { num: '01', title: 'Market assessment', body: 'Market sizing, segment analysis, competitive landscape, buyer research.', tag: 'Week 1-2' },
          { num: '02', title: 'Strategy design', body: 'Positioning per segment, channel strategy, messaging by audience, pricing validation. Everything downstream depends on what gets decided here.', tag: 'Week 3-5' },
          { num: '03', title: 'Playbook build', body: 'Campaign frameworks, content plan, sales enablement materials, KPI dashboard, all ready for your teams to use straight away.', tag: 'Week 6-8' },
          { num: '04', title: 'Launch support', body: 'First campaign execution, team alignment, weekly standup cadence. We stay involved until the motion is running and the team owns it.', tag: 'Week 9-10' },
        ],
      },
      stats: {
        h2: 'Why GTM strategy separates growers from starters.',
        items: [
          { num: '72%', label: 'of companies that miss revenue targets cite poor go-to-market execution as the primary cause', source: 'SBI Growth Advisory 2024' },
          { num: '3.5x', label: 'higher revenue growth for B2B companies with a documented and aligned GTM strategy', source: 'McKinsey 2024' },
          { num: '45%', label: 'of B2B product launches fail to meet revenue expectations within the first year', source: 'Gartner 2024' },
        ],
      },
      caseStudy: {
        h2: 'An industrial tech company entered a new European market and built a qualified pipeline of $2.2M (€2M) in 5 months.',
        paragraphs: [
          'The company had strong product-market fit in their home market. Customers loved the product, retention was high, and the sales team knew how to close. But when they decided to expand into a new European geography, they quickly discovered that none of their existing playbooks translated. The buyer profile was different and the competitors unfamiliar, and the channels that worked at home generated nothing.',
          'We built a market-specific GTM motion from the ground up. It started with deep buyer research in the target market, followed by localized messaging that spoke to the problems and priorities of that specific audience. We designed a channel strategy focused on the two or three places where their ideal buyers spent their time, and we created a sales enablement kit that gave the local team everything they needed to have sharp, relevant conversations from day one.',
          'Within five months they had a qualified pipeline worth over $2.2M (€2M) and their first three closed deals in the new market. The motion was also repeatable: the same framework has since been adapted for a second market expansion, with similar early results.',
        ],
        imgAlt: 'Vintage globe with small flag pins marking locations',
      },
      relatedH2: "What we're writing about GTM and growth strategy.",
      cta: { h2: "Have a product that works and a pipeline you can't predict?", sub: '30 minutes. No pitch. Just an honest conversation about your market and your motion.' },
    },
    'marketing-plan': {
      seo: { title: 'B2B Marketing Plan & Business Alignment | The B2B Tinkerers', description: 'A marketing plan built on real business objectives, and one your team will actually follow. Quarterly roadmaps, KPIs, and budget allocation for B2B companies.' },
      heroNum: 'Service 04',
      heroImgAlt: 'Quarterly timeline cards arranged in rows with priority blocks',
      titleLines: ['Marketing Plan &', 'Business Alignment'],
      subtitle: 'Most marketing plans are written for the board deck. Ours start from the business and work backwards to a quarterly roadmap your team can own and your leadership can trust.',
      problem: {
        titleLines: ['The plan looked right in January.', 'By March nobody was opening the file.'],
        paragraphs: [
          "Plans like that are built for the board presentation, and the people who have to execute them come second. The document gets filed away while the team goes back to doing what it was already doing.",
          'Behind that sits a disconnect between what leadership expects and what marketing delivers. Leadership wants pipeline, revenue, and market share, while marketing reports impressions, clicks, and content output. Neither side is being unreasonable. They work from different playbooks, and nobody was ever given the job of reconciling the two.',
          'Teams end up running on tactics with no strategic thread. Campaigns launch because "we always do this." Budget gets allocated based on last year\'s plan plus 10%. Marketing metrics don\'t connect to business outcomes, and when the CEO asks "what did marketing produce this quarter?" the answer is either silence or a spreadsheet that raises more questions than it answers.',
        ],
      },
      deliver: {
        h2: 'A plan your team will actually follow.',
        intro: 'Strategy documents tend to run to 60 pages that nobody reads. Ours is a practical plan that ties marketing activity to business outcomes, makes priorities clear to everyone on the team, and still holds up when reality changes.',
        cards: [
          { label: 'Annual and quarterly marketing roadmaps', desc: 'What happens when, who owns it, and how it fits the business calendar. Quarterly milestones and built-in review points let you adjust the plan without starting over.' },
          { label: 'OKR and KPI framework aligned to business goals', desc: 'The metrics leadership cares about, like revenue, pipeline, and market share, chosen because they show whether marketing is moving the business forward.' },
          { label: 'Budget allocation and ROI model', desc: "Where every dollar and euro goes and what it's expected to produce. A transparent budget model that connects spend to outcomes so you can defend every line item and reallocate with confidence." },
          { label: 'Cross-functional alignment workshops', desc: 'Sales, product, and marketing in the same room, working to the same goals, because a marketing plan that only marketing believes in is a wish list.' },
        ],
      },
      process: {
        h2: 'From business objectives to marketing roadmap in 4-6 weeks.',
        steps: [
          { num: '01', title: 'Business immersion', body: 'Revenue targets, growth priorities, team capacity, leadership expectations. Nothing related to marketing gets touched until we understand how the business works.', tag: 'Week 1' },
          { num: '02', title: 'Strategic framework', body: 'OKRs, channel strategy, budget model, measurement framework: the backbone that ties every marketing activity to a business objective.', tag: 'Week 2-3' },
          { num: '03', title: 'Roadmap build', body: 'Quarterly plans with owners, timelines, dependencies, and success criteria, detailed enough that your team can start executing on day one.', tag: 'Week 4-5' },
          { num: '04', title: 'Alignment', body: "Leadership presentation, team workshop, adoption plan. The plan isn't finished until it has buy-in from the people who need to execute it and the people who need to fund it.", tag: 'Week 6' },
        ],
      },
      stats: {
        h2: 'Why most marketing plans fail.',
        items: [
          { num: '61%', label: 'of marketers say their strategy is not effectively connected to business objectives', source: 'CoSchedule 2024' },
          { num: '4x', label: 'more likely to report success when marketing goals are aligned with company revenue targets', source: 'HubSpot 2024' },
          { num: '37%', label: "of marketing budgets are wasted on activities that don't connect to pipeline", source: 'Gartner CMO Survey 2024' },
        ],
      },
      caseStudy: {
        h2: 'A B2B tech company went from "marketing does stuff" to "marketing drives 35% of pipeline" in two quarters.',
        paragraphs: [
          'The marketing team was active but scattered across content, events, and paid campaigns, and nobody could draw a straight line from any of those activities to the sales pipeline. Leadership tolerated marketing because they knew they needed it, but they couldn\'t point to what it produced.',
          'We built a quarterly roadmap aligned to revenue targets, installed a shared KPI dashboard that both marketing and sales could see, and ran monthly alignment sessions between the two teams. The marketing plan became an operating document, with owners, deadlines, and metrics tied to pipeline.',
          'Within two quarters, marketing-sourced pipeline went from unmeasured to 35% of total. Marketing didn\'t get there by doing more. It did the right things in the right order, with clear accountability. The CEO stopped asking "what does marketing do?" and started asking "how do we give marketing more budget?"',
        ],
        imgAlt: 'Kanban board with green and cream colored cards',
      },
      relatedH2: "What we're writing about planning and alignment.",
      cta: { h2: 'Want a marketing plan your team is still using in March?', sub: '30 minutes. No pitch. Just a conversation about what your marketing should deliver and how to get there.' },
    },
    'fractional-cmo': {
      seo: { title: 'Fractional CMO for B2B Companies | The B2B Tinkerers', description: 'Senior marketing leadership without the full-time cost. We join your leadership team, set strategy, coach your people, and keep marketing tied to the business.' },
      heroNum: 'Service 06',
      heroImgAlt: 'Executive meeting room table with open notebook and coffee cup',
      titleLines: ['Fractional CMO'],
      subtitle: 'Senior marketing leadership without the full-time cost. We embed in your leadership team and stick around: we set strategy, coach your people, and keep marketing connected to what the business needs.',
      problem: {
        titleLines: ['You need someone senior to own this.', 'Not necessarily five days a week.'],
        paragraphs: [
          "There's a stage most growing B2B companies reach where marketing needs more than a capable executor. It needs someone who can connect activity to business goals, make trade-offs and hold a direction when the quarter gets noisy. The budget or the stage rarely justifies a full-time CMO at that point, and for plenty of companies it never will.",
          'The gap between a marketing manager executing tactics and a senior leader setting direction is wider than most companies realize. A good manager runs the plan well. A senior leader is accountable for whether it was the right plan in the first place, and without that layer, marketing turns into a collection of activities with no point of view.',
          'When nobody owns the marketing strategy, it drifts. The work still gets done, but campaigns launch without a clear line back to business priorities, messaging fragments across channels, and the team turns reactive, chasing whatever felt urgent on Monday.',
        ],
      },
      deliver: {
        h2: 'CMO-level thinking, without the CMO-level overhead.',
        intro: 'We embed into your team, not hover above it. That means being in the room when decisions get made, knowing the people by name, and understanding the business well enough to make calls that stick.',
        cards: [
          { label: 'Weekly leadership involvement', desc: 'We\'re in your leadership meetings every week and involved in the decisions that affect marketing, so marketing has a voice when priorities are set or budgets discussed, and when strategy shifts.' },
          { label: 'Strategy ownership and team direction', desc: 'We set the marketing strategy, tie it to business goals, and make sure the team executes it with clarity and confidence. The direction is ours to own, and so is the accountability for outcomes.' },
          { label: 'Board and investor-level narrative', desc: 'The marketing story for stakeholders who think in terms of revenue, market share, and competitive position, with clear reporting that connects marketing activity to business outcomes in language the board cares about.' },
          { label: 'Hiring and team structure guidance', desc: 'When to hire, who to hire, and how to structure the team as it grows. We help build the function as well as run it, so each new hire brings a capability the team was missing.' },
        ],
      },
      process: {
        h2: 'Embedded leadership from day one.',
        steps: [
          { num: '01', title: 'Immersion', body: 'We get to know the business, the team, and the current state of marketing, and sit in on the key meetings. For the first two weeks we mostly listen, until we understand the dynamics and constraints and can see where the real opportunities are.', tag: 'Week 1-2' },
          { num: '02', title: 'Direction', body: 'We set the strategic framework: priorities, KPIs, and the 90-day roadmap. Then we agree with leadership on what marketing needs to deliver and how success will be measured.', tag: 'Week 3-4' },
          { num: '03', title: 'Execution', body: 'Weekly involvement: coaching the team, reviewing work, making decisions, removing blockers, and presenting to the board when needed, so everything keeps moving in the same direction.', tag: 'Ongoing' },
          { num: '04', title: 'Build', body: 'We develop the team\'s capabilities, hire when needed, and build processes that will outlast our engagement. The goal is a marketing function that can eventually stand on its own.', tag: 'Ongoing' },
        ],
      },
      stats: {
        h2: 'Why fractional leadership works.',
        items: [
          { num: '78%', label: 'of companies say they need senior marketing leadership but cannot justify a full-time CMO hire', source: 'Pavilion 2024' },
          { num: '3x', label: 'faster time to strategic clarity compared to hiring a full-time CMO (no recruitment, no onboarding delay)', source: 'Chief Outsiders 2024' },
          { num: '52%', label: 'of companies using fractional executives report improved strategic alignment within 90 days', source: 'Deloitte 2024' },
        ],
      },
      caseStudy: {
        h2: 'A B2B industrial company went from "we don\'t really do marketing" to a structured, pipeline-generating function in under 6 months.',
        paragraphs: [
          'The company was growing on reputation and referrals. They had one person handling marketing, mostly focused on trade events and product brochures. Leadership knew they needed more from marketing but had no clear idea what "more" looked like or how to get there. There was no strategy or pipeline tracking, and nothing connected marketing activity to sales outcomes.',
          'We embedded as fractional CMO. The first step was building a marketing strategy directly connected to sales targets and business priorities. We defined the ICP, mapped the buyer journey, and built a messaging framework the sales team could use. Then we hired two additional team members with the right skills to execute against the plan. We set up a demand generation engine that tied content, outreach, and events together into one system.',
          'Six months later, marketing was contributing 25% of new pipeline, the team had its own seat at the leadership table, and sales and marketing were aligned on targets and reporting. The function was also built to sustain itself: when our engagement scaled back, the team had the strategy and the processes to keep building, and the confidence to do it.',
        ],
        imgAlt: 'Compass lying on architectural blueprints',
      },
      relatedH2: "What we're writing about marketing leadership.",
      cta: { h2: 'Need senior marketing leadership without the full-time commitment?', sub: '30 minutes. No pitch. Just an honest conversation about where your marketing needs direction.' },
    },
  },
  es: {
    'marketing-audit': {
      seo: { title: 'Auditoría de marketing B2B | The B2B Tinkerers', description: 'Una evaluación honesta de dónde está tu marketing. Auditamos posicionamiento, equipo, presupuesto y alineación con los objetivos de negocio para empresas B2B.' },
      heroNum: 'Servicio 01',
      heroImgAlt: 'Informes de analítica y cuadros de mando dispersos sobre una mesa con una lupa',
      titleLines: ['Auditoría de marketing'],
      subtitle: 'Sospechas que tu marketing no rinde todo lo que debería, pero no tienes claro dónde falla, qué está dando resultados y qué es solo ruido. Nosotros lo averiguamos.',
      problem: {
        titleLines: ['Estás gastando.', '¿Pero estás invirtiendo?'],
        paragraphs: [
          'Los presupuestos de marketing no paran de crecer, el equipo aumenta y al stack se le suman herramientas nuevas, pero el pipeline no acompaña. Cuando el consejo pregunta por qué, no hay una respuesta clara. Esfuerzo hay de sobra; lo que nadie ha acordado es qué parte de ese esfuerzo está sosteniendo los resultados.',
          'El equipo va de campaña en campaña, produce contenido y organiza eventos, y las métricas de actividad salen razonablemente bien. Lo que no dicen es qué parte de todo eso trae ingresos, que es justo lo que pregunta la dirección. La distancia entre lo que hace marketing y lo que necesita el negocio crece un poco más cada trimestre que nadie la mide.',
          'Sin una imagen clara de qué funciona, cada decisión es una apuesta, y las apuestas se acumulan. Sigues financiando el canal que tuvo un buen mes hace dos años. Recortas el que nadie defendió en la reunión. Al final la dirección deja de fiarse de marketing, y esa es la parte cara, porque recuperar esa confianza lleva mucho más que perderla.',
        ],
      },
      deliver: {
        h2: 'Una imagen clara de qué funciona, qué se desperdicia y qué arreglar primero.',
        intro: 'Te llevas una evaluación práctica y honesta de tu marketing actual, basada en tus datos, en tu mercado y en lo que el negocio necesita conseguir. Un informe de 90 páginas lleno de best practices no te serviría para actuar, así que no lo escribimos.',
        cards: [
          { label: 'Revisión de posicionamiento y mensajes', desc: 'Cómo se presenta hoy tu marca y cómo debería presentarse. Revisamos si tu posicionamiento es claro, diferenciado y coherente en cada punto de contacto con tus compradores.' },
          { label: 'Auditoría de canales y presupuesto', desc: 'Adónde va el dinero, qué produce y qué recortar o reforzar. Relacionamos cada partida con sus resultados para que veas qué canales se ganan el sueldo y cuáles solo queman presupuesto.' },
          { label: 'Evaluación de alineación ventas-marketing', desc: 'Hasta qué punto conectan las dos funciones y dónde se rompen los traspasos. Revisamos la definición de lead, los SLA, cómo circula el feedback y las métricas compartidas para encontrar la fricción que te está costando pipeline.' },
          { label: 'Recomendaciones priorizadas con impacto en negocio', desc: 'Podríamos darte 50 ideas. Nos quedamos con las 5 que se van a notar en los resultados, cada una con su impacto esperado, el esfuerzo que exige y una justificación clara ligada a tus objetivos de negocio.' },
        ],
      },
      process: {
        h2: 'Del kickoff a las recomendaciones en 3-4 semanas.',
        steps: [
          { num: '01', title: 'Descubrimiento', body: 'Entrevistas con stakeholders, recogida de datos, acceso a herramientas y cuadros de mando. Aprendemos cómo funciona tu marketing antes de juzgarlo.', tag: 'Semana 1' },
          { num: '02', title: 'Análisis', body: 'Revisión a fondo de canales, contenido, datos de pipeline y posicionamiento de la competencia. Seguimos los números y hablamos con quien conoce la realidad sobre el terreno.', tag: 'Semana 2' },
          { num: '03', title: 'Diagnóstico', body: 'Identificación de patrones, análisis de brechas, mapeo de oportunidades. Aquí conectamos lo que encontramos con lo que significa para tu negocio.', tag: 'Semana 3' },
          { num: '04', title: 'Recomendaciones', body: 'Presentación a dirección con un plan de acción priorizado, lo bastante específico como para que cada punto tenga dueño antes de acabar la reunión.', tag: 'Semana 4' },
        ],
      },
      stats: {
        h2: 'El coste de ir a ciegas.',
        items: [
          { num: '65%', label: 'de los presupuestos de marketing B2B son ineficaces a juicio de las propias empresas que los gastan', source: 'Forrester 2024' },
          { num: '1 billón', label: 'de dólares perdidos al año por la desalineación entre ventas y marketing en B2B', source: 'G2 / Industria 2024' },
          { num: '27%', label: 'más rápido crece el beneficio en empresas con ventas y marketing bien alineados', source: 'ZoomInfo / Marketo 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa industrial recortó un 40% del desperdicio en marketing y redirigió el presupuesto a canales que sí producían pipeline.',
        paragraphs: [
          'La empresa repartía su presupuesto de marketing entre ocho canales sin un modelo de atribución claro. Cada canal tenía su defensor interno y nadie podía demostrar cuáles funcionaban. Había mucha actividad y poco pipeline, y la dirección estaba cada vez más frustrada con el ROI de marketing.',
          'La auditoría mostró que tres de esos ocho canales generaban en torno al 80% de los leads cualificados. Otros dos no producían casi nada medible. Los tres restantes tenían potencial, pero estaban infrafinanciados y mal ejecutados. El problema no era el presupuesto total. Era cómo estaba repartido.',
          'La empresa redirigió la inversión, simplificó el stack tecnológico y concentró la ejecución en los canales con resultados probados. En un trimestre, la calidad del pipeline mejoró de forma notable mientras el gasto total de marketing incluso bajó. El equipo de marketing había estado defendiendo su presupuesto; ahora podía demostrar una contribución clara a los ingresos.',
        ],
        imgAlt: 'Visualizaciones de datos y gráficos impresos con anotaciones a lápiz',
      },
      relatedH2: 'Lo que escribimos sobre marketing y estrategia.',
      cta: { h2: '¿No sabes qué funciona y qué no? Por ahí empezamos.', sub: '30 minutos. Sin pitch. Solo un repaso honesto de cómo está tu marketing.' },
    },
    'ai-strategy': {
      seo: { title: 'Estrategia de marketing con IA e híbrida para B2B | The B2B Tinkerers', description: 'La IA no sustituirá a tu equipo de marketing, pero quien la use bien superará a quien no. Ayudamos a empresas B2B a montar un modelo híbrido que funcione.' },
      heroNum: 'Servicio 05',
      heroImgAlt: 'Patrón de placa de circuito fundiéndose con las nervaduras de una hoja',
      titleLines: ['Estrategia de marketing', 'con IA e híbrida'],
      subtitle: 'La IA no va a sustituir a tu equipo de marketing, pero los equipos que la usan bien van a superar a los que no. Ayudamos a empresas B2B a ver dónde aporta valor real la IA en su operación de marketing y a construir los workflows para que cuaje.',
      problem: {
        titleLines: ['¿Qué se supone que tiene que hacer', 'la IA por tu equipo de marketing?'],
        paragraphs: [
          'Ahora mismo hay una presión enorme por "hacer algo con IA". La dirección lee los titulares, ve a los competidores anunciando iniciativas de IA y quiere el plan para el viernes. Siendo sinceros, la mayoría de equipos de marketing B2B no tiene ni idea de qué debería hacer la IA por ellos, y tampoco encuentra una forma cómoda de admitirlo.',
          'Así que los equipos experimentan. Alguien empieza a redactar posts en ChatGPT, otra persona prueba una herramienta para copys de anuncios y una tercera se pone con el reporting automatizado. Las herramientas son potentes, pero ninguno de esos experimentos conecta con una estrategia ni sobrevive a la persona que lo montó, y cuando la dirección pregunta por el ROI no hay nada que enseñar.',
          'Peor aún, hay equipos que se lanzan a automatizar procesos que ya estaban rotos, y una mala estrategia de contenido con IA solo produce mal contenido más deprisa. La pregunta habitual es "¿dónde podemos usar IA?". Es más útil preguntarse "¿dónde merece la pena el criterio humano y dónde es pura costumbre?". Los equipos que se lo responden con honestidad acaban con una ventaja difícil de copiar, porque está en su forma de trabajar.',
        ],
      },
      deliver: {
        h2: 'Una estrategia de IA práctica, pensada para el equipo que tienes.',
        intro: 'Cada recomendación parte de lo que tu equipo puede asumir y de los workflows que ya usáis. Si no va a cambiar el día a día de la operación, no entra en la estrategia.',
        cards: [
          { label: 'Evaluación de madurez para IA', desc: 'Una evaluación realista de dónde están hoy tu equipo, tus datos y tus procesos, y de qué está listo para la IA, antes de que nadie empiece a comprar herramientas o a montar workflows.' },
          { label: 'Estrategia de automatización de contenido y campañas', desc: 'Un mapa práctico de qué automatizar, qué reforzar con IA y qué dejar como está porque necesita criterio humano, y de dónde se produce el traspaso entre personas y herramientas.' },
          { label: 'Selección de herramientas e integración del stack', desc: 'Elegimos herramientas que encajan con tus workflows y con tu stack actual, y que tu equipo va a usar, sean o no las más de moda o las más baratas.' },
          { label: 'Desarrollo de capacidades del equipo', desc: 'Formación práctica para que tu equipo trabaje con la IA con soltura y criterio, y pueda seguir sin depender de consultores externos, nosotros incluidos.' },
        ],
      },
      process: {
        h2: 'De la evaluación a la IA operativa en 6-8 semanas.',
        steps: [
          { num: '01', title: 'Evaluación', body: 'Workflows actuales, capacidades del equipo, datos disponibles, auditoría de herramientas. Las recomendaciones llegan después, cuando sabemos de dónde partes.', tag: 'Semana 1-2' },
          { num: '02', title: 'Estrategia', body: 'Priorización de casos de uso, construir o comprar, arquitectura de integración. En esta fase se decide dónde encaja la IA y dónde no.', tag: 'Semana 3-4' },
          { num: '03', title: 'Piloto', body: 'Ponemos en marcha 2-3 workflows de alto impacto, medimos resultados e iteramos, para tener una prueba real de valor antes de comprometer un despliegue completo.', tag: 'Semana 5-6' },
          { num: '04', title: 'Escalado', body: 'Formación del equipo, documentación, plan de despliegue para el resto de casos de uso. Todo lo que tu equipo necesita para llevar esto sin nosotros.', tag: 'Semana 7-8' },
        ],
      },
      stats: {
        h2: 'La brecha de la IA ya está aquí.',
        items: [
          { num: '64%', label: 'de los marketers B2B dice que la IA tendrá un gran impacto en su estrategia, pero solo el 19% tiene un plan formal', source: 'Salesforce State of Marketing 2024' },
          { num: '40%', label: 'de aumento de productividad en equipos de marketing que han integrado la IA con éxito en sus workflows clave', source: 'McKinsey 2024' },
          { num: '5x', label: 'más rápida la producción de contenido con workflows apoyados en IA, sin bajar los estándares de calidad', source: 'HubSpot 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de SaaS B2B redujo un 60% el tiempo de producción de contenido y mejoró su calidad integrando IA en su workflow editorial.',
        paragraphs: [
          'El equipo de marketing producía 4 piezas de contenido al mes y no daba abasto. La demanda de ventas de casos de éxito, thought leadership y contenido de producto crecía, pero el equipo no. Estaban atrapados en un ciclo de producir lo justo para seguir visibles, sin margen para centrarse en calidad o estrategia.',
          'Mapeamos su workflow editorial de punta a punta, identificamos dónde la IA podía encargarse de la investigación, los esquemas y los primeros borradores, y montamos un pipeline humano-IA con controles de calidad claros. Cada pieza seguía pasando por revisión editorial humana, pero el tiempo dedicado al trabajo de producción de bajo valor cayó drásticamente.',
          'En 8 semanas, la producción pasó de 4 a 12 piezas al mes, y el equipo dedicaba más tiempo a estrategia, posicionamiento y distribución. La calidad mejoró porque los redactores editaban y afinaban borradores en lugar de enfrentarse a una página en blanco. El cuello de botella dejó de ser "¿podemos producir suficiente?" y pasó a ser "¿qué deberíamos producir a continuación?".',
        ],
        imgAlt: 'Patrón de huella dactilar humana fundiéndose con trazas de circuito digital',
      },
      relatedH2: 'Lo que escribimos sobre IA y marketing.',
      cta: { h2: '¿Listo para que la IA trabaje para tu equipo de marketing?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre dónde puede ayudar la IA en tu operación.' },
    },
    'brand-strategy': {
      seo: { title: 'Estrategia de marca y posicionamiento B2B', description: 'La mayoría de marcas B2B se construyen por accidente. Nosotros las construimos a propósito. Posicionamiento, mensajes y estrategia de marca para empresas B2B.' },
      heroNum: 'Servicio 02',
      heroImgAlt: 'Documentos de estrategia de marca y muestras de color sobre una mesa de reuniones',
      titleLines: ['Estrategia de marca', 'y posicionamiento'],
      subtitle: 'La mayoría de empresas B2B compite en funcionalidades y precio. Las que ganan compiten en claridad: saben exactamente quiénes son y a quién sirven, y pueden explicar por qué eso importa. Y esa claridad hay que construirla a propósito.',
      problem: {
        titleLines: ['Todo lo que dices de ti', 'lo podría decir tu competencia.'],
        paragraphs: [
          'La mayoría de marcas B2B surgen por accidente: el pitch del fundador que caló, un tagline que nadie odió lo bastante como para cambiarlo y una web que dice más o menos lo mismo que la de cualquier competidor. Eso aguanta más de lo que cabría esperar, hasta que deja de aguantar de golpe.',
          'El coste es invisible al principio. Pierdes una operación y culpas al precio. Un cliente potencial elige a un competidor cuyo producto no es tan bueno, pero cuya historia es más nítida. Tu equipo de ventas describe lo que hacéis de cinco formas distintas. Marketing produce contenido que suena genérico porque nadie llegó a acordar qué os hace diferentes. Nada de esto aparece como una partida en ninguna cuenta, y el pipeline se va vaciando tan despacio que acabas achacándolo a otra cosa.',
          'Puede que tu producto sea realmente mejor. No va a importar demasiado mientras tu posicionamiento sea difuso, porque el mercado casi siempre elige a la empresa que comunica con más claridad. Los compradores no tienen paciencia para descifrar tu valor por ti, ni razón alguna para tenerla.',
        ],
      },
      deliver: {
        h2: 'Un sistema de posicionamiento y mensajes que toda tu empresa puede usar.',
        intro: 'Construimos un framework práctico que da a ventas, a marketing y a la dirección un mismo lenguaje para explicar qué hacéis, para quién lo hacéis y por qué importa.',
        cards: [
          { label: 'Mapa de posicionamiento de mercado y competencia', desc: 'Dónde te sitúas respecto a las alternativas, cómo te ven los compradores frente a la competencia y qué huecos del mercado puedes ocupar de forma realista, todo basado en señales reales del mercado.' },
          { label: 'Definición de ICP y buyer journey', desc: 'Un mapa práctico de cómo compran tus mejores clientes: a quién le vendes en realidad, qué le importa en cada etapa y qué le lleva a elegirte.' },
          { label: 'Arquitectura de mensajes central', desc: 'Tu propuesta de valor, los mensajes clave por audiencia y los proof points que los respaldan, en un solo framework que sirve para la web, los decks de ventas, las campañas y las conversaciones.' },
          { label: 'Guía de voz y tono de marca', desc: 'Cómo suenas y cómo escribes, qué palabras usas y cuáles evitas. Es lo bastante práctica como para que tu equipo la aplique sin que nadie tenga que hacer de policía de marca.' },
        ],
      },
      process: {
        h2: 'Del diagnóstico a la entrega en 6-8 semanas.',
        steps: [
          { num: '01', title: 'Descubrimiento', body: 'Entrevistas con stakeholders, análisis a fondo de la competencia, auditoría del posicionamiento actual. No nos formamos una opinión hasta haber hablado con tu equipo y tus clientes y haber estudiado tu mercado.', tag: 'Semana 1-2' },
          { num: '02', title: 'Estrategia', body: 'Framework de posicionamiento, propuesta de valor, definición de ICP. Es la fase de las renuncias difíciles: nosotros facilitamos las decisiones y tú las haces tuyas.', tag: 'Semana 3-4' },
          { num: '03', title: 'Construcción', body: 'Arquitectura de mensajes, guía de voz de marca, brief de dirección visual: el material con el que tu equipo pone la estrategia a trabajar.', tag: 'Semana 5-6' },
          { num: '04', title: 'Activación', body: 'Workshop con el equipo, plan de despliegue, adopción interna. Una estrategia de marca que vive en un deck no vale nada. Nos aseguramos de que llegue a quien la necesita.', tag: 'Semana 7-8' },
        ],
      },
      stats: {
        h2: 'Por qué el posicionamiento no es opcional.',
        items: [
          { num: '77%', label: 'de los compradores B2B dice que la marca es un factor crítico en su decisión de compra', source: 'Gartner 2024' },
          { num: '2,5x', label: 'más win rate en empresas con un posicionamiento claro y diferenciado', source: 'Forrester 2024' },
          { num: '60%', label: 'de las empresas B2B no sabe articular con claridad qué las hace diferentes', source: 'LinkedIn B2B Institute 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de SaaS se reposicionó de "llena de funciones" a "líder de categoría" y duplicó el pipeline inbound en 6 meses.',
        paragraphs: [
          'La empresa tenía un buen producto y una base de clientes fiel. Pero cada pitch empezaba con una comparativa de funciones. Los clientes potenciales la evaluaban como uno más de cuatro proveedores parecidos, y el precio se estaba convirtiendo en el factor decisivo.',
          'Hicimos un sprint de posicionamiento, y el insight fue que los clientes la compraban porque la plataforma eliminaba un cuello de botella operativo concreto, uno que costaba a empresas del mid-market entre 15 y 40 horas al mes. Ese era el posicionamiento: no "hacemos más", sino "eliminamos este problema por completo".',
          'El reposicionamiento llegó a todo: web, deck de ventas, secuencias de outbound, mensajes de eventos. En seis meses, el pipeline inbound se había duplicado. El ticket medio subió un 30% porque ya no competían por precio. El equipo de ventas contó que las conversaciones cambiaron. Los clientes potenciales empezaron a decir "hemos oído que sois los que resolvéis [problema concreto]" en lugar de "¿me enseñas vuestras funciones?".',
        ],
        imgAlt: 'Diagrama de mapeo estratégico en una pizarra con nodos conectados',
      },
      relatedH2: 'Lo que escribimos sobre marca y estrategia.',
      cta: { h2: '¿Listo para hacerte con tu sitio en el mercado?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre dónde está tu marca y hasta dónde podría llegar.' },
    },
    'go-to-market': {
      seo: { title: 'Estrategia Go-To-Market B2B | The B2B Tinkerers', description: 'Un motion de GTM claro que conecta el posicionamiento con el pipeline. Entrada a mercado, estrategia de canales y generación de demanda para empresas B2B.' },
      heroNum: 'Servicio 03',
      heroImgAlt: 'Mapa de pared con chinchetas e hilos de colores conectando distintos puntos',
      titleLines: ['Estrategia', 'Go-To-Market'],
      subtitle: 'Una estrategia de GTM responde a cuatro preguntas: a quién le vendemos, qué decimos, dónde aparecemos y cómo trabajan juntos ventas y marketing. La construimos desde cero o arreglamos lo que está roto.',
      problem: {
        titleLines: ['El producto funciona.', 'Ponerlo delante de la gente adecuada sigue siendo a ojo.'],
        paragraphs: [
          'Tienes un buen producto, puede que incluso uno estupendo. Lo que no tienes es una forma sistemática de ponerlo delante de los compradores adecuados en el momento adecuado. Los leads van llegando, poco a poco, desde canales que nadie eligió a propósito. Algunas operaciones se cierran y nadie sabe explicar por qué esas y no otras, así que el crecimiento parece cosa de suerte.',
          'Mientras tanto, ventas va por un lado y marketing por otro, los dos muy ocupados. Ventas culpa a marketing de la calidad de los leads, marketing culpa a ventas del seguimiento, y el pipeline sigue siendo imprevisible mientras el consejo repite la misma pregunta: ¿cuándo empieza esto a funcionar como una máquina?',
          'Esto sale especialmente caro al entrar en un mercado nuevo sin playbook. Las empresas dan por hecho que lo que funcionó en una región o un segmento servirá en el siguiente, y rara vez es así. La mayoría de empresas B2B se atasca entre el product-market fit y los ingresos repetibles, y casi nunca por culpa del producto: el motion de go-to-market sencillamente nunca se llegó a construir bien.',
        ],
      },
      deliver: {
        h2: 'El playbook que conecta tu producto con tu pipeline.',
        intro: 'El resultado es un motion de GTM que funciona, con responsables claros, objetivos medibles y un plan compartido que ventas y marketing ejecutan juntos.',
        cards: [
          { label: 'Plan de entrada o expansión de mercado', desc: 'Qué segmentos y qué regiones atacar, en qué orden y con qué recursos, en un roadmap priorizado según tamaño de mercado, intensidad competitiva y tu capacidad real de ganar.' },
          { label: 'Mix y priorización de canales', desc: 'Dónde aparecer, en qué invertir y qué saltarte. La estrategia de canales se basa en dónde ponen la atención tus compradores, no en dónde ponen el presupuesto los demás.' },
          { label: 'Arquitectura de generación de demanda', desc: 'El motor que convierte la notoriedad en pipeline cualificado: etapas claras, objetivos de conversión y contenido asignado a cada paso del buyer journey, conectados para que cada táctica alimente a la siguiente.' },
          { label: 'Playbook de ventas y marketing', desc: 'Cómo trabajan los dos equipos como uno solo: mensajes por segmento, criterios de traspaso de leads, objetivos de pipeline compartidos y un lenguaje común que acaba con el cruce de reproches de siempre.' },
        ],
      },
      process: {
        h2: 'De la estrategia al motion en 8-10 semanas.',
        steps: [
          { num: '01', title: 'Evaluación de mercado', body: 'Dimensionamiento de mercado, análisis de segmentos, panorama competitivo, investigación de compradores.', tag: 'Semana 1-2' },
          { num: '02', title: 'Diseño de estrategia', body: 'Posicionamiento por segmento, estrategia de canales, mensajes por audiencia, validación de precios. De lo que se decida aquí depende todo lo demás.', tag: 'Semana 3-5' },
          { num: '03', title: 'Construcción del playbook', body: 'Frameworks de campaña, plan de contenido, materiales de sales enablement, cuadro de mando de KPI, todo listo para que tus equipos lo usen de inmediato.', tag: 'Semana 6-8' },
          { num: '04', title: 'Apoyo al lanzamiento', body: 'Ejecución de la primera campaña, alineación del equipo, cadencia de standup semanal. Seguimos implicados hasta que el motion está en marcha y el equipo lo hace suyo.', tag: 'Semana 9-10' },
        ],
      },
      stats: {
        h2: 'Por qué el GTM separa a quien crece de quien solo arranca.',
        items: [
          { num: '72%', label: 'de las empresas que no llegan a sus objetivos de ingresos señala la mala ejecución del go-to-market como causa principal', source: 'SBI Growth Advisory 2024' },
          { num: '3,5x', label: 'más crecimiento de ingresos en empresas B2B con una estrategia de GTM documentada y alineada', source: 'McKinsey 2024' },
          { num: '45%', label: 'de los lanzamientos de producto B2B no cumple las expectativas de ingresos en el primer año', source: 'Gartner 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de tecnología industrial entró en un nuevo mercado europeo y construyó un pipeline cualificado de 2 M€ (2,2 M$) en 5 meses.',
        paragraphs: [
          'La empresa tenía un fuerte product-market fit en su mercado de origen. A los clientes les encantaba el producto, la retención era alta y el equipo de ventas sabía cerrar. Pero cuando decidieron expandirse a un nuevo mercado europeo, descubrieron enseguida que ninguno de sus playbooks servía allí. El perfil de comprador era distinto y la competencia desconocida, y los canales que funcionaban en casa no generaban nada.',
          'Construimos desde cero un motion de GTM específico para ese mercado. Empezamos con una investigación a fondo del comprador en el mercado objetivo, seguida de mensajes localizados que hablaban de los problemas y prioridades de esa audiencia concreta. Diseñamos una estrategia de canales centrada en los dos o tres sitios donde sus compradores ideales pasaban el tiempo, y creamos un kit de sales enablement que daba al equipo local todo lo necesario para tener conversaciones nítidas y relevantes desde el primer día.',
          'En cinco meses tenían un pipeline cualificado de más de 2 M€ (2,2 M$) y sus tres primeras operaciones cerradas en el nuevo mercado. Además, el motion era repetible: el mismo framework se ha adaptado desde entonces a una segunda expansión, con resultados iniciales parecidos.',
        ],
        imgAlt: 'Globo terráqueo vintage con banderitas marcando ubicaciones',
      },
      relatedH2: 'Lo que escribimos sobre GTM y estrategia de crecimiento.',
      cta: { h2: '¿Tienes un buen producto y un pipeline imprevisible?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre tu mercado y tu motion.' },
    },
    'marketing-plan': {
      seo: { title: 'Plan de marketing y alineación con negocio B2B | The B2B Tinkerers', description: 'Un plan de marketing que tu equipo seguirá, basado en objetivos de negocio reales. Roadmaps trimestrales, KPI y asignación de presupuesto para empresas B2B.' },
      heroNum: 'Servicio 04',
      heroImgAlt: 'Tarjetas de línea temporal trimestral ordenadas en filas con bloques de prioridad',
      titleLines: ['Plan de marketing', 'y alineación con negocio'],
      subtitle: 'La mayoría de planes de marketing se escriben para quedar bien ante el consejo. Los nuestros parten del negocio y se traducen en un roadmap trimestral que tu equipo puede hacer suyo y en el que tu dirección puede confiar.',
      problem: {
        titleLines: ['El plan tenía buena pinta en enero.', 'En marzo ya nadie abría el archivo.'],
        paragraphs: [
          'Un plan así se hace para la presentación al consejo, y quien tiene que ejecutarlo queda en segundo plano. El documento acaba archivado y el equipo vuelve a lo que ya venía haciendo.',
          'Detrás hay una desconexión entre lo que espera la dirección y lo que entrega marketing. La dirección quiere pipeline, ingresos y cuota de mercado, mientras marketing reporta impresiones, clics y volumen de contenido. Ninguna de las dos partes pide nada descabellado. Simplemente trabajan con playbooks distintos, y a nadie se le encargó nunca conciliarlos.',
          'El equipo acaba funcionando a base de tácticas, sin hilo estratégico. Se lanzan campañas porque "siempre lo hacemos". El presupuesto se asigna según el plan del año pasado más un 10%. Las métricas de marketing no conectan con resultados de negocio, y cuando el CEO pregunta "¿qué produjo marketing este trimestre?", la respuesta es o silencio o una hoja de cálculo que plantea más preguntas de las que responde.',
        ],
      },
      deliver: {
        h2: 'Un plan que tu equipo va a seguir de verdad.',
        intro: 'Los documentos de estrategia suelen tener 60 páginas que nadie lee. El nuestro es un plan práctico que conecta la actividad de marketing con resultados de negocio, deja claras las prioridades a todo el equipo y aguanta cuando la realidad cambia.',
        cards: [
          { label: 'Roadmaps de marketing anuales y trimestrales', desc: 'Qué pasa y cuándo, quién lo lidera y cómo encaja en el calendario del negocio. Con hitos trimestrales y puntos de revisión integrados, puedes ajustar el plan sin empezar de cero.' },
          { label: 'Framework de OKR y KPI alineado con los objetivos de negocio', desc: 'Las métricas que le importan a la dirección, como ingresos, pipeline y cuota de mercado, elegidas porque dicen si marketing está haciendo avanzar el negocio.' },
          { label: 'Asignación de presupuesto y modelo de ROI', desc: 'Adónde va cada euro y cada dólar y qué se espera que produzca. Un modelo de presupuesto transparente que conecta gasto con resultados para que puedas defender cada partida y reasignar con seguridad.' },
          { label: 'Workshops de alineación interfuncional', desc: 'Ventas, producto y marketing en la misma sala y con los mismos objetivos, porque un plan de marketing que solo se cree marketing es una carta a los Reyes Magos.' },
        ],
      },
      process: {
        h2: 'De los objetivos de negocio al roadmap de marketing en 4-6 semanas.',
        steps: [
          { num: '01', title: 'Inmersión en el negocio', body: 'Objetivos de ingresos, prioridades de crecimiento, capacidad del equipo, expectativas de la dirección. No tocamos nada de marketing hasta entender cómo funciona el negocio.', tag: 'Semana 1' },
          { num: '02', title: 'Framework estratégico', body: 'OKR, estrategia de canales, modelo de presupuesto, framework de medición: la columna vertebral que une cada actividad de marketing con un objetivo de negocio.', tag: 'Semana 2-3' },
          { num: '03', title: 'Construcción del roadmap', body: 'Planes trimestrales con responsables, plazos, dependencias y criterios de éxito, con el detalle suficiente para que tu equipo empiece a ejecutar el primer día.', tag: 'Semana 4-5' },
          { num: '04', title: 'Alineación', body: 'Presentación a dirección, workshop con el equipo, plan de adopción. El plan no está terminado hasta que lo respaldan quienes tienen que ejecutarlo y quienes tienen que financiarlo.', tag: 'Semana 6' },
        ],
      },
      stats: {
        h2: 'Por qué fracasan la mayoría de planes de marketing.',
        items: [
          { num: '61%', label: 'de los marketers dice que su estrategia no está bien conectada con los objetivos de negocio', source: 'CoSchedule 2024' },
          { num: '4x', label: 'más probabilidades de declarar éxito cuando los objetivos de marketing están alineados con los objetivos de ingresos de la empresa', source: 'HubSpot 2024' },
          { num: '37%', label: 'de los presupuestos de marketing se desperdicia en actividades que no conectan con el pipeline', source: 'Gartner CMO Survey 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa de tecnología B2B pasó de "marketing hace cosas" a "marketing genera el 35% del pipeline" en dos trimestres.',
        paragraphs: [
          'El equipo de marketing era activo pero disperso entre contenido, eventos y campañas de pago, y nadie podía trazar una línea recta desde ninguna de esas actividades hasta el pipeline de ventas. La dirección toleraba marketing porque sabía que lo necesitaba, pero no podía señalar qué producía.',
          'Construimos un roadmap trimestral alineado con los objetivos de ingresos, instalamos un cuadro de mando de KPI compartido que veían tanto marketing como ventas y montamos sesiones mensuales de alineación entre los dos equipos. El plan de marketing pasó a ser un documento operativo, con responsables, plazos y métricas ligadas al pipeline.',
          'En dos trimestres, el pipeline generado por marketing pasó de no medirse al 35% del total. Y no fue porque marketing hiciera más, sino porque hizo lo que tocaba, en el orden correcto y con responsabilidades claras. El CEO dejó de preguntar "¿qué hace marketing?" y empezó a preguntar "¿cómo le damos más presupuesto a marketing?".',
        ],
        imgAlt: 'Tablero kanban con tarjetas en verde y crema',
      },
      relatedH2: 'Lo que escribimos sobre planificación y alineación.',
      cta: { h2: '¿Quieres un plan de marketing que tu equipo siga usando en marzo?', sub: '30 minutos. Sin pitch. Solo una conversación sobre qué debería entregar tu marketing y cómo llegar ahí.' },
    },
    'fractional-cmo': {
      seo: { title: 'CMO fraccional para empresas B2B | The B2B Tinkerers', description: 'Liderazgo de marketing senior sin el coste de un CMO a tiempo completo. Nos integramos en tu equipo directivo, marcamos la estrategia y formamos a tu gente.' },
      heroNum: 'Servicio 06',
      heroImgAlt: 'Mesa de sala de reuniones ejecutiva con un cuaderno abierto y una taza de café',
      titleLines: ['CMO fraccional'],
      subtitle: 'Liderazgo de marketing senior sin el coste de un CMO a tiempo completo. Nos integramos en tu equipo directivo y nos quedamos: marcamos la estrategia, formamos a tu gente y nos aseguramos de que el marketing siga conectado con lo que necesita el negocio.',
      problem: {
        titleLines: ['Necesitas a alguien senior que se haga cargo.', 'No necesariamente cinco días a la semana.'],
        paragraphs: [
          'Casi todas las empresas B2B en crecimiento llegan a una etapa en la que marketing necesita algo más que un ejecutor competente. Necesita a alguien que sepa conectar la actividad con los objetivos de negocio, hacer trade-offs y mantener el rumbo cuando el trimestre se complica. En ese momento, ni el presupuesto ni la fase de la empresa suelen justificar un CMO a tiempo completo, y en muchas empresas no lo justificarán nunca.',
          'Entre un marketing manager que ejecuta tácticas y un líder senior que marca la dirección hay más distancia de la que cree la mayoría de empresas. El primero ejecuta bien el plan. El segundo responde de si era el plan correcto, y sin esa capa, marketing se queda en un conjunto de actividades sin criterio propio.',
          'Cuando la estrategia de marketing no tiene dueño, va a la deriva. El trabajo se sigue haciendo, pero las campañas salen sin una relación clara con las prioridades del negocio, los mensajes se fragmentan entre canales y el equipo acaba yendo a remolque de lo que parecía urgente el lunes.',
        ],
      },
      deliver: {
        h2: 'Criterio de CMO, sin el sobrecoste de un CMO.',
        intro: 'Nos integramos en tu equipo, no revoloteamos por encima. Eso implica estar presentes cuando se decide, conocer a la gente por su nombre y entender el negocio lo bastante bien como para tomar decisiones que aguanten.',
        cards: [
          { label: 'Implicación semanal a nivel directivo', desc: 'Estamos cada semana en las reuniones de dirección e implicados en las decisiones que afectan a marketing, para que marketing tenga voz cuando se fijan prioridades o se discuten presupuestos, y cuando cambia la estrategia.' },
          { label: 'Propiedad de la estrategia y dirección del equipo', desc: 'Marcamos la estrategia de marketing, la alineamos con los objetivos de negocio y nos aseguramos de que el equipo la ejecuta con claridad y confianza. Nos hacemos cargo del rumbo y respondemos de los resultados.' },
          { label: 'Narrativa a nivel de consejo e inversores', desc: 'La historia de marketing para stakeholders que piensan en ingresos, cuota de mercado y posición competitiva, con un reporting claro que conecta la actividad de marketing con resultados de negocio en el lenguaje que le interesa al consejo.' },
          { label: 'Guía de contratación y estructura de equipo', desc: 'Cuándo contratar, a quién y cómo estructurar el equipo a medida que crece. Ayudamos a construir la función además de dirigirla, para que cada nueva incorporación aporte una capacidad que al equipo le faltaba.' },
        ],
      },
      process: {
        h2: 'Liderazgo integrado desde el primer día.',
        steps: [
          { num: '01', title: 'Inmersión', body: 'Conocemos a fondo el negocio, el equipo y el estado actual del marketing, y asistimos a las reuniones clave. Las dos primeras semanas sobre todo escuchamos, hasta entender las dinámicas y las restricciones y ver dónde están las oportunidades reales.', tag: 'Semana 1-2' },
          { num: '02', title: 'Dirección', body: 'Fijamos el framework estratégico: prioridades, KPI y el roadmap a 90 días. Después acordamos con la dirección qué debe entregar marketing y cómo se medirá el éxito.', tag: 'Semana 3-4' },
          { num: '03', title: 'Ejecución', body: 'Implicación semanal: formamos al equipo, revisamos el trabajo, tomamos decisiones, quitamos bloqueos y presentamos al consejo cuando hace falta, para que todo avance en la misma dirección.', tag: 'Continuo' },
          { num: '04', title: 'Construcción', body: 'Desarrollamos las capacidades del equipo, contratamos cuando hace falta y montamos procesos que duren más que nuestro proyecto. El objetivo es una función de marketing que, con el tiempo, se sostenga sola.', tag: 'Continuo' },
        ],
      },
      stats: {
        h2: 'Por qué funciona el liderazgo fraccional.',
        items: [
          { num: '78%', label: 'de las empresas dice que necesita liderazgo de marketing senior pero no puede justificar contratar un CMO a tiempo completo', source: 'Pavilion 2024' },
          { num: '3x', label: 'más rápido llegar a la claridad estratégica frente a contratar un CMO a tiempo completo (sin proceso de selección ni retraso de onboarding)', source: 'Chief Outsiders 2024' },
          { num: '52%', label: 'de las empresas que usan ejecutivos fraccionales reporta mejor alineación estratégica en 90 días', source: 'Deloitte 2024' },
        ],
      },
      caseStudy: {
        h2: 'Una empresa industrial B2B pasó de "no hacemos marketing en realidad" a una función estructurada que genera pipeline en menos de 6 meses.',
        paragraphs: [
          'La empresa crecía a base de reputación y recomendaciones. Tenían a una persona llevando el marketing, centrada sobre todo en ferias del sector y catálogos de producto. La dirección sabía que necesitaba más de marketing, pero no tenía claro qué era ese "más" ni cómo conseguirlo. No había estrategia ni seguimiento del pipeline, y nada conectaba la actividad de marketing con los resultados de ventas.',
          'Nos integramos como CMO fraccional. El primer paso fue construir una estrategia de marketing directamente conectada con los objetivos de ventas y las prioridades de negocio. Definimos el ICP, mapeamos el buyer journey y construimos un framework de mensajes que el equipo de ventas pudiera usar. Después contratamos a dos personas más con las habilidades adecuadas para ejecutar el plan. Montamos un motor de generación de demanda que unía contenido, outreach y eventos en un solo sistema.',
          'Seis meses después, marketing aportaba el 25% del nuevo pipeline, el equipo tenía su propio sitio en la mesa de dirección, y ventas y marketing estaban alineados en objetivos y reporting. Además, la función estaba pensada para sostenerse sola: cuando nuestro proyecto se redujo, el equipo tenía la estrategia y los procesos para seguir construyendo, y la confianza para hacerlo.',
        ],
        imgAlt: 'Brújula sobre planos de arquitectura',
      },
      relatedH2: 'Lo que escribimos sobre liderazgo de marketing.',
      cta: { h2: '¿Necesitas liderazgo de marketing senior sin comprometerte con un CMO a tiempo completo?', sub: '30 minutos. Sin pitch. Solo una conversación honesta sobre dónde tu marketing necesita dirección.' },
    },
  },
};
