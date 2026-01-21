import logoVertical from "@/assets/logo-vertical.png";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCoverProps {
  onStart: () => void;
}

const BookCover = ({ onStart }: BookCoverProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent p-4">
      <div className="relative w-full max-w-lg">
        {/* Book shadow */}
        <div className="absolute inset-0 bg-foreground/10 rounded-2xl translate-x-2 translate-y-2 blur-sm" />
        
        {/* Book cover */}
        <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border-l-8 border-primary">
          {/* Spine decoration */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-primary/20 to-transparent" />
          
          <div className="p-8 md:p-12 text-center">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={logoVertical} 
                alt="Grupo Altevita" 
                className="h-28 md:h-36 w-auto mx-auto"
              />
            </div>
            
            {/* Edition badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm font-semibold">Edição 2026</span>
            </div>
            
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
                Guia de Cuidado<br />e Convivência
              </h1>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
              <p className="text-base text-muted-foreground font-medium">
                Alzheimer e Parkinson
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Segurança, Tecnologia e Afeto na Rotina
              </p>
            </div>
            
            {/* Quote */}
            <p className="text-sm text-muted-foreground italic mb-8 max-w-xs mx-auto">
              "Honrar a vida e respeitar a própria história."
            </p>
            
            {/* Start button */}
            <Button 
              onClick={onStart}
              size="lg"
              className="group px-8"
            >
              Começar a Leitura
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Format badge */}
            <p className="mt-8 text-xs text-muted-foreground">
              Formato: Web/Digital Interativo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
