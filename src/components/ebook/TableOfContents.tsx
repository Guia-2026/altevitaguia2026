import { useNavigate } from "react-router-dom";
import { BookOpen, Heart, Brain, Home, ClipboardList, UtensilsCrossed, Pill, MessageCircle, AlertTriangle, Sparkles, FileDown, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";

interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  readingTime: number; // minutes
}

const chapters: Chapter[] = [
  { id: "introducao", number: 1, title: "Introdução", subtitle: "A Era da Longevidade Inteligente", icon: Heart, readingTime: 3 },
  { id: "condicoes", number: 2, title: "Entendendo as Condições", subtitle: "Alzheimer e Parkinson (Contexto 2026)", icon: Brain, readingTime: 5 },
  { id: "ambiente", number: 3, title: "O Ambiente Conectado", subtitle: "A Casa Segura", icon: Home, readingTime: 8 },
  { id: "rotina", number: 4, title: "Protocolos de Rotina Diária", subtitle: "Higiene, Vestuário e Alimentação", icon: ClipboardList, readingTime: 10 },
  { id: "nutricao", number: 5, title: "Nutrição", subtitle: "O Prazer de Comer (+ Receitas)", icon: UtensilsCrossed, readingTime: 8 },
  { id: "medicacao", number: 6, title: "Gestão Medicamentosa", subtitle: "Tecnologia e Cuidados 2026", icon: Pill, readingTime: 12 },
  { id: "comunicacao", number: 7, title: "Comunicação", subtitle: "Estratégias Distintas", icon: MessageCircle, readingTime: 10 },
  { id: "emergencias", number: 8, title: "Plano de Ação em Emergências", subtitle: "Fuga, Deambulação e Freezing", icon: AlertTriangle, readingTime: 10 },
  { id: "atividades", number: 9, title: "Atividades Cognitivas e Motoras", subtitle: "Estimulação e Bem-estar", icon: Sparkles, readingTime: 9 },
];

interface TableOfContentsProps {
  onSelectChapter: (chapterId: string) => void;
  currentChapter: string;
}

const TableOfContents = ({ onSelectChapter, currentChapter }: TableOfContentsProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-6 md:py-10">
      {/* Top actions */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/print")}
          className="h-9 w-9 rounded-full"
          aria-label="Exportar PDF"
        >
          <FileDown className="h-4 w-4" />
        </Button>
        <DarkModeToggle />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-3">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-widest">Sumário</span>
          </div>
          <h2 className="font-bold text-foreground">
            Índice de Capítulos
          </h2>
          <p className="text-muted-foreground mt-1.5 text-sm">Edição 2026</p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </header>

        {/* Chapter list */}
        <nav className="space-y-2.5" aria-label="Capítulos">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            const isActive = currentChapter === chapter.id;
            
            return (
              <button
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className={cn(
                  "w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl transition-all duration-200 text-left group min-h-[64px]",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  "active:scale-[0.98]",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "bg-card hover:bg-accent border border-border hover:border-primary/30"
                )}
                style={{ animationDelay: `${index * 40}ms` }}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Chapter number */}
                <div className={cn(
                  "flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-bold text-base sm:text-lg transition-colors",
                  isActive 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : "bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                )}>
                  {chapter.number}
                </div>

                {/* Icon */}
                <div className={cn(
                  "flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors",
                  isActive 
                    ? "bg-primary-foreground/10" 
                    : "bg-muted"
                )}>
                  <Icon className={cn(
                    "h-4 w-4 sm:h-5 sm:w-5",
                    isActive ? "text-primary-foreground" : "text-primary"
                  )} />
                </div>

                {/* Title and subtitle */}
                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "font-semibold text-sm sm:text-base",
                    isActive ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {chapter.title}
                  </h3>
                  {chapter.subtitle && (
                    <p className={cn(
                      "text-xs sm:text-sm truncate mt-0.5",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {chapter.subtitle}
                    </p>
                  )}
                  <div className={cn(
                    "flex items-center gap-1 mt-1",
                    isActive ? "text-primary-foreground/60" : "text-muted-foreground"
                  )}>
                    <Clock className="h-3 w-3" />
                    <span className="text-[0.65rem] sm:text-xs">{chapter.readingTime} min de leitura</span>
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight className={cn(
                  "flex-shrink-0 h-4 w-4 transition-transform group-hover:translate-x-0.5",
                  isActive ? "text-primary-foreground/60" : "text-muted-foreground"
                )} />
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export { chapters };
export default TableOfContents;
