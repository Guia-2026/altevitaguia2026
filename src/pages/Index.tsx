import { useState, useCallback } from "react";
import { Brain, Droplets, UtensilsCrossed, Shirt, Home, BedDouble, Bath, Move } from "lucide-react";
import BookCover from "@/components/ebook/BookCover";
import TableOfContents, { chapters } from "@/components/ebook/TableOfContents";
import ChapterPage from "@/components/ebook/ChapterPage";
import BookEnd from "@/components/ebook/BookEnd";

// Chapter content components
import Chapter1Conditions from "@/components/ebook/chapters/Chapter1Conditions";
import Chapter2Hygiene from "@/components/ebook/chapters/Chapter2Hygiene";
import Chapter3Feeding from "@/components/ebook/chapters/Chapter3Feeding";
import Chapter4Clothing from "@/components/ebook/chapters/Chapter4Clothing";
import Chapter5Environment from "@/components/ebook/chapters/Chapter5Environment";
import Chapter6Bedroom from "@/components/ebook/chapters/Chapter6Bedroom";
import Chapter7Bathroom from "@/components/ebook/chapters/Chapter7Bathroom";
import Chapter8Circulation from "@/components/ebook/chapters/Chapter8Circulation";

type ViewState = "cover" | "index" | "chapter" | "end";

const chapterContent: Record<string, { component: React.ReactNode; icon: React.ReactNode; title: string; subtitle?: string }> = {
  condicoes: {
    component: <Chapter1Conditions />,
    icon: <Brain className="h-6 w-6" />,
    title: "Entendendo as Condições",
    subtitle: "Alzheimer e Parkinson"
  },
  higiene: {
    component: <Chapter2Hygiene />,
    icon: <Droplets className="h-6 w-6" />,
    title: "Higiene e Banho",
    subtitle: "Protocolos de Rotina"
  },
  alimentacao: {
    component: <Chapter3Feeding />,
    icon: <UtensilsCrossed className="h-6 w-6" />,
    title: "Alimentação",
    subtitle: "Cuidados com Disfagia"
  },
  vestuario: {
    component: <Chapter4Clothing />,
    icon: <Shirt className="h-6 w-6" />,
    title: "Vestuário",
    subtitle: "Praticidade no Vestir"
  },
  ambiente: {
    component: <Chapter5Environment />,
    icon: <Home className="h-6 w-6" />,
    title: "Adaptação do Ambiente",
    subtitle: "Segurança Doméstica"
  },
  quarto: {
    component: <Chapter6Bedroom />,
    icon: <BedDouble className="h-6 w-6" />,
    title: "Quarto",
    subtitle: "Iluminação e Mobiliário"
  },
  banheiro: {
    component: <Chapter7Bathroom />,
    icon: <Bath className="h-6 w-6" />,
    title: "Banheiro",
    subtitle: "Prevenção de Quedas"
  },
  circulacao: {
    component: <Chapter8Circulation />,
    icon: <Move className="h-6 w-6" />,
    title: "Áreas de Circulação",
    subtitle: "Sala e Corredores"
  },
};

const Index = () => {
  const [view, setView] = useState<ViewState>("cover");
  const [currentChapter, setCurrentChapter] = useState("condicoes");

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
    setCurrentChapter("condicoes");
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
