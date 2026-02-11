import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen, List, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./DarkModeToggle";

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top navigation bar */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5">
          <div className="flex items-center justify-between gap-2">
            {/* Previous button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="gap-1 min-h-[44px] min-w-[44px] shrink-0"
              aria-label="Capítulo anterior"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">Anterior</span>
            </Button>

            {/* Center: Chapter indicator + actions */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={onShowIndex}
                className="gap-1.5 min-h-[44px] shrink-0"
                aria-label="Índice"
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline text-sm">Índice</span>
              </Button>
              
              <div className="hidden xs:flex items-center gap-1.5 text-sm text-muted-foreground whitespace-nowrap">
                <BookOpen className="h-3.5 w-3.5 shrink-0" />
                <span>
                  <span className="font-semibold text-foreground">{chapterNumber}</span>/{totalChapters}
                </span>
              </div>

              <DarkModeToggle />
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/print")}
                className="h-9 w-9 rounded-full shrink-0"
                aria-label="Exportar PDF"
              >
                <FileDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Next button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              disabled={!hasNext}
              className="gap-1 min-h-[44px] min-w-[44px] shrink-0"
              aria-label="Próximo capítulo"
            >
              <span className="hidden sm:inline text-sm">Próximo</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-0.5 bg-border">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${(chapterNumber / totalChapters) * 100}%` }}
          />
        </div>
      </header>

      {/* Chapter content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 sm:px-8 py-8 md:py-14 cq-container">
        {/* Chapter header */}
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center gap-2 text-primary mb-3">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest">
              Capítulo {chapterNumber}
            </span>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
              {icon}
            </div>
            <div className="pt-0.5">
              <h1 className="font-bold text-foreground mb-1 leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-muted-foreground text-base sm:text-lg">{subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="mt-6 h-px bg-gradient-to-r from-primary via-border to-transparent" />
        </div>

        {/* Content */}
        <article className="animate-fade-in space-y-8">
          {children}
        </article>
      </main>

      {/* Bottom navigation */}
      <footer className="sticky bottom-0 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="flex-1 sm:flex-none gap-2 min-h-[48px] text-sm"
              aria-label="Capítulo anterior"
            >
              <ChevronLeft className="h-4 w-4 shrink-0" />
              <span className="truncate">Anterior</span>
            </Button>

            {/* Progress dots - desktop only */}
            <div className="hidden md:flex items-center gap-1.5" role="progressbar" aria-valuenow={chapterNumber} aria-valuemax={totalChapters}>
              {Array.from({ length: totalChapters }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i + 1 === chapterNumber 
                      ? "bg-primary w-6" 
                      : i + 1 < chapterNumber 
                        ? "bg-primary/40 w-2" 
                        : "bg-border w-2"
                  )}
                />
              ))}
            </div>

            <Button
              onClick={onNext}
              disabled={!hasNext}
              className="flex-1 sm:flex-none gap-2 min-h-[48px] text-sm"
              aria-label="Próximo capítulo"
            >
              <span className="truncate">Próximo</span>
              <ChevronRight className="h-4 w-4 shrink-0" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChapterPage;
