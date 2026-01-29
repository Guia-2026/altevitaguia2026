import { AlertTriangle, Pill, Calendar, Clock, FileText, ShieldAlert, Droplets, Heart, Brain, Activity } from "lucide-react";
import AlertBox from "../AlertBox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Chapter6Medication = () => {
  return (
    <div className="space-y-8">
      {/* Warning */}
      <div className="bg-destructive/10 rounded-xl p-5 border border-destructive/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">Atenção</h4>
            <p className="text-foreground/80">
              Erros de medicação são a <strong>maior causa de internações evitáveis</strong>. 
              Estudos mostram que <strong>50% dos idosos</strong> tomam medicamentos incorretamente.
            </p>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Tecnologia de Dispensação 2026</h3>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Use dispensadores eletrônicos ou alarmes no celular. <strong className="text-primary">Evite confiar apenas na memória</strong>.
        </p>
        <div className="bg-accent/50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-foreground mb-2">📱 Aplicativo Recomendado</h4>
          <div className="flex items-center gap-3">
            <span className="text-3xl">💊</span>
            <div>
              <p className="font-semibold text-primary">App Cuidame</p>
              <p className="text-sm text-foreground/80">Controle completo de medicamentos com alertas e compartilhamento familiar</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm">📱 Alarmes no celular</span>
          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm">💊 Porta-comprimidos digital</span>
          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm">🔔 Lembretes de voz</span>
          <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm">📊 Relatórios de adesão</span>
        </div>
      </div>

      {/* Organization System */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Sistema de Organização</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-primary/5 p-4 rounded-lg text-center">
            <span className="text-3xl mb-2 block">🌅</span>
            <h4 className="font-semibold text-foreground text-sm">Manhã</h4>
            <p className="text-xs text-foreground/70 mt-1">Caixa/cor AMARELA</p>
          </div>
          <div className="bg-primary/5 p-4 rounded-lg text-center">
            <span className="text-3xl mb-2 block">☀️</span>
            <h4 className="font-semibold text-foreground text-sm">Tarde</h4>
            <p className="text-xs text-foreground/70 mt-1">Caixa/cor LARANJA</p>
          </div>
          <div className="bg-primary/5 p-4 rounded-lg text-center">
            <span className="text-3xl mb-2 block">🌙</span>
            <h4 className="font-semibold text-foreground text-sm">Noite</h4>
            <p className="text-xs text-foreground/70 mt-1">Caixa/cor AZUL</p>
          </div>
        </div>

        <AlertBox type="tip" title="Dica de Organização">
          Separe os medicamentos da semana todo domingo. Tire uma foto do esquema completo 
          e envie para um familiar de confiança como backup.
        </AlertBox>
      </div>

      {/* Transdermal Patches */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Pill className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Novas Formas Farmacêuticas</h3>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Em 2026, priorize (sob prescrição) medicamentos em <strong className="text-primary">Adesivos Transdérmicos (Patches)</strong> para pacientes com disfagia.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-accent/50 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">✅ Vantagens dos Patches</h4>
            <ul className="space-y-1 text-sm text-foreground/80">
              <li>• Liberação contínua (menos picos)</li>
              <li>• Não passa pelo estômago</li>
              <li>• Ideal para disfagia</li>
              <li>• Menor risco de esquecimento</li>
            </ul>
          </div>
          <div className="bg-accent/50 p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">⚠️ Cuidados</h4>
            <ul className="space-y-1 text-sm text-foreground/80">
              <li>• Fazer rodízio de local</li>
              <li>• Pele limpa e seca</li>
              <li>• Evitar áreas com pelos</li>
              <li>• Não cortar o adesivo</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent/50 p-4 rounded-lg flex items-start gap-3">
          <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-1">Mapa de Rodízio</h4>
            <p className="text-sm text-foreground/80">
              Marque no calendário o local do corpo onde o adesivo foi colado. 
              Sugestão de rotação: <strong>Braço D → Braço E → Costas D → Costas E → Abdômen D → Abdômen E</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Drug Interactions */}
      <div className="bg-card rounded-xl p-6 border-2 border-destructive/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
            <ShieldAlert className="h-5 w-5 text-destructive" />
          </div>
          <h3 className="text-lg font-bold text-destructive">Interações Perigosas</h3>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Medicamento</TableHead>
                <TableHead className="font-semibold">Evitar com</TableHead>
                <TableHead className="font-semibold">Risco</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Anticoagulantes (Varfarina)</TableCell>
                <TableCell>AINEs, Vitamina K (folhas verdes)</TableCell>
                <TableCell className="text-destructive">Sangramento</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Anti-hipertensivos</TableCell>
                <TableCell>AINEs, Descongestionantes</TableCell>
                <TableCell className="text-destructive">Pressão descontrolada</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Levodopa</TableCell>
                <TableCell>Proteínas, Ferro, Vitamina B6</TableCell>
                <TableCell className="text-destructive">Reduz absorção</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Donepezila (Alzheimer)</TableCell>
                <TableCell>Anticolinérgicos</TableCell>
                <TableCell className="text-destructive">Anula efeito</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sedativos/Ansiolíticos</TableCell>
                <TableCell>Álcool, outros sedativos</TableCell>
                <TableCell className="text-destructive">Depressão respiratória</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <AlertBox type="warning" title="Atenção com Fitoterápicos" className="mt-4">
          Ginkgo biloba, Erva de São João e Ginseng podem interagir gravemente com medicamentos. 
          <strong> Sempre informe o médico sobre TUDO que o paciente ingere.</strong>
        </AlertBox>
      </div>

      {/* Administration Techniques */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Droplets className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Técnicas de Administração</h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="crushing">
            <AccordionTrigger className="text-foreground hover:no-underline">
              <span className="flex items-center gap-2">
                <span className="text-xl">💊</span>
                Triturar Comprimidos
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              <div className="space-y-3">
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <p className="font-semibold text-destructive text-sm mb-1">⛔ NUNCA triture:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Comprimidos de liberação prolongada (XR, SR, LA)</li>
                    <li>• Cápsulas com microgrânulos</li>
                    <li>• Medicamentos com revestimento entérico</li>
                    <li>• Comprimidos sublinguais</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="font-semibold text-primary text-sm mb-1">✅ Como triturar corretamente:</p>
                  <ul className="text-sm space-y-1">
                    <li>1. Use triturador próprio (não colheres)</li>
                    <li>2. Misture em papinha ou purê (não líquidos)</li>
                    <li>3. Administre imediatamente após triturar</li>
                    <li>4. Limpe o triturador entre medicamentos diferentes</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="liquids">
            <AccordionTrigger className="text-foreground hover:no-underline">
              <span className="flex items-center gap-2">
                <span className="text-xl">🥤</span>
                Medicamentos Líquidos
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              <div className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    Use seringa dosadora (mais precisa que colher)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    Agite bem suspensões antes de medir
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    Administre lentamente (evita engasgo)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    Verifique refrigeração necessária após aberto
                  </li>
                </ul>
                <div className="bg-accent p-3 rounded-lg">
                  <p className="text-sm"><strong>Dica:</strong> Para disfagia, peça ao médico versões em gel ou gotas.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="timing">
            <AccordionTrigger className="text-foreground hover:no-underline">
              <span className="flex items-center gap-2">
                <span className="text-xl">⏰</span>
                Horários e Alimentação
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="font-semibold text-sm mb-2">🍽️ COM alimentos:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Anti-inflamatórios</li>
                    <li>• Metformina</li>
                    <li>• Suplementos de ferro</li>
                    <li>• Alguns antibióticos</li>
                  </ul>
                </div>
                <div className="bg-accent p-3 rounded-lg">
                  <p className="font-semibold text-sm mb-2">🚫 SEM alimentos (jejum):</p>
                  <ul className="text-sm space-y-1">
                    <li>• Levotiroxina (30min antes)</li>
                    <li>• Levodopa (proteínas)</li>
                    <li>• Bifosfonatos (30min antes)</li>
                    <li>• Alguns antibióticos</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Condition-Specific Medications */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Alzheimer's */}
        <div className="bg-card rounded-xl p-6 border-2 border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Alzheimer</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">💊 Medicamentos Comuns</h4>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li><strong>Donepezila:</strong> 1x/dia, à noite</li>
                <li><strong>Rivastigmina:</strong> 2x/dia ou patch</li>
                <li><strong>Memantina:</strong> 1-2x/dia</li>
              </ul>
            </div>
            
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-foreground/80">
                <strong>⚠️ Efeitos colaterais comuns:</strong> Náusea, diarreia, tontura. 
                Geralmente melhoram em 2-3 semanas.
              </p>
            </div>

            <div className="bg-destructive/10 p-3 rounded-lg">
              <p className="text-sm text-foreground/80">
                <strong>🚫 Evitar:</strong> Anticolinérgicos (anti-histamínicos, antidepressivos tricíclicos) 
                que anulam o efeito.
              </p>
            </div>
          </div>
        </div>

        {/* Parkinson's */}
        <div className="bg-card rounded-xl p-6 border-2 border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Parkinson</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">💊 Medicamentos Comuns</h4>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li><strong>Levodopa/Carbidopa:</strong> 3-4x/dia</li>
                <li><strong>Pramipexol:</strong> 3x/dia</li>
                <li><strong>Rotigotina:</strong> Patch 1x/dia</li>
              </ul>
            </div>
            
            <div className="bg-accent p-3 rounded-lg">
              <p className="text-sm text-foreground/80">
                <strong>⏰ Timing crítico:</strong> Levodopa deve ser tomada em 
                <strong> horários exatos</strong> para evitar flutuações motoras.
              </p>
            </div>

            <div className="bg-destructive/10 p-3 rounded-lg">
              <p className="text-sm text-foreground/80">
                <strong>🥩 Proteína:</strong> Tomar Levodopa <strong>30-60min ANTES</strong> das refeições 
                ou 2h depois (proteína compete pela absorção).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Storage Guidelines */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Heart className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Armazenamento Correto</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">🌡️</span>
              <div>
                <h4 className="font-semibold text-sm">Temperatura</h4>
                <p className="text-sm text-foreground/70">15-25°C, longe de luz solar</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">💧</span>
              <div>
                <h4 className="font-semibold text-sm">Umidade</h4>
                <p className="text-sm text-foreground/70">Evite banheiros (vapor)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">❄️</span>
              <div>
                <h4 className="font-semibold text-sm">Refrigeração</h4>
                <p className="text-sm text-foreground/70">Insulina, alguns colírios</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">📅</span>
              <div>
                <h4 className="font-semibold text-sm">Validade</h4>
                <p className="text-sm text-foreground/70">Verifique mensalmente</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🔒</span>
              <div>
                <h4 className="font-semibold text-sm">Segurança</h4>
                <p className="text-sm text-foreground/70">Longe do alcance (confusão)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">📦</span>
              <div>
                <h4 className="font-semibold text-sm">Embalagem</h4>
                <p className="text-sm text-foreground/70">Mantenha na original</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Protocol */}
      <div className="bg-destructive/5 rounded-xl p-6 border-2 border-destructive/30">
        <h3 className="text-lg font-bold text-destructive mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Protocolo de Emergência Medicamentosa
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">🤢 Suspeita de Intoxicação</h4>
            <ol className="text-sm text-foreground/80 space-y-1 list-decimal list-inside">
              <li>NÃO provoque vômito</li>
              <li>Ligue para o CEATOX: 0800-722-6001</li>
              <li>Tenha em mãos: nome, dose, horário</li>
              <li>Leve embalagens ao hospital</li>
            </ol>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <h4 className="font-semibold text-foreground mb-2">💊 Dose Esquecida</h4>
            <ol className="text-sm text-foreground/80 space-y-1 list-decimal list-inside">
              <li>Se lembrar logo: tome normalmente</li>
              <li>Se próximo da próxima: pule a esquecida</li>
              <li>NUNCA dobre a dose</li>
              <li>Registre o ocorrido</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Record Keeping */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-bold text-primary mb-4">📋 Ficha de Controle (Modelo)</h3>
        <div className="bg-muted p-4 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-foreground">Medicamento:</p>
              <p className="text-foreground/70">_______________</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Dose:</p>
              <p className="text-foreground/70">_______________</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Horário:</p>
              <p className="text-foreground/70">_______________</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Com/Sem alimento:</p>
              <p className="text-foreground/70">_______________</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-foreground/70">
              <strong>Observações:</strong> Efeitos colaterais, interações, médico responsável, data início/fim
            </p>
          </div>
        </div>
      </div>

      <AlertBox type="warning" title="Importante">
        Nunca altere dosagens ou horários sem orientação médica. Este guia é informativo. 
        Em caso de dúvidas, consulte sempre o médico ou farmacêutico.
      </AlertBox>
    </div>
  );
};

export default Chapter6Medication;
