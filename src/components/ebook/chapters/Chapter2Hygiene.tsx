import { CheckCircle } from "lucide-react";
import AlertBox from "../AlertBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bathroomSafety from "@/assets/bathroom-safety.png";

const Chapter2Hygiene = () => {
  return (
    <div className="space-y-8">
      <p className="text-lg text-foreground/80 leading-relaxed">
        A hora do banho pode ser um momento estressante tanto para o paciente quanto para o cuidador. 
        O objetivo principal é garantir <strong className="text-primary">segurança</strong> e promover a <strong className="text-primary">autonomia assistida</strong>.
      </p>

      <div className="overflow-hidden rounded-xl border border-border">
        <img 
          src={bathroomSafety} 
          alt="Equipamentos de segurança para banho" 
          className="w-full h-56 object-contain bg-muted p-4"
        />
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        <AccordionItem value="alzheimer" className="border border-border rounded-xl px-4 bg-card">
          <AccordionTrigger className="text-primary font-semibold hover:no-underline py-4">
            Cuidados para pacientes com Alzheimer
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Rotina fixa:</strong>
                  <span className="text-foreground/80"> Mantenha horários consistentes para o banho.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Comunicação clara:</strong>
                  <span className="text-foreground/80"> Explique cada passo ("agora vamos lavar o braço").</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Contraste visual:</strong>
                  <span className="text-foreground/80"> Use toalhas de cor contrastante com a parede para facilitar a percepção.</span>
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="parkinson" className="border border-border rounded-xl px-4 bg-card">
          <AccordionTrigger className="text-primary font-semibold hover:no-underline py-4">
            Cuidados para pacientes com Parkinson
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Cadeira de banho:</strong>
                  <span className="text-foreground/80"> Utilize cadeiras higiênicas se houver desequilíbrio.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Sabão líquido:</strong>
                  <span className="text-foreground/80"> Instale dispensadores (mais fáceis de manusear que barras escorregadias).</span>
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <AlertBox type="tip" title="Dica do Especialista">
        Manter a água em temperatura morna e testar antes do banho evita queimaduras e desconforto. Pacientes com demência podem ter dificuldade em comunicar desconforto térmico.
      </AlertBox>
    </div>
  );
};

export default Chapter2Hygiene;
