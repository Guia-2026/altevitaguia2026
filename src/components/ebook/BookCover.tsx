import { useNavigate } from "react-router-dom";
import logoVertical from "@/assets/logo-vertical.png";
import coverHero from "@/assets/cover-hero.jpg";
import { ChevronRight, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "./DarkModeToggle";

interface BookCoverProps {
  onStart: () => void;
}

const BookCover = ({ onStart }: BookCoverProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-end sm:items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={coverHero}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/20" />
      </div>

      {/* Dark mode toggle */}
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg px-5 pb-8 pt-16 sm:py-12">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <img
            src={logoVertical}
            alt="Grupo Altevita"
            className="h-14 md:h-18 w-auto mx-auto drop-shadow-lg brightness-0 invert"
          />
        </div>

        {/* Edition badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary-foreground/20">
            Edição 2026
          </span>
        </div>

        {/* Title block */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-3 drop-shadow-md">
            Guia de Cuidado
            <br />
            <span className="font-light">e Convivência</span>
          </h1>
          <div className="w-16 h-0.5 bg-primary-foreground/60 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-primary-foreground/90 font-medium tracking-wide">
            Alzheimer e Parkinson
          </p>
          <p className="text-sm text-primary-foreground/70 mt-1">
            Segurança, Tecnologia e Afeto na Rotina
          </p>
        </div>

        {/* Quote */}
        <p className="text-sm text-primary-foreground/75 italic text-center mb-8 max-w-xs mx-auto">
          "Honrar a vida e respeitar a própria história."
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <Button
            onClick={onStart}
            size="lg"
            className="group w-full min-h-[52px] text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
          >
            Começar a Leitura
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate("/print")}
            className="gap-2 min-h-[46px] bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Printer className="h-4 w-4" />
            Versão para Impressão / PDF
          </Button>
        </div>

        {/* Format badge */}
        <p className="mt-6 text-center text-[0.65rem] text-primary-foreground/50 tracking-wide uppercase">
          Formato: Web/Digital Interativo
        </p>
      </div>
    </div>
  );
};

export default BookCover;
