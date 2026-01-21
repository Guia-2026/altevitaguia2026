import { useState, useEffect } from "react";
import Header from "@/components/ebook/Header";
import Navigation from "@/components/ebook/Navigation";
import Footer from "@/components/ebook/Footer";
import SectionCard from "@/components/ebook/SectionCard";
import AlertBox from "@/components/ebook/AlertBox";
import ConditionCard from "@/components/ebook/ConditionCard";
import ProgressIndicator from "@/components/ebook/ProgressIndicator";
import { 
  Brain, 
  Droplets, 
  UtensilsCrossed, 
  Shirt, 
  Home, 
  BedDouble, 
  Bath, 
  Move,
  Lightbulb,
  CheckCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import brainIllustration from "@/assets/brain-illustration.png";
import bathroomSafety from "@/assets/bathroom-safety.png";
import feedingCare from "@/assets/feeding-care.png";
import bedroomSafety from "@/assets/bedroom-safety.png";

const Index = () => {
  const [activeSection, setActiveSection] = useState("condicoes");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollProgress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const element = document.getElementById(activeSection);
    if (element) {
      const offset = 250;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-accent rounded-2xl p-6 md:p-8 text-center animate-fade-in">
            <p className="text-foreground/80 leading-relaxed">
              Este guia serve como um recurso de apoio para familiares e cuidadores, 
              alinhado à missão do Grupo Altevita de promover <strong className="text-primary">saúde</strong>, 
              <strong className="text-primary"> moradia</strong> e <strong className="text-primary">bem-estar</strong>.
            </p>
          </div>
        </div>

        {/* Section 1: Understanding Conditions */}
        <section id="condicoes" className="max-w-4xl mx-auto mb-12 scroll-mt-64">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Entendendo as Condições
            </h2>
          </div>

          <AlertBox type="info" className="mb-6">
            Contexto visual: Usamos ilustrações limpas e esquemáticas para facilitar a compreensão.
          </AlertBox>

          <div className="grid md:grid-cols-2 gap-6">
            <ConditionCard
              title="Doença de Alzheimer"
              description="O Alzheimer causa a morte progressiva de células cerebrais, levando à perda de memória e confusão."
              whatHappens="A atrofia cerebral afeta áreas responsáveis pela linguagem e memória."
              symptoms="Esquecimento de fatos recentes, repetição de perguntas e desorientação temporal."
              image={brainIllustration}
            />
            <ConditionCard
              title="Doença de Parkinson"
              description="Distúrbio neurológico que afeta o movimento devido à falta de dopamina."
              whatHappens="Degeneração na substância negra do cérebro."
              symptoms="Tremores em repouso, rigidez muscular e lentidão nos movimentos (bradicinesia)."
              image={brainIllustration}
            />
          </div>
        </section>

        {/* Section 2: Daily Routine Protocols */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Protocolos de Rotina
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">O Dia a Dia do cuidado</p>

          {/* Hygiene */}
          <div id="higiene" className="scroll-mt-64 mb-6">
            <SectionCard 
              title="Higiene e Banho" 
              subtitle="A hora do banho pode ser estressante. O objetivo é segurança e autonomia assistida."
              icon={<Droplets className="h-6 w-6" />}
            >
              <div className="overflow-hidden rounded-lg mb-6">
                <img 
                  src={bathroomSafety} 
                  alt="Segurança no banheiro" 
                  className="w-full h-48 object-contain bg-muted"
                />
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="alzheimer" className="border-border">
                  <AccordionTrigger className="text-primary font-semibold hover:no-underline">
                    Para pacientes com Alzheimer
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Mantenha uma rotina fixa para o banho</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Explique cada passo ("agora vamos lavar o braço")</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Use toalhas de cor contrastante com a parede para facilitar a percepção visual</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="parkinson" className="border-border">
                  <AccordionTrigger className="text-primary font-semibold hover:no-underline">
                    Para pacientes com Parkinson
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Utilize cadeiras de banho higiênicas se houver desequilíbrio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Instale dispensadores de sabão líquido (mais fáceis de manusear que barras escorregadias)</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>

          {/* Feeding */}
          <div id="alimentacao" className="scroll-mt-64 mb-6">
            <SectionCard 
              title="Alimentação" 
              subtitle="A disfagia (dificuldade de engolir) é um risco em ambos os casos."
              icon={<UtensilsCrossed className="h-6 w-6" />}
            >
              <div className="overflow-hidden rounded-lg mb-6">
                <img 
                  src={feedingCare} 
                  alt="Cuidados com alimentação" 
                  className="w-full h-48 object-contain bg-muted"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-accent rounded-lg p-4">
                  <h5 className="font-semibold text-primary mb-2">Adaptação</h5>
                  <p className="text-sm text-foreground/80">
                    Use talheres com cabos engrossados (para facilitar a pega em caso de tremor) 
                    e copos com recorte nasal.
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-4">
                  <h5 className="font-semibold text-primary mb-2">Ambiente</h5>
                  <p className="text-sm text-foreground/80">
                    Reduza distrações (TV desligada) para que o paciente com Alzheimer foque na refeição.
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-4">
                  <h5 className="font-semibold text-primary mb-2">Postura</h5>
                  <p className="text-sm text-foreground/80">
                    Mantenha o paciente sentado a 90º para evitar engasgos.
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Clothing */}
          <div id="vestuario" className="scroll-mt-64">
            <SectionCard 
              title="Vestuário" 
              icon={<Shirt className="h-6 w-6" />}
            >
              <div className="space-y-4">
                <AlertBox type="tip" title="Dica de Praticidade">
                  Substitua botões pequenos e zíperes difíceis por velcro ou elásticos.
                </AlertBox>
                <AlertBox type="info" title="Para pacientes com Alzheimer">
                  Ofereça escolhas limitadas (duas opções de camisa) para evitar ansiedade na decisão.
                </AlertBox>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* Section 3: Environment Adaptation */}
        <section id="ambiente" className="max-w-4xl mx-auto mb-12 scroll-mt-64">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Adaptação do Ambiente
            </h2>
          </div>
          <p className="text-muted-foreground mb-6">Segurança Doméstica</p>

          <AlertBox type="warning" title="Prioridade" className="mb-6">
            A prevenção de quedas é a prioridade número um. Um ambiente seguro prolonga a autonomia.
          </AlertBox>

          {/* Bedroom */}
          <div id="quarto" className="scroll-mt-64 mb-6">
            <SectionCard 
              title="Quarto" 
              icon={<BedDouble className="h-6 w-6" />}
            >
              <div className="overflow-hidden rounded-lg mb-6">
                <img 
                  src={bedroomSafety} 
                  alt="Segurança no quarto" 
                  className="w-full h-48 object-contain bg-muted"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <h5 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    Iluminação
                  </h5>
                  <p className="text-sm text-foreground/80">
                    Instale luzes de presença (sensores de movimento) no caminho entre a cama e o banheiro.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h5 className="font-semibold text-foreground flex items-center gap-2 mb-2">
                    <BedDouble className="h-4 w-4 text-primary" />
                    Cama
                  </h5>
                  <p className="text-sm text-foreground/80">
                    A altura deve permitir que o paciente sente e apoie os pés no chão 
                    (evite camas muito altas ou muito baixas).
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Bathroom */}
          <div id="banheiro" className="scroll-mt-64 mb-6">
            <SectionCard 
              title="Banheiro" 
              subtitle="O local de maior risco na casa."
              icon={<Bath className="h-6 w-6" />}
            >
              <AlertBox type="warning" className="mb-4">
                O banheiro é estatisticamente o local mais perigoso para quedas de idosos.
              </AlertBox>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent rounded-lg p-4">
                  <h5 className="font-semibold text-primary mb-2">Barras de Apoio</h5>
                  <p className="text-sm text-foreground/80">
                    Instale barras ao lado do vaso sanitário e dentro do box. 
                    Devem ser de cor contrastante com o azulejo.
                  </p>
                </div>
                <div className="bg-accent rounded-lg p-4">
                  <h5 className="font-semibold text-primary mb-2">Piso</h5>
                  <p className="text-sm text-foreground/80">
                    Utilize tapetes antiderrapantes fixos. Remova tapetes de tecido soltos 
                    que funcionam como armadilhas para tropeços.
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Circulation */}
          <div id="circulacao" className="scroll-mt-64">
            <SectionCard 
              title="Áreas de Circulação" 
              subtitle="Sala e Corredores"
              icon={<Move className="h-6 w-6" />}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tapetes" className="border-border">
                  <AccordionTrigger className="text-primary font-semibold hover:no-underline">
                    Tapetes
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    Devem ser removidos ou fixados com fita dupla face de alta aderência.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="moveis" className="border-border">
                  <AccordionTrigger className="text-primary font-semibold hover:no-underline">
                    Móveis
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Evite mesas de centro de vidro ou móveis com quinas pontiagudas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Organize os móveis para criar caminhos amplos e desobstruídos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span>Facilite o uso de andadores se necessário</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </SectionCard>
          </div>
        </section>
      </main>

      <Footer />
      <ProgressIndicator progress={progress} />
    </div>
  );
};

export default Index;
