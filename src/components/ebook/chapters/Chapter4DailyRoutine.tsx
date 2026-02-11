import { CheckCircle, Clock, Sun, Moon, Droplets, Sparkles } from "lucide-react";
import AlertBox from "../AlertBox";
import dailyRoutineCare from "@/assets/daily-routine-care.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Chapter4DailyRoutine = () => {
  return (
    <div className="space-y-8">
      {/* Daily Schedule Overview */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/30 rounded-xl p-6 border border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold text-primary">Estrutura do Dia</h3>
        </div>
        <p className="text-foreground/80 mb-4">
          Uma rotina previsível reduz ansiedade e comportamentos desafiadores. O segredo é <strong className="text-primary">consistência sem rigidez</strong>.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="h-5 w-5 text-amber-500" />
              <h5 className="font-semibold text-foreground">Manhã (6h-12h)</h5>
            </div>
            <ul className="text-xs text-foreground/80 space-y-1">
              <li>• Despertar gradual com luz natural</li>
              <li>• Higiene pessoal e vestuário</li>
              <li>• Café da manhã nutritivo</li>
              <li>• Medicação (se prescrita)</li>
              <li>• Atividade estimulante leve</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">☀️</span>
              <h5 className="font-semibold text-foreground">Tarde (12h-18h)</h5>
            </div>
            <ul className="text-xs text-foreground/80 space-y-1">
              <li>• Almoço principal do dia</li>
              <li>• Descanso/cochilo (máx. 30min)</li>
              <li>• Atividades sociais ou terapia</li>
              <li>• Lanche leve às 15h</li>
              <li>• Exercícios suaves</li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="h-5 w-5 text-indigo-400" />
              <h5 className="font-semibold text-foreground">Noite (18h-22h)</h5>
            </div>
            <ul className="text-xs text-foreground/80 space-y-1">
              <li>• Jantar leve antes das 19h</li>
              <li>• Atividades calmas (música, TV)</li>
              <li>• Reduzir iluminação gradualmente</li>
              <li>• Higiene noturna</li>
              <li>• Ritual de sono consistente</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hygiene & Clothing Section */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🚿</span>
          <h3 className="text-xl font-bold text-primary">Higiene e Vestuário</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-lg">👕</span> Autonomia
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Substitua botões pequenos e zíperes por <strong className="text-primary">velcro ou fechos magnéticos</strong>.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-lg">🧠</span> Escolha sem Estresse
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                No Alzheimer, ofereça apenas <strong className="text-primary">duas opções de roupa</strong> para evitar ansiedade na decisão.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
              <span className="text-lg">🛁</span> Banho Seguro
            </h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Utilize cadeiras de banho</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Dispensadores de sabão fixos na parede</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Evita que o sabonete caia e cause acidentes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* NEW: Complete Hygiene Accordion */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Droplets className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-bold text-primary">Higiene Completa</h3>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="bathing">
            <AccordionTrigger className="text-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-lg">🚿</span> Banho Passo a Passo
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 space-y-3">
              <div className="bg-accent/50 p-3 rounded-lg">
                <h5 className="font-semibold text-foreground text-sm mb-2">Preparação</h5>
                <ul className="text-sm space-y-1">
                  <li>• Temperatura do ambiente: 24-26°C (evitar frio)</li>
                  <li>• Água: testar com cotovelo (máx. 38°C)</li>
                  <li>• Toalhas e roupas limpas já separadas</li>
                  <li>• Produtos ao alcance (shampoo, sabonete)</li>
                </ul>
              </div>
              <div className="bg-accent/50 p-3 rounded-lg">
                <h5 className="font-semibold text-foreground text-sm mb-2">Durante o Banho</h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Parkinson:</strong> Sempre com cadeira de banho e barras</li>
                  <li>• <strong>Alzheimer:</strong> Manter contato visual, explicar cada passo</li>
                  <li>• Lavar de cima para baixo, deixando partes íntimas por último</li>
                  <li>• Verificar dobras de pele (axilas, virilha, sob mamas)</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <p className="text-sm"><strong className="text-primary">Frequência:</strong> Banho completo 2-3x/semana. Higiene íntima diária.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="oral">
            <AccordionTrigger className="text-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-lg">🦷</span> Higiene Oral
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 space-y-3">
              <p className="text-sm">Essencial para prevenir pneumonia aspirativa e infecções.</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-accent/50 p-3 rounded-lg">
                  <h5 className="font-semibold text-foreground text-sm mb-2">Com Dentes Naturais</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Escova macia, cabo engrossado</li>
                    <li>• Escovar 3x/dia: manhã, após almoço, noite</li>
                    <li>• Usar pouca pasta (risco de engolir)</li>
                    <li>• Fio dental com suporte (passa-fio)</li>
                  </ul>
                </div>
                <div className="bg-accent/50 p-3 rounded-lg">
                  <h5 className="font-semibold text-foreground text-sm mb-2">Com Prótese Dentária</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Remover à noite, deixar em água</li>
                    <li>• Escovar prótese com escova própria</li>
                    <li>• Limpar gengivas e língua com gaze</li>
                    <li>• Verificar ajuste (feridas = dentista)</li>
                  </ul>
                </div>
              </div>
              <AlertBox type="warning" title="Atenção Parkinson">
                Tremores dificultam escovação. Use escova elétrica ou auxilie segurando a mão do paciente.
              </AlertBox>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="skin">
            <AccordionTrigger className="text-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-lg">✋</span> Cuidados com a Pele
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 space-y-3">
              <p className="text-sm">Pele idosa é frágil. Hidratação e inspeção diária previnem lesões graves.</p>
              <div className="space-y-3">
                <div className="bg-accent/50 p-3 rounded-lg">
                  <h5 className="font-semibold text-foreground text-sm mb-2">Hidratação</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Aplicar creme hidratante após o banho (pele úmida)</li>
                    <li>• Evitar entre os dedos (umidade = fungos)</li>
                    <li>• Áreas prioritárias: cotovelos, joelhos, calcanhares</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 p-3 rounded-lg border border-destructive/30">
                  <h5 className="font-semibold text-destructive text-sm mb-2">⚠️ Sinais de Alerta (Escaras)</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Vermelhidão que não clareia ao pressionar</li>
                    <li>• Áreas de risco: sacro, calcanhares, quadril, cotovelos</li>
                    <li>• Mudar posição a cada 2h se acamado</li>
                    <li>• Usar colchão caixa de ovo ou pneumático</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="nails">
            <AccordionTrigger className="text-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-lg">💅</span> Unhas e Cabelos
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-accent/50 p-3 rounded-lg">
                  <h5 className="font-semibold text-foreground text-sm mb-2">Unhas</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Cortar após o banho (mais macias)</li>
                    <li>• Mãos: corte arredondado</li>
                    <li>• Pés: corte RETO (evita unha encravada)</li>
                    <li>• <strong className="text-primary">Diabéticos:</strong> apenas podólogo</li>
                  </ul>
                </div>
                <div className="bg-accent/50 p-3 rounded-lg">
                  <h5 className="font-semibold text-foreground text-sm mb-2">Cabelos</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Lavar 2-3x/semana</li>
                    <li>• Secar bem (evitar friagem)</li>
                    <li>• Pentear gentilmente da ponta à raiz</li>
                    <li>• Cortes curtos facilitam manutenção</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* NEW: Toileting Section */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🚽</span>
          <h3 className="text-xl font-bold text-primary">Uso do Banheiro e Continência</h3>
        </div>
        
        <p className="text-foreground/80 mb-4">
          Manter a continência é possível com estratégias adequadas. Quando não for, preserve sempre a <strong className="text-primary">dignidade</strong>.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">Prevenção de Incontinência</h5>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Levar ao banheiro a cada 2-3 horas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Após refeições (reflexo gastro-cólico)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Antes de dormir e ao acordar</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Usar roupas fáceis de remover</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <h5 className="font-semibold text-foreground mb-2">Se Usar Fralda Geriátrica</h5>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Trocar imediatamente quando molhada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Higienizar e secar bem a cada troca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Aplicar creme de barreira (óxido de zinco)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Nunca chamar de "fralda" na frente do paciente</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg">
          <p className="text-sm text-foreground/80">
            <strong className="text-primary">Alzheimer:</strong> Pode esquecer onde é o banheiro. Use placas com imagens. 
            <strong className="text-primary ml-2">Parkinson:</strong> Urgência urinária é comum. Mantenha caminho livre e iluminado.
          </p>
        </div>
      </div>

      {/* Feeding Section */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🍽️</span>
          <h3 className="text-xl font-bold text-primary">Alimentação e Disfagia</h3>
        </div>

        <div className="overflow-hidden rounded-xl border border-border mb-6">
          <img 
            src={dailyRoutineCare} 
            alt="Cuidador auxiliando idoso durante refeição com talheres adaptados" 
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
        
        <AlertBox type="warning" title="O Risco">
          A dificuldade de engolir (disfagia) é comum em ambas as condições.
        </AlertBox>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-accent/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🥄</div>
            <h5 className="font-semibold text-foreground text-sm mb-1">Adaptação</h5>
            <p className="text-xs text-muted-foreground">
              Talheres com cabos engrossados (para tremor) e copos com recorte nasal
            </p>
          </div>
          
          <div className="bg-accent/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🪑</div>
            <h5 className="font-semibold text-foreground text-sm mb-1">Postura</h5>
            <p className="text-xs text-muted-foreground">
              Sentado a 90° durante e 30 minutos após a refeição
            </p>
          </div>
          
          <div className="bg-accent/50 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🔇</div>
            <h5 className="font-semibold text-foreground text-sm mb-1">Ambiente</h5>
            <p className="text-xs text-muted-foreground">
              Reduza distrações (TV desligada) para foco na refeição
            </p>
          </div>
        </div>
      </div>

      {/* NEW: Meal Consistency Guide */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/30">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-primary">Guia de Consistências (Disfagia)</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-foreground font-semibold">Nível</th>
                <th className="text-left py-2 px-3 text-foreground font-semibold">Consistência</th>
                <th className="text-left py-2 px-3 text-foreground font-semibold">Exemplos</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="bg-green-500/20 text-green-700 px-2 py-0.5 rounded text-xs font-medium">Leve</span></td>
                <td className="py-2 px-3">Normal com cuidado</td>
                <td className="py-2 px-3">Alimentos macios, bem cozidos</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 px-3"><span className="bg-amber-500/20 text-amber-700 px-2 py-0.5 rounded text-xs font-medium">Moderada</span></td>
                <td className="py-2 px-3">Pastosa</td>
                <td className="py-2 px-3">Purês, mingaus, vitaminas grossas</td>
              </tr>
              <tr>
                <td className="py-2 px-3"><span className="bg-red-500/20 text-red-700 px-2 py-0.5 rounded text-xs font-medium">Grave</span></td>
                <td className="py-2 px-3">Líquido espessado</td>
                <td className="py-2 px-3">Usar espessante (prescrição fonoaudiológica)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 bg-destructive/10 p-3 rounded-lg border border-destructive/30">
          <p className="text-xs text-foreground/80">
            <strong className="text-destructive">⚠️ Nunca ofereça:</strong> Alimentos de dupla consistência (sopa com pedaços), muito secos (farofa), ou que se esfarelam (biscoito).
          </p>
        </div>
      </div>

      {/* NEW: Sleep Section */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Moon className="h-6 w-6 text-indigo-400" />
          <h3 className="text-xl font-bold text-primary">Sono e Descanso</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-indigo-500/10 p-4 rounded-lg border border-indigo-500/20">
            <h5 className="font-semibold text-foreground mb-2">Ritual de Sono</h5>
            <ol className="text-sm text-foreground/80 space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-indigo-500/20 text-indigo-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <span>Diminuir luz 2h antes de dormir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-indigo-500/20 text-indigo-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <span>Evitar líquidos após as 19h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-indigo-500/20 text-indigo-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <span>Banho morno relaxante</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-indigo-500/20 text-indigo-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <span>Música calma ou oração</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-indigo-500/20 text-indigo-700 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                <span>Temperatura 22-24°C</span>
              </li>
            </ol>
          </div>
          
          <div className="space-y-3">
            <div className="bg-muted p-3 rounded-lg">
              <h5 className="font-semibold text-foreground text-sm mb-1">🧠 Alzheimer: Sundowning</h5>
              <p className="text-xs text-foreground/80">
                Agitação ao entardecer é comum. Mantenha atividades calmas à tarde e evite cochilos longos.
              </p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <h5 className="font-semibold text-foreground text-sm mb-1">🤲 Parkinson: Movimento Noturno</h5>
              <p className="text-xs text-foreground/80">
                Dificuldade de virar na cama. Use lençóis de cetim (deslizam melhor) e grades de proteção.
              </p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <h5 className="font-semibold text-foreground text-sm mb-1">⏰ Cochilo Diurno</h5>
              <p className="text-xs text-foreground/80">
                Máximo 30 minutos, antes das 15h. Cochilos longos prejudicam o sono noturno.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AlertBox type="tip" title="Dica Prática">
        Separe conjuntos de roupas completos em cabides e organize talheres adaptados em local de fácil acesso. Pequenas mudanças trazem grandes resultados. Registre os horários das atividades em um caderno para identificar padrões.
      </AlertBox>
    </div>
  );
};

export default Chapter4DailyRoutine;
