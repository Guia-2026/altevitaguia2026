import AlertBox from "../AlertBox";

const Chapter5Nutrition = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <p className="text-lg text-foreground/80 leading-relaxed">
          <strong className="text-primary">Desafio:</strong> Manter peso e hidratação com texturas seguras e modificadas. 
          As receitas a seguir são nutritivas, saborosas e seguras para quem tem dificuldade de deglutição.
        </p>
      </div>

      {/* Recipe 1 */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/20">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🥤</span>
            <div>
              <h3 className="text-lg font-bold text-primary">Smoothie "Mente Ativa"</h3>
              <p className="text-sm text-muted-foreground">Fácil de Engolir</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">📝 Ingredientes:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• 1/2 abacate</li>
              <li>• 1 xícara de frutas vermelhas congeladas</li>
              <li>• 200ml de leite de amêndoas</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">👨‍🍳 Preparo:</h4>
            <p className="text-foreground/80 text-sm">Bata até ficar cremoso.</p>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Rico em antioxidantes e gorduras boas para o cérebro.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe 2 */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/20">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍠</span>
            <div>
              <h3 className="text-lg font-bold text-primary">Purê Energético de Batata-Doce</h3>
              <p className="text-sm text-muted-foreground">Nutritivo e Anti-inflamatório</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">📝 Ingredientes:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• Batata-doces cozidas</li>
              <li>• Manteiga</li>
              <li>• Gengibre ralado (anti-inflamatório)</li>
            </ul>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Use processador para garantir textura lisa, sem grumos que causem engasgo.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe 3 */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/20">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🥥</span>
            <div>
              <h3 className="text-lg font-bold text-primary">Gelatina Hidratante de Água de Coco</h3>
              <p className="text-sm text-muted-foreground">Hidratação Sólida</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">📝 Ingredientes:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• 500ml de água de coco</li>
              <li>• Gelatina incolor</li>
            </ul>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Ideal para idosos que não sentem sede. Hidratação sólida e segura.
            </p>
          </div>
        </div>
      </div>

      <AlertBox type="info" title="Lembre-se">
        Estas receitas são sugestões. Sempre consulte um nutricionista para adequar a dieta às necessidades individuais do residente.
      </AlertBox>
    </div>
  );
};

export default Chapter5Nutrition;
