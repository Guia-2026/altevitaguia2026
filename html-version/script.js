// Grupo Altevita - Guia de Cuidado 2026 - HTML Version

const chapters = [
  { id: "introducao", num: 1, title: "Introdução", subtitle: "A Era da Longevidade Inteligente", icon: "❤️" },
  { id: "condicoes", num: 2, title: "Entendendo as Condições", subtitle: "Alzheimer e Parkinson (Contexto 2026)", icon: "🧠" },
  { id: "ambiente", num: 3, title: "O Ambiente Conectado", subtitle: "A Casa Segura", icon: "🏠" },
  { id: "rotina", num: 4, title: "Protocolos de Rotina Diária", subtitle: "Higiene, Vestuário e Alimentação", icon: "📋" },
  { id: "nutricao", num: 5, title: "Nutrição", subtitle: "O Prazer de Comer (+ Receitas)", icon: "🍽️" },
  { id: "medicacao", num: 6, title: "Gestão Medicamentosa", subtitle: "Tecnologia e Cuidados 2026", icon: "💊" },
  { id: "comunicacao", num: 7, title: "Comunicação", subtitle: "Estratégias Distintas", icon: "💬" },
  { id: "emergencias", num: 8, title: "Plano de Ação em Emergências", subtitle: "Fuga, Deambulação e Freezing", icon: "⚠️" },
  { id: "atividades", num: 9, title: "Atividades Cognitivas e Motoras", subtitle: "Estimulação e Bem-estar", icon: "✨" },
];

let currentView = "cover";
let currentChapterIndex = 0;

function showView(view, chapterIdx) {
  document.getElementById("cover-view").classList.add("hidden");
  document.getElementById("toc-view").classList.add("hidden");
  document.getElementById("chapter-view").classList.add("hidden");
  document.getElementById("end-view").classList.add("hidden");

  if (view === "cover") document.getElementById("cover-view").classList.remove("hidden");
  else if (view === "toc") document.getElementById("toc-view").classList.remove("hidden");
  else if (view === "chapter") {
    currentChapterIndex = chapterIdx ?? currentChapterIndex;
    renderChapter(currentChapterIndex);
    document.getElementById("chapter-view").classList.remove("hidden");
  }
  else if (view === "end") document.getElementById("end-view").classList.remove("hidden");

  currentView = view;
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderChapter(idx) {
  const ch = chapters[idx];
  const total = chapters.length;

  document.getElementById("ch-label").textContent = `Capítulo ${ch.num}`;
  document.getElementById("ch-indicator").innerHTML = `📖 Capítulo <strong>${ch.num}</strong> de ${total}`;
  document.getElementById("ch-icon").textContent = ch.icon;
  document.getElementById("ch-title").textContent = ch.title;
  document.getElementById("ch-subtitle").textContent = ch.subtitle || "";
  document.getElementById("ch-subtitle").style.display = ch.subtitle ? "block" : "none";

  // Nav buttons
  document.getElementById("ch-prev-top").disabled = idx === 0;
  document.getElementById("ch-next-top").disabled = idx === total - 1;
  document.getElementById("ch-prev-bot").disabled = idx === 0;
  document.getElementById("ch-next-bot").disabled = idx === total - 1;

  // Dots
  const dotsEl = document.getElementById("ch-dots");
  dotsEl.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("div");
    dot.className = "chapter-dot" + (i === idx ? " active" : i < idx ? " done" : "");
    dotsEl.appendChild(dot);
  }

  // Content
  const contentEl = document.getElementById("ch-content");
  contentEl.innerHTML = getChapterContent(ch.id);

  // Init accordions
  initAccordions();
}

function prevChapter() {
  if (currentChapterIndex > 0) showView("chapter", currentChapterIndex - 1);
  else showView("toc");
}

function nextChapter() {
  if (currentChapterIndex < chapters.length - 1) showView("chapter", currentChapterIndex + 1);
  else showView("end");
}

function initAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach(btn => {
    btn.addEventListener("click", function() {
      const content = this.nextElementSibling;
      const isOpen = !content.classList.contains("hidden");
      // Close all siblings
      this.closest(".accordion-group")?.querySelectorAll(".accordion-content").forEach(c => c.classList.add("hidden"));
      this.closest(".accordion-group")?.querySelectorAll(".accordion-trigger").forEach(t => t.classList.remove("open"));
      if (!isOpen) {
        content.classList.remove("hidden");
        this.classList.add("open");
      }
    });
  });
}

