import AlertBox from "../AlertBox";

const Chapter7Communication = () => {
  return (
    <div className="space-y-8">
      {/* Alzheimer Communication */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🧠</span>
          <div>
            <h3 className="text-xl font-bold text-primary">Para Alzheimer</h3>
            <p className="text-sm text-muted-foreground">Validar e Acolher</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              ⭐ Regra de Ouro
            </h4>
            <p className="text-foreground/80">
              Não confronte a realidade dele. Se ele diz que "vai trabalhar", <strong>não discuta</strong>.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">✅ Ações de Validação:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-accent/50 p-3 rounded-lg">
                <span className="text-xl">💬</span>
                <div>
                  <p className="text-sm text-foreground/80">
                    <strong>Valide a emoção:</strong>
                  </p>
                  <p className="text-primary italic text-sm mt-1">
                    "Você gostava muito do seu trabalho, né?"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-accent/50 p-3 rounded-lg">
                <span className="text-xl">🔄</span>
                <div>
                  <p className="text-sm text-foreground/80">
                    <strong>Redirecione a atenção:</strong>
                  </p>
                  <p className="text-primary italic text-sm mt-1">
                    "Me conte sobre seus colegas."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold text-foreground mb-2">🗣️ Linguagem:</h4>
            <p className="text-foreground/80 text-sm">
              Use frases curtas. O <strong className="text-primary">tom de voz calmo</strong> é mais importante que as palavras.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Alzheimer Strategies */}
      <div className="bg-card rounded-xl p-6 border-2 border-secondary/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">💡</span>
          <h3 className="text-xl font-bold text-foreground">Estratégias Adicionais para Alzheimer</h3>
        </div>
        
        <div className="space-y-4">
          {/* Repetitive Questions */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🔁 Perguntas Repetitivas
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Quando o idoso pergunta a mesma coisa várias vezes:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Não demonstre irritação</strong> - para ele, é sempre a primeira vez</li>
              <li>• Use respostas curtas e consistentes</li>
              <li>• Escreva a resposta em um cartão visível (ex: "Sua filha vem às 15h")</li>
              <li>• Redirecione para uma atividade prazerosa</li>
            </ul>
          </div>

          {/* Non-verbal Communication */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🤝 Comunicação Não-Verbal
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Quando as palavras falham, o corpo comunica:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Contato visual</strong> - fique na altura dos olhos</li>
              <li>• <strong>Toque gentil</strong> - segure a mão, afague o ombro</li>
              <li>• <strong>Sorriso</strong> - expressões faciais transmitem segurança</li>
              <li>• <strong>Gestos</strong> - aponte, demonstre, use mímica</li>
            </ul>
          </div>

          {/* Wandering Behavior */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🚶 Comportamento de Fuga
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Quando o idoso quer "ir embora" ou "voltar para casa":
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Nunca diga "você já está em casa"</strong> - causa mais angústia</li>
              <li>• Valide: "Você sente saudade de casa, né?"</li>
              <li>• Ofereça conforto físico (cobertor, chá quente)</li>
              <li>• Distraia com fotos antigas ou música familiar</li>
              <li>• Camufle visualmente as saídas (cortinas, adesivos)</li>
            </ul>
          </div>

          {/* Agitation */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              😤 Durante Agitação
            </h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Reduza estímulos</strong> - desligue TV, diminua luzes</li>
              <li>• Fale baixo e devagar</li>
              <li>• Não toque sem avisar antes</li>
              <li>• Ofereça escolhas simples: "Quer sentar aqui ou ali?"</li>
              <li>• Se necessário, saia e volte em 5 minutos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Parkinson Communication */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🤲</span>
          <div>
            <h3 className="text-xl font-bold text-primary">Para Parkinson</h3>
            <p className="text-sm text-muted-foreground">Paciência e Ritmo</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              ⭐ Regra de Ouro
            </h4>
            <p className="text-foreground/80">
              Respeite o tempo de resposta. O raciocínio pode estar intacto, mas a fala é lenta (<strong className="text-primary">Bradifrenia</strong>).
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">✅ Ação:</h4>
            <div className="bg-accent/50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">⏱️</span>
                <p className="text-foreground/80">
                  Conte mentalmente até <strong className="text-primary">10</strong> após fazer uma pergunta.
                </p>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Não atropele o silêncio.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold text-foreground mb-2">📢 Voz:</h4>
            <p className="text-foreground/80 text-sm">
              Estimule o residente a <strong className="text-primary">"falar alto"</strong>, como se falasse para alguém na outra sala, combatendo a voz baixa (hipofonia).
            </p>
          </div>
        </div>
      </div>

      {/* Additional Parkinson Strategies */}
      <div className="bg-card rounded-xl p-6 border-2 border-secondary/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎯</span>
          <h3 className="text-xl font-bold text-foreground">Estratégias Adicionais para Parkinson</h3>
        </div>
        
        <div className="space-y-4">
          {/* Freezing of Gait */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🧊 Congelamento da Marcha (Freezing)
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Quando o idoso "trava" e não consegue dar o próximo passo:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Comandos rítmicos:</strong> diga "MARCHA!" ou "Esquerda, direita, esquerda..."</li>
              <li>• <strong>Pistas visuais:</strong> coloque fita colorida no chão para ele mirar</li>
              <li>• <strong>Música com ritmo:</strong> marchas militares podem ajudar</li>
              <li>• <strong>Laser pointer:</strong> aponte para onde ele deve pisar</li>
              <li>• <strong>Nunca puxe</strong> - isso piora o congelamento</li>
            </ul>
          </div>

          {/* Voice Exercises */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🗣️ Exercícios de Voz (LSVT LOUD)
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Práticas diárias para manter a voz audível:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Prolongar vogais:</strong> "AAAAAA" por 10 segundos</li>
              <li>• <strong>Contar alto:</strong> 1 a 10 com volume crescente</li>
              <li>• <strong>Ler em voz alta:</strong> jornais, poemas, orações</li>
              <li>• <strong>Cantar:</strong> músicas conhecidas fortalecem a voz</li>
            </ul>
          </div>

          {/* ON/OFF Periods */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              ⚡ Períodos ON e OFF
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              A medicação causa flutuações ao longo do dia:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Período ON:</strong> medicação funcionando - aproveite para atividades e conversas</li>
              <li>• <strong>Período OFF:</strong> medicação perdendo efeito - reduza demandas</li>
              <li>• Registre os horários de ON/OFF para otimizar a rotina</li>
              <li>• Evite conversas importantes no período OFF</li>
            </ul>
          </div>

          {/* Facial Expression */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              😐 Expressão Facial Reduzida (Hipomimia)
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              O rosto pode parecer "sem emoção", mas a pessoa sente tudo:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• <strong>Não interprete como desinteresse</strong> - é sintoma da doença</li>
              <li>• Pergunte diretamente: "Você está gostando?"</li>
              <li>• Exercícios faciais: fazer caretas no espelho</li>
              <li>• Massagem facial pode ajudar a relaxar os músculos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* General Communication Tips */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">📋</span>
          <h3 className="text-xl font-bold text-foreground">Dicas Gerais de Comunicação</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">✅ Faça</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Fale de frente, na altura dos olhos</li>
              <li>• Use frases curtas e diretas</li>
              <li>• Dê tempo para processar e responder</li>
              <li>• Ofereça escolhas limitadas (2 opções)</li>
              <li>• Use linguagem positiva</li>
              <li>• Repita com paciência se necessário</li>
            </ul>
          </div>
          <div className="bg-destructive/5 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive mb-2">❌ Evite</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              <li>• Falar de costas ou de longe</li>
              <li>• Perguntas abertas demais</li>
              <li>• Interromper ou completar frases</li>
              <li>• Infantilizar ou tratar com condescendência</li>
              <li>• Falar sobre a pessoa como se ela não estivesse ali</li>
              <li>• Demonstrar pressa ou impaciência</li>
            </ul>
          </div>
        </div>
      </div>

      <AlertBox type="tip" title="Lembre-se">
        A comunicação eficaz é a base do cuidado. Paciência e empatia transformam interações difíceis em momentos de conexão.
      </AlertBox>
    </div>
  );
};

export default Chapter7Communication;
