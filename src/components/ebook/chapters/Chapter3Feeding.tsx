import AlertBox from "../AlertBox";
import feedingCare from "@/assets/feeding-care.png";

const Chapter3Feeding = () => {
  return (
    <div className="space-y-8">
      <AlertBox type="warning" title="Atenção">
        A <strong>disfagia</strong> (dificuldade de engolir) é um risco significativo tanto em pacientes com Alzheimer quanto com Parkinson. 
        Adaptações no ambiente e nos utensílios são essenciais.
      </AlertBox>

      <div className="overflow-hidden rounded-xl border border-border">
        <img 
          src={feedingCare} 
          alt="Cuidados com alimentação" 
          className="w-full h-56 object-contain bg-muted p-4"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-2xl">🍴</span>
          </div>
          <h4 className="font-semibold text-primary mb-2">Adaptação</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Use talheres com cabos engrossados para facilitar a pega em caso de tremor, 
            e copos com recorte nasal para melhor visualização.
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-2xl">📺</span>
          </div>
          <h4 className="font-semibold text-primary mb-2">Ambiente</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Reduza distrações (TV desligada, ambiente calmo) para que o paciente 
            com Alzheimer possa focar na refeição.
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <span className="text-2xl">🪑</span>
          </div>
          <h4 className="font-semibold text-primary mb-2">Postura</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Mantenha o paciente sentado a 90º durante e após as refeições 
            para evitar engasgos e aspiração.
          </p>
        </div>
      </div>

      <div className="bg-accent rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-3">Consistência dos Alimentos</h4>
        <p className="text-foreground/80 leading-relaxed">
          Consulte um fonoaudiólogo para avaliar a necessidade de espessantes em líquidos 
          ou modificação na consistência dos alimentos. Cada paciente pode requerer adaptações específicas.
        </p>
      </div>
    </div>
  );
};

export default Chapter3Feeding;
