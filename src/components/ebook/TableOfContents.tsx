import { BookOpen, Heart, Brain, Home, ClipboardList, UtensilsCrossed, Pill, MessageCircle, AlertTriangle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  icon: React.ElementType;
}

const chapters: Chapter[] = [
  { id: "introducao", number: 1, title: "Introdução", subtitle: "A Era da Longevidade Inteligente", icon: Heart },
  { id: "condicoes", number: 2, title: "Entendendo as Condições", subtitle: "Alzheimer e Parkinson (Contexto 2026)", icon: Brain },
  { id: "ambiente", number: 3, title: "O Ambiente Conectado", subtitle: "A Casa Segura", icon: Home },
  { id: "rotina", number: 4, title: "Protocolos de Rotina Diária", subtitle: "Higiene, Vestuário e Alimentação", icon: ClipboardList },
  { id: "nutricao", number: 5, title: "Nutrição", subtitle: "O Prazer de Comer (+ Receitas)", icon: UtensilsCrossed },
  { id: "medicacao", number: 6, title: "Gestão Medicamentosa", subtitle: "Tecnologia e Cuidados 2026", icon: Pill },
  { id: "comunicacao", number: 7, title: "Comunicação", subtitle: "Estratégias Distintas", icon: MessageCircle },
  { id: "emergencias", number: 8, title: "Plano de Ação em Emergências", subtitle: "Fuga, Deambulação e Freezing", icon: AlertTriangle },
  { id: "atividades", number: 9, title: "Atividades Cognitivas e Motoras", subtitle: "Estimulação e Bem-estar", icon: Sparkles },
];

interface TableOfContentsProps {
  onSelectChapter: (chapterId: string) => void;
  currentChapter: string;
}

const TableOfContents = ({ onSelectChapter, currentChapter }: TableOfContentsProps) => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <BookOpen className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Sumário</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Índice de Capítulos
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">Edição 2026</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Chapter list */}
        <div className="space-y-3">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            const isActive = currentChapter === chapter.id;
            
            return (
              <button
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "bg-card hover:bg-accent border border-border hover:border-primary/30"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Chapter number */}
                <div className={cn(
                  "flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg transition-colors",
                  isActive 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : "bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                )}>
                  {chapter.number}
                </div>

                {/* Icon */}
                <div className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                  isActive 
                    ? "bg-primary-foreground/10" 
                    : "bg-muted"
                )}>
                  <Icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-primary-foreground" : "text-primary"
                  )} />
                </div>

                {/* Title and subtitle */}
                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "font-semibold truncate",
                    isActive ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {chapter.title}
                  </h3>
                  {chapter.subtitle && (
                    <p className={cn(
                      "text-sm truncate",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {chapter.subtitle}
                    </p>
                  )}
                </div>

                {/* Page indicator dots */}
                <div className={cn(
                  "flex-shrink-0 text-sm font-medium",
                  isActive ? "text-primary-foreground/60" : "text-muted-foreground"
                )}>
                  •••
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { chapters };
export default TableOfContents;
