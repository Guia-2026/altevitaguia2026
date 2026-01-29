import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EnergyLevel = "high" | "medium" | "low" | null;

interface Question {
  id: string;
  question: string;
  options: { label: string; value: number; emoji: string }[];
}

const questions: Question[] = [
  {
    id: "sleep",
    question: "Como foi o sono da noite passada?",
    options: [
      { label: "Dormiu bem, descansado(a)", value: 3, emoji: "😴" },
      { label: "Sono irregular, acordou algumas vezes", value: 2, emoji: "😐" },
      { label: "Noite difícil, pouco sono", value: 1, emoji: "😫" },
    ],
  },
  {
    id: "mood",
    question: "Como está o humor agora?",
    options: [
      { label: "Calmo(a) e receptivo(a)", value: 3, emoji: "😊" },
      { label: "Um pouco irritado(a) ou apático(a)", value: 2, emoji: "😕" },
      { label: "Muito agitado(a) ou resistente", value: 1, emoji: "😤" },
    ],
  },
  {
    id: "physical",
    question: "Como está a disposição física?",
    options: [
      { label: "Consegue se movimentar bem", value: 3, emoji: "🚶" },
      { label: "Movimentos mais lentos hoje", value: 2, emoji: "🪑" },
      { label: "Prefere ficar sentado(a)/deitado(a)", value: 1, emoji: "🛋️" },
    ],
  },
  {
    id: "appetite",
    question: "Como está a alimentação/hidratação?",
    options: [
      { label: "Comeu e bebeu bem", value: 3, emoji: "🍽️" },
      { label: "Comeu pouco ou sem apetite", value: 2, emoji: "🥄" },
      { label: "Recusou ou teve dificuldade", value: 1, emoji: "❌" },
    ],
  },
];

const activitySuggestions = {
  high: {
    title: "Dia de Boa Energia! ⚡",
    description: "Aproveite para atividades mais completas e estimulantes.",
    activities: [
      { name: "Cozinha Assistida", duration: "20-30 min", emoji: "🍽️" },
      { name: "Arte + Musicoterapia", duration: "25 min", emoji: "🎨" },
      { name: "Mini-jardinagem", duration: "20 min", emoji: "🪴" },
      { name: "Bingo Sensorial completo", duration: "20 min", emoji: "👂" },
    ],
    tip: "Combine uma atividade curta pela manhã e uma longa à tarde.",
  },
  medium: {
    title: "Dia de Energia Moderada 🔋",
    description: "Prefira atividades de média intensidade, com pausas.",
    activities: [
      { name: "Musicoterapia", duration: "15 min", emoji: "🎵" },
      { name: "Caixa de Memórias", duration: "15 min", emoji: "📦" },
      { name: "Separação por Cores", duration: "10-15 min", emoji: "🎨" },
      { name: "Cartões de Rotina", duration: "10 min", emoji: "🗂️" },
    ],
    tip: "Faça pausas a cada 10 minutos e observe sinais de cansaço.",
  },
  low: {
    title: "Dia de Descanso 💤",
    description: "Priorize o bem-estar. Atividades leves e passivas.",
    activities: [
      { name: "Música calma (apenas ouvir)", duration: "10 min", emoji: "🎶" },
      { name: "Companhia tranquila", duration: "livre", emoji: "🤝" },
      { name: "Olhar fotos/álbum", duration: "5-10 min", emoji: "📷" },
      { name: "Regar uma planta", duration: "5 min", emoji: "💧" },
    ],
    tip: "Não force. Estar junto em silêncio também é cuidado.",
  },
};

const EnergyQuiz = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateEnergy = (): EnergyLevel => {
    const values = Object.values(answers);
    if (values.length < questions.length) return null;
    
    const total = values.reduce((sum, v) => sum + v, 0);
    const avg = total / questions.length;
    
    if (avg >= 2.5) return "high";
    if (avg >= 1.75) return "medium";
    return "low";
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const energyLevel = calculateEnergy();
  const suggestion = energyLevel ? activitySuggestions[energyLevel] : null;
  const answeredCount = Object.keys(answers).length;

  if (showResult && suggestion) {
    return (
      <div className="space-y-4">
        {/* Result Header */}
        <div
          className={cn(
            "p-4 rounded-lg text-center",
            energyLevel === "high" && "bg-green-500/10 border border-green-500/30",
            energyLevel === "medium" && "bg-yellow-500/10 border border-yellow-500/30",
            energyLevel === "low" && "bg-destructive/10 border border-destructive/30"
          )}
        >
          <h4 className="text-lg font-bold text-foreground mb-1">{suggestion.title}</h4>
          <p className="text-sm text-foreground/80">{suggestion.description}</p>
        </div>

        {/* Suggested Activities */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Atividades sugeridas para hoje:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestion.activities.map((activity) => (
              <div
                key={activity.name}
                className="bg-accent/50 p-3 rounded-lg flex items-center gap-3"
              >
                <span className="text-xl">{activity.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{activity.name}</p>
                  <p className="text-xs text-muted-foreground">{activity.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="bg-primary/5 p-4 rounded-lg">
          <p className="text-sm text-primary font-medium">💡 {suggestion.tip}</p>
        </div>

        {/* Reset Button */}
        <Button variant="outline" onClick={handleReset} className="w-full">
          Avaliar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Responda {questions.length} perguntas rápidas</span>
        <span className="font-medium text-primary">
          {answeredCount}/{questions.length}
        </span>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={q.id} className="bg-accent/30 p-4 rounded-lg">
            <p className="text-sm font-medium text-foreground mb-3">
              {index + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(q.id, option.value)}
                  className={cn(
                    "w-full p-3 rounded-lg text-left text-sm transition-all flex items-center gap-3",
                    answers[q.id] === option.value
                      ? "bg-primary/20 border-2 border-primary text-foreground"
                      : "bg-background/50 border border-border/50 text-foreground/80 hover:bg-background/80"
                  )}
                >
                  <span className="text-lg">{option.emoji}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        disabled={answeredCount < questions.length}
        className="w-full"
      >
        {answeredCount < questions.length
          ? `Responda todas as perguntas (${answeredCount}/${questions.length})`
          : "Ver sugestão de atividades"}
      </Button>
    </div>
  );
};

export default EnergyQuiz;
