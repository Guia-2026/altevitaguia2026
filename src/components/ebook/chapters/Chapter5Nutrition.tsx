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

      {/* Thickeners and Consistencies Section */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-secondary/30">
        <div className="bg-secondary/20 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">📊</span>
            <div>
              <h3 className="text-xl font-bold text-foreground">Guia de Consistências para Disfagia</h3>
              <p className="text-sm text-muted-foreground">Classificação Internacional IDDSI</p>
            </div>
          </div>
        </div>
        <div className="p-5 space-y-5">
          {/* Consistency levels */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">🥄 Níveis de Consistência para Líquidos:</h4>
            <div className="grid gap-3">
              <div className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-primary">Nível 0 - Líquido Fino</p>
                <p className="text-sm text-foreground/70">Água, chá, café, sucos coados. Flui rapidamente.</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-primary">Nível 1 - Levemente Espesso</p>
                <p className="text-sm text-foreground/70">Mais grosso que água, mas ainda flui. Ex: leite batido com fruta.</p>
              </div>
              <div className="bg-primary/15 p-3 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-primary">Nível 2 - Pouco Espesso</p>
                <p className="text-sm text-foreground/70">Flui lentamente da colher. Ex: vitamina cremosa, iogurte líquido.</p>
              </div>
              <div className="bg-primary/20 p-3 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-primary">Nível 3 - Moderadamente Espesso</p>
                <p className="text-sm text-foreground/70">Pode ser bebido de copo, mas não flui facilmente. Ex: mel, creme.</p>
              </div>
              <div className="bg-primary/25 p-3 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-primary">Nível 4 - Extremamente Espesso</p>
                <p className="text-sm text-foreground/70">Precisa de colher, não flui. Ex: purê, pudim firme.</p>
              </div>
            </div>
          </div>

          {/* Thickeners */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">🧪 Tipos de Espessantes:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Espessantes Industriais</p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• <strong>À base de amido:</strong> Resource® ThickenUp, Nutilis®</li>
                  <li>• <strong>À base de goma:</strong> ThickenUp Clear®, Thick & Easy®</li>
                  <li>• Seguir dosagem do fabricante</li>
                </ul>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <p className="font-medium text-foreground mb-1">Espessantes Naturais</p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• <strong>Amido de milho:</strong> 1-2 colheres/200ml</li>
                  <li>• <strong>Fécula de batata:</strong> mais suave</li>
                  <li>• <strong>Gelatina:</strong> para líquidos gelados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Table */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">📏 Tabela de Conversão de Medidas:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-2 text-left text-foreground font-semibold">Consistência</th>
                    <th className="border border-border p-2 text-center text-foreground font-semibold">Amido de Milho</th>
                    <th className="border border-border p-2 text-center text-foreground font-semibold">Espessante Industrial</th>
                    <th className="border border-border p-2 text-center text-foreground font-semibold">Gelatina</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card">
                    <td className="border border-border p-2 text-foreground/80 font-medium">Nível 1 - Levemente Espesso</td>
                    <td className="border border-border p-2 text-center text-foreground/70">½ col. chá / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">½ medida / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">—</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-2 text-foreground/80 font-medium">Nível 2 - Pouco Espesso</td>
                    <td className="border border-border p-2 text-center text-foreground/70">1 col. chá / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">1 medida / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">—</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border border-border p-2 text-foreground/80 font-medium">Nível 3 - Moderadamente Espesso</td>
                    <td className="border border-border p-2 text-center text-foreground/70">1½ col. chá / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">1½ medida / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">3g / 100ml</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-2 text-foreground/80 font-medium">Nível 4 - Extremamente Espesso</td>
                    <td className="border border-border p-2 text-center text-foreground/70">2 col. chá / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">2 medidas / 100ml</td>
                    <td className="border border-border p-2 text-center text-foreground/70">5g / 100ml</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">
              * Valores aproximados. Ajuste conforme necessário e sempre teste antes de servir. 
              col. = colher | 1 medida = dosador do fabricante
            </p>
          </div>

          {/* Tips */}
          <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
            <h4 className="font-semibold text-destructive mb-2">⚠️ Cuidados Importantes:</h4>
            <ul className="text-sm text-foreground/80 space-y-1">
              <li>• A consistência deve ser prescrita por fonoaudiólogo após avaliação</li>
              <li>• Teste a consistência antes de servir - use o "teste da colher"</li>
              <li>• Líquidos muito espessos podem causar desidratação</li>
              <li>• Reavaliar periodicamente - a disfagia pode melhorar ou piorar</li>
              <li>• Mantenha o idoso sentado a 90° durante e após as refeições</li>
            </ul>
          </div>
        </div>
      </div>

      <AlertBox type="warning" title="Atenção">
        A consistência ideal varia para cada pessoa. Sempre consulte um fonoaudiólogo para avaliação da deglutição antes de modificar a dieta.
      </AlertBox>

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
              <li>• 2 batatas-doces médias</li>
              <li>• 1 colher de sopa de manteiga</li>
              <li>• 1 colher de chá de gengibre ralado (anti-inflamatório)</li>
              <li>• Sal a gosto</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">👨‍🍳 Preparo:</h4>
            <ol className="space-y-1 text-foreground/80 text-sm list-decimal list-inside">
              <li>Cozinhe as batatas-doces em água até ficarem bem macias</li>
              <li>Escorra e descasque enquanto ainda quentes</li>
              <li>Coloque no processador com a manteiga e o gengibre</li>
              <li>Bata até obter uma textura completamente lisa</li>
              <li>Tempere com sal e sirva morno</li>
            </ol>
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
              <li>• 12g de gelatina incolor (1 envelope)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">👨‍🍳 Preparo:</h4>
            <ol className="space-y-1 text-foreground/80 text-sm list-decimal list-inside">
              <li>Hidrate a gelatina em 100ml de água de coco fria por 5 minutos</li>
              <li>Aqueça o restante da água de coco (400ml) sem ferver</li>
              <li>Misture a gelatina hidratada na água morna até dissolver completamente</li>
              <li>Despeje em forminhas ou travessa</li>
              <li>Leve à geladeira por no mínimo 4 horas</li>
            </ol>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Ideal para idosos que não sentem sede. Hidratação sólida e segura.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe 4 */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/20">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍗</span>
            <div>
              <h3 className="text-lg font-bold text-primary">Mousse de Frango Cremoso</h3>
              <p className="text-sm text-muted-foreground">Alto Teor Proteico</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">📝 Ingredientes:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• 200g de peito de frango cozido e desfiado</li>
              <li>• 2 colheres de sopa de cream cheese</li>
              <li>• 100ml de caldo de frango (sem pedaços)</li>
              <li>• 1 colher de chá de azeite</li>
              <li>• Sal e ervas finas a gosto</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">👨‍🍳 Preparo:</h4>
            <ol className="space-y-1 text-foreground/80 text-sm list-decimal list-inside">
              <li>Coloque todos os ingredientes no processador</li>
              <li>Bata por 3-4 minutos até obter textura de mousse</li>
              <li>Passe por uma peneira fina para garantir suavidade</li>
              <li>Ajuste a consistência com mais caldo se necessário</li>
              <li>Sirva em temperatura ambiente ou levemente aquecido</li>
            </ol>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Excelente fonte de proteína. Pode ser usado como recheio de pão de forma sem casca.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe 5 */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/20">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍌</span>
            <div>
              <h3 className="text-lg font-bold text-primary">Mingau Nutritivo de Banana</h3>
              <p className="text-sm text-muted-foreground">Café da Manhã Completo</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">📝 Ingredientes:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• 1 banana madura</li>
              <li>• 3 colheres de sopa de aveia em flocos finos</li>
              <li>• 200ml de leite (ou bebida vegetal)</li>
              <li>• 1 colher de chá de mel</li>
              <li>• Pitada de canela</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">👨‍🍳 Preparo:</h4>
            <ol className="space-y-1 text-foreground/80 text-sm list-decimal list-inside">
              <li>Amasse bem a banana com um garfo até virar purê</li>
              <li>Em uma panela, aqueça o leite com a aveia em fogo baixo</li>
              <li>Mexa constantemente por 5 minutos até engrossar</li>
              <li>Adicione a banana amassada e misture bem</li>
              <li>Finalize com mel e canela, sirva morno</li>
            </ol>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Rico em fibras e potássio. Ajuste a consistência com mais leite se preferir mais líquido.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe 6 */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/20">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🥕</span>
            <div>
              <h3 className="text-lg font-bold text-primary">Creme de Legumes Aveludado</h3>
              <p className="text-sm text-muted-foreground">Almoço Nutritivo</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">📝 Ingredientes:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• 1 cenoura média</li>
              <li>• 1 batata média</li>
              <li>• 1/2 abobrinha</li>
              <li>• 500ml de caldo de legumes</li>
              <li>• 2 colheres de sopa de creme de leite</li>
              <li>• Sal e noz-moscada a gosto</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">👨‍🍳 Preparo:</h4>
            <ol className="space-y-1 text-foreground/80 text-sm list-decimal list-inside">
              <li>Descasque e corte os legumes em cubos pequenos</li>
              <li>Cozinhe no caldo até ficarem bem macios (cerca de 20 min)</li>
              <li>Bata tudo no liquidificador até ficar homogêneo</li>
              <li>Passe por uma peneira para remover qualquer grumo</li>
              <li>Volte ao fogo, adicione o creme de leite e tempere</li>
            </ol>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Varie os legumes conforme a estação. Evite vegetais fibrosos como vagem e aspargo.
            </p>
          </div>
        </div>
      </div>

      {/* Recipe 7 */}
      <div className="bg-card rounded-xl overflow-hidden border-2 border-primary/20">
        <div className="bg-primary/10 p-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">🍮</span>
            <div>
              <h3 className="text-lg font-bold text-primary">Flan de Abóbora com Coco</h3>
              <p className="text-sm text-muted-foreground">Sobremesa Nutritiva</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">📝 Ingredientes:</h4>
            <ul className="space-y-1 text-foreground/80 text-sm">
              <li>• 200g de abóbora cabotiá cozida</li>
              <li>• 200ml de leite de coco</li>
              <li>• 2 ovos</li>
              <li>• 3 colheres de sopa de açúcar mascavo</li>
              <li>• 1/2 colher de chá de canela</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2">👨‍🍳 Preparo:</h4>
            <ol className="space-y-1 text-foreground/80 text-sm list-decimal list-inside">
              <li>Bata a abóbora cozida com o leite de coco até ficar liso</li>
              <li>Adicione os ovos, açúcar e canela, bata mais um pouco</li>
              <li>Despeje em forminhas untadas</li>
              <li>Asse em banho-maria a 180°C por 40 minutos</li>
              <li>Deixe esfriar e desenforme gelado</li>
            </ol>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm text-primary font-medium">
              💡 Rico em betacaroteno e vitamina A. Textura macia ideal para disfagia.
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
