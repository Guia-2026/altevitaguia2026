import { AlertTriangle, XCircle, CheckCircle, Phone, Thermometer, Droplets, Heart, Shield, Clock, Eye, Volume2, Hand, Footprints } from "lucide-react";
import AlertBox from "../AlertBox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Chapter8Emergencies = () => {
  return (
    <div className="space-y-8">
      {/* Emergency Contacts Header */}
      <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <Phone className="h-6 w-6 text-destructive" />
          <h3 className="text-lg font-bold text-destructive">Números de Emergência</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-card rounded-lg p-2">
            <p className="text-2xl font-bold text-destructive">192</p>
            <p className="text-xs text-muted-foreground">SAMU</p>
          </div>
          <div className="bg-card rounded-lg p-2">
            <p className="text-2xl font-bold text-destructive">193</p>
            <p className="text-xs text-muted-foreground">Bombeiros</p>
          </div>
          <div className="bg-card rounded-lg p-2">
            <p className="text-2xl font-bold text-destructive">190</p>
            <p className="text-xs text-muted-foreground">Polícia</p>
          </div>
        </div>
      </div>

      {/* Risk A - Wandering (Alzheimer) - Expanded */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-destructive/30">
        <div className="bg-destructive/10 p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Risco A: Fuga e Deambulação</h3>
              <p className="text-sm text-muted-foreground">Alzheimer</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🛡️ Prevenção
            </h4>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Roupas com etiquetas termocolantes (Nome/Telefone)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>GPS vestível (relógio ou pingente com rastreamento em tempo real)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Foto atualizada sempre disponível no celular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Cadastro no programa "Busca Ativa" da polícia local</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🏠 Ambiente Seguro
            </h4>
            <ul className="space-y-2 text-foreground/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Camufle portas de saída (pinte da cor da parede)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Coloque espelhos nas portas (confunde a percepção)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Sensores de abertura com alerta sonoro no celular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Fechaduras altas ou escondidas (fora do campo visual)</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent/50 p-3 rounded-lg">
            <h4 className="font-semibold text-foreground text-sm mb-2">🌅 Síndrome do Pôr do Sol (Sundowning)</h4>
            <p className="text-sm text-foreground/80 mb-2">
              Agitação que aumenta ao entardecer. Estratégias:
            </p>
            <ul className="space-y-1 text-foreground/80 text-xs">
              <li>• Aumente a luz artificial 1h antes do pôr do sol</li>
              <li>• Ofereça atividade leve (dobrar toalhas, organizar objetos)</li>
              <li>• Verifique fome, sede ou necessidade de ir ao banheiro</li>
              <li>• Música calma dos anos de juventude do residente</li>
            </ul>
          </div>

          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive text-sm mb-2">🚨 Se a pessoa sair:</h4>
            <ol className="space-y-1 text-foreground/80 text-xs list-decimal list-inside">
              <li>Verifique locais familiares primeiro (antiga casa, trabalho)</li>
              <li>Peça ajuda aos vizinhos imediatamente</li>
              <li>Ligue 190 após 15 minutos de busca sem sucesso</li>
              <li>Tenha pronta: foto recente, descrição de roupas, condição médica</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Risk B - Freezing (Parkinson) - Expanded */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-destructive/30">
        <div className="bg-destructive/10 p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Risco B: Congelamento (Freezing)</h3>
              <p className="text-sm text-muted-foreground">Parkinson</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">O que é:</h4>
            <p className="text-foreground/80 text-sm">
              Os pés "colam" no chão subitamente, criando <strong className="text-primary">risco alto de queda</strong>. Comum em portas, corredores e ao iniciar movimentos.
            </p>
          </div>
          
          <div className="bg-destructive/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="h-5 w-5 text-destructive" />
              <h4 className="font-semibold text-destructive">O que NÃO fazer:</h4>
            </div>
            <ul className="text-foreground/80 text-sm space-y-1">
              <li>• Nunca puxe ou empurre o residente</li>
              <li>• Não demonstre pressa ou irritação</li>
              <li>• Não tente "carregar" a pessoa</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-primary">Técnicas para Destravar:</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <Volume2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Pista Auditiva</p>
                  <p className="text-foreground/80 text-xs">Diga firme: <strong className="text-primary">"MARCHA!"</strong> ou conte ritmicamente "1, 2, 3, 4"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Pista Visual</p>
                  <p className="text-foreground/80 text-xs">Coloque seu pé ou um objeto na frente: <strong className="text-primary">"Passe por cima"</strong></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <Footprints className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Laser de Bengala (2026)</p>
                  <p className="text-foreground/80 text-xs">Bengalas com laser projetam linha no chão. O cérebro "pula" o obstáculo visual.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <Hand className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Pista Tátil</p>
                  <p className="text-foreground/80 text-xs">Toque suave no quadril pode ajudar a "destravar" o movimento.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/50 p-3 rounded-lg">
            <h4 className="font-semibold text-foreground text-sm mb-1">💡 Dica 2026:</h4>
            <p className="text-sm text-foreground/80">
              Apps de metrônomo no celular ou smartwatch podem fornecer ritmo constante durante caminhadas.
            </p>
          </div>
        </div>
      </div>

      {/* Risk C - Falls */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-destructive/30">
        <div className="bg-destructive/10 p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Risco C: Quedas</h3>
              <p className="text-sm text-muted-foreground">Alzheimer e Parkinson</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <h4 className="font-semibold text-primary text-sm mb-2">✅ Prevenção</h4>
              <ul className="space-y-1 text-foreground/80 text-xs">
                <li>• Remova tapetes soltos e fios pelo chão</li>
                <li>• Instale barras de apoio em banheiro e corredores</li>
                <li>• Iluminação noturna automática (sensores de movimento)</li>
                <li>• Sapatos antiderrapantes (evite chinelos)</li>
                <li>• Mantenha óculos e aparelhos auditivos sempre em uso</li>
              </ul>
            </div>
            
            <div className="bg-destructive/10 p-3 rounded-lg">
              <h4 className="font-semibold text-destructive text-sm mb-2">🚨 Se houver queda:</h4>
              <ol className="space-y-1 text-foreground/80 text-xs list-decimal list-inside">
                <li><strong>Não levante imediatamente</strong> – verifique dor e consciência</li>
                <li>Pergunte: "Onde dói? Consegue mexer braços e pernas?"</li>
                <li>Se suspeitar fratura: <strong>NÃO MOVA</strong>, ligue 192</li>
                <li>Se conseguir levantar: use cadeira como apoio intermediário</li>
                <li>Observe nas 24h seguintes: confusão, vômito, pupilas diferentes</li>
              </ol>
            </div>
          </div>

          <AlertBox type="warning" title="Sinais de Alerta Pós-Queda">
            Dor de cabeça intensa, vômitos, sonolência excessiva, confusão ou pupilas de tamanhos diferentes podem indicar trauma craniano. Procure atendimento imediato.
          </AlertBox>
        </div>
      </div>

      {/* Risk D - Choking */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-destructive/30">
        <div className="bg-destructive/10 p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Risco D: Engasgo e Aspiração</h3>
              <p className="text-sm text-muted-foreground">Comum em ambas condições</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <h4 className="font-semibold text-primary text-sm mb-2">🍽️ Prevenção</h4>
            <ul className="space-y-1 text-foreground/80 text-xs">
              <li>• Posição sentada a 90° durante e 30min após refeições</li>
              <li>• Alimentos em consistência adequada (pastoso se necessário)</li>
              <li>• Porções pequenas, sem pressa</li>
              <li>• Evite conversar durante a mastigação</li>
              <li>• Espessantes para líquidos se houver disfagia</li>
            </ul>
          </div>

          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold text-destructive text-sm mb-2">🚨 Manobra de Heimlich (Engasgo Total):</h4>
            <ol className="space-y-2 text-foreground/80 text-xs list-decimal list-inside">
              <li>Posicione-se atrás da pessoa</li>
              <li>Feche o punho e posicione acima do umbigo</li>
              <li>Com a outra mão, envolva o punho</li>
              <li>Faça compressões rápidas para dentro e para cima</li>
              <li>Repita até desobstruir ou pessoa ficar inconsciente</li>
              <li><strong>Se inconsciente: ligue 192 e inicie RCP</strong></li>
            </ol>
          </div>

          <div className="bg-accent/50 p-3 rounded-lg">
            <h4 className="font-semibold text-foreground text-sm mb-1">⚠️ Sinais de Aspiração Silenciosa:</h4>
            <p className="text-sm text-foreground/80">
              Tosse durante refeições, voz "molhada" após engolir, febre sem causa aparente, pneumonias de repetição.
            </p>
          </div>
        </div>
      </div>

      {/* Behavioral Crisis */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/30">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Crises Comportamentais</h3>
              <p className="text-sm text-muted-foreground">Agitação, Agressividade e Alucinações</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="agitation">
              <AccordionTrigger className="text-sm font-semibold">
                😰 Agitação Severa
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <h5 className="font-medium text-foreground text-xs mb-2">✅ O que fazer:</h5>
                    <ul className="space-y-1 text-foreground/80 text-xs">
                      <li>• Mantenha voz calma e baixa</li>
                      <li>• Reduza estímulos (desligue TV, diminua luz)</li>
                      <li>• Ofereça água ou lanche leve</li>
                      <li>• Proponha atividade simples e repetitiva</li>
                      <li>• Não confronte nem corrija</li>
                    </ul>
                  </div>
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <h5 className="font-medium text-destructive text-xs mb-2">🚨 Quando buscar ajuda:</h5>
                    <p className="text-foreground/80 text-xs">
                      Se a agitação durar mais de 30 minutos, houver risco de autolesão ou lesão a terceiros.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="hallucinations">
              <AccordionTrigger className="text-sm font-semibold">
                👁️ Alucinações e Delírios
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <p className="text-foreground/80 text-xs">
                    <strong>Parkinson:</strong> Alucinações visuais são comuns (ver pessoas, animais).
                    <br /><strong>Alzheimer:</strong> Delírios de perseguição ou roubo são frequentes.
                  </p>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <h5 className="font-medium text-foreground text-xs mb-2">✅ Abordagem:</h5>
                    <ul className="space-y-1 text-foreground/80 text-xs">
                      <li>• Não negue nem confirme a visão</li>
                      <li>• Valide o sentimento: "Entendo que está assustado"</li>
                      <li>• Redirecione suavemente a atenção</li>
                      <li>• Verifique: pode ser infecção urinária (causa confusão)</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Warning Signs */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-secondary/30">
        <div className="bg-secondary/10 p-4">
          <div className="flex items-center gap-3">
            <Thermometer className="h-6 w-6 text-secondary" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Sinais de Alerta Clínico</h3>
              <p className="text-sm text-muted-foreground">Reconheça emergências silenciosas</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid gap-3">
            <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
              <Thermometer className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground text-sm">Infecção</h5>
                <p className="text-foreground/80 text-xs">
                  Febre, confusão súbita, urina escura/com odor forte, tosse com catarro, vermelhidão em feridas.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
              <Droplets className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground text-sm">Desidratação</h5>
                <p className="text-foreground/80 text-xs">
                  Boca seca, urina escassa e escura, confusão, pele sem elasticidade (teste: belisque e veja se demora a voltar).
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
              <Heart className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground text-sm">Emergência Cardiovascular</h5>
                <p className="text-foreground/80 text-xs">
                  Dor no peito, falta de ar súbita, dormência em um lado do corpo, fala arrastada, confusão repentina. <strong className="text-destructive">Ligue 192 imediatamente.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Kit */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/30">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <div>
              <h3 className="text-lg font-bold text-foreground">Kit de Emergência</h3>
              <p className="text-sm text-muted-foreground">Mantenha sempre acessível</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground text-xs">📋 Documentos</h4>
              <ul className="space-y-1 text-foreground/80 text-xs">
                <li>• Lista de medicamentos atualizada</li>
                <li>• Contatos de emergência</li>
                <li>• Cartão do plano de saúde</li>
                <li>• Documento de identidade (cópia)</li>
                <li>• Últimos exames</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground text-xs">🧰 Materiais</h4>
              <ul className="space-y-1 text-foreground/80 text-xs">
                <li>• Termômetro digital</li>
                <li>• Medidor de pressão</li>
                <li>• Oxímetro de pulso</li>
                <li>• Lanterna com pilhas</li>
                <li>• Medicamentos de reserva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Protocol */}
      <div className="bg-card rounded-xl p-5 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Protocolo de Comunicação Médica</h3>
        </div>
        <p className="text-foreground/80 text-sm mb-3">
          Ao ligar para emergência ou médico, use o método <strong className="text-primary">SBAR</strong>:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0">S</span>
            <div>
              <p className="font-medium text-foreground text-sm">Situação</p>
              <p className="text-foreground/80 text-xs">"Meu pai de 78 anos caiu no banheiro há 10 minutos"</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0">B</span>
            <div>
              <p className="font-medium text-foreground text-sm">Background (Histórico)</p>
              <p className="text-foreground/80 text-xs">"Tem Parkinson há 5 anos, usa Levodopa"</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0">A</span>
            <div>
              <p className="font-medium text-foreground text-sm">Avaliação</p>
              <p className="text-foreground/80 text-xs">"Está consciente mas com dor no quadril, não consegue levantar"</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-primary text-primary-foreground w-6 h-6 rounded flex items-center justify-center text-xs font-bold flex-shrink-0">R</span>
            <div>
              <p className="font-medium text-foreground text-sm">Recomendação</p>
              <p className="text-foreground/80 text-xs">"Preciso de orientação se devo movê-lo ou aguardar socorro"</p>
            </div>
          </div>
        </div>
      </div>

      <AlertBox type="tip" title="Dica Final">
        Mantenha este capítulo impresso e fixado em local visível (cozinha ou corredor). Em emergências, o estresse dificulta lembrar procedimentos.
      </AlertBox>
    </div>
  );
};

export default Chapter8Emergencies;
