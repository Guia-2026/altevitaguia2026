import { Lightbulb, BedDouble } from "lucide-react";
import AlertBox from "../AlertBox";
import bedroomSafety from "@/assets/bedroom-safety.png";

const Chapter6Bedroom = () => {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-xl border border-border">
        <img 
          src={bedroomSafety} 
          alt="Quarto seguro para idosos" 
          className="w-full h-56 object-contain bg-muted p-4"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-foreground text-lg">Iluminação</h4>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A iluminação noturna é crucial para prevenir quedas durante deslocamentos à noite.
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Instale luzes de presença com sensores de movimento
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Ilumine o caminho entre a cama e o banheiro
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Prefira luz amarela suave (menos perturbadora do sono)
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <BedDouble className="h-5 w-5 text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-foreground text-lg">Cama</h4>
          </div>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A altura da cama é determinante para a segurança ao levantar e deitar.
          </p>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Altura ideal: joelhos a 90° quando sentado
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Pés devem apoiar completamente no chão
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              Considere camas articuladas se necessário
            </li>
          </ul>
        </div>
      </div>

      <AlertBox type="tip" title="Organização do Quarto">
        Mantenha apenas móveis essenciais no quarto. Criados-mudos devem ter cantos arredondados 
        e estar firmemente posicionados. Remova fios soltos e objetos no chão.
      </AlertBox>
    </div>
  );
};

export default Chapter6Bedroom;
