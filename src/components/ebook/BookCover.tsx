import { useNavigate } from "react-router-dom";
import logoVertical from "@/assets/logo-vertical.png";
import { ChevronRight, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";

interface BookCoverProps {
  onStart: () => void;
}

const BookCover = ({ onStart }: BookCoverProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle top-right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-primary-foreground/10" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-primary-foreground/5" />
        {/* Small circle bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-primary-foreground/5" />
        {/* Diagonal line accent */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary-foreground/5 to-transparent" />
        {/* Subtle grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Dark mode toggle */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      {/* Content card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
          {/* Green top bar */}
          <div className="h-2 bg-gradient-to-r from-primary via-primary to-secondary" />

          <div className="p-8 sm:p-10 text-center">
            {/* Logo */}
            <div className="mb-6">
              <img
                src={logoVertical}
                alt="Grupo Altevita"
                className="h-20 md:h-24 w-auto mx-auto"
              />
            </div>

            {/* Edition badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-5">
              <span className="text-xs font-semibold tracking-wider uppercase">Edição 2026</span>
            </div>

            {/* Title */}
            <div className="mb-5">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2 leading-tight">
                Guia de Cuidado
                <br />
                <span className="text-secondary font-light">e Convivência</span>
              </h1>
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="h-px w-12 bg-border" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="h-px w-12 bg-border" />
              </div>
              <p className="text-base font-semibold text-foreground">
                Alzheimer e Parkinson
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Segurança, Tecnologia e Afeto na Rotina
              </p>
            </div>

            {/* Quote */}
            <div className="bg-muted rounded-lg px-5 py-3 mb-7">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Honrar a vida e respeitar a própria história."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2.5">
              <Button
                onClick={onStart}
                size="lg"
                className="group w-full min-h-[50px] text-base"
              >
                Começar a Leitura
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate("/print")}
                className="gap-2 min-h-[44px]"
              >
                <Printer className="h-4 w-4" />
                Versão para Impressão / PDF
              </Button>
            </div>

            {/* Format */}
            <p className="mt-6 text-[0.65rem] text-muted-foreground tracking-wider uppercase">
              Formato: Web/Digital Interativo
            </p>
          </div>

          {/* Gray bottom bar */}
          <div className="h-1.5 bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default BookCover;
