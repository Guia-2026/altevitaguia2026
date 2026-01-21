import AlertBox from "../AlertBox";

const Chapter9Activities = () => {
  return (
    <div className="space-y-8">
      {/* Memory Box - Alzheimer */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">📦</span>
          <div>
            <h3 className="text-xl font-bold text-primary">Caixa de Memórias</h3>
            <p className="text-sm text-muted-foreground">Especialmente para Alzheimer</p>
          </div>
        </div>
        
        <p className="text-foreground/80 leading-relaxed mb-4">
          Reúna objetos sensoriais da história do residente:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <div className="bg-accent/50 p-3 rounded-lg text-center">
            <span className="text-2xl">🌸</span>
            <p className="text-xs text-foreground/80 mt-1">Perfume antigo</p>
          </div>
          <div className="bg-accent/50 p-3 rounded-lg text-center">
            <span className="text-2xl">🔧</span>
            <p className="text-xs text-foreground/80 mt-1">Ferramentas</p>
          </div>
          <div className="bg-accent/50 p-3 rounded-lg text-center">
            <span className="text-2xl">🧵</span>
            <p className="text-xs text-foreground/80 mt-1">Tecidos</p>
          </div>
          <div className="bg-accent/50 p-3 rounded-lg text-center">
            <span className="text-2xl">📷</span>
            <p className="text-xs text-foreground/80 mt-1">Fotos antigas</p>
          </div>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg">
          <p className="text-sm text-primary font-medium">
            💡 O tato e olfato acessam memórias que a visão não alcança.
          </p>
        </div>
      </div>

      {/* Music Therapy - Both */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎵</span>
          <div>
            <h3 className="text-xl font-bold text-primary">Musicoterapia</h3>
            <p className="text-sm text-muted-foreground">Para Alzheimer e Parkinson</p>
          </div>
        </div>
        
        <p className="text-foreground/80 leading-relaxed mb-4">
          Crie playlists com músicas da juventude do residente (<strong className="text-primary">15 aos 25 anos</strong>).
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-accent/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🤲</span>
              <h4 className="font-semibold text-foreground text-sm">Parkinson</h4>
            </div>
            <p className="text-xs text-foreground/80">
              O ritmo ajuda na marcha e coordenação motora.
            </p>
          </div>
          <div className="bg-accent/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🧠</span>
              <h4 className="font-semibold text-foreground text-sm">Alzheimer</h4>
            </div>
            <p className="text-xs text-foreground/80">
              Acalma a agitação e resgata memórias emocionais.
            </p>
          </div>
        </div>
      </div>

      {/* Color Sorting - Parkinson */}
      <div className="bg-card rounded-xl p-6 border-2 border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎨</span>
          <div>
            <h3 className="text-xl font-bold text-primary">Separação de Cores</h3>
            <p className="text-sm text-muted-foreground">Especialmente para Parkinson</p>
          </div>
        </div>
        
        <p className="text-foreground/80 leading-relaxed mb-4">
          Misture botões grandes coloridos e peça para separar por cor.
        </p>
        
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-400 shadow-md" />
          <div className="w-10 h-10 rounded-full bg-blue-400 shadow-md" />
          <div className="w-10 h-10 rounded-full bg-yellow-400 shadow-md" />
          <div className="w-10 h-10 rounded-full bg-green-400 shadow-md" />
          <div className="w-10 h-10 rounded-full bg-purple-400 shadow-md" />
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg">
          <p className="text-sm text-primary font-medium">
            💡 Treina a coordenação motora fina essencial para comer e se vestir.
          </p>
        </div>
      </div>

      <AlertBox type="tip" title="Dica Altevita">
        Adapte as atividades ao gosto pessoal do residente. O importante é estimular de forma prazerosa, sem pressão por resultados.
      </AlertBox>
    </div>
  );
};

export default Chapter9Activities;
