import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const SectionCard = ({ title, subtitle, children, className, icon }: SectionCardProps) => {
  return (
    <div className={cn("bg-card rounded-xl p-6 md:p-8 card-shadow animate-fade-in", className)}>
      <div className="flex items-start gap-4 mb-6">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="prose prose-sm max-w-none text-foreground/90">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
