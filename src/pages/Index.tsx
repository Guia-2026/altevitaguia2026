import { useState, useCallback } from "react";
import { Heart, Brain, Home, ClipboardList, UtensilsCrossed, Pill, MessageCircle, AlertTriangle, Sparkles } from "lucide-react";
import BookCover from "@/components/ebook/BookCover";
import TableOfContents, { chapters } from "@/components/ebook/TableOfContents";
import ChapterPage from "@/components/ebook/ChapterPage";
import BookEnd from "@/components/ebook/BookEnd";

// Chapter content components
import Chapter1Introduction from "@/components/ebook/chapters/Chapter1Introduction";
import Chapter2Conditions from "@/components/ebook/chapters/Chapter2Conditions";
import Chapter3SmartHome from "@/components/ebook/chapters/Chapter3SmartHome";
import Chapter4DailyRoutine from "@/components/ebook/chapters/Chapter4DailyRoutine";
import Chapter5Nutrition from "@/components/ebook/chapters/Chapter5Nutrition";
import Chapter6Medication from "@/components/ebook/chapters/Chapter6Medication";
import Chapter7Communication from "@/components/ebook/chapters/Chapter7Communication";
import Chapter8Emergencies from "@/components/ebook/chapters/Chapter8Emergencies";
import Chapter9Activities from "@/components/ebook/chapters/Chapter9Activities";

type ViewState = "cover" | "index" | "chapter" | "end";

const chapterContent: Record<string, { component: React.ReactNode; icon: React.ReactNode; title: string; subtitle?: string }> = {
  introducao: {
    component: <Chapter1Introduction />,
    icon: <Heart className="h-6 w-6" />,
    title: "Introdução",
    subtitle: "A Era da Longevidade Inteligente"
  },
  condicoes: {
    component: <Chapter2Conditions />,
    icon: <Brain className="h-6 w-6" />,
    title: "Entendendo as Condições",
    subtitle: "Alzheimer e Parkinson (Contexto 2026)"
  },
  ambiente: {
    component: <Chapter3SmartHome />,
    icon: <Home className="h-6 w-6" />,
    title: "O Ambiente Conectado",
    subtitle: "A Casa Segura"
  },
  rotina: {
    component: <Chapter4DailyRoutine />,
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Protocolos de Rotina Diária",
    subtitle: "Higiene, Vestuário e Alimentação"
  },
  nutricao: {
    component: <Chapter5Nutrition />,
    icon: <UtensilsCrossed className="h-6 w-6" />,
    title: "Nutrição",
    subtitle: "O Prazer de Comer (+ Receitas)"
  },
  medicacao: {
    component: <Chapter6Medication />,
    icon: <Pill className="h-6 w-6" />,
    title: "Gestão Medicamentosa",
    subtitle: "Tecnologia e Cuidados 2026"
  },
  comunicacao: {
    component: <Chapter7Communication />,
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Comunicação",
    subtitle: "Estratégias Distintas"
  },
  emergencias: {
    component: <Chapter8Emergencies />,
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Plano de Ação em Emergências",
    subtitle: "Fuga, Deambulação e Freezing"
  },
  atividades: {
    component: <Chapter9Activities />,
    icon: <Sparkles className="h-6 w-6" />,
    title: "Atividades Cognitivas e Motoras",
    subtitle: "Estimulação e Bem-estar"
  },
};

const Index = () => {
  const [view, setView] = useState<ViewState>("cover");
  const [currentChapter, setCurrentChapter] = useState("introducao");

  const chapterIds = chapters.map(c => c.id);
  const currentChapterIndex = chapterIds.indexOf(currentChapter);
  const totalChapters = chapters.length;

  const handleStart = useCallback(() => {
    setView("index");
  }, []);

  const handleSelectChapter = useCallback((chapterId: string) => {
    setCurrentChapter(chapterId);
    setView("chapter");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentChapterIndex > 0) {
      setCurrentChapter(chapterIds[currentChapterIndex - 1]);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      setView("index");
    }
  }, [currentChapterIndex, chapterIds]);

  const handleNext = useCallback(() => {
    if (currentChapterIndex < totalChapters - 1) {
      setCurrentChapter(chapterIds[currentChapterIndex + 1]);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      setView("end");
    }
  }, [currentChapterIndex, totalChapters, chapterIds]);

  const handleShowIndex = useCallback(() => {
    setView("index");
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentChapter("introducao");
    setView("cover");
  }, []);

  const currentContent = chapterContent[currentChapter];

  // Render based on current view
  if (view === "cover") {
    return <BookCover onStart={handleStart} />;
  }

  if (view === "index") {
    return (
      <TableOfContents 
        onSelectChapter={handleSelectChapter} 
        currentChapter={currentChapter}
      />
    );
  }

  if (view === "end") {
    return <BookEnd onRestart={handleRestart} onShowIndex={handleShowIndex} />;
  }

  // Chapter view
  return (
    <ChapterPage
      chapterNumber={currentChapterIndex + 1}
      totalChapters={totalChapters}
      title={currentContent.title}
      subtitle={currentContent.subtitle}
      icon={currentContent.icon}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onShowIndex={handleShowIndex}
      hasPrevious={currentChapterIndex > 0}
      hasNext={currentChapterIndex < totalChapters - 1}
    >
      {currentContent.component}
    </ChapterPage>
  );
};

export default Index;
