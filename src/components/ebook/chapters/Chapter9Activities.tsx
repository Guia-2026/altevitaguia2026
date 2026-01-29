import AlertBox from "../AlertBox";
import SectionCard from "../SectionCard";
import EnergyQuiz from "../EnergyQuiz";

type Audience = "Alzheimer" | "Parkinson" | "Ambos";

const AudienceBadge = ({ audience }: { audience: Audience }) => {
  const label =
    audience === "Ambos" ? "Para Alzheimer e Parkinson" : `Especialmente para ${audience}`;

  return <p className="text-sm text-muted-foreground">{label}</p>;
};

const Tip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary/5 p-4 rounded-lg">
      <p className="text-sm text-primary font-medium">💡 {children}</p>
    </div>
  );
};

const Chapter9Activities = () => {
  return (
    <div className="space-y-8">
      {/* Memory Box - Alzheimer */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Caixa de Memórias"
          subtitle="Especialmente para Alzheimer"
          icon={<span className="text-2xl">📦</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Reúna objetos sensoriais ligados à história da pessoa:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { emoji: "🌸", label: "Perfume/cheiros" },
              { emoji: "🔧", label: "Ferramentas" },
              { emoji: "🧵", label: "Tecidos" },
              { emoji: "📷", label: "Fotos antigas" },
            ].map((item) => (
              <div key={item.label} className="bg-accent/50 p-3 rounded-lg text-center">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-xs text-foreground/80 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <Tip>O tato e o olfato acessam memórias que a visão nem sempre alcança.</Tip>
        </SectionCard>
      </div>

      {/* Music Therapy - Both */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Musicoterapia"
          subtitle="Para Alzheimer e Parkinson"
          icon={<span className="text-2xl">🎵</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Crie playlists com músicas marcantes da juventude (em geral, <strong className="text-primary">15 a 25 anos</strong>).
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-accent/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🤲</span>
                <h4 className="font-semibold text-foreground text-sm">Parkinson</h4>
              </div>
              <p className="text-xs text-foreground/80">O ritmo ajuda na marcha, cadência e coordenação.</p>
            </div>
            <div className="bg-accent/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🧠</span>
                <h4 className="font-semibold text-foreground text-sm">Alzheimer</h4>
              </div>
              <p className="text-xs text-foreground/80">Reduz agitação, melhora humor e evoca memórias emocionais.</p>
            </div>
          </div>

          <Tip>
            Se houver agitação, prefira músicas calmas e volume baixo; observe sinais de incômodo.
          </Tip>
        </SectionCard>
      </div>

      {/* Color Sorting - Parkinson */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Separação por Categorias"
          subtitle="Especialmente para Parkinson"
          icon={<span className="text-2xl">🎨</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Misture itens grandes e seguros (pregadores, tampas, meias) e peça para separar por cor, tamanho ou tipo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { emoji: "🧦", label: "Meias" },
              { emoji: "🧷", label: "Pregadores" },
              { emoji: "🧴", label: "Tampas" },
              { emoji: "🧩", label: "Peças" },
            ].map((item) => (
              <div key={item.label} className="bg-accent/50 p-3 rounded-lg text-center">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-xs text-foreground/80 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <Tip>Treina coordenação motora fina útil para comer, abotoar e se vestir.</Tip>
        </SectionCard>
      </div>

      {/* Sequência de Rotina com Cartões - Alzheimer */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Cartões de Rotina (Passo a Passo)"
          subtitle="Especialmente para Alzheimer"
          icon={<span className="text-2xl">🗂️</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Crie cartões simples com fotos/desenhos das etapas de uma tarefa (ex.: lavar as mãos, preparar um lanche, escovar os dentes).
          </p>
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              { emoji: "🧼", label: "Higiene" },
              { emoji: "🥪", label: "Lanche" },
              { emoji: "🧥", label: "Vestuário" },
            ].map((item) => (
              <div key={item.label} className="bg-accent/50 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.emoji}</span>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </div>
                <p className="text-xs text-foreground/80 mt-2">Use 3–6 passos, letras grandes e linguagem positiva.</p>
              </div>
            ))}
          </div>
          <Tip>
            Dê apenas uma instrução por vez e espere; se a pessoa travar, aponte para o próximo cartão.
          </Tip>
        </SectionCard>
      </div>

      {/* Cozinha Assistida - Ambos */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Cozinha Assistida (Com Tarefas Seguras)"
          subtitle="Para Alzheimer e Parkinson"
          icon={<span className="text-2xl">🍽️</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Transforme preparo de comida em atividade: escolher ingredientes, lavar folhas, mexer uma massa, montar um prato.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-accent/50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-foreground">Ideias rápidas</p>
              <ul className="text-xs text-foreground/80 mt-2 space-y-1">
                <li>• Montar salada com cores diferentes</li>
                <li>• Separar feijões/grãos em potes</li>
                <li>• Montar sanduíche “por camadas”</li>
              </ul>
            </div>
            <div className="bg-accent/50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-foreground">Adaptações</p>
              <ul className="text-xs text-foreground/80 mt-2 space-y-1">
                <li>• Utensílios com cabo mais grosso</li>
                <li>• Tigelas antiderrapantes</li>
                <li>• Pausas curtas e água por perto</li>
              </ul>
            </div>
          </div>

          <Tip>
            Foque em tarefas seguras (sem fogo/facas afiadas) e na participação — não na perfeição do resultado.
          </Tip>
        </SectionCard>
      </div>

      {/* Jardim/Plantas - Ambos */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Cuidados com Plantas (Mini-jardinagem)"
          subtitle="Para Alzheimer e Parkinson"
          icon={<span className="text-2xl">🪴</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Atividade sensorial e calma: regar, podar folhas secas, replantar mudas, organizar vasos.
          </p>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              { emoji: "💧", label: "Regar" },
              { emoji: "🌱", label: "Replantar" },
              { emoji: "🏷️", label: "Etiquetar" },
            ].map((item) => (
              <div key={item.label} className="bg-accent/50 p-4 rounded-lg text-center">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-xs text-foreground/80 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          <Tip>
            Use vasos leves e um “tapete” ou bandeja para conter terra/água e reduzir risco de escorregões.
          </Tip>
        </SectionCard>
      </div>

      {/* Alongamento na cadeira + coordenação - Parkinson */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Movimento Guiado na Cadeira"
          subtitle="Especialmente para Parkinson"
          icon={<span className="text-2xl">🪑</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Sessão curta (5–10 min) com música ritmada: bater palmas, tocar joelhos alternados, elevar calcanhares e pontas dos pés.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-accent/50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-foreground">Sequência exemplo</p>
              <ol className="text-xs text-foreground/80 mt-2 space-y-1 list-decimal pl-4">
                <li>Palmas no ritmo (30–60s)</li>
                <li>Mãos alternadas nos joelhos (30–60s)</li>
                <li>Elevar calcanhares (10 repetições)</li>
                <li>Elevar pontas dos pés (10 repetições)</li>
              </ol>
            </div>
            <div className="bg-accent/50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-foreground">Segurança</p>
              <ul className="text-xs text-foreground/80 mt-2 space-y-1">
                <li>• Cadeira firme, com braços</li>
                <li>• Pés bem apoiados</li>
                <li>• Pausas se houver tontura</li>
              </ul>
            </div>
          </div>

          <Tip>O ritmo externo (música/contagem) ajuda a iniciar e manter o movimento.</Tip>
        </SectionCard>
      </div>

      {/* Caça ao som / bingo sensorial - Alzheimer */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Bingo Sensorial (Som, Cheiro e Textura)"
          subtitle="Especialmente para Alzheimer"
          icon={<span className="text-2xl">👂</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Monte uma cartela simples com itens do dia a dia (café, sabonete, algodão, arroz, água). A pessoa identifica pelo som/cheiro/toque.
          </p>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {[
              { emoji: "☕", label: "Cheiro" },
              { emoji: "🖐️", label: "Textura" },
              { emoji: "🔔", label: "Som" },
            ].map((item) => (
              <div key={item.label} className="bg-accent/50 p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.emoji}</span>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </div>
                <p className="text-xs text-foreground/80 mt-2">Vale em dupla: um apresenta e o outro adivinha.</p>
              </div>
            ))}
          </div>

          <Tip>
            Se houver confusão, ofereça alternativas (“é café ou sabonete?”) em vez de pergunta aberta.
          </Tip>
        </SectionCard>
      </div>

      {/* Arte com restrição suave - Ambos */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Arte Simples (Sem “Certo ou Errado”)"
          subtitle="Para Alzheimer e Parkinson"
          icon={<span className="text-2xl">🖌️</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Faça desenhos guiados por formas (círculos/linhas), colagem com revistas, pintura com cotonete ou esponja.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-accent/50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-foreground">Materiais fáceis</p>
              <ul className="text-xs text-foreground/80 mt-2 space-y-1">
                <li>• Folhas A4 e canetões grossos</li>
                <li>• Revistas + cola em bastão</li>
                <li>• Papel colorido pré-cortado</li>
              </ul>
            </div>
            <div className="bg-accent/50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-foreground">Tema que engaja</p>
              <ul className="text-xs text-foreground/80 mt-2 space-y-1">
                <li>• “Minha casa” (objetos do lar)</li>
                <li>• “Minha música” (capas/cores)</li>
                <li>• “Minha infância” (fotos/recortes)</li>
              </ul>
            </div>
          </div>

          <Tip>
            Evite avaliações; elogie o processo (“gostei das cores que você escolheu”).
          </Tip>
        </SectionCard>
      </div>

      {/* Quiz de Energia */}
      <div className="border-2 border-primary/30 rounded-xl bg-gradient-to-br from-primary/5 to-transparent">
        <SectionCard
          title="Avaliação Rápida de Energia"
          subtitle="Descubra qual atividade é ideal para hoje"
          icon={<span className="text-2xl">⚡</span>}
          className="border-0 bg-transparent"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Responda 4 perguntas rápidas sobre como está o dia e receba uma <strong className="text-primary">sugestão personalizada</strong> de atividades.
          </p>
          
          <EnergyQuiz />
        </SectionCard>
      </div>

      {/* Plano Semanal */}
      <div className="border-2 border-primary/20 rounded-xl">
        <SectionCard
          title="Plano Semanal de Atividades"
          subtitle="Combinações prontas para 7 dias"
          icon={<span className="text-2xl">📅</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Escolha as atividades de acordo com o <strong className="text-primary">nível de energia do dia</strong>. Alterne entre curtas (10–15 min) e longas (20–30 min).
          </p>

          <div className="space-y-3">
            {[
              {
                day: "Segunda",
                emoji: "🌅",
                short: "Movimento na Cadeira",
                long: "Musicoterapia + Caixa de Memórias",
              },
              {
                day: "Terça",
                emoji: "🌿",
                short: "Cuidar das Plantas",
                long: "Cozinha Assistida (salada)",
              },
              {
                day: "Quarta",
                emoji: "🎨",
                short: "Separação por Cores",
                long: "Arte Simples (colagem)",
              },
              {
                day: "Quinta",
                emoji: "🎵",
                short: "Musicoterapia (15 min)",
                long: "Bingo Sensorial + Conversa",
              },
              {
                day: "Sexta",
                emoji: "🗂️",
                short: "Cartões de Rotina",
                long: "Cozinha Assistida (sanduíche)",
              },
              {
                day: "Sábado",
                emoji: "📦",
                short: "Caixa de Memórias",
                long: "Arte + Musicoterapia",
              },
              {
                day: "Domingo",
                emoji: "☀️",
                short: "Movimento Guiado",
                long: "Mini-jardinagem + Conversa",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="bg-accent/50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-2 md:gap-4 items-center"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="font-semibold text-foreground">{item.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                    Curta
                  </span>
                  <span className="text-xs text-foreground/80">{item.short}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-medium">
                    Longa
                  </span>
                  <span className="text-xs text-foreground/80">{item.long}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm font-semibold text-primary mb-2">🔋 Dia de baixa energia</p>
              <p className="text-xs text-foreground/80">
                Escolha apenas a atividade <strong>curta</strong>. Se necessário, divida em 2 blocos de 5 min com pausa.
              </p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm font-semibold text-primary mb-2">⚡ Dia de boa energia</p>
              <p className="text-xs text-foreground/80">
                Faça a curta pela manhã e a longa à tarde, respeitando horários de medicação e refeições.
              </p>
            </div>
          </div>

          <Tip>
            Adapte livremente: se a pessoa preferir repetir a mesma atividade vários dias, tudo bem — o importante é engajar sem forçar.
          </Tip>
        </SectionCard>
      </div>

      {/* Plano Alternativo - Semanas Atípicas */}
      <div className="border-2 border-destructive/20 rounded-xl">
        <SectionCard
          title="Plano para Semanas Atípicas"
          subtitle="Consultas médicas, exames ou dias de fadiga intensa"
          icon={<span className="text-2xl">🩺</span>}
          className="border-0"
        >
          <p className="text-foreground/80 leading-relaxed mb-4">
            Quando há <strong className="text-primary">consultas, exames ou recuperação</strong>, reduza a intensidade e priorize o descanso. Use este plano mais leve.
          </p>

          {/* Dia de consulta médica */}
          <div className="bg-destructive/5 p-4 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🏥</span>
              <p className="text-sm font-semibold text-foreground">Dia de Consulta/Exame</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-background/50 p-3 rounded-lg">
                <p className="text-xs font-medium text-primary mb-1">Antes da consulta</p>
                <p className="text-xs text-foreground/80">
                  Apenas rotina básica (higiene, alimentação). Evite atividades que cansem ou agitem.
                </p>
              </div>
              <div className="bg-background/50 p-3 rounded-lg">
                <p className="text-xs font-medium text-primary mb-1">Depois da consulta</p>
                <p className="text-xs text-foreground/80">
                  Musicoterapia calma (5–10 min) ou simplesmente descanso com companhia tranquila.
                </p>
              </div>
            </div>
          </div>

          {/* Semana leve */}
          <p className="text-sm font-semibold text-foreground mb-3">📋 Plano Semanal Reduzido</p>
          <div className="space-y-2 mb-4">
            {[
              { day: "Segunda", emoji: "🌅", activity: "Música calma (10 min)", note: "Sem atividade motora" },
              { day: "Terça", emoji: "🩺", activity: "Dia de consulta — descanso", note: "Apenas rotina básica" },
              { day: "Quarta", emoji: "💤", activity: "Recuperação — companhia tranquila", note: "Conversa leve, fotos" },
              { day: "Quinta", emoji: "🪴", activity: "Regar plantas (5 min)", note: "Atividade mínima" },
              { day: "Sexta", emoji: "🎵", activity: "Musicoterapia (15 min)", note: "Se houver disposição" },
              { day: "Sábado", emoji: "📦", activity: "Caixa de Memórias (10 min)", note: "Sentado, sem esforço" },
              { day: "Domingo", emoji: "☀️", activity: "Conversa + álbum de fotos", note: "Atividade social leve" },
            ].map((item) => (
              <div
                key={item.day}
                className="bg-accent/30 p-3 rounded-lg grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-2 md:gap-4 items-center"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.emoji}</span>
                  <span className="font-medium text-foreground text-sm">{item.day}</span>
                </div>
                <span className="text-xs text-foreground/80">{item.activity}</span>
                <span className="text-xs text-muted-foreground italic">{item.note}</span>
              </div>
            ))}
          </div>

          {/* Sinais de alerta */}
          <div className="bg-destructive/10 p-4 rounded-lg mb-4">
            <p className="text-sm font-semibold text-destructive mb-2">⚠️ Sinais para suspender atividades</p>
            <div className="grid md:grid-cols-2 gap-2">
              <ul className="text-xs text-foreground/80 space-y-1">
                <li>• Sonolência excessiva ou confusão</li>
                <li>• Irritabilidade ou recusa persistente</li>
                <li>• Dor ou desconforto físico</li>
              </ul>
              <ul className="text-xs text-foreground/80 space-y-1">
                <li>• Febre ou mal-estar geral</li>
                <li>• Efeitos colaterais de medicação</li>
                <li>• Noite mal dormida</li>
              </ul>
            </div>
          </div>

          {/* Dicas de adaptação */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm font-semibold text-primary mb-2">💊 Semana com nova medicação</p>
              <p className="text-xs text-foreground/80">
                Observe reações nos primeiros dias. Mantenha apenas atividades passivas (música, companhia) até ajuste.
              </p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm font-semibold text-primary mb-2">😴 Período de maior fadiga</p>
              <p className="text-xs text-foreground/80">
                Prefira atividades sentadas, curtas (5–10 min), com pausas. Respeite cochilos e hidratação.
              </p>
            </div>
          </div>

          <Tip>
            Não existe "atraso" — pular dias ou semanas é normal. O bem-estar sempre vem antes da estimulação.
          </Tip>
        </SectionCard>
      </div>

      <AlertBox type="tip" title="Dica Altevita">
        Adapte as atividades ao gosto pessoal e ao dia (energia, humor, sono). O importante é estimular de forma prazerosa, sem pressão por resultados.
      </AlertBox>

      <AlertBox type="warning" title="Segurança em primeiro lugar">
        Em casa, priorize ambientes bem iluminados e sem obstáculos. Evite objetos pequenos (risco de engasgo), superfícies escorregadias e tarefas com calor/corte sem supervisão.
      </AlertBox>
    </div>
  );
};

export default Chapter9Activities;
