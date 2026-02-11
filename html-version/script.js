// Grupo Altevita - Guia de Cuidado 2026 - HTML Version (Synced with React)

// ===== DARK MODE =====
function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark ? "true" : "false");
  document.getElementById("dark-mode-icon").textContent = isDark ? "☀️" : "🌙";
}

function initDarkMode() {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    document.documentElement.classList.add("dark");
    document.getElementById("dark-mode-icon").textContent = "☀️";
  }
}


const chapters = [
  { id: "introducao", num: 1, title: "Introdução", subtitle: "A Era da Longevidade Inteligente", icon: "❤️", readingTime: 3 },
  { id: "condicoes", num: 2, title: "Entendendo as Condições", subtitle: "Alzheimer e Parkinson (Contexto 2026)", icon: "🧠", readingTime: 5 },
  { id: "ambiente", num: 3, title: "O Ambiente Conectado", subtitle: "A Casa Segura", icon: "🏠", readingTime: 8 },
  { id: "rotina", num: 4, title: "Protocolos de Rotina Diária", subtitle: "Higiene, Vestuário e Alimentação", icon: "📋", readingTime: 10 },
  { id: "nutricao", num: 5, title: "Nutrição", subtitle: "O Prazer de Comer (+ Receitas)", icon: "🍽️", readingTime: 8 },
  { id: "medicacao", num: 6, title: "Gestão Medicamentosa", subtitle: "Tecnologia e Cuidados 2026", icon: "💊", readingTime: 12 },
  { id: "comunicacao", num: 7, title: "Comunicação", subtitle: "Estratégias Distintas", icon: "💬", readingTime: 10 },
  { id: "emergencias", num: 8, title: "Plano de Ação em Emergências", subtitle: "Fuga, Deambulação e Freezing", icon: "⚠️", readingTime: 10 },
  { id: "atividades", num: 9, title: "Atividades Cognitivas e Motoras", subtitle: "Estimulação e Bem-estar", icon: "✨", readingTime: 9 },
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

  // Progress bar
  const progressPct = ((idx + 1) / total) * 100;
  document.getElementById("ch-progress-fill").style.width = `${progressPct}%`;

  document.getElementById("ch-prev-top").disabled = idx === 0;
  document.getElementById("ch-next-top").disabled = idx === total - 1;
  document.getElementById("ch-prev-bot").disabled = idx === 0;
  document.getElementById("ch-next-bot").disabled = idx === total - 1;

  const dotsEl = document.getElementById("ch-dots");
  dotsEl.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("div");
    dot.className = "chapter-dot" + (i === idx ? " active" : i < idx ? " done" : "");
    dotsEl.appendChild(dot);
  }

  const contentEl = document.getElementById("ch-content");
  contentEl.innerHTML = getChapterContent(ch.id);
  initAccordions();
  initChecklists();
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
      this.closest(".accordion-group")?.querySelectorAll(".accordion-content").forEach(c => c.classList.add("hidden"));
      this.closest(".accordion-group")?.querySelectorAll(".accordion-trigger").forEach(t => t.classList.remove("open"));
      if (!isOpen) {
        content.classList.remove("hidden");
        this.classList.add("open");
      }
    });
  });
}

