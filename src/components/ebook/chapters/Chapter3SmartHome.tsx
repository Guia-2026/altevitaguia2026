import { Wifi, Home, Lightbulb, Mic, CheckCircle } from "lucide-react";
import AlertBox from "../AlertBox";

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
        </div>
      </div>

      <AlertBox type="tip" title="Dica 2026">
        A tecnologia deve ser invisível e natural. Configure os dispositivos uma vez e deixe que trabalhem silenciosamente pela segurança.
      </AlertBox>
    </div>
  );
};

export default Chapter3SmartHome;
