import { ReactNode } from "react";
import { ChevronLeft, ChevronRight, BookOpen, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChapterPageProps {
  chapterNumber: number;
  totalChapters: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: ReactNode;
  onPrevious: () => void;
  onNext: () => void;
  onShowIndex: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

const ChapterPage = ({
  chapterNumber,
  totalChapters,
  title,
  subtitle,
  icon,
  children,
  onPrevious,
  onNext,
  onShowIndex,
  hasPrevious,
  hasNext,
}: ChapterPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Previous button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Anterior</span>
            </Button>

            {/* Center: Chapter indicator + Index button */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onShowIndex}
                className="gap-2"
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">Índice</span>
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>
                  Capítulo <span className="font-semibold text-foreground">{chapterNumber}</span> de {totalChapters}
                </span>
              </div>
            </div>

            {/* Next button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              disabled={!hasNext}
              className="gap-1"
            >
              <span className="hidden sm:inline">Próximo</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Chapter content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        {/* Chapter header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-primary mb-2">
            <span className="text-sm font-semibold uppercase tracking-wider">
              Capítulo {chapterNumber}
            </span>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
              {icon}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-muted-foreground">{subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="mt-6 h-px bg-gradient-to-r from-primary via-border to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-sm md:prose max-w-none animate-fade-in">
          {children}
        </div>
      </main>

      {/* Bottom navigation */}
      <footer className="sticky bottom-0 bg-card/95 backdrop-blur border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="flex-1 sm:flex-none gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Capítulo Anterior
            </Button>

            {/* Progress dots */}
            <div className="hidden md:flex items-center gap-1.5">
              {Array.from({ length: totalChapters }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    i + 1 === chapterNumber 
                      ? "bg-primary w-6" 
                      : i + 1 < chapterNumber 
                        ? "bg-primary/40" 
                        : "bg-border"
                  )}
                />
              ))}
            </div>

            <Button
              onClick={onNext}
              disabled={!hasNext}
              className="flex-1 sm:flex-none gap-2"
            >
              Próximo Capítulo
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChapterPage;
