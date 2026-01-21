import { cn } from "@/lib/utils";
import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

interface AlertBoxProps {
  type?: "info" | "warning" | "tip";
  title?: string;
  children: ReactNode;
  className?: string;
}

const AlertBox = ({ type = "info", title, children, className }: AlertBoxProps) => {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    tip: Lightbulb,
  };

  const styles = {
    info: "border-l-primary bg-accent",
    warning: "border-l-secondary bg-muted",
    tip: "border-l-primary bg-accent",
  };

  const Icon = icons[type];

  return (
    <div className={cn("border-l-4 rounded-r-lg p-4", styles[type], className)}>
      <div className="flex items-start gap-3">
        <Icon className={cn(
          "h-5 w-5 flex-shrink-0 mt-0.5",
          type === "warning" ? "text-secondary" : "text-primary"
        )} />
        <div className="flex-1">
          {title && (
            <p className="font-semibold text-foreground mb-1">{title}</p>
          )}
          <div className="text-foreground/80 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
