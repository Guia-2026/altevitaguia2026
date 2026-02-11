import { AlertTriangle, Pill, Calendar, Clock, FileText, ShieldAlert, Droplets, Heart, Brain, Activity } from "lucide-react";
import AlertBox from "../AlertBox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import cuidameIcon from "@/assets/cuidame-icon.png";

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

      {/* Technology - Cuidame App Showcase */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border-2 border-primary/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary">Tecnologia de Dispensação 2026</h3>
            <p className="text-sm text-foreground/70">Gestão integrada de cuidados</p>
          </div>
        </div>
        
        <p className="text-foreground/80 leading-relaxed mb-6">
          Em 2026, a gestão medicamentosa vai além de simples alarmes. 
          <strong className="text-primary"> Evite confiar apenas na memória</strong> — use tecnologia que integra toda a equipe de cuidados.
        </p>

        {/* Cuidame Hero */}
        <div className="bg-card rounded-xl p-6 border border-primary/20 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center p-3">
              <img src={cuidameIcon} alt="Cuidame" className="w-full h-full object-contain" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary">App Cuidame</h4>
              <p className="text-foreground/70">Gestão Integrada de Cuidados de Saúde</p>
            </div>
          </div>
          
          <p className="text-foreground/80 leading-relaxed mb-4">
            O <strong className="text-primary">Cuidame</strong> centraliza planejamento, execução, registro e comunicação do cuidado, 
            reduzindo ruído operacional e aumentando <strong>segurança, rastreabilidade e qualidade</strong> do acompanhamento de saúde.
          </p>

          {/* Access Profiles */}
          <div className="bg-accent/50 rounded-lg p-4 mb-4">
            <h5 className="font-semibold text-foreground mb-3">👥 Perfis de Acesso</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-card p-3 rounded-lg text-center">
                <span className="text-2xl mb-1 block">👑</span>
                <p className="text-xs font-semibold text-foreground">Administrador</p>
              </div>
              <div className="bg-card p-3 rounded-lg text-center">
                <span className="text-2xl mb-1 block">👨‍⚕️</span>
                <p className="text-xs font-semibold text-foreground">Gestor de Cuidados</p>
              </div>
              <div className="bg-card p-3 rounded-lg text-center">
                <span className="text-2xl mb-1 block">🤝</span>
                <p className="text-xs font-semibold text-foreground">Cuidador</p>
              </div>
              <div className="bg-card p-3 rounded-lg text-center">
                <span className="text-2xl mb-1 block">❤️</span>
                <p className="text-xs font-semibold text-foreground">Paciente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="text-xl">⚡</span>
          Funcionalidades do Cuidame
        </h4>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Prescrições */}
          <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xl">💊</span>
              </div>
              <h5 className="font-semibold text-foreground">Prescrições Médicas</h5>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Registro e acompanhamento de medicamentos, rotinas de cuidado e intervenções não farmacológicas, 
              com <strong>horários, recorrência e observações</strong>.
            </p>
          </div>

          {/* Agenda */}
          <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xl">📅</span>
              </div>
              <h5 className="font-semibold text-foreground">Agenda e Escalas</h5>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Gerenciamento de consultas, compromissos e escalas de cuidadores com 
              <strong> visão em calendário e notificações automáticas</strong>.
            </p>
          </div>

          {/* Registro de Cuidados */}
          <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <h5 className="font-semibold text-foreground">Execução e Registro</h5>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Cuidadores registram atividades diárias, <strong>sinais vitais, evoluções e intercorrências</strong>, 
              com histórico auditável completo.
            </p>
          </div>

          {/* Acompanhamento Clínico */}
          <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xl">🏥</span>
              </div>
              <h5 className="font-semibold text-foreground">Acompanhamento Clínico</h5>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Centralização de registros de consultas, exames e avaliações de enfermagem, 
              incluindo <strong>anexos e histórico organizado</strong>.
            </p>
          </div>

          {/* Comunicação */}
          <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xl">💬</span>
              </div>
              <h5 className="font-semibold text-foreground">Comunicação Integrada</h5>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Chat em grupo entre cuidadores, enfermeiros e familiares, com 
              <strong> troca de mensagens, arquivos e notificações</strong>.
            </p>
          </div>

          {/* Conteúdos Educativos */}
          <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-xl">🎓</span>
              </div>
              <h5 className="font-semibold text-foreground">Conteúdos Educativos</h5>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Trilhas e aulas em vídeo atribuídas ao paciente conforme plano, 
              com <strong>controle de progresso e certificação</strong>.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
          <h5 className="font-bold text-primary mb-4 flex items-center gap-2">
            <span className="text-xl">✨</span>
            Benefícios para o Cuidado
          </h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🔒</span>
              </div>
              <h6 className="font-semibold text-foreground text-sm">Segurança</h6>
              <p className="text-xs text-foreground/70 mt-1">Controle de permissões e rastreabilidade total</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <h6 className="font-semibold text-foreground text-sm">Dashboard</h6>
              <p className="text-xs text-foreground/70 mt-1">Indicadores de adesão e qualidade do cuidado</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h6 className="font-semibold text-foreground text-sm">Família Conectada</h6>
              <p className="text-xs text-foreground/70 mt-1">Todos informados em tempo real</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 bg-card rounded-xl p-6 border-2 border-primary/30 text-center">
          <p className="text-foreground/80 mb-2">
            <strong className="text-primary">Reduza erros de medicação</strong> e mantenha toda a equipe alinhada.
          </p>
          <p className="text-sm text-foreground/70 mb-5">
            O Cuidame transforma a gestão de saúde em uma experiência organizada, segura e colaborativa.
          </p>
          
          <p className="text-sm font-semibold text-foreground mb-3">📲 Baixe agora o App Cuidame</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://apps.apple.com/br/app/cuidame-gestor-de-sa%C3%BAde/id6744027992" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-80">Disponível na</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
            
            <a 
              href="https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-none opacity-80">Disponível no</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
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
                <TableCell>Proteínas em excesso, Ferro</TableCell>
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
                    <li>• Ferro (se causar enjoo; idealmente em jejum com vitamina C)</li>
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
