import { Lightbulb, Heart, Shield } from "lucide-react";

const Chapter1Introduction = () => {
  return (
    <div className="space-y-8">
      {/* Hero quote */}
      <div className="text-center py-6">
        <p className="text-xl md:text-2xl text-primary font-medium italic">
          "Honrar a vida e respeitar a própria história."
        </p>
      </div>

      {/* Main intro */}
      <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
        <h3 className="text-xl font-semibold text-primary mb-4">
          A Era da Longevidade Inteligente
        </h3>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Em 2026, o cuidado domiciliar evoluiu. Com os avanços da <strong className="text-primary">Ambient Assisted Living</strong> (Vida Assistida pelo Ambiente) e as novas diretrizes de saúde, a segurança física se une à tecnologia invisível.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Este guia foi elaborado pelo <strong className="text-primary">Grupo Altevita</strong> para apoiar famílias e cuidadores. Nosso objetivo é integrar o rigor técnico ao calor humano, promovendo autonomia e dignidade para quem convive com Alzheimer ou Parkinson.
        </p>
      </div>

      {/* Three pillars */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">Segurança</h4>
          <p className="text-sm text-muted-foreground">
            Ambiente adaptado com tecnologia proativa para prevenir acidentes.
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">Tecnologia</h4>
          <p className="text-sm text-muted-foreground">
            Dispositivos inteligentes que auxiliam sem invadir a rotina.
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-semibold text-foreground mb-2">Afeto</h4>
          <p className="text-sm text-muted-foreground">
            Cuidado humanizado que preserva a dignidade e a história de vida.
          </p>
        </div>
      </div>

      {/* Purpose */}
      <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
        <p className="text-foreground/90 leading-relaxed">
          <strong>Para quem é este guia?</strong> Familiares, cuidadores profissionais e todos que desejam oferecer um cuidado de excelência para pessoas que vivem com Alzheimer ou Parkinson.
        </p>
      </div>
    </div>
  );
};

export default Chapter1Introduction;
