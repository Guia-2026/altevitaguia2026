import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import AlertBox from "../AlertBox";

const Chapter8Emergencies = () => {
  return (
    <div className="space-y-8">
      {/* Risk A - Wandering (Alzheimer) */}
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
                <span>GPS vestível (relógio ou pingente)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              🏠 Ambiente
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
            </ul>
          </div>
          
          <div className="bg-accent/50 p-3 rounded-lg">
            <h4 className="font-semibold text-foreground text-sm mb-1">⚡ Gatilhos comuns:</h4>
            <p className="text-sm text-foreground/80">
              A vontade de sair aumenta ao entardecer ou por fome/sede não expressada.
            </p>
          </div>
        </div>
      </div>

      {/* Risk B - Freezing (Parkinson) */}
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
              Os pés "colam" no chão, criando <strong className="text-primary">risco alto de queda</strong>.
            </p>
          </div>
          
          <div className="bg-destructive/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="h-5 w-5 text-destructive" />
              <h4 className="font-semibold text-destructive">O que NÃO fazer:</h4>
            </div>
            <p className="text-foreground/80 text-sm">
              Nunca puxe ou empurre o residente.
            </p>
          </div>
          
          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-primary">Como destravar:</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-foreground text-sm">Comando Verbal</p>
                  <p className="text-foreground/80 text-xs">Diga firme: <strong className="text-primary">"MARCHA!"</strong> ou conte "1, 2, 3"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-foreground text-sm">Pista Visual</p>
                  <p className="text-foreground/80 text-xs">Coloque seu pé na frente do dele e peça: <strong className="text-primary">"Passe por cima do meu pé"</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AlertBox type="warning" title="Em Caso de Emergência">
        Mantenha sempre visíveis os números de emergência: SAMU (192), Bombeiros (193) e o telefone do médico responsável.
      </AlertBox>
    </div>
  );
};

export default Chapter8Emergencies;
