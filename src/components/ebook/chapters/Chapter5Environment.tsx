import { ShieldCheck, AlertTriangle } from "lucide-react";
import AlertBox from "../AlertBox";

const Chapter5Environment = () => {
  return (
    <div className="space-y-8">
      <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Prioridade #1: Prevenção de Quedas</h3>
            <p className="text-foreground/80 leading-relaxed">
              Um ambiente seguro prolonga a autonomia do paciente e reduz significativamente 
              o risco de internações por fraturas e lesões.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-foreground">Princípios Gerais de Segurança</h4>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-lg">💡</span>
              </div>
              <h5 className="font-semibold text-foreground">Iluminação Adequada</h5>
            </div>
            <p className="text-sm text-foreground/80">
              Garanta iluminação uniforme em todos os ambientes. Evite áreas de sombra 
              que possam causar confusão ou tropeços.
            </p>
          </div>

          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-lg">🎨</span>
              </div>
              <h5 className="font-semibold text-foreground">Contraste de Cores</h5>
            </div>
            <p className="text-sm text-foreground/80">
              Use cores contrastantes entre piso, parede e móveis para facilitar 
              a percepção espacial do paciente.
            </p>
          </div>

          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-lg">🚪</span>
              </div>
              <h5 className="font-semibold text-foreground">Caminhos Livres</h5>
            </div>
            <p className="text-sm text-foreground/80">
              Mantenha corredores e passagens desobstruídos. Remova objetos 
              que possam causar tropeços.
            </p>
          </div>

          <div className="bg-card rounded-xl p-5 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-lg">🔒</span>
              </div>
              <h5 className="font-semibold text-foreground">Acessórios de Apoio</h5>
            </div>
            <p className="text-sm text-foreground/80">
              Instale barras de apoio, corrimãos e outros dispositivos 
              nos locais estratégicos da casa.
            </p>
          </div>
        </div>
      </div>

      <AlertBox type="warning" title="Atenção Especial">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
          <span>Os próximos capítulos detalham adaptações específicas para Quarto, Banheiro e Áreas de Circulação.</span>
        </div>
      </AlertBox>
    </div>
  );
};

export default Chapter5Environment;
