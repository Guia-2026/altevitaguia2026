import ConditionCard from "../ConditionCard";
import AlertBox from "../AlertBox";
import brainIllustration from "@/assets/brain-illustration.png";

const Chapter1Conditions = () => {
  return (
    <div className="space-y-8">
      <AlertBox type="info">
        <strong>Contexto visual:</strong> Usamos ilustrações limpas e esquemáticas para facilitar a compreensão, evitando imagens que possam causar desconforto.
      </AlertBox>

      <div className="grid md:grid-cols-2 gap-6">
        <ConditionCard
          title="Doença de Alzheimer"
          description="O Alzheimer causa a morte progressiva de células cerebrais, levando à perda de memória e confusão."
          whatHappens="A atrofia cerebral afeta áreas responsáveis pela linguagem e memória."
          symptoms="Esquecimento de fatos recentes, repetição de perguntas e desorientação temporal."
          image={brainIllustration}
        />
        <ConditionCard
          title="Doença de Parkinson"
          description="Distúrbio neurológico que afeta o movimento devido à falta de dopamina."
          whatHappens="Degeneração na substância negra do cérebro."
          symptoms="Tremores em repouso, rigidez muscular e lentidão nos movimentos (bradicinesia)."
          image={brainIllustration}
        />
      </div>

      <div className="bg-accent rounded-xl p-6 mt-8">
        <h3 className="font-semibold text-foreground mb-3">Importante Lembrar</h3>
        <p className="text-foreground/80 leading-relaxed">
          Tanto o Alzheimer quanto o Parkinson são condições progressivas. Compreender os sintomas ajuda cuidadores e familiares a adaptar o ambiente e a rotina, promovendo maior qualidade de vida e autonomia pelo maior tempo possível.
        </p>
      </div>
    </div>
  );
};

export default Chapter1Conditions;
