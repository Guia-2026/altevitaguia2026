import logoVertical from "@/assets/logo-vertical.png";
import { Instagram, Facebook, Globe, Home, QrCode, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import AIChatSection from "./AIChatSection";

interface BookEndProps {
  onRestart: () => void;
  onShowIndex: () => void;
}

const BookEnd = ({ onRestart, onShowIndex }: BookEndProps) => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Main content - Contracapa */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-primary-foreground">
        {/* Expert quote */}
        <div className="max-w-lg text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <span className="text-3xl">💡</span>
          </div>
          <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-4">
            "A tecnologia nos dá olhos onde não podemos estar, mas é o toque humano e a escuta ativa que transformam o cuidado em acolhimento."
          </p>
          <p className="text-primary-foreground/80 text-sm font-medium">
            — Dica do Especialista Altevita
          </p>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logoVertical} 
            alt="Grupo Altevita" 
            className="h-32 md:h-40 w-auto mx-auto brightness-0 invert"
          />
        </div>

        <p className="text-lg font-semibold text-primary-foreground mb-2">
          Residenciais Geriátricos
        </p>

        {/* QR Code placeholder */}
        <div className="bg-primary-foreground/10 rounded-xl p-6 mb-8 text-center">
          <div className="w-24 h-24 mx-auto bg-primary-foreground rounded-lg flex items-center justify-center mb-3">
            <QrCode className="h-16 w-16 text-primary" />
          </div>
          <p className="text-sm text-primary-foreground/90 font-medium">
            Vídeos Tutoriais no Canal Altevita
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a 
            href="https://instagram.com/grupoaltevita" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://facebook.com/grupoaltevita" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a 
            href="https://grupoaltevita.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            aria-label="Website"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>

        {/* Contact info */}
        <div className="text-center text-primary-foreground/90 mb-8">
          <p className="font-medium">www.grupoaltevita.com.br</p>
          <p>@grupoaltevita</p>
          <p className="mt-2">Brasília - DF</p>
        </div>

        {/* Legal notice */}
        <div className="max-w-md text-center">
          <p className="text-xs text-primary-foreground/70 leading-relaxed border-t border-primary-foreground/20 pt-6">
            <strong>Aviso Legal:</strong> Este guia é informativo e não substitui aconselhamento médico profissional. 
            Consulte sempre um neurologista ou geriatra.
          </p>
        </div>
      </div>

      {/* AI Chat Section */}
      <div className="flex justify-center">
        <AIChatSection />
      </div>

      {/* Navigation buttons */}
      <div className="bg-primary-foreground/10 py-6 px-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Button 
            variant="outline" 
            onClick={onShowIndex}
            className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <BookOpen className="h-4 w-4" />
            Ver Índice
          </Button>
          <Button 
            onClick={onRestart}
            className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Home className="h-4 w-4" />
            Voltar à Capa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookEnd;
