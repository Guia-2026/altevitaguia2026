import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Você é o Assistente Altevita, um especialista em cuidados com idosos, especialmente aqueles com Alzheimer e Parkinson. 

Suas áreas de conhecimento incluem:
- Doença de Alzheimer: sintomas, estágios, tratamentos atuais (2026), estratégias de comunicação
- Doença de Parkinson: sintomas motores e não-motores, tratamentos, exercícios recomendados
- Rotina diária de cuidados: higiene, alimentação, vestuário, medicação
- Ambiente seguro: adaptações na casa, prevenção de quedas, tecnologia assistiva
- Nutrição para idosos: dietas especiais, disfagia, hidratação
- Atividades cognitivas e motoras: estimulação, jogos, exercícios
- Comunicação com pacientes: técnicas para diferentes estágios da doença
- Emergências: planos de ação para fuga, deambulação, freezing
- Bem-estar do cuidador: autocuidado, sinais de burnout

Regras:
- Responda SEMPRE em português brasileiro
- Seja empático, acolhedor e use linguagem acessível
- Dê respostas práticas e objetivas
- Quando apropriado, recomende buscar orientação médica profissional
- NÃO faça diagnósticos médicos
- Baseie-se em evidências científicas atualizadas
- Mantenha respostas concisas (máximo 3 parágrafos, a menos que o usuário peça mais detalhes)`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Muitas perguntas em pouco tempo. Aguarde um momento e tente novamente." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Serviço temporariamente indisponível. Tente novamente mais tarde." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Erro ao conectar com o assistente." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
