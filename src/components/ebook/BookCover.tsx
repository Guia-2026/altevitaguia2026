import { useNavigate } from "react-router-dom";
import logoVertical from "@/assets/logo-vertical.png";
import { ChevronRight, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCoverProps {
  onStart: () => void;
}

const BookCover = ({ onStart }: BookCoverProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent p-4">
      <div className="relative w-full max-w-lg">
        {/* Book shadow */}
        <div className="absolute inset-0 bg-foreground/10 rounded-2xl translate-x-2 translate-y-2 blur-sm" />
        
        {/* Book cover */}
        <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border-l-8 border-primary">
          {/* Spine decoration */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-primary/20 to-transparent" />
          
          <div className="p-6 md:p-10 text-center">
            {/* Logo */}
            <div className="mb-5">
              <img 
                src={logoVertical} 
                alt="Grupo Altevita" 
                className="h-16 md:h-20 w-auto mx-auto"
              />
            </div>
            
            {/* Edition badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-semibold">Edição 2026</span>
            </div>
            
            {/* Title */}
            <div className="mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-primary mb-2 leading-tight">
                Guia de Cuidado<br />e Convivência
              </h1>
              <div className="w-12 h-0.5 bg-primary mx-auto rounded-full mb-3" />
              <p className="text-sm text-muted-foreground font-medium">
                Alzheimer e Parkinson
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Segurança, Tecnologia e Afeto na Rotina
              </p>
            </div>
            
            {/* Quote */}
            <p className="text-xs text-muted-foreground italic mb-6 max-w-xs mx-auto">
              "Honrar a vida e respeitar a própria história."
            </p>
            
            {/* Start button */}
            <div className="flex flex-col gap-2">
              <Button 
                onClick={onStart}
                className="group w-full"
              >
                Começar a Leitura
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline"
                size="sm"
                onClick={() => navigate("/print")}
                className="gap-2"
              >
                <Printer className="h-3.5 w-3.5" />
                Versão para Impressão / PDF
              </Button>
            </div>
            
            {/* Format badge */}
            <p className="mt-5 text-[0.65rem] text-muted-foreground">
              Formato: Web/Digital Interativo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
