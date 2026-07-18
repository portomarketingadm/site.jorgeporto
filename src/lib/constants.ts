export const SITE_URL = "https://jorgeporto.com.br";

export const CONTACT = {
  name: "Jorge Porto",
  email: "jorgeporto.org@gmail.com",
  phonePrimaryDisplay: "21 99543-2915",
  phoneSecondaryDisplay: "21 96551-2519",
  phonePrimaryTel: "+5521995432915",
  phoneSecondaryTel: "+5521965512519",
  instagramHandle: "@ojorgeporto",
  instagramUrl: "https://www.instagram.com/ojorgeporto/",
  whatsappUrl:
    "https://wa.me/5521965512519?text=Ol%C3%A1%2C%20vim%20do%20site%2C%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!",
};

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Métodos", href: "#metodos" },
  { label: "Palestras", href: "#palestras" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
];

export const AUTHORITY_STATS = [
  { value: 57, prefix: "+R$ ", suffix: " milhões", decimals: 0, label: "gerados para clínicas e clientes" },
  { value: 1000, prefix: "+", suffix: "", decimals: 0, label: "vendedores treinados" },
  { value: 500, prefix: "+", suffix: "", decimals: 0, label: "aulas de mentoria realizadas" },
];

export const DIAGNOSIS_SYMPTOMS = [
  "Leads atendidos com demora",
  "Conversas que terminam após o envio do preço",
  "Follow-ups realizados sem método",
  "Alto número de faltas",
  "Falta de metas individuais e coletivas",
  "Equipe sem treinamento",
  "Dono da clínica centralizando tudo",
  "Ausência de indicadores",
  "Pacientes antigos esquecidos",
  "Dependência constante de novas campanhas",
  "Baixa conversão dentro do consultório",
  "Faturamento instável",
];

export type Pillar = {
  number: string;
  title: string;
  description: string;
};

export const SOLUTION_PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Estratégia e diagnóstico",
    description:
      "Análise da operação, canais de captação, jornada do paciente, atendimento, conversão, equipe, metas e indicadores.",
  },
  {
    number: "02",
    title: "Estruturação comercial",
    description:
      "Criação de processos, funções, rotinas, scripts, playbooks, cadências de follow-up e fluxos de recuperação.",
  },
  {
    number: "03",
    title: "Treinamento de equipe",
    description:
      "Capacitação prática para atendimento, vendas, objeções, agendamento, confirmação, redução de faltas e recuperação de oportunidades.",
  },
  {
    number: "04",
    title: "Inteligência de dados",
    description:
      "Acompanhamento de leads, agendamentos, comparecimentos, vendas, faturamento, ROI, ROAS e desempenho individual.",
  },
  {
    number: "05",
    title: "Captação estratégica",
    description:
      "Campanhas de geração de demanda alinhadas à capacidade comercial e aos objetivos financeiros da clínica.",
  },
  {
    number: "06",
    title: "Fidelização e recorrência",
    description:
      "Processos de pós-venda, encantamento, reativação de pacientes e geração de novas oportunidades dentro da própria base.",
  },
];

export type MethodCard = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const COMMERCIAL_TRAINING: MethodCard = {
  title: "Treinamentos comerciais",
  description:
    "Treinamentos personalizados para recepcionistas, secretárias, SDRs, consultores, vendedores, gestores e profissionais responsáveis pelo fechamento.",
  cta: "Solicitar treinamento para minha equipe",
  href: "#contato",
};

export const TRAINING_TOPICS = [
  "Atendimento e conversão",
  "Vendas",
  "Follow-up",
  "Contorno de objeções",
  "Redução de faltas",
  "Confirmação de agenda",
  "Fechamento no consultório",
  "Recuperação de pacientes",
  "Pós-venda",
  "Gestão de metas e indicadores",
];

export const AUDIENCE_FIT = [
  "Já possuem demanda, mas perdem oportunidades",
  "Investem em tráfego e não conseguem medir o retorno",
  "Dependem excessivamente de uma única pessoa",
  "Precisam treinar recepção ou equipe comercial",
  "Desejam aumentar conversão e comparecimento",
  "Precisam organizar metas e indicadores",
  "Querem reduzir a instabilidade do faturamento",
  "Desejam crescer com processos replicáveis",
];

export const AUDIENCE_NOT_FIT = [
  "Procuram apenas uma campanha isolada",
  "Não aceitam acompanhar números",
  "Não desejam envolver a equipe",
  "Esperam resultado sem mudar processos",
  "Buscam fórmulas mágicas ou crescimento sem execução",
];

export type TimelineStep = {
  number: string;
  title: string;
  description: string;
};

export const HOW_IT_WORKS: TimelineStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Análise do momento atual da clínica, equipe, atendimento, captação, indicadores e gargalos.",
  },
  {
    number: "02",
    title: "Direcionamento",
    description: "Definição das prioridades, metas e estrutura necessária.",
  },
  {
    number: "03",
    title: "Implementação",
    description: "Construção dos processos, scripts, rotinas e ferramentas.",
  },
  {
    number: "04",
    title: "Treinamento",
    description: "Preparação da equipe para executar o processo com segurança.",
  },
  {
    number: "05",
    title: "Acompanhamento",
    description: "Análise dos indicadores, correções e evolução da operação.",
  },
];

export const CONTENT_TOPICS = [
  "Negócios",
  "Empreendedorismo",
  "Liderança",
  "Vendas",
  "Gestão",
  "Marketing",
  "Posicionamento",
  "Estrutura comercial",
  "Bastidores",
  "Cases",
  "Mentalidade empresarial",
];

export const SEGMENT_OPTIONS = [
  "Clínica médica",
  "Clínica odontológica",
  "Harmonização orofacial",
  "Estética",
  "Outro segmento de saúde",
];

export const REVENUE_OPTIONS = [
  "Até R$ 30 mil/mês",
  "R$ 30 mil a R$ 80 mil/mês",
  "R$ 80 mil a R$ 150 mil/mês",
  "R$ 150 mil a R$ 300 mil/mês",
  "Acima de R$ 300 mil/mês",
];

export const TEAM_SIZE_OPTIONS = [
  "Só eu / 1 pessoa",
  "2 a 5 pessoas",
  "6 a 15 pessoas",
  "Mais de 15 pessoas",
];
