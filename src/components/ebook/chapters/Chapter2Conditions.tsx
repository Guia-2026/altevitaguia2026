import elderlyCareCover from "@/assets/elderly-care-cover.jpg";
import AlertBox from "../AlertBox";

const Chapter2Conditions = () => {
  return (
    <div className="space-y-8">
      {/* Cover illustration */}
      <div className="overflow-hidden rounded-xl border border-border">
        <img 
          src={elderlyCareCover} 
          alt="Cuidado com idosos - mãos entrelaçadas representando afeto e segurança" 
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Alzheimer */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🧠</span>
          <h3 className="text-xl font-bold text-primary">Doença de Alzheimer</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">O que é:</h4>
            <p className="text-foreground/80 leading-relaxed">
              Condição neurodegenerativa que afeta memória, linguagem e percepção.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Sintomas na Rotina:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Desorientação temporal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Repetição de perguntas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Alterações de humor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Dificuldade em completar tarefas familiares</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Abordagem Atual (2026):</h4>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Foco na <strong>preservação da identidade</strong>. Não corrigimos o residente de forma ríspida; validamos sua realidade para reduzir a ansiedade.
            </p>
          </div>
        </div>
      </div>

      {/* Parkinson */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🤲</span>
          <h3 className="text-xl font-bold text-primary">Doença de Parkinson</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">O que é:</h4>
            <p className="text-foreground/80 leading-relaxed">
              Distúrbio neurológico motor causado pela diminuição de dopamina.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Sintomas na Rotina:</h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Tremores em repouso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Rigidez muscular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Lentidão (bradicinesia)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Desequilíbrio postural</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Abordagem Atual (2026):</h4>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Estímulo contínuo à <strong>mobilidade assistida</strong> e uso de tecnologias para compensar flutuações motoras.
            </p>
          </div>
        </div>
      </div>

      <AlertBox type="info" title="Importante">
        Cada pessoa é única. Os sintomas e a progressão variam. Acompanhamento médico regular é essencial para ajustes no plano de cuidados.
      </AlertBox>
    </div>
  );
};

export default Chapter2Conditions;
