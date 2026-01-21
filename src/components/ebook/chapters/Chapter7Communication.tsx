import AlertBox from "../AlertBox";

const Chapter7Communication = () => {
  return (
    <div className="space-y-8">
      {/* Alzheimer Communication */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🧠</span>
          <div>
            <h3 className="text-xl font-bold text-primary">Para Alzheimer</h3>
            <p className="text-sm text-muted-foreground">Validar e Acolher</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              ⭐ Regra de Ouro
            </h4>
            <p className="text-foreground/80">
              Não confronte a realidade dele. Se ele diz que "vai trabalhar", <strong>não discuta</strong>.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">✅ Ação:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-accent/50 p-3 rounded-lg">
                <span className="text-xl">💬</span>
                <div>
                  <p className="text-sm text-foreground/80">
                    <strong>Valide a emoção:</strong>
                  </p>
                  <p className="text-primary italic text-sm mt-1">
                    "Você gostava muito do seu trabalho, né?"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-accent/50 p-3 rounded-lg">
                <span className="text-xl">🔄</span>
                <div>
                  <p className="text-sm text-foreground/80">
                    <strong>Redirecione a atenção:</strong>
                  </p>
                  <p className="text-primary italic text-sm mt-1">
                    "Me conte sobre seus colegas."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold text-foreground mb-2">🗣️ Linguagem:</h4>
            <p className="text-foreground/80 text-sm">
              Use frases curtas. O <strong className="text-primary">tom de voz calmo</strong> é mais importante que as palavras.
            </p>
          </div>
        </div>
      </div>

      {/* Parkinson Communication */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🤲</span>
          <div>
            <h3 className="text-xl font-bold text-primary">Para Parkinson</h3>
            <p className="text-sm text-muted-foreground">Paciência e Ritmo</p>
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              ⭐ Regra de Ouro
            </h4>
            <p className="text-foreground/80">
              Respeite o tempo de resposta. O raciocínio pode estar intacto, mas a fala é lenta (<strong className="text-primary">Bradifrenia</strong>).
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-3">✅ Ação:</h4>
            <div className="bg-accent/50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">⏱️</span>
                <p className="text-foreground/80">
                  Conte mentalmente até <strong className="text-primary">10</strong> após fazer uma pergunta.
                </p>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Não atropele o silêncio.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold text-foreground mb-2">📢 Voz:</h4>
            <p className="text-foreground/80 text-sm">
              Estimule o residente a <strong className="text-primary">"falar alto"</strong>, como se falasse para alguém na outra sala, combatendo a voz baixa (hipofonia).
            </p>
          </div>
        </div>
      </div>

      <AlertBox type="tip" title="Lembre-se">
        A comunicação eficaz é a base do cuidado. Paciência e empatia transformam interações difíceis em momentos de conexão.
      </AlertBox>
    </div>
  );
};

export default Chapter7Communication;
