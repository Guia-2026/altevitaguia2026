import logoHorizontal from "@/assets/logo-horizontal.png";
import { Instagram, Facebook, Globe, Home, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookEndProps {
  onRestart: () => void;
  onShowIndex: () => void;
}

const BookEnd = ({ onRestart, onShowIndex }: BookEndProps) => {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* Expert quote section */}
      <div className="bg-primary py-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <span className="text-3xl">💡</span>
          </div>
          <p className="text-xl md:text-2xl font-medium italic leading-relaxed mb-4">
            "A tecnologia nos dá olhos onde não podemos estar, mas é o toque humano e a escuta ativa que transformam o cuidado em acolhimento."
          </p>
          <p className="text-primary-foreground/80 text-sm">
            — Dica do Especialista Altevita
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-background text-foreground py-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Completion badge */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <span className="text-4xl">📖</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Leitura Concluída!
            </h2>
            <p className="text-muted-foreground">
              Você completou o Guia de Cuidado e Convivência 2026
            </p>
          </div>

          {/* Logo and social */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border mb-8">
            <img 
              src={logoHorizontal} 
              alt="Grupo Altevita" 
              className="h-16 md:h-20 w-auto mx-auto mb-6"
            />
            
            <p className="text-lg font-medium text-muted-foreground italic mb-6">
              "Honrar a vida e respeitar a própria história."
            </p>
            
            {/* Social links */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <a 
                href="https://instagram.com/grupoaltevita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/grupoaltevita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://grupoaltevita.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              @grupoaltevita | grupoaltevita.com.br
            </p>
            
            <p className="text-sm text-muted-foreground">
              Brasília - DF
            </p>

            {/* QR Code placeholder */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <QrCode className="h-4 w-4" />
                <span>Vídeos Tutoriais no Canal Altevita</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="outline" 
              onClick={onShowIndex}
              className="gap-2"
            >
              Ver Índice
            </Button>
            <Button 
              onClick={onRestart}
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Voltar à Capa
            </Button>
          </div>

          {/* Legal notice */}
          <p className="mt-8 text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
            <strong>Aviso Legal:</strong> Este guia é informativo e não substitui aconselhamento médico profissional. 
            Consulte sempre um neurologista ou geriatra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookEnd;
