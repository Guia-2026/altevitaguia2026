import logoVertical from "@/assets/logo-vertical.png";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { QrCode } from "lucide-react";

// Import all chapter content
import Chapter1Introduction from "./chapters/Chapter1Introduction";
import Chapter2Conditions from "./chapters/Chapter2Conditions";
import Chapter3SmartHome from "./chapters/Chapter3SmartHome";
import Chapter4DailyRoutine from "./chapters/Chapter4DailyRoutine";
import Chapter5Nutrition from "./chapters/Chapter5Nutrition";
import Chapter6Medication from "./chapters/Chapter6Medication";
import Chapter7Communication from "./chapters/Chapter7Communication";
import Chapter8Emergencies from "./chapters/Chapter8Emergencies";
import Chapter9Activities from "./chapters/Chapter9Activities";

const chapters = [
  { id: 1, title: "Introdução", subtitle: "A Era da Longevidade Inteligente", component: <Chapter1Introduction /> },
  { id: 2, title: "Entendendo as Condições", subtitle: "Alzheimer e Parkinson (Contexto 2026)", component: <Chapter2Conditions /> },
  { id: 3, title: "O Ambiente Conectado", subtitle: "A Casa Segura", component: <Chapter3SmartHome /> },
  { id: 4, title: "Protocolos de Rotina Diária", subtitle: "Higiene, Vestuário e Alimentação", component: <Chapter4DailyRoutine /> },
  { id: 5, title: "Nutrição", subtitle: "O Prazer de Comer (+ Receitas)", component: <Chapter5Nutrition /> },
  { id: 6, title: "Gestão Medicamentosa", subtitle: "Tecnologia e Cuidados 2026", component: <Chapter6Medication /> },
  { id: 7, title: "Comunicação", subtitle: "Estratégias Distintas", component: <Chapter7Communication /> },
  { id: 8, title: "Plano de Ação em Emergências", subtitle: "Fuga, Deambulação e Freezing", component: <Chapter8Emergencies /> },
  { id: 9, title: "Atividades Cognitivas e Motoras", subtitle: "Estimulação e Bem-estar", component: <Chapter9Activities /> },
];

const PrintView = () => {
  return (
    <div className="print-view bg-background text-foreground">
      {/* Cover Page */}
      <div className="print-page cover-page flex flex-col items-center justify-center text-center p-8">
        <img 
          src={logoVertical} 
          alt="Grupo Altevita" 
          className="h-32 mb-8"
        />
        <h1 className="text-4xl font-bold text-primary mb-4">
          GUIA DE CUIDADO E CONVIVÊNCIA 2026
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Alzheimer e Parkinson: Segurança, Tecnologia e Afeto na Rotina
        </p>
        <div className="mt-auto text-sm text-muted-foreground">
          <p>Grupo Altevita - Residenciais Geriátricos</p>
          <p>Brasília - DF</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="print-page toc-page p-8">
        <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
          Sumário
        </h2>
        <ul className="space-y-3">
          {chapters.map((chapter) => (
            <li key={chapter.id} className="flex items-baseline gap-2">
              <span className="text-primary font-bold">{chapter.id}.</span>
              <span className="font-medium">{chapter.title}</span>
              {chapter.subtitle && (
                <span className="text-muted-foreground text-sm">— {chapter.subtitle}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Chapters */}
      {chapters.map((chapter) => (
        <div key={chapter.id} className="print-page chapter-page p-8">
          <div className="chapter-header mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Capítulo {chapter.id}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{chapter.title}</h2>
            {chapter.subtitle && (
              <p className="text-muted-foreground">{chapter.subtitle}</p>
            )}
          </div>
          <div className="chapter-content print-content">
            {chapter.component}
          </div>
        </div>
      ))}

      {/* Back Cover */}
      <div className="print-page back-cover-page bg-primary text-primary-foreground p-8 flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <p className="text-xl italic mb-4">
            "A tecnologia nos dá olhos onde não podemos estar, mas é o toque humano e a escuta ativa que transformam o cuidado em acolhimento."
          </p>
          <p className="text-sm opacity-80">— Dica do Especialista Altevita</p>
        </div>

        <img 
          src={logoHorizontal} 
          alt="Grupo Altevita" 
          className="h-16 mb-6 brightness-0 invert"
        />

        <p className="font-semibold mb-4">Residenciais Geriátricos</p>

        <div className="bg-primary-foreground rounded-lg p-4 mb-6">
          <QrCode className="h-16 w-16 text-primary mx-auto mb-2" />
          <p className="text-xs text-primary">Vídeos Tutoriais</p>
        </div>

        <div className="text-sm opacity-90 mb-6">
          <p>www.grupoaltevita.com.br</p>
          <p>@grupoaltevita</p>
          <p className="mt-2">Brasília - DF</p>
        </div>

        <p className="text-xs opacity-70 border-t border-primary-foreground/20 pt-4 max-w-md">
          <strong>Aviso Legal:</strong> Este guia é informativo e não substitui aconselhamento médico profissional. 
          Consulte sempre um neurologista ou geriatra.
        </p>
      </div>
    </div>
  );
};

export default PrintView;
