import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ConditionCardProps {
  title: string;
  description: string;
  whatHappens: string;
  symptoms: string;
  image?: string;
  className?: string;
}

const ConditionCard = ({ 
  title, 
  description, 
  whatHappens, 
  symptoms, 
  image,
  className 
}: ConditionCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-xl overflow-hidden card-shadow animate-slide-up",
      className
    )}>
      {image && (
        <div className="h-48 overflow-hidden bg-accent">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain p-4"
          />
        </div>
      )}
      <div className="p-6">
        <h4 className="text-xl font-semibold text-primary mb-3">{title}</h4>
        <p className="text-foreground/80 mb-4 leading-relaxed">{description}</p>
        
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground mb-1">O que acontece:</p>
            <p className="text-sm text-foreground/80">{whatHappens}</p>
          </div>
          
          <div className="bg-accent rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground mb-1">Sintomas na Rotina:</p>
            <p className="text-sm text-foreground/80">{symptoms}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionCard;
