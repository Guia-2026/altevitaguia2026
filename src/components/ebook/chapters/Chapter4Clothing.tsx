import { CheckCircle } from "lucide-react";
import AlertBox from "../AlertBox";

const Chapter4Clothing = () => {
  return (
    <div className="space-y-8">
      <p className="text-lg text-foreground/80 leading-relaxed">
        Vestir-se pode se tornar um desafio significativo para pacientes com limitações motoras ou cognitivas. 
        Pequenas adaptações fazem grande diferença na <strong className="text-primary">autonomia</strong> e <strong className="text-primary">dignidade</strong> do paciente.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border">
          <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
            <span className="text-2xl">👕</span>
            Adaptações Recomendadas
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Substitua botões pequenos por velcro</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Troque zíperes difíceis por elásticos</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Prefira roupas com abertura frontal</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Use sapatos com fechamento em velcro</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            Para Pacientes com Alzheimer
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Ofereça escolhas limitadas (2 opções)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Organize roupas na ordem de vestir</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Evite muitas opções para reduzir ansiedade</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">Mantenha uma rotina consistente</span>
            </li>
          </ul>
        </div>
      </div>

      <AlertBox type="tip" title="Dica de Praticidade">
        Separe conjuntos de roupas completos em cabides ou organizadores. 
        Isso facilita a escolha e reduz o tempo de decisão, tornando o momento mais tranquilo.
      </AlertBox>
    </div>
  );
};

export default Chapter4Clothing;
