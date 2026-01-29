import { Wifi, Home, Lightbulb, Mic, CheckCircle, Shield, Bell, Thermometer, MapPin, Phone, Lock, Eye } from "lucide-react";
import AlertBox from "../AlertBox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Chapter3SmartHome = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 text-primary">
        <Wifi className="h-6 w-6" />
        <Home className="h-6 w-6" />
        <p className="text-lg font-medium">A segurança em 2026 é proativa e menos invasiva.</p>
      </div>

      {/* Smart Technologies */}
      <div className="grid gap-4">
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-xl">📡</span>
            </div>
            <h4 className="font-semibold text-foreground text-lg">Sensores de Queda e Presença</h4>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            Dispositivos discretos no rodapé mapeiam padrões. Se o residente cair ou não retornar do banheiro após 15 minutos, um <strong className="text-primary">alerta é enviado ao celular do cuidador</strong>.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg">Iluminação Circadiana</h4>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Lâmpadas inteligentes ajustam a luz automaticamente:
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Branca pela manhã</strong> – estimula atividade</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Âmbar ao entardecer</strong> – promove calma</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">
            Ajuda a combater a "Síndrome do Pôr do Sol" no Alzheimer.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mic className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg">Assistentes de Voz (Smart Speakers)</h4>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-3">
            Essenciais para Parkinson (dificuldade motora fina). O residente comanda:
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">"Ligar luz"</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">"Que horas são?"</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Configure lembretes para hidratação sem usar interruptores.
          </p>
        </div>
      </div>

      {/* NEW: Additional Smart Technologies */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/30 rounded-xl p-6 border border-primary/20">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Tecnologias Complementares 2026
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/80 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-foreground">Botão de Emergência</h5>
            </div>
            <p className="text-sm text-foreground/80">
              Pendentes ou pulseiras com GPS integrado. Ao pressionar, envia localização exata para até 5 contatos.
            </p>
          </div>
          
          <div className="bg-card/80 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Thermometer className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-foreground">Sensor de Temperatura</h5>
            </div>
            <p className="text-sm text-foreground/80">
              Monitora ambiente e alerta se temperatura ficar abaixo de 18°C ou acima de 28°C (risco para idosos).
            </p>
          </div>
          
          <div className="bg-card/80 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-foreground">Rastreador GPS</h5>
            </div>
            <p className="text-sm text-foreground/80">
              <strong className="text-primary">Essencial para Alzheimer</strong>: dispositivos discretos em sapatos ou cintos para localizar pacientes com tendência a perambulação.
            </p>
          </div>
          
          <div className="bg-card/80 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-foreground">Fechaduras Inteligentes</h5>
            </div>
            <p className="text-sm text-foreground/80">
              Abrem com código ou biometria. Evitam que o paciente saia sozinho à noite (configurar horários de bloqueio).
            </p>
          </div>
        </div>
      </div>

      {/* NEW: Low-Tech Alternatives */}
      <div className="bg-muted rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          💡 Alternativas Acessíveis (Baixo Custo)
        </h3>
        <p className="text-foreground/80 mb-4">
          Nem toda casa precisa de alta tecnologia. Soluções simples também salvam vidas:
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-card rounded-lg p-3">
            <span className="text-lg">🔔</span>
            <div>
              <h5 className="font-semibold text-foreground text-sm">Sininho na Porta</h5>
              <p className="text-xs text-foreground/80">Alerta sonoro quando o paciente abre portas externas.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-card rounded-lg p-3">
            <span className="text-lg">🌙</span>
            <div>
              <h5 className="font-semibold text-foreground text-sm">Luz de LED com Sensor</h5>
              <p className="text-xs text-foreground/80">Luminárias de tomada que acendem ao detectar movimento (R$20-40).</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-card rounded-lg p-3">
            <span className="text-lg">📱</span>
            <div>
              <h5 className="font-semibold text-foreground text-sm">Celular Simplificado</h5>
              <p className="text-xs text-foreground/80">Configurar botão de emergência (SOS) que liga automaticamente para cuidador.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-card rounded-lg p-3">
            <span className="text-lg">🪞</span>
            <div>
              <h5 className="font-semibold text-foreground text-sm">Espelhos Estratégicos</h5>
              <p className="text-xs text-foreground/80">Posicionar espelhos para o cuidador ver o paciente de outros cômodos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Room-by-Room Safety Accordion */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Eye className="h-5 w-5" />
          Segurança por Cômodo
        </h3>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="kitchen">
            <AccordionTrigger className="text-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-lg">🍳</span> Cozinha
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 space-y-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Fogão:</strong> Prefira indução (não esquenta a superfície). Se gás, instale detector de vazamento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Facas e objetos cortantes:</strong> Guarde em gavetas com trava magnética.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Produtos de limpeza:</strong> Tranque em armário separado (risco de ingestão em Alzheimer).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Água quente:</strong> Configure aquecedor para máx. 45°C para evitar queimaduras.</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="living">
            <AccordionTrigger className="text-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-lg">🛋️</span> Sala de Estar
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 space-y-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Móveis:</strong> Prefira cantos arredondados. Instale protetores de quina.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Sofá:</strong> Altura adequada (45-50cm) para facilitar levantar. Evite muito macio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>TV/Controles:</strong> Simplifique: deixe apenas os botões essenciais visíveis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Fios:</strong> Oculte todos os cabos para evitar tropeços.</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="entrance">
            <AccordionTrigger className="text-foreground font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-lg">🚪</span> Entrada e Corredores
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 space-y-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Degraus:</strong> Marque bordas com fita antiderrapante de cor contrastante.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Corrimão:</strong> Instale em ambos os lados de escadas e corredores longos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Capacho:</strong> Use apenas embutido no piso ou remova completamente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Alarme:</strong> Considere sensor na porta de saída para alertar perambulação noturna.</span>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* NEW: Condition-Specific Adaptations */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl p-5 border-2 border-primary/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🧠</span>
            <h4 className="font-bold text-primary">Alzheimer: Prioridades</h4>
          </div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Prevenir fuga:</strong> Alarmes em portas, cercas discretas no jardim.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Sinalização visual:</strong> Placas com fotos nos cômodos (banheiro, quarto).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Objetos perigosos:</strong> Trancar medicamentos, produtos químicos e facas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Identificação:</strong> Pulseira com nome, endereço e telefone sempre.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card rounded-xl p-5 border-2 border-primary/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🤲</span>
            <h4 className="font-bold text-primary">Parkinson: Prioridades</h4>
          </div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Prevenir quedas:</strong> Pisos antiderrapantes, iluminação ampla, sem tapetes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Facilitar movimento:</strong> Barras de apoio em sequência nos corredores.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Freezing:</strong> Fitas coloridas no chão para guiar os passos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span><strong>Automação:</strong> Controle por voz (reduz necessidade de manipular objetos).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Physical Safety Checklist */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/30">
        <h4 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
          ✅ Checklist de Segurança Física
        </h4>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-foreground">Piso</h5>
              <p className="text-sm text-foreground/80">
                Remova tapetes soltos. Se indispensáveis, use fitas de fixação extrema.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-foreground">Banheiro</h5>
              <p className="text-sm text-foreground/80">
                Instale barras de apoio em cor contrastante com a parede (ex: barra escura em azulejo claro) para facilitar a visualização.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-foreground">Circulação</h5>
              <p className="text-sm text-foreground/80">
                Mantenha corredores livres (mínimo 80cm) para passagem de andadores.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-foreground">Iluminação Noturna</h5>
              <p className="text-sm text-foreground/80">
                Instale luzes de LED no caminho quarto → banheiro que acendem automaticamente.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-foreground">Contatos de Emergência</h5>
              <p className="text-sm text-foreground/80">
                Liste telefones importantes em local visível (geladeira) com letras grandes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Response */}
      <div className="bg-destructive/10 rounded-xl p-6 border border-destructive/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
            <Phone className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <h4 className="font-bold text-foreground text-lg mb-2">Plano de Emergência</h4>
            <p className="text-foreground/80 text-sm mb-3">
              Configure um protocolo claro para situações de risco:
            </p>
            <ol className="space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="font-bold text-destructive">1.</span>
                <span><strong>Queda sem lesão visível:</strong> Não movimentar. Chamar ajuda. Observar por 24h.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-destructive">2.</span>
                <span><strong>Fuga/perambulação:</strong> Acionar rede de vizinhos e polícia imediatamente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-destructive">3.</span>
                <span><strong>Engasgo:</strong> Manobra de Heimlich (ver cap. Alimentação). SAMU 192.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <AlertBox type="tip" title="Dica 2026">
        A tecnologia deve ser invisível e natural. Configure os dispositivos uma vez e deixe que trabalhem silenciosamente pela segurança. Combine alta tecnologia com soluções simples para máxima eficácia.
      </AlertBox>
    </div>
  );
};

export default Chapter3SmartHome;
