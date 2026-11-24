// ─────────────────────────────────────────────────────────────
// Todo o conteúdo do site vem daqui. Para adaptar a um cliente,
// edite este arquivo (+ cores em src/styles/tokens.css e fotos em
// src/assets/raw/). Nenhum texto fica "chumbado" nos componentes.
//
// Fotos: cada campo `image` é o nome do arquivo (sem extensão) em
// src/assets/raw/. Se o arquivo não existir, aparece um placeholder.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Forja',
  tagline: 'Academia',
  description:
    'Musculação, cross training, lutas e muito mais. Estrutura completa, professores de verdade e a primeira aula por nossa conta.',
  lang: 'pt-BR',
  credit: { label: 'Website Models', url: 'https://github.com/SwapChains' },

  contact: {
    whatsapp: '5511999999999', // só números, com DDI + DDD
    whatsappMessage: 'Olá! Quero agendar minha aula experimental gratuita.',
    phone: '(11) 99999-9999',
    email: 'contato@forja.example',
    street: 'Rua Exemplo, 123',
    district: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '01000-000',
    instagram: 'https://instagram.com/',
    instagramHandle: '@forja.academia',
  },

  hours: [
    { days: 'Segunda a sexta', time: '05h às 23h' },
    { days: 'Sábado', time: '08h às 18h' },
    { days: 'Domingo e feriados', time: '08h às 13h' },
  ],
};

// Liga/desliga seções inteiras.
export const sections = {
  stats: true,
  modalities: true,
  structure: true,
  schedule: true,
  plans: true,
  team: true,
  testimonials: true,
  faq: true,
  contact: true,
};

export const nav = [
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
];

export const hero = {
  image: 'hero',
  imageMobile: 'hero-mobile',
  eyebrow: 'Academia • Cross • Lutas',
  title: ['Forja seu', 'limite'],
  text: 'Estrutura de ponta, professores que acompanham de perto e um ambiente que puxa você para cima. Comece hoje.',
  primaryCta: 'Agendar aula grátis',
  secondaryCta: { label: 'Ver planos', href: '#planos' },
};

export const marquee = ['Musculação', 'Cross Training', 'Muay Thai', 'Pilates', 'Spinning', 'Yoga', 'Funcional', 'Avaliação física'];

export const stats = [
  { value: 12, suffix: '', label: 'anos formando atletas' },
  { value: 3500, suffix: '+', label: 'alunos ativos' },
  { value: 1800, suffix: 'm²', label: 'de área de treino' },
  { value: 25, suffix: '', label: 'professores' },
];

export const modalities = [
  { image: 'modalidade-musculacao', name: 'Musculação', text: 'Mais de 120 equipamentos e acompanhamento para ganhar força e massa com segurança.', level: 'Todos os níveis' },
  { image: 'modalidade-cross', name: 'Cross Training', text: 'Treinos curtos e intensos em grupo. Condicionamento, força e muita energia.', level: 'Alta intensidade' },
  { image: 'modalidade-muaythai', name: 'Muay Thai', text: 'Técnica, defesa pessoal e um cardio que ninguém esquece. Do iniciante ao avançado.', level: 'Luta' },
  { image: 'modalidade-pilates', name: 'Pilates', text: 'Postura, mobilidade e fortalecimento do core em turmas reduzidas.', level: 'Baixo impacto' },
  { image: 'modalidade-spinning', name: 'Spinning', text: 'Aulas imersivas com luz e música. Queima calórica garantida.', level: 'Cardio' },
  { image: 'modalidade-yoga', name: 'Yoga & Mobilidade', text: 'Flexibilidade, respiração e recuperação para treinar mais e melhor.', level: 'Recuperação' },
];

export const structure = {
  title: 'Estrutura para quem leva a sério',
  text: 'Ambiente climatizado, equipamentos renovados todo ano, vestiários completos e estacionamento.',
  images: [
    { image: 'estrutura-1', alt: 'Salão de musculação' },
    { image: 'estrutura-2', alt: 'Área de pesos livres' },
    { image: 'estrutura-3', alt: 'Box de cross training' },
    { image: 'estrutura-4', alt: 'Sala de spinning' },
    { image: 'estrutura-5', alt: 'Vestiário' },
    { image: 'estrutura-6', alt: 'Recepção' },
  ],
};

