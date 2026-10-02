export type MediaItem = { src: string; alt: string; label: string; ratio: '1:1' | '2:3' | '3:2' | '3:4' }
export type ProductItem = MediaItem & { eyebrow: string; title: string; description: string }

// Capitalização mantida exatamente como na copy final do Meu Fornecedor.
// Trechos entre **asteriscos** são exibidos em destaque (negrito, #1f1f1f).
export const pageContent = {
  urgencyBar: {
    // Desativada: a copy do Meu Fornecedor não define texto para a faixa superior (não inventar urgência).
    enabled: false,
    text: '',
  },
  hero: {
    image: '/images/hero-mockup-meu-fornecedor.webp',
    imageAlt: 'Mockup do aplicativo Meu Fornecedor',
    headline: 'COMECE A VENDER ACESSÓRIOS ENCONTRANDO FORNECEDORES COM PRODUTOS A PARTIR DE R$\u00a02,00',
    body: 'Tenha acesso a 21 fornecedores organizados no aplicativo e encontre produtos a partir de R$\u00a02,00 para começar a montar seu primeiro mix sem precisar procurar tudo do zero.',
    paragraphs: [
      'Reunidos por quem trabalha há 14 anos com acessórios.',
    ],
    product: {
      price: 'R$ 9,90',
      note: 'Pagamento único • Acesso vitalício pelo aplicativo',
    },
    ctaLabel: 'QUERO ENCONTRAR MEUS FORNECEDORES',
    checklist: [
      '21 fornecedores de acessórios',
      'Produtos a partir de R$ 2,00',
      'Fornecedores que vendem online',
      'Acesso imediato pelo aplicativo',
    ],
    ctaNote: 'Pagamento seguro • Acesso vitalício',
    securityImage: '/images/selos-seguranca-compra.svg',
    securityImageAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  results: {
    // Título, subtítulo e carrossel de fotos de produtos removidos a pedido. Para reativar, preencha os campos e a lista.
    title: '',
    subtitle: '',
    items: [] as MediaItem[],
    // Campos para prints de WhatsApp. Para ativar: suba o arquivo em public/images/ e preencha o src,
    // (caminho começando com /images/ + nome do arquivo). Campo com src vazio aparece como espaço reservado (1200 × 1200).
    prints: {
      title: 'NÃO É SÓ UMA LISTA DE FORNECEDORES. VEJA QUEM JÁ COMEÇOU A USAR.',
      subtitle: '',
      items: [
        { src: '/images/print-01.webp', alt: 'Print de conversa real no WhatsApp com compradora do Meu Fornecedor (01)', label: 'Print 01', ratio: '1:1' as const },
        { src: '/images/print-02.webp', alt: 'Print de conversa real no WhatsApp com compradora do Meu Fornecedor (02)', label: 'Print 02', ratio: '1:1' as const },
        { src: '/images/print-03.webp', alt: 'Print de conversa real no WhatsApp com compradora do Meu Fornecedor (03)', label: 'Print 03', ratio: '1:1' as const },
        { src: '/images/print-04.webp', alt: 'Print de conversa real no WhatsApp com compradora do Meu Fornecedor (04)', label: 'Print 04', ratio: '1:1' as const },
        { src: '/images/print-05.webp', alt: 'Print de conversa real no WhatsApp com compradora do Meu Fornecedor (05)', label: 'Print 05', ratio: '1:1' as const },
        { src: '/images/print-06.webp', alt: 'Print de conversa real no WhatsApp com compradora do Meu Fornecedor (06)', label: 'Print 06', ratio: '1:1' as const },
      ],
    },
    authority: {
      // Bloco de experiência (texto, cards dos 14 anos e fotos da loja) oculto a pedido. Para reativar, mude para true.
      enabled: false,
      title: '',
      body: '**Antes de organizar esses fornecedores no aplicativo, essa experiência foi construída na prática, trabalhando diretamente com acessórios e revenda.**',
      stats: [
        { title: '14 ANOS DE EXPERIÊNCIA NO RAMO', description: 'Experiência prática com acessórios femininos e revenda.' },
        { title: '21 FORNECEDORES ORGANIZADOS', description: 'Selecionados por quem trabalha há 14 anos com acessórios: semijoias, bijuterias, folheados, aço inox, prata 925 e acessórios de cabelo.' },
        { title: 'PRODUTOS A PARTIR DE R$\u00a02,00', description: 'Opções para quem busca começar com um investimento menor.' },
      ],
      proofs: [
        { src: '/images/prova-loja-fisica-espaco.webp', alt: 'Loja física no início, ainda vazia, com expositores brancos, balcão de vidro e painéis canaletados', label: 'LOJA NO INÍCIO', ratio: '3:4' as const, caption: '**Loja quando tudo começou**' },
        { src: '/images/prova-experiencia-loja.webp', alt: 'Loja física hoje: interior de loja de bijuterias, folheados e semijoias, com expositores de acessórios e balcão de atendimento', label: 'LOJA HOJE', ratio: '3:4' as const, caption: '**Loja como está hoje**' },
      ],
    },
  },
  modulesSection: {
    title: 'O QUE VOCÊ ENCONTRA NO MEU FORNECEDOR.',
    subtitle: 'Ao confirmar seu acesso, você entra no Meu Fornecedor e encontra fornecedores de acessórios organizados para consultar quando precisar.',
    accordionLabel: 'Clique aqui para ver descrição',
  },
  modules: [
    { src: '/images/modulo-01-fornecedores.webp', alt: 'Telas do aplicativo com a lista de fornecedores e as categorias', label: 'Imagem: fornecedores organizados', ratio: '1:1' as const, eyebrow: '', title: '1. FORNECEDORES ORGANIZADOS', highlight: '21 fornecedores na Oferta Simples e 33 na Oferta Completa. Você poderia passar horas procurando fornecedor por fornecedor. Aqui, eles já estão organizados em um só lugar.', description: 'Uma seleção de fornecedores reunidos para quem quer começar a vender acessórios ou encontrar novas opções para abastecer sua loja.', listTitle: 'Em cada fornecedor você encontra:', list: ['Categoria', 'WhatsApp ou contato', 'Instagram ou site', 'Pedido mínimo', 'Preço inicial dos produtos', 'Envio e região atendida'], list2Title: 'Tipos de fornecedores na lista:', list2: ['Fornecedores de semijoias', 'Fornecedores de bijuterias', 'Fornecedores de folheados', 'Fornecedores de joias em aço inox', 'Fornecedores de prata 925', 'Fornecedores de acessórios de cabelo', 'Fornecedores com produtos a partir de R$\u00a02,99', 'Fornecedores que atendem sem CNPJ'] },
    { src: '/images/modulo-02-produtos.webp', alt: 'Telas do aplicativo com o catálogo de produtos por categoria', label: 'Imagem: categorias e produtos', ratio: '1:1' as const, eyebrow: '', title: '2. CATEGORIAS E PRODUTOS', highlight: 'Veja opções de acessórios e encontre produtos com preços baixos para começar seu estoque.', description: 'Encontre opções de produtos para analisar, escolher e negociar diretamente com os fornecedores conforme suas necessidades.' },
    { src: '/images/modulo-03-acesso-app.webp', alt: 'Celular com o aplicativo Meu Fornecedor aberto', label: 'Imagem: acesso pelo aplicativo', ratio: '1:1' as const, eyebrow: '', title: '3. ACESSO PELO APLICATIVO', highlight: 'Consulte os fornecedores pelo celular sempre que precisar.', description: 'Em vez de depender de uma lista perdida no celular, você acessa os fornecedores pelo Meu Fornecedor e consulta as opções sempre que precisar.' },
  ],
  bonusesSection: {
    title: 'E AINDA LEVE 3 BÔNUS PARA TIRAR SUA IDEIA DO PAPEL.',
    subtitle: [
      'Você já terá os fornecedores. Agora, esses 3 bônus ajudam a transformar a pesquisa em ação.',
    ],
    journeyTitle: 'SEU PRIMEIRO CAMINHO PARA COMEÇAR',
    journey: [
      { step: '01 — ENCONTRE', text: 'Seus fornecedores organizados.' },
      { step: '02 — ESCOLHA', text: 'Os produtos para começar seu mix.' },
      { step: '03 — PRECIFIQUE', text: 'Use a calculadora para definir seus preços.' },
      { step: '04 — DIVULGUE', text: 'Use o kit para começar a apresentar sua loja.' },
    ],
  },
  bonuses: [
    {
      src: '/images/bonus-01-guia-loja-10.webp', alt: 'Imagem do bônus 01: Guia Comece sua Loja de R$ 10', label: 'Imagem do bônus 01', ratio: '1:1' as const, eyebrow: 'Bônus 01',
      title: 'Guia “Comece sua Loja de R$ 10”', tagline: 'Monte seu primeiro mix com mais clareza.',
      description: 'Um guia prático para ajudar você a escolher os primeiros produtos, definir quanto comprar, calcular o preço de venda e montar um mix inicial.',
      listTitle: 'Você encontra:',
      list: ['Como escolher os primeiros produtos', 'Quanto comprar inicialmente', 'Como calcular o preço de venda', 'Como montar seu mix inicial'],
      valueLabel: 'VALOR INDIVIDUAL:', value: 'R$ 29,90',
    },
    {
      src: '/images/bonus-02-calculadora-preco.webp', alt: 'Imagem do bônus 02: Calculadora de Preço de Venda', label: 'Imagem do bônus 02', ratio: '1:1' as const, eyebrow: 'Bônus 02',
      title: 'Calculadora de Preço de Venda', tagline: 'Descubra quanto cobrar por cada peça.',
      description: 'Uma ferramenta simples para organizar os números antes de definir o preço dos seus produtos.',
      listTitle: 'Calcule:',
      list: ['Custo', 'Margem', 'Preço de venda', 'Lucro por peça'],
      valueLabel: 'VALOR INDIVIDUAL:', value: 'R$ 19,90',
    },
    {
      src: '/images/bonus-03-kit-divulgacao.webp', alt: 'Imagem do bônus 03: Kit de Divulgação', label: 'Imagem do bônus 03', ratio: '1:1' as const, eyebrow: 'Bônus 03',
      title: 'Kit de Divulgação', tagline: 'Pare de começar do zero toda vez que precisar divulgar.',
      description: 'Modelos prontos para você adaptar e utilizar no WhatsApp e Instagram.',
      listTitle: 'Você recebe modelos para:',
      list: ['Divulgação da loja', 'Lançamento', 'Promoções', 'Respostas para clientes', 'Chamadas para Status'],
      valueLabel: 'VALOR INDIVIDUAL:', value: 'R$ 24,90',
    },
  ],
  offersSection: {
    title: 'QUAL OPÇÃO FAZ MAIS SENTIDO PARA VOCÊ?',
    subtitle: 'Comece com os fornecedores ou aproveite a opção completa com mais 12 fornecedores e 3 bônus.',
    paymentSecurityImage: '/images/selos-seguranca-compra.svg',
    paymentSecurityAlt: 'Selos de compra segura, satisfação garantida e privacidade protegida',
  },
  offers: {
    // Oferta real: pagamento único, sem parcelamento e sem PIX (installmentCount = 0).
    simple: {
      eyebrow: 'OFERTA SIMPLES',
      title: 'MEU FORNECEDOR',
      tagline: 'Só os fornecedores',
      extra: '',
      extraNote: '',
      items: ['**21 FORNECEDORES**', 'Acesso vitalício pelo aplicativo'],
      previousPrice: '', beforeLabel: '', todayLabel: 'HOJE POR APENAS', installmentCount: 0, installmentValue: '', cashValue: 'R$ 9,90', paymentNote: 'Pagamento único.',
      ctaLabel: 'QUERO A OFERTA SIMPLES',
      note: '',
    },
    complete: {
      badge: 'A OPÇÃO COMPLETA', eyebrow: 'OFERTA COMPLETA', title: 'MEU FORNECEDOR +\u00a03\u00a0BÔNUS',
      tagline: 'Fornecedores + materiais para dar os primeiros passos',
      extra: 'POR APENAS R$\u00a010 A MAIS, VOCÊ LEVA:',
      extraNote: '',
      gains: ['+ 12 fornecedores', '+ 3 bônus', '+ R$\u00a074,70 em materiais'],
      items: [
        { label: '**33 FORNECEDORES ORGANIZADOS**' },
        { label: '**12 FORNECEDORES A MAIS QUE A OFERTA SIMPLES**' },
        { label: 'Acesso vitalício pelo aplicativo' },
        { label: '**3 BÔNUS INCLUSOS**' },
        { label: 'Guia “Comece sua Loja de R$\u00a010”', value: 'R$ 29,90' },
        { label: 'Calculadora de Preço de Venda', value: 'R$ 19,90' },
        { label: 'Kit de Divulgação', value: 'R$ 24,90' },
      ],
      previousPrice: '', beforeLabel: 'VALOR DOS BÔNUS: R$ 74,70', todayLabel: 'HOJE POR APENAS', installmentCount: 0, installmentValue: '', cashValue: 'R$ 19,90', paymentNote: 'Pagamento único.',
      ctaLabel: 'QUERO COMEÇAR COM 33 FORNECEDORES',
      note: '',
    },
    popup: {
      eyebrow: 'ESPERA! JÁ QUE VOCÊ QUER A BÁSICA...',
      headline: 'POSSO LIBERAR A OFERTA COMPLETA POR APENAS R$ 14,90.',
      message: [
        'Você já decidiu acessar os fornecedores.',
        'Então, antes de finalizar, você pode aproveitar a condição especial e levar também os 3 bônus que ajudam na escolha dos produtos, formação do preço e divulgação da sua loja.',
      ],
      title: 'VOCÊ RECEBE:',
      previousPrice: '', beforeLabel: '', todayLabel: 'CONDIÇÃO ESPECIAL', installmentCount: 0, installmentValue: '', cashValue: 'R$ 14,90', paymentNote: 'Pagamento único.',
      ctaLabel: 'QUERO A OFERTA COMPLETA POR R$ 14,90', secondaryLabel: 'Não, quero continuar apenas com a Oferta Simples.',
    },
  },
  guarantee: {
    image: '/images/selo-garantia-7-dias.svg',
    imageAlt: 'Selo de garantia de 7 dias',
    days: 7,
    title: '7 DIAS PARA TESTAR SEM RISCO',
    body: [
      'Você pode acessar, conhecer o material e decidir se faz sentido para você. Se não fizer, solicite o reembolso dentro de 7 dias.',
    ],
    highlightTitle: '7 DIAS DE GARANTIA',
    highlightText: '100% do seu dinheiro de volta dentro do prazo de garantia.',
  },
  faqSection: { title: 'PERGUNTAS FREQUENTES' },
  faq: [
    { question: 'COMO RECEBO O ACESSO AO MEU FORNECEDOR?', answer: 'Após a confirmação do pagamento, você recebe as instruções necessárias para acessar o Meu Fornecedor pelo aplicativo e consultar os fornecedores disponíveis.' },
    { question: 'OS FORNECEDORES VENDEM ONLINE?', answer: 'Sim. O Meu Fornecedor reúne fornecedores que trabalham com vendas online, permitindo que você consulte as opções disponíveis pelo aplicativo.' },
    { question: 'OS FORNECEDORES ENVIAM PARA TODO O BRASIL?', answer: 'As condições de envio podem variar de fornecedor para fornecedor. Antes de realizar sua compra, confirme diretamente com o fornecedor as regiões atendidas, valores e condições de entrega.' },
    { question: 'QUANTOS FORNECEDORES EU VOU ENCONTRAR?', answer: 'Na oferta simples, você recebe acesso a 21 fornecedores organizados. Na oferta completa, são 33 fornecedores, além dos 3 bônus.' },
    { question: 'EU PRECISO TER EXPERIÊNCIA PARA COMEÇAR?', answer: 'Não é necessário ter experiência prévia para acessar o Meu Fornecedor. O material foi organizado para facilitar sua pesquisa e ajudar você a dar os primeiros passos na escolha dos produtos e fornecedores.' },
  ],
  footer: { brand: 'Meu Fornecedor', copyright: '© 2026 Meu Fornecedor' },
}