// Build TOC
function buildTOC() {
  const list = document.getElementById("toc-list");
  chapters.forEach((ch, i) => {
    const btn = document.createElement("button");
    btn.className = "toc-item";
    btn.onclick = () => showView("chapter", i);
    btn.innerHTML = `
      <div class="toc-item-num">${ch.num}</div>
      <div class="toc-item-icon">${ch.icon}</div>
      <div class="toc-item-text">
        <div class="toc-item-title">${ch.title}</div>
        ${ch.subtitle ? `<div class="toc-item-sub">${ch.subtitle}</div>` : ""}
      </div>
      <div class="toc-item-dots">•••</div>
    `;
    list.appendChild(btn);
  });
}

// Chapter content
function getChapterContent(id) {
  const content = {
    introducao: `
      <div class="text-center" style="padding:1.5rem 0">
        <p style="font-size:1.25rem;color:var(--primary);font-style:italic;font-weight:500">"Honrar a vida e respeitar a própria história."</p>
      </div>
      <div class="content-card">
        <h3 style="color:var(--primary);font-size:1.25rem;margin-bottom:1rem">A Era da Longevidade Inteligente</h3>
        <p style="margin-bottom:1rem;color:rgba(64,64,64,0.8);line-height:1.7">Em 2026, o cuidado domiciliar evoluiu. Com os avanços da <strong style="color:var(--primary)">Ambient Assisted Living</strong> (Vida Assistida pelo Ambiente) e as novas diretrizes de saúde, a segurança física se une à tecnologia invisível.</p>
        <p style="color:rgba(64,64,64,0.8);line-height:1.7">Este guia foi elaborado pelo <strong style="color:var(--primary)">Grupo Altevita</strong> para apoiar famílias e cuidadores. Nosso objetivo é integrar o rigor técnico ao calor humano, promovendo autonomia e dignidade para quem convive com Alzheimer ou Parkinson.</p>
      </div>
      <div class="content-grid content-grid-3">
        <div class="pillar-card"><div class="pillar-icon">🛡️</div><div class="pillar-title">Segurança</div><div class="pillar-desc">Ambiente adaptado com tecnologia proativa para prevenir acidentes.</div></div>
        <div class="pillar-card"><div class="pillar-icon">💡</div><div class="pillar-title">Tecnologia</div><div class="pillar-desc">Dispositivos inteligentes que auxiliam sem invadir a rotina.</div></div>
        <div class="pillar-card"><div class="pillar-icon">❤️</div><div class="pillar-title">Afeto</div><div class="pillar-desc">Cuidado humanizado que preserva a dignidade e a história de vida.</div></div>
      </div>
      <div class="highlight-box"><p><strong>Para quem é este guia?</strong> Familiares, cuidadores profissionais e todos que desejam oferecer um cuidado de excelência para pessoas que vivem com Alzheimer ou Parkinson.</p></div>
    `,

    condicoes: `
      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">🧠</span><div><h3>Doença de Alzheimer</h3></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">O que é:</h4>
        <p style="margin-bottom:1rem;color:rgba(64,64,64,0.8)">Condição neurodegenerativa que afeta memória, linguagem e percepção.</p>
        <h4 style="font-weight:600;margin-bottom:0.5rem">Sintomas na Rotina:</h4>
        <ul class="content-list"><li>Desorientação temporal</li><li>Repetição de perguntas</li><li>Alterações de humor</li><li>Dificuldade em completar tarefas familiares</li></ul>
        <div class="tip-box" style="margin-top:1rem"><p>💡 <strong>Abordagem Atual (2026):</strong> Foco na preservação da identidade. Não corrigimos o residente de forma ríspida; validamos sua realidade para reduzir a ansiedade.</p></div>
      </div>
      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">🤲</span><div><h3>Doença de Parkinson</h3></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">O que é:</h4>
        <p style="margin-bottom:1rem;color:rgba(64,64,64,0.8)">Distúrbio neurológico motor causado pela diminuição de dopamina.</p>
        <h4 style="font-weight:600;margin-bottom:0.5rem">Sintomas na Rotina:</h4>
        <ul class="content-list"><li>Tremores em repouso</li><li>Rigidez muscular</li><li>Lentidão (bradicinesia)</li><li>Desequilíbrio postural</li></ul>
        <div class="tip-box" style="margin-top:1rem"><p>💡 <strong>Abordagem Atual (2026):</strong> Estímulo contínuo à mobilidade assistida e uso de tecnologias para compensar flutuações motoras.</p></div>
      </div>
      <div class="alert-box alert-info"><p class="alert-title">ℹ️ Importante</p><p class="alert-text">Cada pessoa é única. Os sintomas e a progressão variam. Acompanhamento médico regular é essencial para ajustes no plano de cuidados.</p></div>
    `,

    ambiente: `
      <p style="color:var(--primary);font-weight:500;margin-bottom:1rem">📡🏠 A segurança em 2026 é proativa e menos invasiva.</p>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">📡</span><div><h3 class="text-fg">Sensores de Queda e Presença</h3></div></div><p style="color:rgba(64,64,64,0.8)">Dispositivos discretos no rodapé mapeiam padrões. Se o residente cair ou não retornar do banheiro após 15 minutos, um <strong style="color:var(--primary)">alerta é enviado ao celular do cuidador</strong>.</p></div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">💡</span><div><h3 class="text-fg">Iluminação Circadiana</h3></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:0.75rem">Lâmpadas inteligentes ajustam a luz automaticamente:</p><ul class="content-list"><li><strong>Branca pela manhã</strong> – estimula atividade</li><li><strong>Âmbar ao entardecer</strong> – promove calma</li></ul><p style="font-size:0.875rem;color:var(--muted);font-style:italic;margin-top:0.75rem">Ajuda a combater a "Síndrome do Pôr do Sol" no Alzheimer.</p></div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">🎤</span><div><h3 class="text-fg">Assistentes de Voz</h3></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:0.75rem">Essenciais para Parkinson (dificuldade motora fina). O residente comanda:</p><div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem"><span class="tag">"Ligar luz"</span><span class="tag">"Que horas são?"</span></div><p style="font-size:0.875rem;color:var(--muted)">Configure lembretes para hidratação sem usar interruptores.</p></div>
      <div class="content-card" style="background:linear-gradient(135deg,rgba(58,138,92,0.05),var(--accent))"><h3 style="color:var(--primary);font-size:1.25rem;margin-bottom:1rem">🛡️ Tecnologias Complementares 2026</h3><div class="content-grid content-grid-2"><div class="content-card"><h5 style="font-weight:600">🔔 Botão de Emergência</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Pendentes ou pulseiras com GPS integrado. Ao pressionar, envia localização exata para até 5 contatos.</p></div><div class="content-card"><h5 style="font-weight:600">🌡️ Sensor de Temperatura</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Monitora ambiente e alerta se temperatura ficar abaixo de 18°C ou acima de 28°C.</p></div><div class="content-card"><h5 style="font-weight:600">📍 Rastreador GPS</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><strong style="color:var(--primary)">Essencial para Alzheimer</strong>: dispositivos discretos em sapatos ou cintos para localizar pacientes.</p></div><div class="content-card"><h5 style="font-weight:600">🔒 Fechaduras Inteligentes</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Abrem com código ou biometria. Evitam que o paciente saia sozinho à noite.</p></div></div></div>
      <div class="content-card" style="background:var(--primary-bg)"><h3 style="font-size:1.25rem;margin-bottom:1rem">💡 Alternativas Acessíveis (Baixo Custo)</h3><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Nem toda casa precisa de alta tecnologia. Soluções simples também salvam vidas:</p><div style="display:flex;flex-direction:column;gap:0.75rem"><div class="content-card" style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem"><span style="font-size:1.25rem">🔔</span><div><h5 style="font-weight:600;font-size:0.875rem">Sininho na Porta</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Alerta sonoro quando o paciente abre portas externas.</p></div></div><div class="content-card" style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem"><span style="font-size:1.25rem">🌙</span><div><h5 style="font-weight:600;font-size:0.875rem">Luz de LED com Sensor</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Luminárias de tomada que acendem ao detectar movimento (R$20-40).</p></div></div><div class="content-card" style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem"><span style="font-size:1.25rem">📱</span><div><h5 style="font-weight:600;font-size:0.875rem">Celular Simplificado</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Configurar botão de emergência (SOS) que liga automaticamente para cuidador.</p></div></div></div></div>
      <div class="content-card content-card-primary"><h3 style="color:var(--primary);font-size:1.25rem;margin-bottom:1rem">✅ Checklist de Segurança Física</h3><ul class="content-list"><li><strong>Piso:</strong> Remova tapetes soltos. Se indispensáveis, use fitas de fixação extrema.</li><li><strong>Banheiro:</strong> Instale barras de apoio em cor contrastante com a parede.</li><li><strong>Iluminação:</strong> Sensor de presença em corredores, banheiro e quarto.</li><li><strong>Produtos perigosos:</strong> Trancados em armário com chave.</li></ul></div>
    `,

    rotina: `
      <div class="content-card" style="background:linear-gradient(135deg,rgba(58,138,92,0.05),var(--accent))">
        <div class="content-heading"><span class="content-heading-icon">⏰</span><div><h3>Estrutura do Dia</h3></div></div>
        <p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Uma rotina previsível reduz ansiedade e comportamentos desafiadores. O segredo é <strong style="color:var(--primary)">consistência sem rigidez</strong>.</p>
        <div class="content-grid content-grid-3">
          <div class="content-card"><h5 style="font-weight:600">☀️ Manhã (6h-12h)</h5><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8);list-style:disc;padding-left:1rem;margin-top:0.5rem"><li>Despertar gradual com luz natural</li><li>Higiene pessoal e vestuário</li><li>Café da manhã nutritivo</li><li>Medicação (se prescrita)</li><li>Atividade estimulante leve</li></ul></div>
          <div class="content-card"><h5 style="font-weight:600">☀️ Tarde (12h-18h)</h5><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8);list-style:disc;padding-left:1rem;margin-top:0.5rem"><li>Almoço principal do dia</li><li>Descanso/cochilo (máx. 30min)</li><li>Atividades sociais ou terapia</li><li>Lanche leve às 15h</li><li>Exercícios suaves</li></ul></div>
          <div class="content-card"><h5 style="font-weight:600">🌙 Noite (18h-22h)</h5><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8);list-style:disc;padding-left:1rem;margin-top:0.5rem"><li>Jantar leve antes das 19h</li><li>Atividades calmas (música, TV)</li><li>Reduzir iluminação gradualmente</li><li>Higiene noturna</li><li>Ritual de sono consistente</li></ul></div>
        </div>
      </div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">🚿</span><div><h3>Higiene e Vestuário</h3></div></div>
        <div class="content-grid content-grid-2">
          <div><h4 style="font-weight:600;margin-bottom:0.5rem">👕 Autonomia</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Substitua botões pequenos e zíperes por <strong style="color:var(--primary)">velcro ou fechos magnéticos</strong>.</p><h4 style="font-weight:600;margin:1rem 0 0.5rem">🧠 Escolha sem Estresse</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">No Alzheimer, ofereça apenas <strong style="color:var(--primary)">duas opções de roupa</strong> para evitar ansiedade na decisão.</p></div>
          <div class="tip-box"><h4 style="font-weight:600;color:var(--primary);margin-bottom:0.75rem">🛁 Banho Seguro</h4><ul class="content-list"><li>Utilize cadeiras de banho</li><li>Dispensadores de sabão fixos na parede</li><li>Evita que o sabonete caia e cause acidentes</li></ul></div>
        </div>
      </div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">🍽️</span><div><h3>Alimentação e Disfagia</h3></div></div>
        <div class="alert-box alert-warning"><p class="alert-title">⚠️ O Risco</p><p class="alert-text">A dificuldade de engolir (disfagia) é comum em ambas as condições.</p></div>
        <div class="content-grid content-grid-3" style="margin-top:1rem">
          <div class="pillar-card"><div class="pillar-icon">🥄</div><div class="pillar-title">Adaptação</div><div class="pillar-desc">Talheres com cabos engrossados e copos com recorte nasal</div></div>
          <div class="pillar-card"><div class="pillar-icon">🪑</div><div class="pillar-title">Postura</div><div class="pillar-desc">Sentado a 90° durante e 30 minutos após a refeição</div></div>
          <div class="pillar-card"><div class="pillar-icon">🔇</div><div class="pillar-title">Ambiente</div><div class="pillar-desc">Reduza distrações (TV desligada) para foco na refeição</div></div>
        </div>
      </div>
    `,

    nutricao: `
      <div class="content-card"><p style="font-size:1.125rem;color:rgba(64,64,64,0.8)"><strong style="color:var(--primary)">Desafio:</strong> Manter peso e hidratação com texturas seguras e modificadas. As receitas a seguir são nutritivas, saborosas e seguras para quem tem dificuldade de deglutição.</p></div>
      <div class="alert-box alert-warning"><p class="alert-title">⚠️ Atenção</p><p class="alert-text">A consistência ideal varia para cada pessoa. Sempre consulte um fonoaudiólogo para avaliação da deglutição antes de modificar a dieta.</p></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🥤</span><div><div class="recipe-title">Smoothie "Mente Ativa"</div><div class="recipe-sub">Fácil de Engolir</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>1/2 abacate</li><li>1 xícara de frutas vermelhas congeladas</li><li>200ml de leite de amêndoas</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Bata até ficar cremoso.</p></div><div class="tip-box"><p>💡 Rico em antioxidantes e gorduras boas para o cérebro.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🍠</span><div><div class="recipe-title">Purê Energético de Batata-Doce</div><div class="recipe-sub">Nutritivo e Anti-inflamatório</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>2 batatas-doces médias</li><li>1 colher de sopa de manteiga</li><li>1 colher de chá de gengibre ralado</li><li>Sal a gosto</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Cozinhe as batatas-doces até ficarem bem macias</li><li>Escorra e descasque enquanto quentes</li><li>Processe com manteiga e gengibre</li><li>Bata até textura completamente lisa</li><li>Tempere com sal e sirva morno</li></ol></div><div class="tip-box"><p>💡 Use processador para garantir textura lisa, sem grumos que causem engasgo.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🥥</span><div><div class="recipe-title">Gelatina Hidratante de Água de Coco</div><div class="recipe-sub">Hidratação Sólida</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>500ml de água de coco</li><li>12g de gelatina incolor (1 envelope)</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Hidrate a gelatina em 100ml de água de coco fria por 5 min</li><li>Aqueça o restante sem ferver</li><li>Misture a gelatina até dissolver</li><li>Despeje em forminhas e leve à geladeira por 4h</li></ol></div><div class="tip-box"><p>💡 Ideal para idosos que não sentem sede. Hidratação sólida e segura.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🍗</span><div><div class="recipe-title">Mousse de Frango Cremoso</div><div class="recipe-sub">Alto Teor Proteico</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>200g de peito de frango cozido</li><li>2 colheres de cream cheese</li><li>100ml de caldo de frango</li><li>1 colher de chá de azeite</li><li>Sal e ervas finas a gosto</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Processe todos os ingredientes por 3-4 min</li><li>Passe por peneira fina</li><li>Ajuste consistência com mais caldo</li><li>Sirva em temperatura ambiente</li></ol></div><div class="tip-box"><p>💡 Excelente fonte de proteína. Pode ser recheio de pão de forma sem casca.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🍌</span><div><div class="recipe-title">Mingau Nutritivo de Banana</div><div class="recipe-sub">Café da Manhã Completo</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>1 banana madura</li><li>3 colheres de aveia em flocos finos</li><li>200ml de leite</li><li>1 colher de mel</li><li>Pitada de canela</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Amasse a banana até virar purê</li><li>Aqueça o leite com aveia em fogo baixo</li><li>Mexa por 5 min até engrossar</li><li>Adicione banana, mel e canela</li></ol></div><div class="tip-box"><p>💡 Rico em fibras e potássio.</p></div></div></div>
    `,

    medicacao: `
      <div class="alert-box alert-danger"><p class="alert-title">⚠️ Atenção</p><p class="alert-text">Erros de medicação são a <strong>maior causa de internações evitáveis</strong>. Estudos mostram que <strong>50% dos idosos</strong> tomam medicamentos incorretamente.</p></div>
      <div class="content-card" style="background:linear-gradient(135deg,rgba(58,138,92,0.05),rgba(58,138,92,0.1))">
        <div class="content-heading"><span class="content-heading-icon">⏰</span><div><h3>Tecnologia de Dispensação 2026</h3><p class="content-heading-sub">Gestão integrada de cuidados</p></div></div>
        <p style="color:rgba(64,64,64,0.8);margin-bottom:1.5rem">Em 2026, a gestão medicamentosa vai além de simples alarmes. <strong style="color:var(--primary)">Evite confiar apenas na memória</strong> — use tecnologia que integra toda a equipe de cuidados.</p>
        <div class="content-card content-card-primary"><h4 style="font-size:1.5rem;color:var(--primary);font-weight:700;margin-bottom:0.5rem">App Cuidame</h4><p style="color:rgba(64,64,64,0.7);margin-bottom:1rem">Gestão Integrada de Cuidados de Saúde</p><p style="color:rgba(64,64,64,0.8);line-height:1.7">O <strong style="color:var(--primary)">Cuidame</strong> centraliza planejamento, execução, registro e comunicação do cuidado, reduzindo ruído operacional e aumentando segurança, rastreabilidade e qualidade.</p></div>
      </div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">📋</span><div><h3 class="text-fg">Sistema de Organização</h3></div></div>
        <div class="content-grid content-grid-3"><div class="pillar-card"><div class="pillar-icon">🌅</div><div class="pillar-title">Manhã</div><div class="pillar-desc">Caixa/cor AMARELA</div></div><div class="pillar-card"><div class="pillar-icon">☀️</div><div class="pillar-title">Tarde</div><div class="pillar-desc">Caixa/cor LARANJA</div></div><div class="pillar-card"><div class="pillar-icon">🌙</div><div class="pillar-title">Noite</div><div class="pillar-desc">Caixa/cor AZUL</div></div></div>
        <div class="alert-box alert-tip" style="margin-top:1rem"><p class="alert-title">💡 Dica de Organização</p><p class="alert-text">Separe os medicamentos da semana todo domingo. Tire uma foto do esquema completo e envie para um familiar de confiança como backup.</p></div>
      </div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">💊</span><div><h3>Novas Formas Farmacêuticas</h3></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Em 2026, priorize (sob prescrição) medicamentos em <strong style="color:var(--primary)">Adesivos Transdérmicos (Patches)</strong> para pacientes com disfagia.</p>
        <div class="content-grid content-grid-2"><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;margin-bottom:0.5rem">✅ Vantagens dos Patches</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8);list-style:disc;padding-left:1rem"><li>Liberação contínua (menos picos)</li><li>Não passa pelo estômago</li><li>Ideal para disfagia</li><li>Menor risco de esquecimento</li></ul></div><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;margin-bottom:0.5rem">⚠️ Cuidados</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8);list-style:disc;padding-left:1rem"><li>Fazer rodízio de local</li><li>Pele limpa e seca</li><li>Evitar áreas com pelos</li><li>Não cortar o adesivo</li></ul></div></div>
      </div>
    `,

    comunicacao: `
      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">🧠</span><div><h3>Para Alzheimer</h3><p class="content-heading-sub">Validar e Acolher</p></div></div>
        <div class="tip-box" style="margin-bottom:1rem"><p>⭐ <strong>Regra de Ouro:</strong> Não confronte a realidade dele. Se ele diz que "vai trabalhar", não discuta.</p></div>
        <h4 style="font-weight:600;margin-bottom:0.75rem">✅ Ações de Validação:</h4>
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1rem">
          <div class="content-card" style="background:var(--accent);display:flex;gap:0.75rem;padding:0.75rem"><span style="font-size:1.25rem">💬</span><div><p style="font-size:0.875rem"><strong>Valide a emoção:</strong></p><p style="color:var(--primary);font-style:italic;font-size:0.875rem">"Você gostava muito do seu trabalho, né?"</p></div></div>
          <div class="content-card" style="background:var(--accent);display:flex;gap:0.75rem;padding:0.75rem"><span style="font-size:1.25rem">🔄</span><div><p style="font-size:0.875rem"><strong>Redirecione a atenção:</strong></p><p style="color:var(--primary);font-style:italic;font-size:0.875rem">"Me conte sobre seus colegas."</p></div></div>
        </div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">🗣️ Linguagem:</h4>
        <p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Use frases curtas. O <strong style="color:var(--primary)">tom de voz calmo</strong> é mais importante que as palavras.</p>
      </div>

      <div class="content-card" style="border:2px solid rgba(138,129,124,0.3)">
        <div class="content-heading"><span class="content-heading-icon">💡</span><div><h3 class="text-fg">Estratégias Adicionais para Alzheimer</h3></div></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem">
          <h4 style="font-weight:600;margin-bottom:0.5rem">🔁 Perguntas Repetitivas</h4>
          <ul class="content-list"><li>Não demonstre irritação - para ele, é sempre a primeira vez</li><li>Use respostas curtas e consistentes</li><li>Escreva a resposta em um cartão visível</li><li>Redirecione para uma atividade prazerosa</li></ul>
          <div class="dialogue"><div class="dialogue-label">💬 Exemplo de Diálogo:</div><p><span class="speaker-patient">Idoso:</span> "Que horas minha filha vem?"</p><p><span class="speaker-caregiver">Cuidador:</span> "Ela vem às 15h, dona Maria. Está aqui no cartão, ó."</p><p class="italic">(5 minutos depois)</p><p><span class="speaker-patient">Idoso:</span> "Que horas minha filha vem?"</p><p><span class="speaker-caregiver">Cuidador:</span> "Às 15h, dona Maria. Enquanto esperamos, que tal dobrarmos essas toalhas juntas?"</p></div>
        </div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem">
          <h4 style="font-weight:600;margin-bottom:0.5rem">😤 Durante Agitação</h4>
          <ul class="content-list"><li>Reduza estímulos - desligue TV, diminua luzes</li><li>Fale baixo e devagar</li><li>Não toque sem avisar antes</li><li>Ofereça escolhas simples: "Quer sentar aqui ou ali?"</li><li>Se necessário, saia e volte em 5 minutos</li></ul>
        </div>
      </div>

      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">🤲</span><div><h3>Para Parkinson</h3><p class="content-heading-sub">Paciência e Ritmo</p></div></div>
        <div class="tip-box" style="margin-bottom:1rem"><p>⭐ <strong>Regra de Ouro:</strong> Respeite o tempo de resposta. O raciocínio pode estar intacto, mas a fala é lenta (Bradifrenia).</p></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.5rem">⏱️</span><div><p style="color:rgba(64,64,64,0.8)">Conte mentalmente até <strong style="color:var(--primary)">10</strong> após fazer uma pergunta.</p><p style="font-size:0.875rem;color:var(--muted);font-style:italic">Não atropele o silêncio.</p></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">📢 Voz:</h4>
        <p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Estimule o residente a <strong style="color:var(--primary)">"falar alto"</strong>, como se falasse para alguém na outra sala, combatendo a voz baixa (hipofonia).</p>
      </div>
    `,

    emergencias: `
      <div class="content-card content-card-destructive" style="background:rgba(220,53,69,0.05)">
        <div class="content-heading"><span class="content-heading-icon">📞</span><div><h3 class="text-destructive">Números de Emergência</h3></div></div>
        <div class="content-grid content-grid-3">
          <div class="content-card emergency-number"><p>192</p><p>SAMU</p></div>
          <div class="content-card emergency-number"><p>193</p><p>Bombeiros</p></div>
          <div class="content-card emergency-number"><p>190</p><p>Polícia</p></div>
        </div>
      </div>
      <div class="content-card content-card-destructive">
        <div style="background:rgba(220,53,69,0.1);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco A: Fuga e Deambulação</h3><p class="content-heading-sub">Alzheimer</p></div></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">🛡️ Prevenção</h4>
        <ul class="content-list"><li>Roupas com etiquetas termocolantes (Nome/Telefone)</li><li>GPS vestível (relógio ou pingente)</li><li>Foto atualizada sempre disponível no celular</li><li>Cadastro no programa "Busca Ativa" da polícia local</li></ul>
        <div class="alert-box alert-danger" style="margin-top:1rem"><p class="alert-title">🚨 Se a pessoa sair:</p><p class="alert-text">1. Verifique locais familiares primeiro &nbsp; 2. Peça ajuda aos vizinhos &nbsp; 3. Ligue 190 após 15 min &nbsp; 4. Tenha pronta: foto recente, descrição de roupas</p></div>
      </div>
      <div class="content-card content-card-destructive">
        <div style="background:rgba(220,53,69,0.1);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco B: Congelamento (Freezing)</h3><p class="content-heading-sub">Parkinson</p></div></div></div>
        <p style="color:rgba(64,64,64,0.8);font-size:0.875rem;margin-bottom:1rem">Os pés "colam" no chão subitamente, criando <strong style="color:var(--primary)">risco alto de queda</strong>.</p>
        <div class="alert-box alert-danger" style="margin-bottom:1rem"><p class="alert-title">❌ O que NÃO fazer:</p><p class="alert-text">Nunca puxe ou empurre o residente. Não demonstre pressa ou irritação.</p></div>
        <div class="tip-box"><p>✅ <strong>Técnicas para Destravar:</strong> Diga "MARCHA!" ou conte ritmicamente. Coloque seu pé na frente: "Passe por cima". Use toque suave no quadril.</p></div>
      </div>
      <div class="content-card content-card-destructive">
        <div style="background:rgba(220,53,69,0.1);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco C: Quedas</h3><p class="content-heading-sub">Alzheimer e Parkinson</p></div></div></div>
        <ul class="content-list"><li>Remova tapetes soltos e fios pelo chão</li><li>Instale barras de apoio em banheiro e corredores</li><li>Iluminação noturna automática</li><li>Sapatos antiderrapantes (evite chinelos)</li></ul>
        <div class="alert-box alert-danger" style="margin-top:1rem"><p class="alert-title">🚨 Se houver queda:</p><p class="alert-text">NÃO levante imediatamente. Verifique dor e consciência. Se suspeitar fratura: NÃO MOVA, ligue 192.</p></div>
      </div>
      <div class="content-card content-card-destructive">
        <div style="background:rgba(220,53,69,0.1);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco D: Engasgo e Aspiração</h3></div></div></div>
        <div class="alert-box alert-danger"><p class="alert-title">🚨 Manobra de Heimlich:</p><p class="alert-text">1. Posicione-se atrás &nbsp; 2. Punho acima do umbigo &nbsp; 3. Compressões rápidas para dentro e para cima &nbsp; 4. Se inconsciente: ligue 192 e inicie RCP</p></div>
      </div>
    `,

    atividades: `
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">📦</span><div><h3>Caixa de Memórias</h3><p class="content-heading-sub">Especialmente para Alzheimer</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Reúna objetos sensoriais ligados à história da pessoa:</p><div class="content-grid" style="grid-template-columns:repeat(4,1fr)"><div class="pillar-card"><div class="pillar-icon">🌸</div><div class="pillar-desc">Perfume/cheiros</div></div><div class="pillar-card"><div class="pillar-icon">🔧</div><div class="pillar-desc">Ferramentas</div></div><div class="pillar-card"><div class="pillar-icon">🧵</div><div class="pillar-desc">Tecidos</div></div><div class="pillar-card"><div class="pillar-icon">📷</div><div class="pillar-desc">Fotos antigas</div></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 O tato e o olfato acessam memórias que a visão nem sempre alcança.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🎵</span><div><h3>Musicoterapia</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Crie playlists com músicas marcantes da juventude (em geral, 15 a 25 anos).</p><div class="content-grid content-grid-2"><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;font-size:0.875rem">🤲 Parkinson</h4><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">O ritmo ajuda na marcha, cadência e coordenação.</p></div><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;font-size:0.875rem">🧠 Alzheimer</h4><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Reduz agitação, melhora humor e evoca memórias emocionais.</p></div></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🎨</span><div><h3>Separação por Categorias</h3><p class="content-heading-sub">Especialmente para Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8)">Misture itens grandes e seguros (pregadores, tampas, meias) e peça para separar por cor, tamanho ou tipo.</p><div class="tip-box" style="margin-top:1rem"><p>💡 Treina coordenação motora fina útil para comer, abotoar e se vestir.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🗂️</span><div><h3>Cartões de Rotina</h3><p class="content-heading-sub">Especialmente para Alzheimer</p></div></div><p style="color:rgba(64,64,64,0.8)">Crie cartões simples com fotos/desenhos das etapas de uma tarefa (ex.: lavar as mãos, preparar um lanche).</p><div class="tip-box" style="margin-top:1rem"><p>💡 Dê apenas uma instrução por vez e espere; se travar, aponte para o próximo cartão.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🍽️</span><div><h3>Cozinha Assistida</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8)">Transforme preparo de comida em atividade: escolher ingredientes, lavar folhas, mexer uma massa, montar um prato.</p><div class="tip-box" style="margin-top:1rem"><p>💡 Foque em tarefas seguras (sem fogo/facas afiadas) e na participação — não na perfeição do resultado.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🪴</span><div><h3>Cuidados com Plantas</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8)">Atividade sensorial e calma: regar, podar folhas secas, replantar mudas, organizar vasos.</p></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🪑</span><div><h3>Movimento Guiado na Cadeira</h3><p class="content-heading-sub">Especialmente para Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8)">Sessão curta (5–10 min) com música ritmada: bater palmas, tocar joelhos alternados, elevar calcanhares e pontas dos pés.</p><div class="tip-box" style="margin-top:1rem"><p>💡 O ritmo externo (música/contagem) ajuda a iniciar e manter o movimento.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🖌️</span><div><h3>Arte Simples</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8)">Faça desenhos guiados por formas, colagem com revistas, pintura com cotonete ou esponja.</p><div class="tip-box" style="margin-top:1rem"><p>💡 Evite avaliações; elogie o processo ("gostei das cores que você escolheu").</p></div></div>
    `,
  };

  return content[id] || "<p>Conteúdo em breve.</p>";
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  buildTOC();
  showView("cover");
});
