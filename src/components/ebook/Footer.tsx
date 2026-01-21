import logoHorizontal from "@/assets/logo-horizontal.png";
import { Instagram, Facebook, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center text-center">
          <img 
            src={logoHorizontal} 
            alt="Grupo Altevita - Residenciais Geriátricos" 
            className="h-16 md:h-20 w-auto mb-6"
          />
          
          <p className="text-lg font-medium text-muted-foreground italic mb-6 max-w-md">
            "Honrar a vida e respeitar a própria história."
          </p>
          
          <div className="flex items-center gap-4 mb-6">
            <a 
              href="https://instagram.com/grupoaltevita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com/grupoaltevita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://grupoaltevita.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            @grupoaltevita | grupoaltevita.com.br
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong>Aviso Legal:</strong> Este guia é informativo e não substitui aconselhamento médico profissional. 
            Consulte sempre um neurologista ou geriatra.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
