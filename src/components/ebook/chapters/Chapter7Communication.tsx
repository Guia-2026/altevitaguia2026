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
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Não demonstre irritação</strong> - para ele, é sempre a primeira vez</li>
              <li>• Use respostas curtas e consistentes</li>
              <li>• Escreva a resposta em um cartão visível</li>
              <li>• Redirecione para uma atividade prazerosa</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE DIÁLOGO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idoso:</span> "Que horas minha filha vem?"</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Ela vem às 15h, dona Maria. Está aqui no cartão, ó."</p>
                <p className="text-foreground/70 italic">(5 minutos depois)</p>
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idoso:</span> "Que horas minha filha vem?"</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Às 15h, dona Maria. Enquanto esperamos, que tal dobrarmos essas toalhas juntas?"</p>
              </div>
            </div>
          </div>

          {/* Non-verbal Communication */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🤝 Comunicação Não-Verbal
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Quando as palavras falham, o corpo comunica:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Contato visual</strong> - fique na altura dos olhos</li>
              <li>• <strong>Toque gentil</strong> - segure a mão, afague o ombro</li>
              <li>• <strong>Sorriso</strong> - expressões faciais transmitem segurança</li>
              <li>• <strong>Gestos</strong> - aponte, demonstre, use mímica</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE INTERAÇÃO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70 italic">(Idoso não responde verbalmente, parece confuso)</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> <span className="italic">(abaixa-se, fica na altura dos olhos, sorri)</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> <span className="italic">(estende a mão com calma)</span> "Vem comigo?"</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> <span className="italic">(aponta para a cadeira)</span> "Sentar aqui?" <span className="italic">(faz gesto de sentar)</span></p>
              </div>
            </div>
          </div>

          {/* Wandering Behavior */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🚶 Comportamento de Fuga
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Quando o idoso quer "ir embora" ou "voltar para casa":
            </p>
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Nunca diga "você já está em casa"</strong> - causa mais angústia</li>
              <li>• Valide: "Você sente saudade de casa, né?"</li>
              <li>• Ofereça conforto físico (cobertor, chá quente)</li>
              <li>• Distraia com fotos antigas ou música familiar</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE DIÁLOGO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idoso:</span> "Preciso ir embora! Minha mãe está me esperando!"</p>
                <p className="text-foreground/70"><span className="font-semibold text-muted-foreground line-through">Errado:</span> <span className="text-destructive/70">"Sua mãe já faleceu, o senhor mora aqui."</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">✓ Certo:</span> "O senhor sente muita falta dela, né? Me conta como ela era."</p>
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idoso:</span> "Ela fazia um bolo de laranja maravilhoso..."</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Que delícia! Vamos tomar um chá quentinho enquanto o senhor me conta mais?"</p>
              </div>
            </div>
          </div>

          {/* Agitation */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              😤 Durante Agitação
            </h4>
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Reduza estímulos</strong> - desligue TV, diminua luzes</li>
              <li>• Fale baixo e devagar</li>
              <li>• Não toque sem avisar antes</li>
              <li>• Ofereça escolhas simples: "Quer sentar aqui ou ali?"</li>
              <li>• Se necessário, saia e volte em 5 minutos</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE DIÁLOGO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idoso:</span> <span className="italic">(agitado, andando de um lado pro outro)</span> "Cadê minhas coisas?! Vocês pegaram tudo!"</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> <span className="italic">(voz baixa, calma)</span> "Seu José, estou aqui para ajudar."</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Vou desligar essa TV. Muito barulho, né?"</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "O senhor quer sentar nessa poltrona ou prefere a cadeira perto da janela?"</p>
                <p className="text-foreground/70 italic">(Se continuar agitado: "Vou pegar uma água, já volto." - sai por 5 min)</p>
              </div>
            </div>
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
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Comandos rítmicos:</strong> diga "MARCHA!" ou "Esquerda, direita, esquerda..."</li>
              <li>• <strong>Pistas visuais:</strong> coloque fita colorida no chão para ele mirar</li>
              <li>• <strong>Música com ritmo:</strong> marchas militares podem ajudar</li>
              <li>• <strong>Laser pointer:</strong> aponte para onde ele deve pisar</li>
              <li>• <strong>Nunca puxe</strong> - isso piora o congelamento</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE INTERAÇÃO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70 italic">(Seu Carlos para no meio do corredor, pés grudados no chão)</p>
                <p className="text-foreground/70"><span className="font-semibold text-muted-foreground line-through">Errado:</span> <span className="text-destructive/70">(puxar pelo braço) "Vamos, seu Carlos!"</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">✓ Cuidador:</span> "Seu Carlos, olhe para a fita amarela no chão."</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Agora, comigo: MARCHA! Esquerda... direita... esquerda..."</p>
                <p className="text-foreground/70 italic">(bate palmas no ritmo para ajudar)</p>
              </div>
            </div>
          </div>

          {/* Voice Exercises */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🗣️ Exercícios de Voz (LSVT LOUD)
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              Práticas diárias para manter a voz audível:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Prolongar vogais:</strong> "AAAAAA" por 10 segundos</li>
              <li>• <strong>Contar alto:</strong> 1 a 10 com volume crescente</li>
              <li>• <strong>Ler em voz alta:</strong> jornais, poemas, orações</li>
              <li>• <strong>Cantar:</strong> músicas conhecidas fortalecem a voz</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE EXERCÍCIO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Dona Rosa, vamos fazer nosso exercício de voz? Junto comigo!"</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "AAAAAAAAAA..." <span className="italic">(prolonga por 10 segundos)</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Agora a senhora! Bem alto, como se estivesse chamando alguém na cozinha!"</p>
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idosa:</span> <span className="italic">(voz baixa)</span> "aaaa..."</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Mais forte! Imagina que eu estou lá no quintal! AAAA!"</p>
              </div>
            </div>
          </div>

          {/* ON/OFF Periods */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              ⚡ Períodos ON e OFF
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              A medicação causa flutuações ao longo do dia:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Período ON:</strong> medicação funcionando - aproveite para atividades e conversas</li>
              <li>• <strong>Período OFF:</strong> medicação perdendo efeito - reduza demandas</li>
              <li>• Registre os horários de ON/OFF para otimizar a rotina</li>
              <li>• Evite conversas importantes no período OFF</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE DIÁLOGO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70 italic">(Período OFF - idoso está rígido, fala muito baixo)</p>
                <p className="text-foreground/70"><span className="font-semibold text-muted-foreground line-through">Errado:</span> <span className="text-destructive/70">"Seu João, precisamos conversar sobre as contas da casa."</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">✓ Cuidador:</span> "Seu João, vejo que está num momento difícil. Vou deixar o senhor descansar."</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Daqui a pouco, quando estiver melhor, conversamos com calma, tá?"</p>
                <p className="text-foreground/70 italic">(2 horas depois, período ON)</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Seu João, o senhor está se sentindo melhor? Agora podemos conversar sobre o passeio de amanhã!"</p>
              </div>
            </div>
          </div>

          {/* Facial Expression */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              😐 Expressão Facial Reduzida (Hipomimia)
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              O rosto pode parecer "sem emoção", mas a pessoa sente tudo:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Não interprete como desinteresse</strong> - é sintoma da doença</li>
              <li>• Pergunte diretamente: "Você está gostando?"</li>
              <li>• Exercícios faciais: fazer caretas no espelho</li>
              <li>• Massagem facial pode ajudar a relaxar os músculos</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE DIÁLOGO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70 italic">(Cuidador mostra fotos dos netos, idoso olha sem expressão)</p>
                <p className="text-foreground/70"><span className="font-semibold text-muted-foreground line-through">Errado:</span> <span className="italic text-destructive/70">(pensando: "Ele não se importa...")</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">✓ Cuidador:</span> "Seu Antônio, o senhor gostou de ver as fotos do Pedro?"</p>
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idoso:</span> <span className="italic">(voz baixa, rosto neutro)</span> "Gostei muito... ele cresceu..."</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Que bom! Quer que eu imprima essa foto pra colocar no seu quarto?"</p>
              </div>
            </div>
          </div>

          {/* Slow Speech */}
          <div className="bg-accent/30 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🐢 Fala Lenta (Bradifrenia)
            </h4>
            <p className="text-sm text-foreground/80 mb-2">
              O tempo de resposta é mais longo, mas a inteligência está preservada:
            </p>
            <ul className="text-sm text-foreground/70 space-y-1 mb-3">
              <li>• <strong>Aguarde em silêncio</strong> - conte até 10 mentalmente</li>
              <li>• Não complete as frases por ele</li>
              <li>• Mantenha contato visual enquanto espera</li>
              <li>• Demonstre que está ouvindo com atenção</li>
            </ul>
            {/* Dialogue Example */}
            <div className="bg-card p-3 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground mb-2">💬 EXEMPLO DE DIÁLOGO:</p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Dona Lúcia, o que a senhora quer de lanche?"</p>
                <p className="text-foreground/70 italic">(silêncio de 8 segundos)</p>
                <p className="text-foreground/70"><span className="font-semibold text-muted-foreground line-through">Errado:</span> <span className="text-destructive/70">"Quer pão? Ou biscoito? Fruta? Vou trazer pão mesmo."</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">✓ Cuidador:</span> <span className="italic">(aguarda em silêncio, sorri, mantém contato visual)</span></p>
                <p className="text-foreground/70"><span className="font-semibold text-destructive">Idosa:</span> <span className="italic">(após 12 segundos)</span> "Eu... quero... uma... maçã."</p>
                <p className="text-foreground/70"><span className="font-semibold text-primary">Cuidador:</span> "Ótima escolha! Já trago a maçã, dona Lúcia."</p>
              </div>
            </div>
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
