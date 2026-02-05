import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Download } from "lucide-react";
import ActivitiesChecklist from "@/components/ebook/ActivitiesChecklist";
import logoHorizontal from "@/assets/logo-horizontal.png";

const PrintChecklist = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("print-mode");
    return () => {
      document.body.classList.remove("print-mode");
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Toolbar - hidden when printing */}
      <div className="print-hide sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao eBook
          </Button>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline"
              onClick={handlePrint}
              className="gap-2"
            >
              <Printer className="h-4 w-4" />
              Imprimir
            </Button>
            <Button 
              onClick={handlePrint}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Salvar como PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Print instructions - hidden when printing */}
      <div className="print-hide max-w-4xl mx-auto px-4 py-4">
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">💡 Dica para salvar como PDF:</p>
          <p>Clique em "Salvar como PDF" ou use Ctrl+P (Cmd+P no Mac). Na janela de impressão, selecione "Salvar como PDF" como destino.</p>
        </div>
      </div>

      {/* Print Content */}
      <div className="print-preview max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-background shadow-xl rounded-lg overflow-hidden p-8 print:shadow-none print:p-4">
          {/* Header with logo */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-primary/20 print:mb-4 print:pb-2">
            <img 
              src={logoHorizontal} 
              alt="Grupo Altevita" 
              className="h-10 print:h-8"
            />
            <div className="text-right">
              <p className="text-sm font-semibold text-primary">Guia de Cuidado 2026</p>
              <p className="text-xs text-muted-foreground">Capítulo 9 — Atividades</p>
            </div>
          </div>

          {/* Checklist content (non-interactive for print) */}
          <ActivitiesChecklist showInteractive={false} />
        </div>
      </div>
    </div>
  );
};

export default PrintChecklist;
