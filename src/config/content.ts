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
    headline: 'DESCUBRA 21 FORNECEDORES DE ACESSÓRIOS PARA COMEÇAR SUA LOJA **SEM PERDER HORAS PROCURANDO ONDE COMPRAR**',
    body: 'Tenha acesso a fornecedores organizados, **produtos a partir de R$2,00** e um passo a passo simples para encontrar os produtos certos para começar a vender.',
    paragraphs: [
      'Reunidos por quem trabalha há 14 anos com acessórios.',
    ],
    product: {
      price: 'R$ 9,90',
      note: 'Pagamento único • Acesso vitalício pelo aplicativo',
    },
    ctaLabel: 'QUERO ACESSAR OS FORNECEDORES',
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
    title: 'PARE DE PROCURAR FORNECEDORES NO ESCURO.',
    subtitle: 'Veja exemplos de produtos e conheça o aplicativo que organiza os fornecedores para você começar sua busca.',
    // Fotos reais de produtos dos fornecedores da lista (não são depoimentos de compradores).
    items: [
      { src: '/images/produto-01-brinco-dourado-loja.webp', alt: 'Brinco dourado em cartela, exposto em loja de fornecedor', label: 'Produto de fornecedor disponível na lista', ratio: '2:3' as const },
      { src: '/images/produto-02-catalogo-brincos.webp', alt: 'Catálogo de fornecedor com brincos dourados e prateados', label: 'Produto de fornecedor disponível na lista', ratio: '2:3' as const },
      { src: '/images/produto-03-brinco-quadrado-loja.webp', alt: 'Brinco dourado quadrado em cartela, exposto em loja de fornecedor', label: 'Produto de fornecedor disponível na lista', ratio: '2:3' as const },
      { src: '/images/produto-04-catalogo-brincos.webp', alt: 'Catálogo de fornecedor com brincos dourados e prateados em formatos variados', label: 'Produto de fornecedor disponível na lista', ratio: '2:3' as const },
      { src: '/images/produto-05-brinco-coracao-loja.webp', alt: 'Brinco dourado em formato de coração, exposto em loja de fornecedor', label: 'Produto de fornecedor disponível na lista', ratio: '2:3' as const },
      { src: '/images/produto-06-catalogo-brincos.webp', alt: 'Catálogo de fornecedor com brincos dourados de argola, laço e leque', label: 'Produto de fornecedor disponível na lista', ratio: '2:3' as const },
    ],
    authority: {
      title: 'EXPERIÊNCIA REAL. FORNECEDORES ORGANIZADOS. TUDO EM UM SÓ LUGAR.',
      body: 'O Meu Fornecedor nasceu da experiência de quem já trabalha com acessórios e conhece esse mercado há 14 anos.',
      stats: [
        { title: '14 ANOS DE EXPERIÊNCIA NO RAMO', description: 'Experiência prática com acessórios femininos e revenda.' },
        { title: '21 FORNECEDORES ORGANIZADOS', description: '21 na Oferta Simples e 33 na Oferta Completa: semijoias, bijuterias, folheados, aço inox, prata 925 e acessórios de cabelo.' },
        { title: 'PRODUTOS A PARTIR DE R$\u00a02,00', description: 'Opções para quem busca começar com um investimento menor.' },
      ],
      proofs: [
        { src: '/images/prova-experiencia-loja.webp', alt: 'Interior de loja física de bijuterias, folheados e semijoias, com expositores de acessórios e balcão de atendimento', label: 'PROVA DE EXPERIÊNCIA', ratio: '3:4' as const, caption: 'Experiência real no mercado de acessórios' },
      ],
    },
  },
  modulesSection: {
    title: 'TUDO O QUE VOCÊ PRECISA PARA COMEÇAR SUA BUSCA POR FORNECEDORES.',
    subtitle: 'Ao confirmar seu acesso, você entra no Meu Fornecedor e encontra fornecedores de acessórios organizados para consultar quando precisar.',
    accordionLabel: 'Clique aqui para ver descrição',
  },
  modules: [
    { src: '/images/modulo-01-fornecedores.webp', alt: 'Módulo 01: telas do aplicativo com a lista de fornecedores e as categorias', label: 'Imagem do módulo 01', ratio: '1:1' as const, eyebrow: 'MÓDULO 01', title: 'FORNECEDORES ORGANIZADOS', highlight: '21 fornecedores na Oferta Simples e 33 na Oferta Completa. Você poderia passar horas procurando fornecedor por fornecedor. Aqui, eles já estão organizados em um só lugar.', description: 'Uma seleção de fornecedores reunidos para quem quer começar a vender acessórios ou encontrar novas opções para abastecer sua loja.', listTitle: 'Em cada fornecedor você encontra:', list: ['Categoria', 'WhatsApp ou contato', 'Instagram ou site', 'Pedido mínimo', 'Preço inicial dos produtos', 'Envio e região atendida'], list2Title: 'Tipos de fornecedores na lista:', list2: ['Fornecedores de semijoias', 'Fornecedores de bijuterias', 'Fornecedores de folheados', 'Fornecedores de joias em aço inox', 'Fornecedores de prata 925', 'Fornecedores de acessórios de cabelo', 'Fornecedores com produtos a partir de R$\u00a02,99', 'Fornecedores que atendem sem CNPJ'] },
    { src: '/images/modulo-02-produtos.webp', alt: 'Módulo 02: telas do aplicativo com o catálogo de produtos por categoria', label: 'Imagem do módulo 02', ratio: '1:1' as const, eyebrow: 'MÓDULO 02', title: 'PRODUTOS PARA REVENDER', highlight: 'Veja opções de acessórios e encontre produtos com preços baixos para começar seu estoque.', description: 'Encontre opções de produtos para analisar, escolher e negociar diretamente com os fornecedores conforme suas necessidades.' },
    { src: '/images/modulo-03-acesso-app.webp', alt: 'Módulo 03: celular com o aplicativo Meu Fornecedor aberto', label: 'Imagem do módulo 03', ratio: '1:1' as const, eyebrow: 'MÓDULO 03', title: 'ACESSO PELO APP', highlight: 'Consulte os fornecedores pelo celular sempre que precisar.', description: 'Em vez de depender de uma lista perdida no celular, você acessa os fornecedores pelo Meu Fornecedor e consulta as opções sempre que precisar.' },
  ],
  bonusesSection: {
    title: 'E AINDA LEVE 3 BÔNUS PARA TIRAR SUA IDEIA DO PAPEL.',
    subtitle: [
      'Você não recebe apenas os fornecedores.',
      'Na Oferta Completa, você também recebe materiais para escolher seus primeiros produtos, calcular preços e começar a divulgar sua loja.',
    ],
    journey: [
      { step: '1. ENCONTRE', text: 'os fornecedores' },
      { step: '2. ESCOLHA', text: 'os produtos (Guia)' },
      { step: '3. PRECIFIQUE', text: 'suas peças (Calculadora)' },
      { step: '4. DIVULGUE', text: 'sua loja (Kit)' },
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
    title: 'ESCOLHA COMO VOCÊ QUER COMEÇAR.',
    subtitle: 'Você poderia gastar horas procurando fornecedores por conta própria. Aqui, eles já estão organizados para você.',
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
      items: ['**21 FORNECEDORES**', 'Acesso digital vitalício'],
      previousPrice: '', beforeLabel: '', todayLabel: 'HOJE POR APENAS', installmentCount: 0, installmentValue: '', cashValue: 'R$ 9,90', paymentNote: 'Pagamento único.',
      ctaLabel: 'QUERO A OFERTA SIMPLES',
      note: '',
    },
    complete: {
      badge: 'PARA QUEM QUER COMEÇAR COMPLETO', eyebrow: 'OFERTA COMPLETA', title: 'MEU FORNECEDOR +\u00a03\u00a0BÔNUS',
      tagline: 'Fornecedores + tudo para começar',
      extra: 'POR APENAS R$\u00a010 A MAIS',
      extraNote: 'Você recebe 12 fornecedores adicionais + os 3 bônus para começar.',
      items: [
        { label: '**33 FORNECEDORES ORGANIZADOS**' },
        { label: '**12 FORNECEDORES A MAIS QUE A OFERTA SIMPLES**' },
        { label: '**ATUALIZAÇÕES CONSTANTES DE FORNECEDORES**' },
        { label: 'Acesso vitalício pelo aplicativo' },
        { label: '**3 BÔNUS INCLUSOS**' },
        { label: 'Guia “Comece sua Loja de R$\u00a010”', value: 'R$ 29,90' },
        { label: 'Calculadora de Preço de Venda', value: 'R$ 19,90' },
        { label: 'Kit de Divulgação', value: 'R$ 24,90' },
      ],
      previousPrice: '', beforeLabel: 'VALOR DOS BÔNUS: R$ 74,70', todayLabel: 'HOJE POR APENAS', installmentCount: 0, installmentValue: '', cashValue: 'R$ 19,90', paymentNote: 'Pagamento único.',
      ctaLabel: 'QUERO A OFERTA COMPLETA',
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
      'Acesse o material, conheça os fornecedores e veja se a lista faz sentido para você. Se dentro de 7 dias você entender que não é o que esperava, solicite seu reembolso conforme as condições da garantia.',
    ],
    highlightTitle: '7 DIAS DE GARANTIA',
    highlightText: '100% do seu dinheiro de volta dentro do prazo de garantia.',
  },
  faqSection: { title: 'PERGUNTAS FREQUENTES' },
  faq: [
    { question: 'COMO RECEBO O ACESSO AO MEU FORNECEDOR?', answer: 'Após a confirmação do pagamento, você recebe as instruções necessárias para acessar o Meu Fornecedor pelo aplicativo e consultar os fornecedores disponíveis.' },
    { question: 'OS FORNECEDORES VENDEM ONLINE?', answer: 'Sim. A proposta da lista é reunir fornecedores que atendem online, permitindo que você entre em contato e faça suas compras diretamente com cada fornecedor.' },
    { question: 'OS FORNECEDORES ENVIAM PARA TODO O BRASIL?', answer: 'A lista foi criada para facilitar o acesso a fornecedores que vendem online e realizam envios para diferentes regiões do Brasil. As condições de envio, pedido mínimo e valores são definidos individualmente por cada fornecedor.' },
    { question: 'QUANTOS FORNECEDORES EU VOU ENCONTRAR?', answer: 'A Oferta Simples reúne 21 fornecedores de bijuterias, semijoias e acessórios femininos, organizados no aplicativo. A Oferta Completa reúne 33 fornecedores (os 21 da Simples + 12 adicionais) e inclui os 3 bônus.' },
    { question: 'EU TENHO SUPORTE SE PRECISAR DE AJUDA?', answer: 'Sim. O produto conta com suporte pelo WhatsApp para auxiliar você com questões relacionadas ao acesso ao material.' },
  ],
  footer: { brand: 'Meu Fornecedor', copyright: '© 2026 Meu Fornecedor' },
}