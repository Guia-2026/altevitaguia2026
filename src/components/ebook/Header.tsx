import logoVertical from "@/assets/logo-vertical.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center text-center">
          <img 
            src={logoVertical} 
            alt="Grupo Altevita - Residenciais Geriátricos" 
            className="h-24 md:h-32 w-auto mb-4"
          />
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
              Guia de Cuidado e Segurança
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Rotina e Ambiente
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Elaborado para familiares e cuidadores
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
