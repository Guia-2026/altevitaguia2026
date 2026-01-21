import { AlertTriangle, Pill, Calendar, Clock } from "lucide-react";
import AlertBox from "../AlertBox";

const Chapter6Medication = () => {
  return (
    <div className="space-y-8">
      {/* Warning */}
      <div className="bg-destructive/10 rounded-xl p-5 border border-destructive/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Atenção</h4>
            <p className="text-foreground/80">
              Erros de medicação são a <strong>maior causa de internações evitáveis</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Tecnologia de Dispensação</h3>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Use dispensadores eletrônicos ou alarmes no celular. <strong className="text-primary">Evite confiar apenas na memória</strong>.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm">📱 Alarmes no celular</span>
          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm">💊 Porta-comprimidos digital</span>
          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm">🔔 Lembretes de voz</span>
        </div>
      </div>

      {/* Transdermal Patches */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Pill className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Novas Formas Farmacêuticas</h3>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Em 2026, priorize (sob prescrição) medicamentos em <strong className="text-primary">Adesivos Transdérmicos (Patches)</strong> para pacientes com disfagia.
        </p>
        <div className="bg-accent/50 p-4 rounded-lg flex items-start gap-3">
          <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-1">Dica Visual</h4>
            <p className="text-sm text-foreground/80">
              Marque no calendário o local do corpo onde o adesivo foi colado para fazer o rodízio e evitar alergias.
            </p>
          </div>
        </div>
      </div>

      {/* Parkinson specific */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🤲</span>
          <h3 className="text-lg font-bold text-primary">Parkinson e Proteína</h3>
        </div>
        <div className="bg-primary/5 p-4 rounded-lg">
          <p className="text-foreground/80 leading-relaxed">
            A <strong className="text-primary">Levodopa</strong> deve ser tomada <strong className="text-primary">longe das refeições proteicas</strong> (carne/leite) para garantir a absorção correta.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="bg-destructive/10 p-3 rounded-lg text-center">
            <span className="text-2xl">🥩</span>
            <p className="text-xs text-foreground/80 mt-1">Evitar junto com Levodopa</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-lg text-center">
            <span className="text-2xl">⏰</span>
            <p className="text-xs text-foreground/80 mt-1">Tomar 30min antes das refeições</p>
          </div>
        </div>
      </div>

      <AlertBox type="warning" title="Importante">
        Nunca altere dosagens ou horários sem orientação médica. Este guia é informativo.
      </AlertBox>
    </div>
  );
};

export default Chapter6Medication;
