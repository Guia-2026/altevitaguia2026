interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator = ({ progress }: ProgressIndicatorProps) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-6 md:w-64 z-50">
      <div className="bg-card rounded-lg shadow-lg border border-border p-3">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground font-medium">Progresso de leitura</span>
          <span className="text-primary font-semibold">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