function initChecklists() {
  document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", function() {
      const item = this.closest(".checklist-item");
      if (this.checked) item.classList.add("checked");
      else item.classList.remove("checked");
      // Update progress
      const group = this.closest("[data-checklist-group]");
      if (group) {
        const total = group.querySelectorAll('input[type="checkbox"]').length;
        const checked = group.querySelectorAll('input[type="checkbox"]:checked').length;
        const counter = group.querySelector(".checklist-counter");
        if (counter) counter.textContent = `${checked}/${total}`;
        const bar = group.querySelector(".progress-fill");
        if (bar) bar.style.width = `${(checked/total)*100}%`;
      }
    });
  });
}

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
        <div class="toc-item-time">🕐 ${ch.readingTime} min de leitura</div>
      </div>
      <div class="toc-item-dots">•••</div>
    `;
    list.appendChild(btn);
  });
}

// ===== CHAPTER CONTENT =====
function getChapterContent(id) {
  const content = {
    // ===== CHAPTER 1: INTRODUÇÃO =====
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

    // ===== CHAPTER 2: CONDIÇÕES =====
    condicoes: `
      <img src="assets/elderly-care-cover.jpg" alt="Cuidado com idosos" class="chapter-img">
      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">🧠</span><div><h3>Doença de Alzheimer</h3></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">O que é:</h4>
        <p style="margin-bottom:1rem;color:rgba(64,64,64,0.8)">Condição neurodegenerativa que afeta memória, linguagem e percepção.</p>
        <h4 style="font-weight:600;margin-bottom:0.5rem">Sintomas na Rotina:</h4>
        <ul class="content-list"><li>Desorientação temporal</li><li>Repetição de perguntas</li><li>Alterações de humor</li><li>Dificuldade em completar tarefas familiares</li></ul>
        <div style="background:rgba(58,138,92,0.05);padding:1rem;border-radius:var(--radius);margin-top:1rem">
          <h4 style="font-weight:600;color:var(--primary);margin-bottom:0.5rem">Abordagem Atual (2026):</h4>
          <p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Foco na <strong>preservação da identidade</strong>. Não corrigimos o residente de forma ríspida; validamos sua realidade para reduzir a ansiedade.</p>
        </div>
      </div>
      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">🤲</span><div><h3>Doença de Parkinson</h3></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">O que é:</h4>
        <p style="margin-bottom:1rem;color:rgba(64,64,64,0.8)">Distúrbio neurológico motor causado pela diminuição de dopamina.</p>
        <h4 style="font-weight:600;margin-bottom:0.5rem">Sintomas na Rotina:</h4>
        <ul class="content-list"><li>Tremores em repouso</li><li>Rigidez muscular</li><li>Lentidão (bradicinesia)</li><li>Desequilíbrio postural</li></ul>
        <div style="background:rgba(58,138,92,0.05);padding:1rem;border-radius:var(--radius);margin-top:1rem">
          <h4 style="font-weight:600;color:var(--primary);margin-bottom:0.5rem">Abordagem Atual (2026):</h4>
          <p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Estímulo contínuo à <strong>mobilidade assistida</strong> e uso de tecnologias para compensar flutuações motoras.</p>
        </div>
      </div>
      <div class="alert-box alert-info"><p class="alert-title">ℹ️ Importante</p><p class="alert-text">Cada pessoa é única. Os sintomas e a progressão variam. Acompanhamento médico regular é essencial para ajustes no plano de cuidados.</p></div>
    `,

    // ===== CHAPTER 3: AMBIENTE CONECTADO =====
    ambiente: `
      <p style="color:var(--primary);font-weight:500;margin-bottom:1rem">📡🏠 A segurança em 2026 é proativa e menos invasiva.</p>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">📡</span><div><h3 class="text-fg">Sensores de Queda e Presença</h3></div></div><p style="color:rgba(64,64,64,0.8)">Dispositivos discretos no rodapé mapeiam padrões. Se o residente cair ou não retornar do banheiro após 15 minutos, um <strong style="color:var(--primary)">alerta é enviado ao celular do cuidador</strong>.</p></div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">💡</span><div><h3 class="text-fg">Iluminação Circadiana</h3></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:0.75rem">Lâmpadas inteligentes ajustam a luz automaticamente:</p><ul class="content-list"><li><strong>Branca pela manhã</strong> – estimula atividade</li><li><strong>Âmbar ao entardecer</strong> – promove calma</li></ul><p style="font-size:0.875rem;color:var(--muted);font-style:italic;margin-top:0.75rem">Ajuda a combater a "Síndrome do Pôr do Sol" no Alzheimer.</p></div>
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">🎤</span><div><h3 class="text-fg">Assistentes de Voz (Smart Speakers)</h3></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:0.75rem">Essenciais para Parkinson (dificuldade motora fina). O residente comanda:</p><div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem"><span class="tag">"Ligar luz"</span><span class="tag">"Que horas são?"</span></div><p style="font-size:0.875rem;color:var(--muted)">Configure lembretes para hidratação sem usar interruptores.</p></div>
      <div class="content-card" style="background:linear-gradient(135deg,rgba(58,138,92,0.05),var(--accent))"><h3 style="color:var(--primary);font-size:1.25rem;margin-bottom:1rem">🛡️ Tecnologias Complementares 2026</h3><div class="content-grid content-grid-2"><div class="content-card"><h5 style="font-weight:600">🔔 Botão de Emergência</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Pendentes ou pulseiras com GPS integrado. Ao pressionar, envia localização exata para até 5 contatos.</p></div><div class="content-card"><h5 style="font-weight:600">🌡️ Sensor de Temperatura</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Monitora ambiente e alerta se temperatura ficar abaixo de 18°C ou acima de 28°C.</p></div><div class="content-card"><h5 style="font-weight:600">📍 Rastreador GPS</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><strong style="color:var(--primary)">Essencial para Alzheimer</strong>: dispositivos discretos em sapatos ou cintos para localizar pacientes.</p></div><div class="content-card"><h5 style="font-weight:600">🔒 Fechaduras Inteligentes</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Abrem com código ou biometria. Evitam que o paciente saia sozinho à noite.</p></div></div></div>
      <div class="content-card" style="background:var(--primary-bg)"><h3 style="font-size:1.25rem;margin-bottom:1rem">💡 Alternativas Acessíveis (Baixo Custo)</h3><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Nem toda casa precisa de alta tecnologia. Soluções simples também salvam vidas:</p><div style="display:flex;flex-direction:column;gap:0.75rem"><div class="content-card" style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem"><span style="font-size:1.25rem">🔔</span><div><h5 style="font-weight:600;font-size:0.875rem">Sininho na Porta</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Alerta sonoro quando o paciente abre portas externas.</p></div></div><div class="content-card" style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem"><span style="font-size:1.25rem">🌙</span><div><h5 style="font-weight:600;font-size:0.875rem">Luz de LED com Sensor</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Luminárias de tomada que acendem ao detectar movimento (R$20-40).</p></div></div><div class="content-card" style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem"><span style="font-size:1.25rem">📱</span><div><h5 style="font-weight:600;font-size:0.875rem">Celular Simplificado</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Configurar botão de emergência (SOS) que liga automaticamente para cuidador.</p></div></div><div class="content-card" style="display:flex;gap:0.75rem;align-items:flex-start;padding:0.75rem"><span style="font-size:1.25rem">🪞</span><div><h5 style="font-weight:600;font-size:0.875rem">Espelhos Estratégicos</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Posicionar espelhos para o cuidador ver o paciente de outros cômodos.</p></div></div></div></div>

      <!-- Segurança por Cômodo -->
      <div class="content-card">
        <h3 style="color:var(--primary);font-size:1.25rem;margin-bottom:1rem">👁️ Segurança por Cômodo</h3>
        <div class="accordion-group">
          <div class="accordion-item"><button class="accordion-trigger">🍳 Cozinha</button><div class="accordion-content hidden"><ul class="content-list"><li><strong>Fogão:</strong> Prefira indução. Se gás, instale detector de vazamento.</li><li><strong>Facas e objetos cortantes:</strong> Guarde em gavetas com trava magnética.</li><li><strong>Produtos de limpeza:</strong> Tranque em armário separado (risco de ingestão em Alzheimer).</li><li><strong>Água quente:</strong> Configure aquecedor para máx. 45°C para evitar queimaduras.</li></ul></div></div>
          <div class="accordion-item"><button class="accordion-trigger">🛋️ Sala de Estar</button><div class="accordion-content hidden"><ul class="content-list"><li><strong>Móveis:</strong> Prefira cantos arredondados. Instale protetores de quina.</li><li><strong>Sofá:</strong> Altura adequada (45-50cm) para facilitar levantar. Evite muito macio.</li><li><strong>TV/Controles:</strong> Simplifique: deixe apenas os botões essenciais visíveis.</li><li><strong>Fios:</strong> Oculte todos os cabos para evitar tropeços.</li></ul></div></div>
          <div class="accordion-item"><button class="accordion-trigger">🚪 Entrada e Corredores</button><div class="accordion-content hidden"><ul class="content-list"><li><strong>Degraus:</strong> Marque bordas com fita antiderrapante de cor contrastante.</li><li><strong>Corrimão:</strong> Instale em ambos os lados de escadas e corredores longos.</li><li><strong>Capacho:</strong> Use apenas embutido no piso ou remova completamente.</li><li><strong>Alarme:</strong> Considere sensor na porta de saída para alertar perambulação noturna.</li></ul></div></div>
        </div>
      </div>

      <!-- Prioridades por condição -->
      <div class="content-grid content-grid-2">
        <div class="content-card content-card-primary"><h4 style="font-weight:700;color:var(--primary);margin-bottom:0.75rem">🧠 Alzheimer: Prioridades</h4><ul class="content-list"><li><strong>Prevenir fuga:</strong> Alarmes em portas, cercas discretas no jardim.</li><li><strong>Sinalização visual:</strong> Placas com fotos nos cômodos (banheiro, quarto).</li><li><strong>Objetos perigosos:</strong> Trancar medicamentos, produtos químicos e facas.</li><li><strong>Identificação:</strong> Pulseira com nome, endereço e telefone sempre.</li></ul></div>
        <div class="content-card content-card-primary"><h4 style="font-weight:700;color:var(--primary);margin-bottom:0.75rem">🤲 Parkinson: Prioridades</h4><ul class="content-list"><li><strong>Prevenir quedas:</strong> Pisos antiderrapantes, iluminação ampla, sem tapetes.</li><li><strong>Facilitar movimento:</strong> Barras de apoio em sequência nos corredores.</li><li><strong>Freezing:</strong> Fitas coloridas no chão para guiar os passos.</li><li><strong>Automação:</strong> Controle por voz (reduz necessidade de manipular objetos).</li></ul></div>
      </div>

      <div class="content-card content-card-primary"><h3 style="color:var(--primary);font-size:1.25rem;margin-bottom:1rem">✅ Checklist de Segurança Física</h3><ul class="content-list"><li><strong>Piso:</strong> Remova tapetes soltos. Se indispensáveis, use fitas de fixação extrema.</li><li><strong>Banheiro:</strong> Instale barras de apoio em cor contrastante com a parede.</li><li><strong>Iluminação:</strong> Sensor de presença em corredores, banheiro e quarto.</li><li><strong>Produtos perigosos:</strong> Trancados em armário com chave.</li><li><strong>Circulação:</strong> Mantenha corredores livres (mínimo 90cm) para passagem de andadores.</li><li><strong>Iluminação Noturna:</strong> Instale luzes de LED no caminho quarto → banheiro que acendem automaticamente.</li><li><strong>Contatos de Emergência:</strong> Liste telefones importantes em local visível (geladeira) com letras grandes.</li></ul></div>

      <div class="content-card content-card-destructive" style="background:rgba(220,53,69,0.05)">
        <h4 style="font-weight:700;margin-bottom:0.75rem">📞 Plano de Emergência</h4>
        <p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.75rem">Configure um protocolo claro para situações de risco:</p>
        <ul class="content-list"><li><strong>Queda sem lesão visível:</strong> Não movimentar. Chamar ajuda. Observar por 24h.</li><li><strong>Fuga/perambulação:</strong> Acionar rede de vizinhos e polícia imediatamente.</li><li><strong>Engasgo:</strong> Manobra de Heimlich (ver cap. Alimentação). SAMU 192.</li></ul>
      </div>

      <div class="alert-box alert-tip"><p class="alert-title">💡 Dica 2026</p><p class="alert-text">A tecnologia deve ser invisível e natural. Configure os dispositivos uma vez e deixe que trabalhem silenciosamente pela segurança. Combine alta tecnologia com soluções simples para máxima eficácia.</p></div>
    `,

    // ===== CHAPTER 4: ROTINA DIÁRIA =====
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

      <!-- Higiene Completa Accordion -->
      <div class="content-card">
        <div class="content-heading"><span class="content-heading-icon">💧</span><div><h3>Higiene Completa</h3></div></div>
        <div class="accordion-group">
          <div class="accordion-item"><button class="accordion-trigger">🚿 Banho Passo a Passo</button><div class="accordion-content hidden"><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-bottom:0.75rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Preparação</h5><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><li>• Temperatura do ambiente: 24-26°C</li><li>• Água: testar com cotovelo (máx. 38°C)</li><li>• Toalhas e roupas limpas já separadas</li><li>• Produtos ao alcance</li></ul></div><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-bottom:0.75rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Durante o Banho</h5><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><li>• <strong>Parkinson:</strong> Sempre com cadeira de banho e barras</li><li>• <strong>Alzheimer:</strong> Manter contato visual, explicar cada passo</li><li>• Lavar de cima para baixo, partes íntimas por último</li><li>• Verificar dobras de pele (axilas, virilha, sob mamas)</li></ul></div><div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem"><p style="font-size:0.875rem"><strong style="color:var(--primary)">Frequência:</strong> Banho completo 2-3x/semana. Higiene íntima diária.</p></div></div></div>
          <div class="accordion-item"><button class="accordion-trigger">🦷 Higiene Oral</button><div class="accordion-content hidden"><p style="font-size:0.875rem;margin-bottom:0.75rem">Essencial para prevenir pneumonia aspirativa e infecções.</p><div class="content-grid content-grid-2"><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Com Dentes Naturais</h5><ul style="font-size:0.75rem"><li>• Escova macia, cabo engrossado</li><li>• Escovar 3x/dia</li><li>• Usar pouca pasta (risco de engolir)</li><li>• Fio dental com suporte (passa-fio)</li></ul></div><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Com Prótese Dentária</h5><ul style="font-size:0.75rem"><li>• Remover à noite, deixar em água</li><li>• Escovar prótese com escova própria</li><li>• Limpar gengivas e língua com gaze</li><li>• Verificar ajuste (feridas = dentista)</li></ul></div></div><div class="alert-box alert-warning" style="margin-top:0.75rem"><p class="alert-title">⚠️ Atenção Parkinson</p><p class="alert-text">Tremores dificultam escovação. Use escova elétrica ou auxilie segurando a mão do paciente.</p></div></div></div>
          <div class="accordion-item"><button class="accordion-trigger">✋ Cuidados com a Pele</button><div class="accordion-content hidden"><p style="font-size:0.875rem;margin-bottom:0.75rem">Pele idosa é frágil. Hidratação e inspeção diária previnem lesões graves.</p><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-bottom:0.75rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Hidratação</h5><ul style="font-size:0.75rem"><li>• Aplicar creme hidratante após o banho (pele úmida)</li><li>• Evitar entre os dedos (umidade = fungos)</li><li>• Áreas prioritárias: cotovelos, joelhos, calcanhares</li></ul></div><div style="background:rgba(220,53,69,0.1);padding:0.75rem;border-radius:0.5rem;border:1px solid rgba(220,53,69,0.3)"><h5 style="font-weight:600;color:var(--destructive);font-size:0.875rem;margin-bottom:0.5rem">⚠️ Sinais de Alerta (Escaras)</h5><ul style="font-size:0.75rem"><li>• Vermelhidão que não clareia ao pressionar</li><li>• Áreas de risco: sacro, calcanhares, quadril, cotovelos</li><li>• Mudar posição a cada 2h se acamado</li><li>• Usar colchão caixa de ovo ou pneumático</li></ul></div></div></div>
          <div class="accordion-item"><button class="accordion-trigger">💅 Unhas e Cabelos</button><div class="accordion-content hidden"><div class="content-grid content-grid-2"><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Unhas</h5><ul style="font-size:0.75rem"><li>• Cortar após o banho (mais macias)</li><li>• Mãos: corte arredondado</li><li>• Pés: corte RETO (evita unha encravada)</li><li>• <strong style="color:var(--primary)">Diabéticos:</strong> apenas podólogo</li></ul></div><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Cabelos</h5><ul style="font-size:0.75rem"><li>• Lavar 2-3x/semana</li><li>• Secar bem (evitar friagem)</li><li>• Pentear gentilmente da ponta à raiz</li><li>• Cortes curtos facilitam manutenção</li></ul></div></div></div></div>
        </div>
      </div>

      <!-- Uso do Banheiro -->
      <div class="content-card">
        <div class="content-heading"><span class="content-heading-icon">🚽</span><div><h3>Uso do Banheiro e Continência</h3></div></div>
        <p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Manter a continência é possível com estratégias adequadas. Quando não for, preserve sempre a <strong style="color:var(--primary)">dignidade</strong>.</p>
        <div class="content-grid content-grid-2">
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><h5 style="font-weight:600;margin-bottom:0.5rem">Prevenção de Incontinência</h5><ul class="content-list"><li>Levar ao banheiro a cada 2-3 horas</li><li>Após refeições (reflexo gastro-cólico)</li><li>Antes de dormir e ao acordar</li><li>Usar roupas fáceis de remover</li></ul></div>
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><h5 style="font-weight:600;margin-bottom:0.5rem">Se Usar Fralda Geriátrica</h5><ul class="content-list"><li>Trocar imediatamente quando molhada</li><li>Higienizar e secar bem a cada troca</li><li>Aplicar creme de barreira (óxido de zinco)</li><li>Nunca chamar de "fralda" na frente do paciente</li></ul></div>
        </div>
        <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem;margin-top:1rem"><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><strong style="color:var(--primary)">Alzheimer:</strong> Pode esquecer onde é o banheiro. Use placas com imagens. <strong style="color:var(--primary);margin-left:0.5rem">Parkinson:</strong> Urgência urinária é comum. Mantenha caminho livre e iluminado.</p></div>
      </div>

      <!-- Alimentação e Disfagia -->
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">🍽️</span><div><h3>Alimentação e Disfagia</h3></div></div>
        <img src="assets/daily-routine-care.jpg" alt="Cuidador auxiliando idoso durante refeição" class="chapter-img">
        <div class="alert-box alert-warning"><p class="alert-title">⚠️ O Risco</p><p class="alert-text">A dificuldade de engolir (disfagia) é comum em ambas as condições.</p></div>
        <div class="content-grid content-grid-3" style="margin-top:1rem">
          <div class="pillar-card"><div class="pillar-icon">🥄</div><div class="pillar-title">Adaptação</div><div class="pillar-desc">Talheres com cabos engrossados e copos com recorte nasal</div></div>
          <div class="pillar-card"><div class="pillar-icon">🪑</div><div class="pillar-title">Postura</div><div class="pillar-desc">Sentado a 90° durante e 30 minutos após a refeição</div></div>
          <div class="pillar-card"><div class="pillar-icon">🔇</div><div class="pillar-title">Ambiente</div><div class="pillar-desc">Reduza distrações (TV desligada) para foco na refeição</div></div>
        </div>
      </div>

      <!-- Guia de Consistências -->
      <div class="content-card content-card-primary">
        <h3 style="color:var(--primary);font-size:1.25rem;margin-bottom:1rem">✨ Guia de Consistências (Disfagia)</h3>
        <div class="table-wrap"><table class="content-table"><thead><tr><th>Nível</th><th>Consistência</th><th>Exemplos</th></tr></thead><tbody><tr><td><span style="background:rgba(34,197,94,0.2);color:#16a34a;padding:0.125rem 0.5rem;border-radius:0.25rem;font-size:0.75rem;font-weight:500">Leve</span></td><td>Normal com cuidado</td><td>Alimentos macios, bem cozidos</td></tr><tr><td><span style="background:rgba(245,158,11,0.2);color:#d97706;padding:0.125rem 0.5rem;border-radius:0.25rem;font-size:0.75rem;font-weight:500">Moderada</span></td><td>Pastosa</td><td>Purês, mingaus, vitaminas grossas</td></tr><tr><td><span style="background:rgba(239,68,68,0.2);color:#dc2626;padding:0.125rem 0.5rem;border-radius:0.25rem;font-size:0.75rem;font-weight:500">Grave</span></td><td>Líquido espessado</td><td>Usar espessante (prescrição fonoaudiológica)</td></tr></tbody></table></div>
        <div class="alert-box alert-danger" style="margin-top:1rem"><p class="alert-text"><strong style="color:var(--destructive)">⚠️ Nunca ofereça:</strong> Alimentos de dupla consistência (sopa com pedaços), muito secos (farofa), ou que se esfarelam (biscoito).</p></div>
      </div>

      <!-- Sono e Descanso -->
      <div class="content-card">
        <div class="content-heading"><span class="content-heading-icon">🌙</span><div><h3>Sono e Descanso</h3></div></div>
        <div class="content-grid content-grid-2">
          <div style="background:rgba(99,102,241,0.1);padding:1rem;border-radius:0.5rem;border:1px solid rgba(99,102,241,0.2)">
            <h5 style="font-weight:600;margin-bottom:0.5rem">Ritual de Sono</h5>
            <ol style="font-size:0.875rem;color:rgba(64,64,64,0.8);padding-left:0;list-style:none"><li style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem"><span style="background:rgba(99,102,241,0.2);color:#4338ca;width:1.25rem;height:1.25rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;flex-shrink:0">1</span>Diminuir luz 2h antes de dormir</li><li style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem"><span style="background:rgba(99,102,241,0.2);color:#4338ca;width:1.25rem;height:1.25rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;flex-shrink:0">2</span>Evitar líquidos após as 19h</li><li style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem"><span style="background:rgba(99,102,241,0.2);color:#4338ca;width:1.25rem;height:1.25rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;flex-shrink:0">3</span>Banho morno relaxante</li><li style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem"><span style="background:rgba(99,102,241,0.2);color:#4338ca;width:1.25rem;height:1.25rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;flex-shrink:0">4</span>Música calma ou oração</li><li style="display:flex;align-items:flex-start;gap:0.5rem"><span style="background:rgba(99,102,241,0.2);color:#4338ca;width:1.25rem;height:1.25rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;flex-shrink:0">5</span>Temperatura 22-24°C</li></ol>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.75rem">
            <div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.25rem">🧠 Alzheimer: Sundowning</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Agitação ao entardecer é comum. Mantenha atividades calmas à tarde e evite cochilos longos.</p></div>
            <div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.25rem">🤲 Parkinson: Movimento Noturno</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Dificuldade de virar na cama. Use lençóis de cetim (deslizam melhor) e grades de proteção.</p></div>
            <div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:600;font-size:0.875rem;margin-bottom:0.25rem">⏰ Cochilo Diurno</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Máximo 30 minutos, antes das 15h. Cochilos longos prejudicam o sono noturno.</p></div>
          </div>
        </div>
      </div>

      <div class="alert-box alert-tip"><p class="alert-title">💡 Dica Prática</p><p class="alert-text">Separe conjuntos de roupas completos em cabides e organize talheres adaptados em local de fácil acesso. Pequenas mudanças trazem grandes resultados. Registre os horários das atividades em um caderno para identificar padrões.</p></div>
    `,

    // ===== CHAPTER 5: NUTRIÇÃO =====
    nutricao: `
      <div class="content-card"><p style="font-size:1.125rem;color:rgba(64,64,64,0.8)"><strong style="color:var(--primary)">Desafio:</strong> Manter peso e hidratação com texturas seguras e modificadas. As receitas a seguir são nutritivas, saborosas e seguras para quem tem dificuldade de deglutição.</p></div>

      <!-- Guia IDDSI -->
      <div class="content-card content-card-secondary">
        <div style="background:rgba(138,129,124,0.2);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">📊</span><div><h3 class="text-fg">Guia de Consistências para Disfagia</h3><p class="content-heading-sub">Classificação Internacional IDDSI</p></div></div></div>
        <h4 style="font-weight:600;margin-bottom:0.75rem">🥄 Níveis de Consistência para Líquidos:</h4>
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.5rem">
          <div class="consistency-bar" style="background:rgba(58,138,92,0.05)"><p style="font-weight:500;color:var(--primary)">Nível 0 - Líquido Fino</p><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Água, chá, café, sucos coados. Flui rapidamente.</p></div>
          <div class="consistency-bar" style="background:rgba(58,138,92,0.1)"><p style="font-weight:500;color:var(--primary)">Nível 1 - Levemente Espesso</p><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Mais grosso que água, mas ainda flui. Ex: leite batido com fruta.</p></div>
          <div class="consistency-bar" style="background:rgba(58,138,92,0.15)"><p style="font-weight:500;color:var(--primary)">Nível 2 - Pouco Espesso</p><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Flui lentamente da colher. Ex: vitamina cremosa, iogurte líquido.</p></div>
          <div class="consistency-bar" style="background:rgba(58,138,92,0.2)"><p style="font-weight:500;color:var(--primary)">Nível 3 - Moderadamente Espesso</p><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Pode ser bebido de copo, mas não flui facilmente. Ex: mel, creme.</p></div>
          <div class="consistency-bar" style="background:rgba(58,138,92,0.25)"><p style="font-weight:500;color:var(--primary)">Nível 4 - Extremamente Espesso</p><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Precisa de colher, não flui. Ex: purê, pudim firme.</p></div>
        </div>
        <h4 style="font-weight:600;margin-bottom:0.75rem">🧪 Tipos de Espessantes:</h4>
        <div class="content-grid content-grid-2" style="margin-bottom:1.5rem">
          <div class="content-card"><p style="font-weight:500;margin-bottom:0.25rem">Espessantes Industriais</p><ul style="font-size:0.875rem;color:rgba(64,64,64,0.7)"><li>• <strong>À base de amido:</strong> Resource® ThickenUp, Nutilis®</li><li>• <strong>À base de goma:</strong> ThickenUp Clear®, Thick & Easy®</li><li>• Seguir dosagem do fabricante</li></ul></div>
          <div class="content-card"><p style="font-weight:500;margin-bottom:0.25rem">Espessantes Naturais</p><ul style="font-size:0.875rem;color:rgba(64,64,64,0.7)"><li>• <strong>Amido de milho:</strong> 1-2 colheres/200ml</li><li>• <strong>Fécula de batata:</strong> mais suave</li><li>• <strong>Gelatina:</strong> para líquidos gelados</li></ul></div>
        </div>
        <h4 style="font-weight:600;margin-bottom:0.75rem">📏 Tabela de Conversão de Medidas:</h4>
        <div class="table-wrap"><table class="content-table"><thead><tr><th>Consistência</th><th>Amido de Milho</th><th>Espessante Industrial</th><th>Gelatina</th></tr></thead><tbody><tr><td>Nível 1 - Levemente Espesso</td><td style="text-align:center">½ col. chá / 100ml</td><td style="text-align:center">½ medida / 100ml</td><td style="text-align:center">—</td></tr><tr><td>Nível 2 - Pouco Espesso</td><td style="text-align:center">1 col. chá / 100ml</td><td style="text-align:center">1 medida / 100ml</td><td style="text-align:center">—</td></tr><tr><td>Nível 3 - Moderadamente Espesso</td><td style="text-align:center">1½ col. chá / 100ml</td><td style="text-align:center">1½ medida / 100ml</td><td style="text-align:center">3g / 100ml</td></tr><tr><td>Nível 4 - Extremamente Espesso</td><td style="text-align:center">2 col. chá / 100ml</td><td style="text-align:center">2 medidas / 100ml</td><td style="text-align:center">5g / 100ml</td></tr></tbody></table></div>
        <p style="font-size:0.75rem;color:var(--muted);font-style:italic;margin-top:0.5rem">* Valores aproximados. Ajuste conforme necessário e sempre teste antes de servir.</p>
        <div class="alert-box alert-danger" style="margin-top:1rem"><p class="alert-title">⚠️ Cuidados Importantes:</p><p class="alert-text">A consistência deve ser prescrita por fonoaudiólogo. Teste antes de servir. Líquidos muito espessos podem causar desidratação. Reavaliar periodicamente. Mantenha o idoso sentado a 90° durante e após as refeições.</p></div>
      </div>

      <div class="alert-box alert-warning"><p class="alert-title">⚠️ Atenção</p><p class="alert-text">A consistência ideal varia para cada pessoa. Sempre consulte um fonoaudiólogo para avaliação da deglutição antes de modificar a dieta.</p></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🥤</span><div><div class="recipe-title">Smoothie "Mente Ativa"</div><div class="recipe-sub">Fácil de Engolir</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>1/2 abacate</li><li>1 xícara de frutas vermelhas congeladas</li><li>200ml de leite de amêndoas</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Bata até ficar cremoso.</p></div><div class="tip-box"><p>💡 Rico em antioxidantes e gorduras boas para o cérebro.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🍠</span><div><div class="recipe-title">Purê Energético de Batata-Doce</div><div class="recipe-sub">Nutritivo e Anti-inflamatório</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>2 batatas-doces médias</li><li>1 colher de sopa de manteiga</li><li>1 colher de chá de gengibre ralado</li><li>Sal a gosto</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Cozinhe as batatas-doces até ficarem bem macias</li><li>Escorra e descasque enquanto quentes</li><li>Processe com manteiga e gengibre</li><li>Bata até textura completamente lisa</li><li>Tempere com sal e sirva morno</li></ol></div><div class="tip-box"><p>💡 Use processador para garantir textura lisa, sem grumos que causem engasgo.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🥥</span><div><div class="recipe-title">Gelatina Hidratante de Água de Coco</div><div class="recipe-sub">Hidratação Sólida</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>500ml de água de coco</li><li>12g de gelatina incolor (1 envelope)</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Hidrate a gelatina em 100ml de água de coco fria por 5 min</li><li>Aqueça o restante sem ferver</li><li>Misture a gelatina até dissolver</li><li>Despeje em forminhas e leve à geladeira por 4h</li></ol></div><div class="tip-box"><p>💡 Ideal para idosos que não sentem sede. Hidratação sólida e segura.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🍗</span><div><div class="recipe-title">Mousse de Frango Cremoso</div><div class="recipe-sub">Alto Teor Proteico</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>200g de peito de frango cozido</li><li>2 colheres de cream cheese</li><li>100ml de caldo de frango</li><li>1 colher de chá de azeite</li><li>Sal e ervas finas a gosto</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Processe todos os ingredientes por 3-4 min</li><li>Passe por peneira fina</li><li>Ajuste consistência com mais caldo</li><li>Sirva em temperatura ambiente</li></ol></div><div class="tip-box"><p>💡 Excelente fonte de proteína. Pode ser recheio de pão de forma sem casca.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🍌</span><div><div class="recipe-title">Mingau Nutritivo de Banana</div><div class="recipe-sub">Café da Manhã Completo</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>1 banana madura</li><li>3 colheres de aveia em flocos finos</li><li>200ml de leite</li><li>1 colher de mel</li><li>Pitada de canela</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Amasse a banana até virar purê</li><li>Aqueça o leite com aveia em fogo baixo</li><li>Mexa por 5 min até engrossar</li><li>Adicione banana, mel e canela</li></ol></div><div class="tip-box"><p>💡 Rico em fibras e potássio.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🥕</span><div><div class="recipe-title">Creme de Legumes Aveludado</div><div class="recipe-sub">Almoço Nutritivo</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>1 cenoura média</li><li>1 batata média</li><li>1/2 abobrinha</li><li>500ml de caldo de legumes</li><li>2 colheres de creme de leite</li><li>Sal e noz-moscada a gosto</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Descasque e corte os legumes em cubos</li><li>Cozinhe no caldo até ficarem macios (~20 min)</li><li>Bata no liquidificador até homogêneo</li><li>Passe por peneira para remover grumos</li><li>Volte ao fogo, adicione creme de leite e tempere</li></ol></div><div class="tip-box"><p>💡 Varie os legumes conforme a estação. Evite vegetais fibrosos como vagem e aspargo.</p></div></div></div>
      <div class="recipe-card"><div class="recipe-header"><span class="recipe-emoji">🍮</span><div><div class="recipe-title">Flan de Abóbora com Coco</div><div class="recipe-sub">Sobremesa Nutritiva</div></div></div><div class="recipe-body"><div class="recipe-section"><h4>📝 Ingredientes:</h4><ul><li>200g de abóbora cabotiá cozida</li><li>200ml de leite de coco</li><li>2 ovos</li><li>3 colheres de açúcar mascavo</li><li>1/2 colher de chá de canela</li></ul></div><div class="recipe-section"><h4>👨‍🍳 Preparo:</h4><ol><li>Bata a abóbora com leite de coco até ficar liso</li><li>Adicione ovos, açúcar e canela, bata mais</li><li>Despeje em forminhas untadas</li><li>Asse em banho-maria a 180°C por 40 min</li><li>Deixe esfriar e desenforme gelado</li></ol></div><div class="tip-box"><p>💡 Rico em betacaroteno e vitamina A. Textura macia ideal para disfagia.</p></div></div></div>
      <div class="alert-box alert-info"><p class="alert-title">ℹ️ Lembre-se</p><p class="alert-text">Estas receitas são sugestões. Sempre consulte um nutricionista para adequar a dieta às necessidades individuais do residente.</p></div>
    `,

    // ===== CHAPTER 6: MEDICAÇÃO =====
    medicacao: `
      <div class="alert-box alert-danger"><p class="alert-title">⚠️ Atenção</p><p class="alert-text">Erros de medicação são a <strong>maior causa de internações evitáveis</strong>. Estudos mostram que <strong>50% dos idosos</strong> tomam medicamentos incorretamente.</p></div>

      <!-- App Cuidame -->
      <div class="content-card" style="background:linear-gradient(135deg,rgba(58,138,92,0.05),rgba(58,138,92,0.1));border:2px solid rgba(58,138,92,0.3)">
        <div class="content-heading"><span class="content-heading-icon">⏰</span><div><h3>Tecnologia de Dispensação 2026</h3><p class="content-heading-sub">Gestão integrada de cuidados</p></div></div>
        <p style="color:rgba(64,64,64,0.8);margin-bottom:1.5rem">Em 2026, a gestão medicamentosa vai além de simples alarmes. <strong style="color:var(--primary)">Evite confiar apenas na memória</strong> — use tecnologia que integra toda a equipe de cuidados.</p>
        <div class="content-card content-card-primary" style="margin-bottom:1.5rem">
          <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
            <div style="width:4rem;height:4rem;border-radius:1rem;background:var(--primary);display:flex;align-items:center;justify-content:center;padding:0.75rem"><img src="assets/cuidame-icon.png" alt="Cuidame" style="width:100%;height:100%;object-fit:contain"></div>
            <div><h4 style="font-size:1.5rem;color:var(--primary);font-weight:700">App Cuidame</h4><p style="color:rgba(64,64,64,0.7)">Gestão Integrada de Cuidados de Saúde</p></div>
          </div>
          <p style="color:rgba(64,64,64,0.8);line-height:1.7;margin-bottom:1rem">O <strong style="color:var(--primary)">Cuidame</strong> centraliza planejamento, execução, registro e comunicação do cuidado, reduzindo ruído operacional e aumentando <strong>segurança, rastreabilidade e qualidade</strong> do acompanhamento de saúde.</p>
          <div style="background:var(--accent);padding:1rem;border-radius:0.5rem;margin-bottom:1rem"><h5 style="font-weight:600;margin-bottom:0.75rem">👥 Perfis de Acesso</h5><div class="content-grid content-grid-4"><div class="content-card" style="text-align:center;padding:0.75rem"><span style="font-size:1.5rem;display:block;margin-bottom:0.25rem">👑</span><p style="font-size:0.75rem;font-weight:600">Administrador</p></div><div class="content-card" style="text-align:center;padding:0.75rem"><span style="font-size:1.5rem;display:block;margin-bottom:0.25rem">👨‍⚕️</span><p style="font-size:0.75rem;font-weight:600">Gestor de Cuidados</p></div><div class="content-card" style="text-align:center;padding:0.75rem"><span style="font-size:1.5rem;display:block;margin-bottom:0.25rem">🤝</span><p style="font-size:0.75rem;font-weight:600">Cuidador</p></div><div class="content-card" style="text-align:center;padding:0.75rem"><span style="font-size:1.5rem;display:block;margin-bottom:0.25rem">❤️</span><p style="font-size:0.75rem;font-weight:600">Paciente</p></div></div></div>
        </div>
        <h4 style="font-weight:700;margin-bottom:1rem">⚡ Funcionalidades do Cuidame</h4>
        <div class="content-grid content-grid-2" style="margin-bottom:1.5rem">
          <div class="feature-card"><div class="feature-card-icon">💊</div><h5 style="font-weight:600;margin-bottom:0.5rem">Prescrições Médicas</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Registro e acompanhamento de medicamentos, rotinas de cuidado e intervenções não farmacológicas, com <strong>horários, recorrência e observações</strong>.</p></div>
          <div class="feature-card"><div class="feature-card-icon">📅</div><h5 style="font-weight:600;margin-bottom:0.5rem">Agenda e Escalas</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Gerenciamento de consultas, compromissos e escalas de cuidadores com <strong>visão em calendário e notificações automáticas</strong>.</p></div>
          <div class="feature-card"><div class="feature-card-icon">📋</div><h5 style="font-weight:600;margin-bottom:0.5rem">Execução e Registro</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Cuidadores registram atividades diárias, <strong>sinais vitais, evoluções e intercorrências</strong>, com histórico auditável completo.</p></div>
          <div class="feature-card"><div class="feature-card-icon">🏥</div><h5 style="font-weight:600;margin-bottom:0.5rem">Acompanhamento Clínico</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Centralização de registros de consultas, exames e avaliações de enfermagem, incluindo <strong>anexos e histórico organizado</strong>.</p></div>
          <div class="feature-card"><div class="feature-card-icon">💬</div><h5 style="font-weight:600;margin-bottom:0.5rem">Comunicação Integrada</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Chat em grupo entre cuidadores, enfermeiros e familiares, com <strong>troca de mensagens, arquivos e notificações</strong>.</p></div>
          <div class="feature-card"><div class="feature-card-icon">🎓</div><h5 style="font-weight:600;margin-bottom:0.5rem">Conteúdos Educativos</h5><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Trilhas e aulas em vídeo atribuídas ao paciente conforme plano, com <strong>controle de progresso e certificação</strong>.</p></div>
        </div>
        <div style="background:rgba(58,138,92,0.05);padding:1.25rem;border-radius:var(--radius);border:1px solid rgba(58,138,92,0.2);margin-bottom:1.5rem"><h5 style="font-weight:700;color:var(--primary);margin-bottom:1rem">✨ Benefícios para o Cuidado</h5><div class="content-grid content-grid-3"><div style="text-align:center"><div class="pillar-icon">🔒</div><h6 style="font-weight:600;font-size:0.875rem">Segurança</h6><p style="font-size:0.75rem;color:rgba(64,64,64,0.7)">Controle de permissões e rastreabilidade total</p></div><div style="text-align:center"><div class="pillar-icon">📊</div><h6 style="font-weight:600;font-size:0.875rem">Dashboard</h6><p style="font-size:0.75rem;color:rgba(64,64,64,0.7)">Indicadores de adesão e qualidade do cuidado</p></div><div style="text-align:center"><div class="pillar-icon">👨‍👩‍👧‍👦</div><h6 style="font-weight:600;font-size:0.875rem">Família Conectada</h6><p style="font-size:0.75rem;color:rgba(64,64,64,0.7)">Todos informados em tempo real</p></div></div></div>
        <div class="content-card content-card-primary" style="text-align:center"><p style="color:rgba(64,64,64,0.8);margin-bottom:0.5rem"><strong style="color:var(--primary)">Reduza erros de medicação</strong> e mantenha toda a equipe alinhada.</p><p style="font-size:0.875rem;color:rgba(64,64,64,0.7);margin-bottom:1.25rem">O Cuidame transforma a gestão de saúde em uma experiência organizada, segura e colaborativa.</p><p style="font-size:0.875rem;font-weight:600;margin-bottom:0.75rem">📲 Baixe agora o App Cuidame</p><div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap"><a href="https://apps.apple.com/br/app/cuidame-gestor-de-sa%C3%BAde/id6744027992" target="_blank" rel="noopener noreferrer" class="store-btn"><span style="font-size:1.25rem">🍎</span><div class="store-btn-text"><small>Disponível na</small><span>App Store</span></div></a><a href="https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt" target="_blank" rel="noopener noreferrer" class="store-btn"><span style="font-size:1.25rem">▶️</span><div class="store-btn-text"><small>Disponível no</small><span>Google Play</span></div></a></div></div>
      </div>

      <!-- Sistema de Organização -->
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">📋</span><div><h3 class="text-fg">Sistema de Organização</h3></div></div>
        <div class="content-grid content-grid-3"><div class="pillar-card"><div class="pillar-icon">🌅</div><div class="pillar-title">Manhã</div><div class="pillar-desc">Caixa/cor AMARELA</div></div><div class="pillar-card"><div class="pillar-icon">☀️</div><div class="pillar-title">Tarde</div><div class="pillar-desc">Caixa/cor LARANJA</div></div><div class="pillar-card"><div class="pillar-icon">🌙</div><div class="pillar-title">Noite</div><div class="pillar-desc">Caixa/cor AZUL</div></div></div>
        <div class="alert-box alert-tip" style="margin-top:1rem"><p class="alert-title">💡 Dica de Organização</p><p class="alert-text">Separe os medicamentos da semana todo domingo. Tire uma foto do esquema completo e envie para um familiar de confiança como backup.</p></div>
      </div>

      <!-- Novas Formas Farmacêuticas -->
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">💊</span><div><h3>Novas Formas Farmacêuticas</h3></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Em 2026, priorize (sob prescrição) medicamentos em <strong style="color:var(--primary)">Adesivos Transdérmicos (Patches)</strong> para pacientes com disfagia.</p>
        <div class="content-grid content-grid-2"><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;margin-bottom:0.5rem">✅ Vantagens dos Patches</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><li>• Liberação contínua (menos picos)</li><li>• Não passa pelo estômago</li><li>• Ideal para disfagia</li><li>• Menor risco de esquecimento</li></ul></div><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;margin-bottom:0.5rem">⚠️ Cuidados</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><li>• Fazer rodízio de local</li><li>• Pele limpa e seca</li><li>• Evitar áreas com pelos</li><li>• Não cortar o adesivo</li></ul></div></div>
        <div style="background:var(--accent);padding:1rem;border-radius:0.5rem;margin-top:1rem;display:flex;align-items:flex-start;gap:0.75rem"><span style="font-size:1.25rem">📅</span><div><h4 style="font-weight:600;font-size:0.875rem;margin-bottom:0.25rem">Mapa de Rodízio</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Marque no calendário o local do corpo onde o adesivo foi colado. Sugestão de rotação: <strong>Braço D → Braço E → Costas D → Costas E → Abdômen D → Abdômen E</strong></p></div></div>
      </div>

      <!-- Interações Perigosas -->
      <div class="content-card content-card-destructive">
        <div class="content-heading"><span class="content-heading-icon">🛡️</span><div><h3 class="text-destructive">Interações Perigosas</h3></div></div>
        <div class="table-wrap"><table class="content-table"><thead><tr><th>Medicamento</th><th>Evitar com</th><th>Risco</th></tr></thead><tbody><tr><td style="font-weight:500">Anticoagulantes (Varfarina)</td><td>AINEs, Vitamina K (folhas verdes)</td><td class="text-destructive">Sangramento</td></tr><tr><td style="font-weight:500">Anti-hipertensivos</td><td>AINEs, Descongestionantes</td><td class="text-destructive">Pressão descontrolada</td></tr><tr><td style="font-weight:500">Levodopa</td><td>Proteínas em excesso, Ferro</td><td class="text-destructive">Reduz absorção</td></tr><tr><td style="font-weight:500">Donepezila (Alzheimer)</td><td>Anticolinérgicos</td><td class="text-destructive">Anula efeito</td></tr><tr><td style="font-weight:500">Sedativos/Ansiolíticos</td><td>Álcool, outros sedativos</td><td class="text-destructive">Depressão respiratória</td></tr></tbody></table></div>
        <div class="alert-box alert-warning" style="margin-top:1rem"><p class="alert-title">⚠️ Atenção com Fitoterápicos</p><p class="alert-text">Ginkgo biloba, Erva de São João e Ginseng podem interagir gravemente com medicamentos. <strong>Sempre informe o médico sobre TUDO que o paciente ingere.</strong></p></div>
      </div>

      <!-- Técnicas de Administração -->
      <div class="content-card">
        <div class="content-heading"><span class="content-heading-icon">💧</span><div><h3>Técnicas de Administração</h3></div></div>
        <div class="accordion-group">
          <div class="accordion-item"><button class="accordion-trigger">💊 Triturar Comprimidos</button><div class="accordion-content hidden"><div style="background:rgba(220,53,69,0.1);padding:0.75rem;border-radius:0.5rem;margin-bottom:0.75rem"><p style="font-weight:600;color:var(--destructive);font-size:0.875rem;margin-bottom:0.25rem">⛔ NUNCA triture:</p><ul style="font-size:0.875rem"><li>• Comprimidos de liberação prolongada (XR, SR, LA)</li><li>• Cápsulas com microgrânulos</li><li>• Medicamentos com revestimento entérico</li><li>• Comprimidos sublinguais</li></ul></div><div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem"><p style="font-weight:600;color:var(--primary);font-size:0.875rem;margin-bottom:0.25rem">✅ Como triturar corretamente:</p><ul style="font-size:0.875rem"><li>1. Use triturador próprio (não colheres)</li><li>2. Misture em papinha ou purê (não líquidos)</li><li>3. Administre imediatamente após triturar</li><li>4. Limpe o triturador entre medicamentos diferentes</li></ul></div></div></div>
          <div class="accordion-item"><button class="accordion-trigger">🥤 Medicamentos Líquidos</button><div class="accordion-content hidden"><ul class="content-list"><li>Use seringa dosadora (mais precisa que colher)</li><li>Agite bem suspensões antes de medir</li><li>Administre lentamente (evita engasgo)</li><li>Verifique refrigeração necessária após aberto</li></ul><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-top:0.75rem"><p style="font-size:0.875rem"><strong>Dica:</strong> Para disfagia, peça ao médico versões em gel ou gotas.</p></div></div></div>
          <div class="accordion-item"><button class="accordion-trigger">⏰ Horários e Alimentação</button><div class="accordion-content hidden"><div class="content-grid content-grid-2"><div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">🍽️ COM alimentos:</p><ul style="font-size:0.875rem"><li>• Anti-inflamatórios</li><li>• Metformina</li><li>• Ferro (se causar enjoo; idealmente em jejum com vitamina C)</li><li>• Alguns antibióticos</li></ul></div><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">🚫 SEM alimentos (jejum):</p><ul style="font-size:0.875rem"><li>• Levotiroxina (30min antes)</li><li>• Levodopa (proteínas)</li><li>• Bifosfonatos (30min antes)</li><li>• Alguns antibióticos</li></ul></div></div></div></div>
        </div>
      </div>

      <!-- Medicamentos por Condição -->
      <div class="content-grid content-grid-2">
        <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🧠</span><div><h3>Alzheimer</h3></div></div><div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem;margin-bottom:0.75rem"><h4 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">💊 Medicamentos Comuns</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><li><strong>Donepezila:</strong> 1x/dia, à noite</li><li><strong>Rivastigmina:</strong> 2x/dia ou patch</li><li><strong>Memantina:</strong> 1-2x/dia</li></ul></div><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-bottom:0.75rem"><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><strong>⚠️ Efeitos colaterais comuns:</strong> Náusea, diarreia, tontura. Geralmente melhoram em 2-3 semanas.</p></div><div style="background:rgba(220,53,69,0.1);padding:0.75rem;border-radius:0.5rem"><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><strong>🚫 Evitar:</strong> Anticolinérgicos que anulam o efeito.</p></div></div>
        <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🤲</span><div><h3>Parkinson</h3></div></div><div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem;margin-bottom:0.75rem"><h4 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">💊 Medicamentos Comuns</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><li><strong>Levodopa/Carbidopa:</strong> 3-4x/dia</li><li><strong>Pramipexol:</strong> 3x/dia</li><li><strong>Rotigotina:</strong> Patch 1x/dia</li></ul></div><div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-bottom:0.75rem"><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><strong>⏰ Timing crítico:</strong> Levodopa deve ser tomada em <strong>horários exatos</strong> para evitar flutuações motoras.</p></div><div style="background:rgba(220,53,69,0.1);padding:0.75rem;border-radius:0.5rem"><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)"><strong>🥩 Proteína:</strong> Tomar Levodopa <strong>30-60min ANTES</strong> das refeições ou 2h depois.</p></div></div>
      </div>

      <!-- Armazenamento -->
      <div class="content-card"><div class="content-heading"><span class="content-heading-icon">❤️</span><div><h3>Armazenamento Correto</h3></div></div><div class="content-grid content-grid-2"><div style="display:flex;flex-direction:column;gap:0.75rem"><div style="display:flex;gap:0.75rem"><span style="font-size:1.25rem">🌡️</span><div><h4 style="font-weight:600;font-size:0.875rem">Temperatura</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">15-25°C, longe de luz solar</p></div></div><div style="display:flex;gap:0.75rem"><span style="font-size:1.25rem">💧</span><div><h4 style="font-weight:600;font-size:0.875rem">Umidade</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Evite banheiros (vapor)</p></div></div><div style="display:flex;gap:0.75rem"><span style="font-size:1.25rem">❄️</span><div><h4 style="font-weight:600;font-size:0.875rem">Refrigeração</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Insulina, alguns colírios</p></div></div></div><div style="display:flex;flex-direction:column;gap:0.75rem"><div style="display:flex;gap:0.75rem"><span style="font-size:1.25rem">📅</span><div><h4 style="font-weight:600;font-size:0.875rem">Validade</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Verifique mensalmente</p></div></div><div style="display:flex;gap:0.75rem"><span style="font-size:1.25rem">🔒</span><div><h4 style="font-weight:600;font-size:0.875rem">Segurança</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Longe do alcance (confusão)</p></div></div><div style="display:flex;gap:0.75rem"><span style="font-size:1.25rem">📦</span><div><h4 style="font-weight:600;font-size:0.875rem">Embalagem</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.7)">Mantenha na original</p></div></div></div></div></div>

      <!-- Protocolo de Emergência -->
      <div class="content-card content-card-destructive" style="background:rgba(220,53,69,0.05)"><h3 style="color:var(--destructive);font-size:1.125rem;margin-bottom:1rem">⚠️ Protocolo de Emergência Medicamentosa</h3><div class="content-grid content-grid-2"><div class="content-card"><h4 style="font-weight:600;margin-bottom:0.5rem">🤢 Suspeita de Intoxicação</h4><ol style="font-size:0.875rem;color:rgba(64,64,64,0.8);padding-left:1.25rem"><li>NÃO provoque vômito</li><li>Ligue para o CEATOX: 0800-722-6001</li><li>Tenha em mãos: nome, dose, horário</li><li>Leve embalagens ao hospital</li></ol></div><div class="content-card"><h4 style="font-weight:600;margin-bottom:0.5rem">💊 Dose Esquecida</h4><ol style="font-size:0.875rem;color:rgba(64,64,64,0.8);padding-left:1.25rem"><li>Se lembrar logo: tome normalmente</li><li>Se próximo da próxima: pule a esquecida</li><li>NUNCA dobre a dose</li><li>Registre o ocorrido</li></ol></div></div></div>

      <div class="alert-box alert-warning"><p class="alert-title">⚠️ Importante</p><p class="alert-text">Nunca altere dosagens ou horários sem orientação médica. Este guia é informativo. Em caso de dúvidas, consulte sempre o médico ou farmacêutico.</p></div>
    `,

    // ===== CHAPTER 7: COMUNICAÇÃO =====
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

      <div class="content-card content-card-secondary">
        <div class="content-heading"><span class="content-heading-icon">💡</span><div><h3 class="text-fg">Estratégias Adicionais para Alzheimer</h3></div></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem"><h4 style="font-weight:600;margin-bottom:0.5rem">🔁 Perguntas Repetitivas</h4><ul class="content-list"><li>Não demonstre irritação - para ele, é sempre a primeira vez</li><li>Use respostas curtas e consistentes</li><li>Escreva a resposta em um cartão visível</li><li>Redirecione para uma atividade prazerosa</li></ul><div class="dialogue"><div class="dialogue-label">💬 Exemplo de Diálogo:</div><p><span class="speaker-patient">Idoso:</span> "Que horas minha filha vem?"</p><p><span class="speaker-caregiver">Cuidador:</span> "Ela vem às 15h, dona Maria. Está aqui no cartão, ó."</p><p class="italic">(5 minutos depois)</p><p><span class="speaker-patient">Idoso:</span> "Que horas minha filha vem?"</p><p><span class="speaker-caregiver">Cuidador:</span> "Às 15h, dona Maria. Enquanto esperamos, que tal dobrarmos essas toalhas juntas?"</p></div></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem"><h4 style="font-weight:600;margin-bottom:0.5rem">🤝 Comunicação Não-Verbal</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.5rem">Quando as palavras falham, o corpo comunica:</p><ul class="content-list"><li><strong>Contato visual</strong> - fique na altura dos olhos</li><li><strong>Toque gentil</strong> - segure a mão, afague o ombro</li><li><strong>Sorriso</strong> - expressões faciais transmitem segurança</li><li><strong>Gestos</strong> - aponte, demonstre, use mímica</li></ul></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem"><h4 style="font-weight:600;margin-bottom:0.5rem">🚶 Comportamento de Fuga</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.5rem">Quando o idoso quer "ir embora" ou "voltar para casa":</p><ul class="content-list"><li><strong>Nunca diga "você já está em casa"</strong> - causa mais angústia</li><li>Valide: "Você sente saudade de casa, né?"</li><li>Ofereça conforto físico (cobertor, chá quente)</li><li>Distraia com fotos antigas ou música familiar</li></ul><div class="dialogue"><div class="dialogue-label">💬 Exemplo de Diálogo:</div><p><span class="speaker-patient">Idoso:</span> "Preciso ir embora! Minha mãe está me esperando!"</p><p><span class="wrong">Errado:</span> "Sua mãe já faleceu, o senhor mora aqui."</p><p><span class="correct">✓ Certo:</span> "O senhor sente muita falta dela, né? Me conta como ela era."</p></div></div>
        <div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;margin-bottom:0.5rem">😤 Durante Agitação</h4><ul class="content-list"><li>Reduza estímulos - desligue TV, diminua luzes</li><li>Fale baixo e devagar</li><li>Não toque sem avisar antes</li><li>Ofereça escolhas simples: "Quer sentar aqui ou ali?"</li><li>Se necessário, saia e volte em 5 minutos</li></ul></div>
      </div>

      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">🤲</span><div><h3>Para Parkinson</h3><p class="content-heading-sub">Paciência e Ritmo</p></div></div>
        <div class="tip-box" style="margin-bottom:1rem"><p>⭐ <strong>Regra de Ouro:</strong> Respeite o tempo de resposta. O raciocínio pode estar intacto, mas a fala é lenta (Bradifrenia).</p></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem;display:flex;align-items:center;gap:0.75rem"><span style="font-size:1.5rem">⏱️</span><div><p style="color:rgba(64,64,64,0.8)">Conte mentalmente até <strong style="color:var(--primary)">10</strong> após fazer uma pergunta.</p><p style="font-size:0.875rem;color:var(--muted);font-style:italic">Não atropele o silêncio.</p></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">📢 Voz:</h4>
        <p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Estimule o residente a <strong style="color:var(--primary)">"falar alto"</strong>, como se falasse para alguém na outra sala, combatendo a voz baixa (hipofonia).</p>
      </div>

      <div class="content-card content-card-secondary">
        <div class="content-heading"><span class="content-heading-icon">🎯</span><div><h3 class="text-fg">Estratégias Adicionais para Parkinson</h3></div></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem"><h4 style="font-weight:600;margin-bottom:0.5rem">🧊 Congelamento da Marcha (Freezing)</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.5rem">Quando o idoso "trava" e não consegue dar o próximo passo:</p><ul class="content-list"><li><strong>Comandos rítmicos:</strong> diga "MARCHA!" ou "Esquerda, direita..."</li><li><strong>Pistas visuais:</strong> coloque fita colorida no chão</li><li><strong>Música com ritmo:</strong> marchas militares podem ajudar</li><li><strong>Laser pointer:</strong> aponte para onde ele deve pisar</li><li><strong>Nunca puxe</strong> - isso piora o congelamento</li></ul></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem"><h4 style="font-weight:600;margin-bottom:0.5rem">🗣️ Exercícios de Voz (LSVT LOUD)</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.5rem">Práticas diárias para manter a voz audível:</p><ul class="content-list"><li><strong>Prolongar vogais:</strong> "AAAAAA" por 10 segundos</li><li><strong>Contar alto:</strong> 1 a 10 com volume crescente</li><li><strong>Ler em voz alta:</strong> jornais, poemas, orações</li><li><strong>Cantar:</strong> músicas conhecidas fortalecem a voz</li></ul></div>
        <div class="content-card" style="background:var(--accent);margin-bottom:1rem"><h4 style="font-weight:600;margin-bottom:0.5rem">⚡ Períodos ON e OFF</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.5rem">A medicação causa flutuações ao longo do dia:</p><ul class="content-list"><li><strong>Período ON:</strong> medicação funcionando - aproveite para atividades e conversas</li><li><strong>Período OFF:</strong> medicação perdendo efeito - reduza demandas</li><li>Registre os horários de ON/OFF para otimizar a rotina</li><li>Evite conversas importantes no período OFF</li></ul></div>
        <div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;margin-bottom:0.5rem">😐 Expressão Facial Reduzida (Hipomimia)</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.5rem">O rosto pode parecer "sem emoção", mas a pessoa sente tudo:</p><ul class="content-list"><li><strong>Não interprete como desinteresse</strong> - é sintoma da doença</li><li>Pergunte diretamente: "Você está gostando?"</li><li>Exercícios faciais: fazer caretas no espelho</li><li>Massagem facial pode ajudar a relaxar os músculos</li></ul></div>
      </div>

      <!-- Dicas Gerais -->
      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">📋</span><div><h3 class="text-fg">Dicas Gerais de Comunicação</h3></div></div>
        <div class="content-grid content-grid-2">
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><h4 style="font-weight:600;color:var(--primary);margin-bottom:0.5rem">✅ Faça</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.7)"><li>• Fale de frente, na altura dos olhos</li><li>• Use frases curtas e diretas</li><li>• Dê tempo para processar e responder</li><li>• Ofereça escolhas limitadas (2 opções)</li><li>• Use linguagem positiva</li><li>• Repita com paciência se necessário</li></ul></div>
          <div style="background:rgba(220,53,69,0.05);padding:1rem;border-radius:0.5rem"><h4 style="font-weight:600;color:var(--destructive);margin-bottom:0.5rem">❌ Evite</h4><ul style="font-size:0.875rem;color:rgba(64,64,64,0.7)"><li>• Falar de costas ou de longe</li><li>• Perguntas abertas demais</li><li>• Interromper ou completar frases</li><li>• Infantilizar ou tratar com condescendência</li><li>• Falar sobre a pessoa como se ela não estivesse ali</li><li>• Demonstrar pressa ou impaciência</li></ul></div>
        </div>
      </div>

      <!-- Checklists -->
      <div class="content-card" style="border:2px dashed rgba(58,138,92,0.4)">
        <div class="content-heading"><span class="content-heading-icon">✅</span><div><h3>Checklist Interativo de Comunicação</h3><p class="content-heading-sub">Marque os itens conforme você aplicar cada técnica</p></div></div>
        <div class="content-grid content-grid-2">
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem;border:1px solid rgba(58,138,92,0.2)" data-checklist-group>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem"><h4 style="font-weight:700;color:var(--primary)">🧠 ALZHEIMER</h4><span class="checklist-counter" style="font-size:0.75rem;background:rgba(58,138,92,0.2);color:var(--primary);padding:0.125rem 0.5rem;border-radius:9999px">0/8</span></div>
            <div class="checklist-item"><input type="checkbox"><label>Não corrigi a realidade dele</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Validei a emoção primeiro</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Usei frases curtas e simples</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Tom de voz calmo e acolhedor</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Redirecionei com atividade prazerosa</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Ofereci apenas 2 opções de escolha</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Usei comunicação não-verbal</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Reduzi estímulos durante agitação</label></div>
          </div>
          <div style="background:rgba(138,129,124,0.1);padding:1rem;border-radius:0.5rem;border:1px solid rgba(138,129,124,0.3)" data-checklist-group>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem"><h4 style="font-weight:700">🤲 PARKINSON</h4><span class="checklist-counter" style="font-size:0.75rem;background:rgba(138,129,124,0.3);padding:0.125rem 0.5rem;border-radius:9999px">0/8</span></div>
            <div class="checklist-item"><input type="checkbox"><label>Esperei 10 segundos pela resposta</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Não completei as frases por ele</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Verifiquei se é período ON ou OFF</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Estimulei a falar mais alto</label></div>
            <div class="checklist-item"><input type="checkbox"><label>No freezing: usei comandos rítmicos</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Não puxei durante congelamento</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Lembrei que rosto neutro ≠ desinteresse</label></div>
            <div class="checklist-item"><input type="checkbox"><label>Fiz exercícios de voz junto com ele</label></div>
          </div>
        </div>
        <div style="margin-top:1rem;padding:0.75rem;background:var(--primary-bg);border-radius:0.5rem;text-align:center"><p style="font-size:0.75rem;color:var(--muted)"><strong>⚠️ REGRA UNIVERSAL:</strong> Fale de frente, na altura dos olhos, com paciência. Nunca fale sobre a pessoa como se ela não estivesse presente.</p></div>
      </div>

      <div class="alert-box alert-tip"><p class="alert-title">💡 Lembre-se</p><p class="alert-text">A comunicação eficaz é a base do cuidado. Paciência e empatia transformam interações difíceis em momentos de conexão.</p></div>
    `,

    // ===== CHAPTER 8: EMERGÊNCIAS =====
    emergencias: `
      <div class="content-card content-card-destructive" style="background:rgba(220,53,69,0.05)">
        <div class="content-heading"><span class="content-heading-icon">📞</span><div><h3 class="text-destructive">Números de Emergência</h3></div></div>
        <div class="content-grid content-grid-3">
          <div class="content-card emergency-number"><p>192</p><p>SAMU</p></div>
          <div class="content-card emergency-number"><p>193</p><p>Bombeiros</p></div>
          <div class="content-card emergency-number"><p>190</p><p>Polícia</p></div>
        </div>
      </div>

      <!-- Risco A: Fuga -->
      <div class="content-card content-card-destructive">
        <div class="section-header"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco A: Fuga e Deambulação</h3><p class="content-heading-sub">Alzheimer</p></div></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">🛡️ Prevenção</h4>
        <ul class="content-list"><li>Roupas com etiquetas termocolantes (Nome/Telefone)</li><li>GPS vestível (relógio ou pingente com rastreamento em tempo real)</li><li>Foto atualizada sempre disponível no celular</li><li>Cadastro no programa "Busca Ativa" da polícia local</li></ul>
        <h4 style="font-weight:600;margin:1rem 0 0.5rem">🏠 Ambiente Seguro</h4>
        <ul class="content-list"><li>Camufle portas de saída (pinte da cor da parede)</li><li>Camufle maçanetas com capas da cor da porta (reduz estímulo de saída)</li><li>Sensores de abertura com alerta sonoro no celular</li><li>Fechaduras altas ou escondidas (fora do campo visual)</li></ul>
        <div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-top:1rem"><h4 style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">🌅 Síndrome do Pôr do Sol (Sundowning)</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.5rem">Agitação que aumenta ao entardecer. Estratégias:</p><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Aumente a luz artificial 1h antes do pôr do sol</li><li>• Ofereça atividade leve (dobrar toalhas)</li><li>• Verifique fome, sede ou necessidade de ir ao banheiro</li><li>• Música calma dos anos de juventude</li></ul></div>
        <div class="alert-box alert-danger" style="margin-top:1rem"><p class="alert-title">🚨 Se a pessoa sair:</p><p class="alert-text">1. Verifique locais familiares primeiro (antiga casa, trabalho) 2. Peça ajuda aos vizinhos 3. Ligue 190 após 15 min 4. Tenha pronta: foto recente, descrição de roupas, condição médica</p></div>
      </div>

      <!-- Risco B: Freezing -->
      <div class="content-card content-card-destructive">
        <div class="section-header"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco B: Congelamento (Freezing)</h3><p class="content-heading-sub">Parkinson</p></div></div></div>
        <h4 style="font-weight:600;margin-bottom:0.5rem">O que é:</h4>
        <p style="color:rgba(64,64,64,0.8);font-size:0.875rem;margin-bottom:1rem">Os pés "colam" no chão subitamente, criando <strong style="color:var(--primary)">risco alto de queda</strong>. Comum em portas, corredores e ao iniciar movimentos.</p>
        <div class="alert-box alert-danger" style="margin-bottom:1rem"><p class="alert-title">❌ O que NÃO fazer:</p><p class="alert-text">Nunca puxe ou empurre o residente. Não demonstre pressa ou irritação. Não tente "carregar" a pessoa.</p></div>
        <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><h4 style="font-weight:600;color:var(--primary);margin-bottom:0.75rem">✅ Técnicas para Destravar:</h4><div style="display:flex;flex-direction:column;gap:0.75rem"><div style="display:flex;align-items:flex-start;gap:0.75rem"><div style="width:2rem;height:2rem;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.875rem">🔊</div><div><p style="font-weight:500;font-size:0.875rem">Pista Auditiva</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Diga firme: <strong style="color:var(--primary)">"MARCHA!"</strong> ou conte ritmicamente</p></div></div><div style="display:flex;align-items:flex-start;gap:0.75rem"><div style="width:2rem;height:2rem;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.875rem">👁️</div><div><p style="font-weight:500;font-size:0.875rem">Pista Visual</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Coloque seu pé ou objeto na frente: <strong style="color:var(--primary)">"Passe por cima"</strong></p></div></div><div style="display:flex;align-items:flex-start;gap:0.75rem"><div style="width:2rem;height:2rem;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.875rem">🦯</div><div><p style="font-weight:500;font-size:0.875rem">Laser de Bengala (2026)</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Bengalas com laser projetam linha no chão. O cérebro "pula" o obstáculo visual.</p></div></div><div style="display:flex;align-items:flex-start;gap:0.75rem"><div style="width:2rem;height:2rem;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:0.875rem">✋</div><div><p style="font-weight:500;font-size:0.875rem">Pista Tátil</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Toque suave no quadril pode ajudar a "destravar" o movimento.</p></div></div></div></div>
        <div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-top:1rem"><h4 style="font-weight:600;font-size:0.875rem;margin-bottom:0.25rem">💡 Dica 2026:</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Apps de metrônomo no celular ou smartwatch podem fornecer ritmo constante durante caminhadas.</p></div>
      </div>

      <!-- Risco C: Quedas -->
      <div class="content-card content-card-destructive">
        <div class="section-header"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco C: Quedas</h3><p class="content-heading-sub">Alzheimer e Parkinson</p></div></div></div>
        <div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem"><h4 style="font-weight:600;color:var(--primary);font-size:0.875rem;margin-bottom:0.5rem">✅ Prevenção</h4><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Remova tapetes soltos e fios pelo chão</li><li>• Instale barras de apoio em banheiro e corredores</li><li>• Iluminação noturna automática (sensores de movimento)</li><li>• Sapatos antiderrapantes (evite chinelos)</li><li>• Mantenha óculos e aparelhos auditivos sempre em uso</li></ul></div>
        <div class="alert-box alert-danger"><p class="alert-title">🚨 Se houver queda:</p><p class="alert-text">1. NÃO levante imediatamente – verifique dor e consciência 2. Pergunte: "Onde dói? Consegue mexer braços e pernas?" 3. Se suspeitar fratura: NÃO MOVA, ligue 192 4. Se conseguir levantar: use cadeira como apoio intermediário 5. Observe nas 24h seguintes: confusão, vômito, pupilas diferentes</p></div>
        <div class="alert-box alert-warning"><p class="alert-title">⚠️ Sinais de Alerta Pós-Queda</p><p class="alert-text">Dor de cabeça intensa, vômitos, sonolência excessiva, confusão ou pupilas de tamanhos diferentes podem indicar trauma craniano. Procure atendimento imediato.</p></div>
      </div>

      <!-- Risco D: Engasgo -->
      <div class="content-card content-card-destructive">
        <div class="section-header"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">⚠️</span><div><h3 class="text-fg">Risco D: Engasgo e Aspiração</h3><p class="content-heading-sub">Comum em ambas condições</p></div></div></div>
        <div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem;margin-bottom:1rem"><h4 style="font-weight:600;color:var(--primary);font-size:0.875rem;margin-bottom:0.5rem">🍽️ Prevenção</h4><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Posição sentada a 90° durante e 30min após refeições</li><li>• Alimentos em consistência adequada (pastoso se necessário)</li><li>• Porções pequenas, sem pressa</li><li>• Evite conversar durante a mastigação</li><li>• Espessantes para líquidos se houver disfagia</li></ul></div>
        <div class="alert-box alert-danger"><p class="alert-title">🚨 Manobra de Heimlich:</p><p class="alert-text">1. Posicione-se atrás 2. Punho acima do umbigo 3. Compressões rápidas para dentro e para cima 4. Repita até desobstruir 5. Se inconsciente: ligue 192 e inicie RCP</p></div>
        <div style="background:var(--accent);padding:0.75rem;border-radius:0.5rem;margin-top:1rem"><h4 style="font-weight:600;font-size:0.875rem;margin-bottom:0.25rem">⚠️ Sinais de Aspiração Silenciosa:</h4><p style="font-size:0.875rem;color:rgba(64,64,64,0.8)">Tosse durante refeições, voz "molhada" após engolir, febre sem causa aparente, pneumonias de repetição.</p></div>
      </div>

      <!-- Crises Comportamentais -->
      <div class="content-card content-card-primary">
        <div style="background:var(--primary-bg);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">❤️</span><div><h3 class="text-fg">Crises Comportamentais</h3><p class="content-heading-sub">Agitação, Agressividade e Alucinações</p></div></div></div>
        <div class="accordion-group">
          <div class="accordion-item"><button class="accordion-trigger">😰 Agitação Severa</button><div class="accordion-content hidden"><div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem;margin-bottom:0.75rem"><h5 style="font-weight:500;font-size:0.75rem;margin-bottom:0.5rem">✅ O que fazer:</h5><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Mantenha voz calma e baixa</li><li>• Reduza estímulos (desligue TV, diminua luz)</li><li>• Ofereça água ou lanche leve</li><li>• Proponha atividade simples e repetitiva</li><li>• Não confronte nem corrija</li></ul></div><div style="background:rgba(220,53,69,0.1);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:500;color:var(--destructive);font-size:0.75rem;margin-bottom:0.5rem">🚨 Quando buscar ajuda:</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Se a agitação durar mais de 30 minutos, houver risco de autolesão ou lesão a terceiros.</p></div></div></div>
          <div class="accordion-item"><button class="accordion-trigger">👁️ Alucinações e Delírios</button><div class="accordion-content hidden"><p style="font-size:0.75rem;color:rgba(64,64,64,0.8);margin-bottom:0.75rem"><strong>Parkinson:</strong> Alucinações visuais são comuns (ver pessoas, animais).<br><strong>Alzheimer:</strong> Delírios de perseguição ou roubo são frequentes.</p><div style="background:var(--primary-bg);padding:0.75rem;border-radius:0.5rem"><h5 style="font-weight:500;font-size:0.75rem;margin-bottom:0.5rem">✅ Abordagem:</h5><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Não negue nem confirme a visão</li><li>• Valide o sentimento: "Entendo que está assustado"</li><li>• Redirecione suavemente a atenção</li><li>• Verifique: pode ser infecção urinária (causa confusão)</li></ul></div></div></div>
        </div>
      </div>

      <!-- Sinais de Alerta Clínico -->
      <div class="content-card content-card-secondary">
        <div style="background:rgba(138,129,124,0.1);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">🌡️</span><div><h3 class="text-fg">Sinais de Alerta Clínico</h3><p class="content-heading-sub">Reconheça emergências silenciosas</p></div></div></div>
        <div style="display:flex;flex-direction:column;gap:0.75rem">
          <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem;background:var(--accent);border-radius:0.5rem"><span style="font-size:1.25rem">🌡️</span><div><h5 style="font-weight:600;font-size:0.875rem">Infecção</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Febre, confusão súbita, urina escura/com odor forte, tosse com catarro, vermelhidão em feridas.</p></div></div>
          <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem;background:var(--accent);border-radius:0.5rem"><span style="font-size:1.25rem">💧</span><div><h5 style="font-weight:600;font-size:0.875rem">Desidratação</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Boca seca, urina escassa e escura, confusão, pele sem elasticidade.</p></div></div>
          <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:0.75rem;background:var(--accent);border-radius:0.5rem"><span style="font-size:1.25rem">❤️</span><div><h5 style="font-weight:600;font-size:0.875rem">Emergência Cardiovascular</h5><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Dor no peito, falta de ar súbita, dormência em um lado do corpo. <strong style="color:var(--destructive)">Ligue 192 imediatamente.</strong></p></div></div>
        </div>
      </div>

      <!-- Kit de Emergência -->
      <div class="content-card content-card-primary">
        <div style="background:var(--primary-bg);padding:1rem;margin:-1.5rem -1.5rem 1rem;border-radius:var(--radius) var(--radius) 0 0"><div class="content-heading" style="margin-bottom:0"><span class="content-heading-icon">🛡️</span><div><h3 class="text-fg">Kit de Emergência</h3><p class="content-heading-sub">Mantenha sempre acessível</p></div></div></div>
        <div class="content-grid content-grid-2"><div><h4 style="font-weight:600;font-size:0.75rem;margin-bottom:0.5rem">📋 Documentos</h4><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Lista de medicamentos atualizada</li><li>• Contatos de emergência</li><li>• Cartão do plano de saúde</li><li>• Documento de identidade (cópia)</li><li>• Últimos exames</li></ul></div><div><h4 style="font-weight:600;font-size:0.75rem;margin-bottom:0.5rem">🧰 Materiais</h4><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Termômetro digital</li><li>• Medidor de pressão</li><li>• Oxímetro de pulso</li><li>• Lanterna com pilhas</li><li>• Medicamentos de reserva</li></ul></div></div>
      </div>

      <!-- Protocolo SBAR -->
      <div class="content-card">
        <div class="content-heading"><span class="content-heading-icon">⏰</span><div><h3 class="text-fg">Protocolo de Comunicação Médica</h3></div></div>
        <p style="font-size:0.875rem;color:rgba(64,64,64,0.8);margin-bottom:0.75rem">Ao ligar para emergência ou médico, use o método <strong style="color:var(--primary)">SBAR</strong>:</p>
        <div class="sbar-item"><span class="sbar-letter">S</span><div><p style="font-weight:500;font-size:0.875rem">Situação</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">"Meu pai de 78 anos caiu no banheiro há 10 minutos"</p></div></div>
        <div class="sbar-item"><span class="sbar-letter">B</span><div><p style="font-weight:500;font-size:0.875rem">Background (Histórico)</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">"Tem Parkinson há 5 anos, usa Levodopa"</p></div></div>
        <div class="sbar-item"><span class="sbar-letter">A</span><div><p style="font-weight:500;font-size:0.875rem">Avaliação</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">"Está consciente mas com dor no quadril, não consegue levantar"</p></div></div>
        <div class="sbar-item"><span class="sbar-letter">R</span><div><p style="font-weight:500;font-size:0.875rem">Recomendação</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">"Preciso de orientação se devo movê-lo ou aguardar socorro"</p></div></div>
      </div>

      <div class="alert-box alert-tip"><p class="alert-title">💡 Dica Final</p><p class="alert-text">Mantenha este capítulo impresso e fixado em local visível (cozinha ou corredor). Em emergências, o estresse dificulta lembrar procedimentos.</p></div>
    `,

    // ===== CHAPTER 9: ATIVIDADES =====
    atividades: `
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">📦</span><div><h3>Caixa de Memórias</h3><p class="content-heading-sub">Especialmente para Alzheimer</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Reúna objetos sensoriais ligados à história da pessoa:</p><div class="content-grid content-grid-4"><div class="pillar-card"><div class="pillar-icon">🌸</div><div class="pillar-desc">Perfume/cheiros</div></div><div class="pillar-card"><div class="pillar-icon">🔧</div><div class="pillar-desc">Ferramentas</div></div><div class="pillar-card"><div class="pillar-icon">🧵</div><div class="pillar-desc">Tecidos</div></div><div class="pillar-card"><div class="pillar-icon">📷</div><div class="pillar-desc">Fotos antigas</div></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 O tato e o olfato acessam memórias que a visão nem sempre alcança.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🎵</span><div><h3>Musicoterapia</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Crie playlists com músicas marcantes da juventude (em geral, <strong style="color:var(--primary)">15 a 25 anos</strong>).</p><div class="content-grid content-grid-2"><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;font-size:0.875rem">🤲 Parkinson</h4><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">O ritmo ajuda na marcha, cadência e coordenação.</p></div><div class="content-card" style="background:var(--accent)"><h4 style="font-weight:600;font-size:0.875rem">🧠 Alzheimer</h4><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Reduz agitação, melhora humor e evoca memórias emocionais.</p></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 Se houver agitação, prefira músicas calmas e volume baixo; observe sinais de incômodo.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🎨</span><div><h3>Separação por Categorias</h3><p class="content-heading-sub">Especialmente para Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Misture itens grandes e seguros (pregadores, tampas, meias) e peça para separar por cor, tamanho ou tipo.</p><div class="content-grid content-grid-4"><div class="pillar-card"><div class="pillar-icon">🧦</div><div class="pillar-desc">Meias</div></div><div class="pillar-card"><div class="pillar-icon">🧷</div><div class="pillar-desc">Pregadores</div></div><div class="pillar-card"><div class="pillar-icon">🧴</div><div class="pillar-desc">Tampas</div></div><div class="pillar-card"><div class="pillar-icon">🧩</div><div class="pillar-desc">Peças</div></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 Treina coordenação motora fina útil para comer, abotoar e se vestir.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🗂️</span><div><h3>Cartões de Rotina (Passo a Passo)</h3><p class="content-heading-sub">Especialmente para Alzheimer</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Crie cartões simples com fotos/desenhos das etapas de uma tarefa (ex.: lavar as mãos, preparar um lanche, escovar os dentes).</p><div class="content-grid content-grid-3"><div class="content-card" style="background:var(--accent);padding:1rem"><div style="display:flex;align-items:center;gap:0.5rem"><span style="font-size:1.25rem">🧼</span><p style="font-size:0.875rem;font-weight:500">Higiene</p></div><p style="font-size:0.75rem;color:rgba(64,64,64,0.8);margin-top:0.5rem">Use 3–6 passos, letras grandes e linguagem positiva.</p></div><div class="content-card" style="background:var(--accent);padding:1rem"><div style="display:flex;align-items:center;gap:0.5rem"><span style="font-size:1.25rem">🥪</span><p style="font-size:0.875rem;font-weight:500">Lanche</p></div><p style="font-size:0.75rem;color:rgba(64,64,64,0.8);margin-top:0.5rem">Use 3–6 passos, letras grandes e linguagem positiva.</p></div><div class="content-card" style="background:var(--accent);padding:1rem"><div style="display:flex;align-items:center;gap:0.5rem"><span style="font-size:1.25rem">🧥</span><p style="font-size:0.875rem;font-weight:500">Vestuário</p></div><p style="font-size:0.75rem;color:rgba(64,64,64,0.8);margin-top:0.5rem">Use 3–6 passos, letras grandes e linguagem positiva.</p></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 Dê apenas uma instrução por vez e espere; se a pessoa travar, aponte para o próximo cartão.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🍽️</span><div><h3>Cozinha Assistida (Com Tarefas Seguras)</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Transforme preparo de comida em atividade: escolher ingredientes, lavar folhas, mexer uma massa, montar um prato.</p><div class="content-grid content-grid-2"><div class="content-card" style="background:var(--accent)"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Ideias rápidas</p><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Montar salada com cores diferentes</li><li>• Separar feijões/grãos em potes</li><li>• Montar sanduíche "por camadas"</li></ul></div><div class="content-card" style="background:var(--accent)"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Adaptações</p><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Utensílios com cabo mais grosso</li><li>• Tigelas antiderrapantes</li><li>• Pausas curtas e água por perto</li></ul></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 Foque em tarefas seguras (sem fogo/facas afiadas) e na participação — não na perfeição do resultado.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🪴</span><div><h3>Cuidados com Plantas (Mini-jardinagem)</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Atividade sensorial e calma: regar, podar folhas secas, replantar mudas, organizar vasos.</p><div class="content-grid content-grid-3"><div class="pillar-card"><div class="pillar-icon">💧</div><div class="pillar-desc">Regar</div></div><div class="pillar-card"><div class="pillar-icon">🌱</div><div class="pillar-desc">Replantar</div></div><div class="pillar-card"><div class="pillar-icon">🏷️</div><div class="pillar-desc">Etiquetar</div></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 Use vasos leves e um "tapete" ou bandeja para conter terra/água e reduzir risco de escorregões.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🪑</span><div><h3>Movimento Guiado na Cadeira</h3><p class="content-heading-sub">Especialmente para Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Sessão curta (5–10 min) com música ritmada: bater palmas, tocar joelhos alternados, elevar calcanhares e pontas dos pés.</p><div class="content-grid content-grid-2"><div class="content-card" style="background:var(--accent)"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Sequência exemplo</p><ol style="font-size:0.75rem;color:rgba(64,64,64,0.8);padding-left:1rem"><li>Palmas no ritmo (30–60s)</li><li>Mãos alternadas nos joelhos (30–60s)</li><li>Elevar calcanhares (10 repetições)</li><li>Elevar pontas dos pés (10 repetições)</li></ol></div><div class="content-card" style="background:var(--accent)"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Segurança</p><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Cadeira firme, com braços</li><li>• Pés bem apoiados</li><li>• Pausas se houver tontura</li></ul></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 O ritmo externo (música/contagem) ajuda a iniciar e manter o movimento.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">👂</span><div><h3>Bingo Sensorial (Som, Cheiro e Textura)</h3><p class="content-heading-sub">Especialmente para Alzheimer</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Monte uma cartela simples com itens do dia a dia (café, sabonete, algodão, arroz, água). A pessoa identifica pelo som/cheiro/toque.</p><div class="content-grid content-grid-3"><div class="content-card" style="background:var(--accent);padding:1rem"><div style="display:flex;align-items:center;gap:0.5rem"><span style="font-size:1.25rem">☕</span><p style="font-size:0.875rem;font-weight:500">Cheiro</p></div><p style="font-size:0.75rem;color:rgba(64,64,64,0.8);margin-top:0.5rem">Vale em dupla: um apresenta e o outro adivinha.</p></div><div class="content-card" style="background:var(--accent);padding:1rem"><div style="display:flex;align-items:center;gap:0.5rem"><span style="font-size:1.25rem">🖐️</span><p style="font-size:0.875rem;font-weight:500">Textura</p></div><p style="font-size:0.75rem;color:rgba(64,64,64,0.8);margin-top:0.5rem">Vale em dupla: um apresenta e o outro adivinha.</p></div><div class="content-card" style="background:var(--accent);padding:1rem"><div style="display:flex;align-items:center;gap:0.5rem"><span style="font-size:1.25rem">🔔</span><p style="font-size:0.875rem;font-weight:500">Som</p></div><p style="font-size:0.75rem;color:rgba(64,64,64,0.8);margin-top:0.5rem">Vale em dupla: um apresenta e o outro adivinha.</p></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 Se houver confusão, ofereça alternativas ("é café ou sabonete?") em vez de pergunta aberta.</p></div></div>
      <div class="content-card content-card-primary"><div class="content-heading"><span class="content-heading-icon">🖌️</span><div><h3>Arte Simples (Sem "Certo ou Errado")</h3><p class="content-heading-sub">Para Alzheimer e Parkinson</p></div></div><p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Faça desenhos guiados por formas (círculos/linhas), colagem com revistas, pintura com cotonete ou esponja.</p><div class="content-grid content-grid-2"><div class="content-card" style="background:var(--accent)"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Materiais fáceis</p><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Folhas A4 e canetões grossos</li><li>• Revistas + cola em bastão</li><li>• Papel colorido pré-cortado</li></ul></div><div class="content-card" style="background:var(--accent)"><p style="font-weight:600;font-size:0.875rem;margin-bottom:0.5rem">Tema que engaja</p><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• "Minha casa" (objetos do lar)</li><li>• "Minha música" (capas/cores)</li><li>• "Minha infância" (fotos/recortes)</li></ul></div></div><div class="tip-box" style="margin-top:1rem"><p>💡 Evite avaliações; elogie o processo ("gostei das cores que você escolheu").</p></div></div>

      <!-- Plano Semanal -->
      <div class="content-card content-card-primary">
        <div class="content-heading"><span class="content-heading-icon">📅</span><div><h3>Plano Semanal de Atividades</h3><p class="content-heading-sub">Combinações prontas para 7 dias</p></div></div>
        <p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Escolha as atividades de acordo com o <strong style="color:var(--primary)">nível de energia do dia</strong>. Alterne entre curtas (10–15 min) e longas (20–30 min).</p>
        <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🌅</span><span style="font-weight:600">Segunda</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem">Curta</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Movimento na Cadeira</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem;background:rgba(58,138,92,0.2)">Longa</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Musicoterapia + Caixa de Memórias</span></div></div>
        <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🌿</span><span style="font-weight:600">Terça</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem">Curta</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Cuidar das Plantas</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem;background:rgba(58,138,92,0.2)">Longa</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Cozinha Assistida (salada)</span></div></div>
        <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🎨</span><span style="font-weight:600">Quarta</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem">Curta</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Separação por Cores</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem;background:rgba(58,138,92,0.2)">Longa</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Arte Simples (colagem)</span></div></div>
        <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🎵</span><span style="font-weight:600">Quinta</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem">Curta</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Musicoterapia (15 min)</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem;background:rgba(58,138,92,0.2)">Longa</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Bingo Sensorial + Conversa</span></div></div>
        <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🗂️</span><span style="font-weight:600">Sexta</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem">Curta</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Cartões de Rotina</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem;background:rgba(58,138,92,0.2)">Longa</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Cozinha Assistida (sanduíche)</span></div></div>
        <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>📦</span><span style="font-weight:600">Sábado</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem">Curta</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Caixa de Memórias</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem;background:rgba(58,138,92,0.2)">Longa</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Arte + Musicoterapia</span></div></div>
        <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>☀️</span><span style="font-weight:600">Domingo</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem">Curta</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Movimento Guiado</span></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="tag" style="font-size:0.75rem;background:rgba(58,138,92,0.2)">Longa</span><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Mini-jardinagem + Conversa</span></div></div>
        <div class="content-grid content-grid-2" style="margin-top:1.5rem">
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><p style="font-size:0.875rem;font-weight:600;color:var(--primary);margin-bottom:0.5rem">🔋 Dia de baixa energia</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Escolha apenas a atividade <strong>curta</strong>. Se necessário, divida em 2 blocos de 5 min com pausa.</p></div>
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><p style="font-size:0.875rem;font-weight:600;color:var(--primary);margin-bottom:0.5rem">⚡ Dia de boa energia</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Faça a curta pela manhã e a longa à tarde, respeitando horários de medicação e refeições.</p></div>
        </div>
        <div class="tip-box" style="margin-top:1rem"><p>💡 Adapte livremente: se a pessoa preferir repetir a mesma atividade vários dias, tudo bem — o importante é engajar sem forçar.</p></div>
      </div>

      <!-- Plano para Semanas Atípicas -->
      <div class="content-card content-card-destructive">
        <div class="content-heading"><span class="content-heading-icon">🩺</span><div><h3 class="text-fg">Plano para Semanas Atípicas</h3><p class="content-heading-sub">Consultas médicas, exames ou dias de fadiga intensa</p></div></div>
        <p style="color:rgba(64,64,64,0.8);margin-bottom:1rem">Quando há <strong style="color:var(--primary)">consultas, exames ou recuperação</strong>, reduza a intensidade e priorize o descanso.</p>
        <div style="background:rgba(220,53,69,0.05);padding:1rem;border-radius:0.5rem;margin-bottom:1rem">
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem"><span style="font-size:1.25rem">🏥</span><p style="font-weight:600;font-size:0.875rem">Dia de Consulta/Exame</p></div>
          <div class="content-grid content-grid-2">
            <div class="content-card" style="padding:0.75rem"><p style="font-size:0.75rem;font-weight:500;color:var(--primary);margin-bottom:0.25rem">Antes da consulta</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Apenas rotina básica (higiene, alimentação). Evite atividades que cansem ou agitem.</p></div>
            <div class="content-card" style="padding:0.75rem"><p style="font-size:0.75rem;font-weight:500;color:var(--primary);margin-bottom:0.25rem">Depois da consulta</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Musicoterapia calma (5–10 min) ou simplesmente descanso com companhia tranquila.</p></div>
          </div>
        </div>
        <p style="font-weight:600;font-size:0.875rem;margin-bottom:0.75rem">📋 Plano Semanal Reduzido</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem">
          <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🌅</span><span style="font-weight:500;font-size:0.875rem">Segunda</span></div><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Música calma (10 min)</span><span style="font-size:0.75rem;color:var(--muted);font-style:italic">Sem atividade motora</span></div>
          <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🩺</span><span style="font-weight:500;font-size:0.875rem">Terça</span></div><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Dia de consulta — descanso</span><span style="font-size:0.75rem;color:var(--muted);font-style:italic">Apenas rotina básica</span></div>
          <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>💤</span><span style="font-weight:500;font-size:0.875rem">Quarta</span></div><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Recuperação — companhia tranquila</span><span style="font-size:0.75rem;color:var(--muted);font-style:italic">Conversa leve, fotos</span></div>
          <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🪴</span><span style="font-weight:500;font-size:0.875rem">Quinta</span></div><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Regar plantas (5 min)</span><span style="font-size:0.75rem;color:var(--muted);font-style:italic">Atividade mínima</span></div>
          <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>🎵</span><span style="font-weight:500;font-size:0.875rem">Sexta</span></div><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Musicoterapia (15 min)</span><span style="font-size:0.75rem;color:var(--muted);font-style:italic">Se houver disposição</span></div>
          <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>📦</span><span style="font-weight:500;font-size:0.875rem">Sábado</span></div><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Caixa de Memórias (10 min)</span><span style="font-size:0.75rem;color:var(--muted);font-style:italic">Sentado, sem esforço</span></div>
          <div class="plan-row"><div style="display:flex;align-items:center;gap:0.5rem"><span>☀️</span><span style="font-weight:500;font-size:0.875rem">Domingo</span></div><span style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Conversa + álbum de fotos</span><span style="font-size:0.75rem;color:var(--muted);font-style:italic">Atividade social leve</span></div>
        </div>
        <div style="background:rgba(220,53,69,0.1);padding:1rem;border-radius:0.5rem;margin-bottom:1rem">
          <p style="font-weight:600;color:var(--destructive);font-size:0.875rem;margin-bottom:0.5rem">⚠️ Sinais para suspender atividades</p>
          <div class="content-grid content-grid-2"><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Sonolência excessiva ou confusão</li><li>• Irritabilidade ou recusa persistente</li><li>• Dor ou desconforto físico</li></ul><ul style="font-size:0.75rem;color:rgba(64,64,64,0.8)"><li>• Febre ou mal-estar geral</li><li>• Efeitos colaterais de medicação</li><li>• Noite mal dormida</li></ul></div>
        </div>
        <div class="content-grid content-grid-2">
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><p style="font-size:0.875rem;font-weight:600;color:var(--primary);margin-bottom:0.5rem">💊 Semana com nova medicação</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Observe reações nos primeiros dias. Mantenha apenas atividades passivas (música, companhia) até ajuste.</p></div>
          <div style="background:var(--primary-bg);padding:1rem;border-radius:0.5rem"><p style="font-size:0.875rem;font-weight:600;color:var(--primary);margin-bottom:0.5rem">😴 Período de maior fadiga</p><p style="font-size:0.75rem;color:rgba(64,64,64,0.8)">Prefira atividades sentadas, curtas (5–10 min), com pausas. Respeite cochilos e hidratação.</p></div>
        </div>
        <div class="tip-box" style="margin-top:1rem"><p>💡 Não existe "atraso" — pular dias ou semanas é normal. O bem-estar sempre vem antes da estimulação.</p></div>
      </div>

      <!-- Download Checklist PDF -->
      <div class="content-card content-card-primary" style="text-align:center">
        <div class="content-heading" style="justify-content:center"><span class="content-heading-icon">📋</span><div><h3>Checklist Imprimível</h3><p class="content-heading-sub">Resumo de todas as atividades e materiais</p></div></div>
        <p style="color:rgba(64,64,64,0.8);margin-bottom:1.5rem">Baixe o checklist completo em PDF para imprimir e usar no dia a dia.</p>
        <a href="assets/Checklist_de_Atividades.pdf" download="Checklist_de_Atividades.pdf" class="btn-download">
          📥 Baixar Checklist em PDF
        </a>
      </div>

      <div class="alert-box alert-tip"><p class="alert-title">💡 Dica Altevita</p><p class="alert-text">Adapte as atividades ao gosto pessoal e ao dia (energia, humor, sono). O importante é estimular de forma prazerosa, sem pressão por resultados.</p></div>
      <div class="alert-box alert-warning"><p class="alert-title">⚠️ Segurança em primeiro lugar</p><p class="alert-text">Em casa, priorize ambientes bem iluminados e sem obstáculos. Evite objetos pequenos (risco de engasgo), superfícies escorregadias e tarefas com calor/corte sem supervisão.</p></div>
    `,
  };

  return content[id] || "<p>Conteúdo em breve.</p>";
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  buildTOC();
  showView("cover");
});
