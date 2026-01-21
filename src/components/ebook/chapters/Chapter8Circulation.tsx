import { CheckCircle } from "lucide-react";
import AlertBox from "../AlertBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Chapter8Circulation = () => {
  return (
    <div className="space-y-8">
      <p className="text-lg text-foreground/80 leading-relaxed">
        Sala, corredores e outras áreas de passagem devem ser cuidadosamente organizados 
        para permitir deslocamento seguro, especialmente para quem usa andadores ou cadeiras de rodas.
      </p>

      <Accordion type="single" collapsible className="w-full space-y-3" defaultValue="tapetes">
        <AccordionItem value="tapetes" className="border border-border rounded-xl px-4 bg-card">
          <AccordionTrigger className="text-primary font-semibold hover:no-underline py-4 text-lg">
            🏠 Tapetes
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <div className="bg-accent rounded-lg p-4 mb-4">
              <p className="text-foreground/80">
                Tapetes soltos são uma das principais causas de quedas em idosos. 
                A recomendação é removê-los completamente.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  <strong className="text-foreground">Opção ideal:</strong> Remova todos os tapetes soltos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  <strong className="text-foreground">Alternativa:</strong> Fixe com fita dupla face de alta aderência
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  <strong className="text-foreground">Evite:</strong> Tapetes com bordas enroladas ou desgastadas
                </span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="moveis" className="border border-border rounded-xl px-4 bg-card">
          <AccordionTrigger className="text-primary font-semibold hover:no-underline py-4 text-lg">
            🪑 Móveis
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Evite mesas de centro de vidro ou com quinas pontiagudas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Organize móveis para criar caminhos amplos e desobstruídos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Facilite o uso de andadores com espaço mínimo de 90cm de largura
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Instale protetores de quina em móveis inevitáveis
                </span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="eletricos" className="border border-border rounded-xl px-4 bg-card">
          <AccordionTrigger className="text-primary font-semibold hover:no-underline py-4 text-lg">
            🔌 Fios e Cabos
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Organize fios junto às paredes usando canaletas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Nunca deixe fios atravessando áreas de passagem
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">
                  Considere tomadas em locais estratégicos para evitar extensões
                </span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <AlertBox type="tip" title="Dica Final">
        Faça um "tour de segurança" pela casa, agachando-se na altura do idoso e observando 
        possíveis obstáculos, reflexos que confundem e áreas mal iluminadas.
      </AlertBox>
    </div>
  );
};

export default Chapter8Circulation;
