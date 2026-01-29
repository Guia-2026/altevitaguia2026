import { Checkbox } from "@/components/ui/checkbox";

interface Activity {
  name: string;
  audience: "Alzheimer" | "Parkinson" | "Ambos";
  duration: string;
  materials?: string;
}

const activities: Activity[] = [
  { name: "Caixa de Memórias", audience: "Alzheimer", duration: "15-20 min", materials: "Fotos, perfumes, tecidos, objetos pessoais" },
  { name: "Musicoterapia", audience: "Ambos", duration: "15-30 min", materials: "Playlist personalizada, caixa de som" },
  { name: "Separação por Categorias", audience: "Parkinson", duration: "10-15 min", materials: "Meias, pregadores, tampas coloridas" },
  { name: "Cartões de Rotina", audience: "Alzheimer", duration: "10 min", materials: "Cartões com fotos/desenhos das etapas" },
  { name: "Cozinha Assistida", audience: "Ambos", duration: "20-30 min", materials: "Ingredientes, utensílios adaptados" },
  { name: "Cuidar de Plantas", audience: "Ambos", duration: "10-20 min", materials: "Vasos, regador, terra, luvas" },
  { name: "Movimento na Cadeira", audience: "Parkinson", duration: "5-10 min", materials: "Cadeira firme, música ritmada" },
  { name: "Bingo Sensorial", audience: "Alzheimer", duration: "15-20 min", materials: "Itens com texturas/cheiros diferentes" },
  { name: "Arte Simples", audience: "Ambos", duration: "15-25 min", materials: "Papel, canetões, cola, revistas" },
];

const materialsChecklist = [
  { category: "Sensoriais", items: ["Fotos antigas", "Perfumes/essências", "Tecidos variados", "Objetos da profissão"] },
  { category: "Música", items: ["Caixa de som/fone", "Playlist anos 50-70", "Instrumentos simples (chocalho)"] },
  { category: "Motor Fino", items: ["Botões grandes", "Pregadores de roupa", "Tampas coloridas", "Massinha"] },
  { category: "Arte", items: ["Papel A4/cartolina", "Canetões grossos", "Cola bastão", "Revistas para recorte"] },
  { category: "Jardinagem", items: ["Vasos leves", "Regador pequeno", "Bandeja/tapete", "Luvas de jardinagem"] },
  { category: "Cozinha", items: ["Tábua antiderrapante", "Utensílios cabo grosso", "Tigelas com ventosa", "Avental"] },
];

interface ActivitiesChecklistProps {
  showInteractive?: boolean;
}

const ActivitiesChecklist = ({ showInteractive = true }: ActivitiesChecklistProps) => {
  return (
    <div className="space-y-8 print:space-y-6">
      {/* Header */}
      <div className="text-center border-b-2 border-primary/20 pb-4 print:pb-2">
        <h2 className="text-2xl font-bold text-primary print:text-xl">
          📋 Checklist de Atividades
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Capítulo 9 — Atividades Cognitivas e Motoras
        </p>
      </div>

      {/* Activities Table */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3 print:text-base">
          Atividades Disponíveis
        </h3>
        <div className="border rounded-lg overflow-hidden print:border-foreground/20">
          <table className="w-full text-sm">
            <thead className="bg-accent/50 print:bg-muted">
              <tr>
                <th className="p-2 text-left font-medium text-foreground w-8 print:p-1">✓</th>
                <th className="p-2 text-left font-medium text-foreground print:p-1">Atividade</th>
                <th className="p-2 text-left font-medium text-foreground print:p-1 hidden sm:table-cell">Para</th>
                <th className="p-2 text-left font-medium text-foreground print:p-1">Duração</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr 
                  key={activity.name} 
                  className={index % 2 === 0 ? "bg-background" : "bg-accent/20"}
                >
                  <td className="p-2 print:p-1">
                    {showInteractive ? (
                      <Checkbox id={`activity-${index}`} />
                    ) : (
                      <div className="w-4 h-4 border border-foreground/50 rounded-sm" />
                    )}
                  </td>
                  <td className="p-2 print:p-1">
                    <label 
                      htmlFor={showInteractive ? `activity-${index}` : undefined}
                      className="font-medium text-foreground cursor-pointer"
                    >
                      {activity.name}
                    </label>
                    <p className="text-xs text-muted-foreground mt-0.5 print:hidden">
                      {activity.materials}
                    </p>
                  </td>
                  <td className="p-2 print:p-1 hidden sm:table-cell">
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      activity.audience === "Alzheimer" 
                        ? "bg-purple-500/10 text-purple-700 dark:text-purple-300" 
                        : activity.audience === "Parkinson"
                        ? "bg-blue-500/10 text-blue-700 dark:text-blue-300"
                        : "bg-green-500/10 text-green-700 dark:text-green-300"
                    }`}>
                      {activity.audience}
                    </span>
                  </td>
                  <td className="p-2 print:p-1 text-muted-foreground">
                    {activity.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Materials Checklist */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3 print:text-base">
          Materiais Necessários
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 print:grid-cols-3 print:gap-2">
          {materialsChecklist.map((category) => (
            <div 
              key={category.category} 
              className="bg-accent/30 p-3 rounded-lg print:bg-transparent print:border print:border-foreground/20 print:p-2"
            >
              <h4 className="font-medium text-foreground text-sm mb-2 print:text-xs">
                {category.category}
              </h4>
              <ul className="space-y-1.5 print:space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                    {showInteractive ? (
                      <Checkbox id={`material-${item}`} className="h-3.5 w-3.5" />
                    ) : (
                      <div className="w-3 h-3 border border-foreground/50 rounded-sm flex-shrink-0" />
                    )}
                    <label 
                      htmlFor={showInteractive ? `material-${item}` : undefined}
                      className="cursor-pointer"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Quick Reference */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3 print:text-base">
          Referência Rápida Semanal
        </h3>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => (
            <div key={day} className="bg-primary/10 p-2 rounded font-medium text-primary print:bg-transparent print:border print:border-foreground/30">
              {day}
            </div>
          ))}
          {[
            "Música", "Plantas", "Cores", "Música", "Cozinha", "Arte", "Jardim"
          ].map((activity, i) => (
            <div key={i} className="bg-accent/30 p-2 rounded text-foreground/80 print:border print:border-foreground/20">
              {activity}
            </div>
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="print:block">
        <h3 className="text-lg font-semibold text-foreground mb-3 print:text-base">
          Anotações
        </h3>
        <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 min-h-[100px] print:min-h-[80px]">
          <p className="text-xs text-muted-foreground print:hidden">
            Use este espaço para anotar observações sobre as atividades realizadas.
          </p>
          <div className="hidden print:block space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border-b border-foreground/20 h-6" />
            ))}
          </div>
        </div>
      </div>

      {/* Print Button - only shown on screen */}
      <div className="print:hidden flex justify-center">
        <button
          onClick={() => window.print()}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <span>🖨️</span>
          Imprimir Checklist
        </button>
      </div>

      {/* Footer for print */}
      <div className="hidden print:block text-center text-xs text-muted-foreground border-t border-foreground/20 pt-2 mt-4">
        <p>Guia Altevita 2026 — Capítulo 9: Atividades Cognitivas e Motoras</p>
      </div>
    </div>
  );
};

export default ActivitiesChecklist;
