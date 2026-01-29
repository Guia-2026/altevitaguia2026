import { CheckCircle } from "lucide-react";
import AlertBox from "../AlertBox";
import dailyRoutineCare from "@/assets/daily-routine-care.jpg";

const Chapter4DailyRoutine = () => {
  return (
    <div className="space-y-8">
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

      <AlertBox type="tip" title="Dica Prática">
        Separe conjuntos de roupas completos em cabides e organize talheres adaptados em local de fácil acesso. Pequenas mudanças trazem grandes resultados.
      </AlertBox>
    </div>
  );
};

export default Chapter4DailyRoutine;
