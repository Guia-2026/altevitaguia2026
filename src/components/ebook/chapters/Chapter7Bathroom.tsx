import { AlertTriangle } from "lucide-react";
import AlertBox from "../AlertBox";
import bathroomSafety from "@/assets/bathroom-safety.png";

const Chapter7Bathroom = () => {
  return (
    <div className="space-y-8">
      <div className="bg-destructive/10 rounded-xl p-5 border border-destructive/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Área de Maior Risco</h4>
            <p className="text-foreground/80">
              O banheiro é estatisticamente o local mais perigoso para quedas de idosos. 
              Investir em adaptações aqui é prioridade.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <img 
          src={bathroomSafety} 
          alt="Banheiro adaptado com barras de apoio" 
          className="w-full h-56 object-contain bg-muted p-4"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🛟</span>
            <h4 className="font-semibold text-primary text-lg">Barras de Apoio</h4>
          </div>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Instale barras ao lado do vaso sanitário (horizontal e vertical)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Coloque barras dentro do box em posição estratégica</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Escolha cores contrastantes com o azulejo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Verifique a fixação e capacidade de peso</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🧱</span>
            <h4 className="font-semibold text-primary text-lg">Piso</h4>
          </div>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Use tapetes antiderrapantes fixados ao chão</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Remova tapetes de tecido soltos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Considere revestimento antiderrapante permanente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Mantenha o piso sempre seco</span>
            </li>
          </ul>
        </div>
      </div>

      <AlertBox type="info" title="Equipamentos Adicionais">
        Considere instalar um assento elevado para vaso sanitário e uma cadeira de banho. 
        Esses equipamentos aumentam significativamente a segurança e independência do paciente.
      </AlertBox>
    </div>
  );
};

export default Chapter7Bathroom;
