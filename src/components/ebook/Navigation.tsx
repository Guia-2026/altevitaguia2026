import { cn } from "@/lib/utils";
import { Brain, Droplets, UtensilsCrossed, Shirt, Home, BedDouble, Bath, Move } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "condicoes", label: "Condições", icon: Brain },
  { id: "higiene", label: "Higiene", icon: Droplets },
  { id: "alimentacao", label: "Alimentação", icon: UtensilsCrossed },
  { id: "vestuario", label: "Vestuário", icon: Shirt },
  { id: "ambiente", label: "Ambiente", icon: Home },
  { id: "quarto", label: "Quarto", icon: BedDouble },
  { id: "banheiro", label: "Banheiro", icon: Bath },
  { id: "circulacao", label: "Circulação", icon: Move },
];

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="bg-card border-b border-border sticky top-[140px] md:top-[180px] z-40 overflow-x-auto">
      <div className="container mx-auto px-4">
        <ul className="flex items-center gap-1 py-2 min-w-max">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