// Dias: 0 = domingo, 1 = segunda … 6 = sábado. Duração em minutos.
export const schedule = {
  duration: 50,
  classes: [
    { time: '06:00', name: 'Cross Training', coach: 'Diego', days: [1, 2, 3, 4, 5] },
    { time: '07:00', name: 'Spinning', coach: 'Camila', days: [1, 3, 5] },
    { time: '07:00', name: 'Pilates', coach: 'Juliana', days: [2, 4] },
    { time: '09:00', name: 'Cross Training', coach: 'Diego', days: [6] },
    { time: '09:00', name: 'Spinning', coach: 'Camila', days: [0] },
    { time: '10:00', name: 'Muay Thai', coach: 'Rafael', days: [6] },
    { time: '10:30', name: 'Yoga & Mobilidade', coach: 'Juliana', days: [0, 6] },
    { time: '12:00', name: 'Cross Training', coach: 'Diego', days: [1, 2, 3, 4, 5] },
    { time: '12:30', name: 'Pilates', coach: 'Juliana', days: [1, 3, 5] },
    { time: '18:00', name: 'Muay Thai', coach: 'Rafael', days: [1, 3, 5] },
    { time: '18:30', name: 'Spinning', coach: 'Camila', days: [2, 4] },
    { time: '19:00', name: 'Cross Training', coach: 'Diego', days: [1, 2, 3, 4, 5] },
    { time: '19:30', name: 'Yoga & Mobilidade', coach: 'Juliana', days: [1, 3] },
    { time: '20:00', name: 'Muay Thai', coach: 'Rafael', days: [2, 4] },
  ],
};

export const plans = {
  annualNote: 'no plano anual',
  items: [
    {
      name: 'Básico',
      monthly: 99,
      annual: 79,
      text: 'Para quem quer começar com o essencial.',
      features: ['Musculação livre', 'Avaliação física inicial', 'App de treinos', 'Horário comercial'],
      featured: false,
    },
    {
      name: 'Plus',
      monthly: 149,
      annual: 119,
      text: 'O mais escolhido: academia + aulas coletivas.',
      features: ['Tudo do Básico', 'Todas as aulas coletivas', 'Horário livre', 'Reavaliação a cada 3 meses', '1 convidado por mês'],
      featured: true,
    },
    {
      name: 'Black',
      monthly: 199,
      annual: 159,
      text: 'Experiência completa e acompanhamento próximo.',
      features: ['Tudo do Plus', 'Muay Thai e Pilates', 'Acesso a todas as unidades', 'Consultoria nutricional', 'Convidados ilimitados'],
      featured: false,
    },
  ],
};

export const team = [
  { image: 'equipe-1', name: 'Rafael Lima', role: 'Muay Thai', cref: 'CREF 000000-G/SP', instagram: 'https://instagram.com/' },
  { image: 'equipe-2', name: 'Camila Souza', role: 'Spinning & Funcional', cref: 'CREF 000000-G/SP', instagram: 'https://instagram.com/' },
  { image: 'equipe-3', name: 'Diego Martins', role: 'Cross Training', cref: 'CREF 000000-G/SP', instagram: 'https://instagram.com/' },
  { image: 'equipe-4', name: 'Juliana Rocha', role: 'Pilates & Yoga', cref: 'CREF 000000-G/SP', instagram: 'https://instagram.com/' },
];

export const testimonials = [
  { name: 'Mariana A.', since: 'Aluna há 2 anos', text: 'Nunca tinha conseguido manter uma rotina. Aqui os professores realmente acompanham, e o ambiente é incrível.' },
  { name: 'Lucas P.', since: 'Aluno há 8 meses', text: 'Perdi 14 kg com o cross e a musculação. A turma das 19h virou minha segunda família.' },
  { name: 'Fernanda R.', since: 'Aluna há 1 ano', text: 'O pilates resolveu minha dor nas costas. Estrutura impecável e sempre limpa.' },
  { name: 'Bruno C.', since: 'Aluno há 3 anos', text: 'Treino Muay Thai com o Rafael desde o começo. Técnica de verdade, sem enrolação.' },
  { name: 'Patrícia M.', since: 'Aluna há 6 meses', text: 'Horário estendido salvou minha vida. Treino às 5h antes do trabalho!' },
];

export const faq = [
  { q: 'A aula experimental é gratuita mesmo?', a: 'Sim. Você agenda pelo WhatsApp, vem conhecer a estrutura e faz uma aula da modalidade que quiser, sem compromisso.' },
  { q: 'Preciso de avaliação física para começar?', a: 'Recomendamos. Ela já está inclusa em todos os planos e ajuda o professor a montar um treino seguro e adequado ao seu objetivo.' },
  { q: 'Existe taxa de matrícula ou fidelidade?', a: 'Nos planos mensais não há fidelidade. No plano anual o valor mensal é menor, e a matrícula é isenta.' },
  { q: 'Posso trocar de plano depois?', a: 'Pode. Você faz o upgrade a qualquer momento e paga só a diferença proporcional.' },
  { q: 'Tem estacionamento?', a: 'Sim, estacionamento próprio e gratuito para alunos durante o treino.' },
  { q: 'Quais formas de pagamento vocês aceitam?', a: 'Pix, cartão de crédito (inclusive recorrente) e débito. Planos anuais podem ser parcelados.' },
];

export const finalCta = {
  title: ['A primeira aula', 'é por nossa conta'],
  text: 'Venha conhecer a Forja. Agende pelo WhatsApp em menos de 1 minuto.',
  cta: 'Quero minha aula grátis',
};

export const fullAddress = `${site.contact.street} — ${site.contact.district}, ${site.contact.city}/${site.contact.state}`;

export const whatsappLink = (msg: string = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
