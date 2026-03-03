# Produto: preppg
**ID Interno:** `preppg_landing`

## 1. Visão Geral e Stack
- **Objetivo:** Landing page de conversão para vender a Pré-especialização em Paciente Grave, com captação de leads e redirecionamento para checkout.
- **Stack Principal:** React 19 + TypeScript + Vite 7 (SPA), Tailwind CSS v4 (`@tailwindcss/vite`) + tw-animate-css, libs críticas: Framer Motion, shadcn/ui (Radix UI), Lucide React, fetch para webhooks n8n e integração com Google Sheets.
- **Node Version:** Não especificada em `package.json` (campo `engines` ausente).

## 2. Mapeamento Técnico (Onde as coisas estão)
- **Hero Section:** `client/src/pages/Home.tsx` (primeiro `<section>` com comentário `Seção 1: Hero`).
- **Headline/Título Principal:** `client/src/pages/Home.tsx` (`<motion.h1>` com “Pré-especialização em Paciente Grave”).
- **Seção de Preços/Oferta:** `client/src/pages/Home.tsx` (`<section id="pricing">`, bloco “Investimento Único”, valor `R$ 37`).
- **Botões de CTA (Call to Action):** `client/src/pages/Home.tsx` (múltiplos `Button` com `onClick={handleEnrollmentClick}`) + componente reutilizável `client/src/components/ui/button.tsx`.
- **Rodapé/Footer:** `client/src/pages/Home.tsx` (`<footer>` dentro da seção de pricing).
- **Dados/Textos:** Predominantemente hardcoded no JSX (`client/src/pages/Home.tsx` e `client/src/components/EnrollmentModal.tsx`); dado dinâmico principal é a data (`heroDate`) vinda de `client/src/hooks/useGoogleSheetsPreppg.ts` com fallback local.

## 3. Padrões de Código e Estilo (Styleguide)
- **Cores Primárias:** `#E53935` (primary/accent), variações `#EF5350`, `#D32F2F`, `#C62828`; base escura recorrente `#02040a`, `#0A0A0C`, `#0F0F12`; uso intenso de `text-slate-*`, `bg-white/5`, bordas com alpha.
- **Fonte Principal:** `Inter` no body e `Poppins` para headings (definidas em `client/index.html` e aplicadas em `client/src/index.css`).
- **Padrão de Componentes:** Componentes funcionais com hooks (`useState`, hooks customizados), TypeScript com tipagem de props/interfaces, classes utilitárias Tailwind inline, animações com Framer Motion, UI baseada em componentes shadcn/Radix com `class-variance-authority`.

## 4. Regras de Negócio e Restrições (Critical)
- Existem termos proibidos ou obrigatórios? (Ex: "Sempre menciona garantia de 7 dias")
- Não há validação de termos proibidos no código.
- Mensagens comerciais chave estão hardcoded e devem ser preservadas para manter consistência de conversão: “Método RPP”, “Investimento Único”, “Valor Promocional”, “R$ 37”, “Pagamento 100% Seguro”.
- Links externos críticos? (Ex: Checkouts da Hotmart, Links de Whatsapp)
- Checkout: `https://clkdmg.site/pay/preespecializacao` (em `client/src/components/EnrollmentModal.tsx`).
- Webhook de lead (submit do modal): `https://projetolm-n8n.8x0hqh.easypanel.host/webhook/3848f193-6b80-4b4c-a1c6-d966a68d7ac5`.
- Webhook de pageview: `https://projetolm-n8n.8x0hqh.easypanel.host/webhook/pageview` (script em `client/index.html`).
- Fonte de dados da aula (CSV público): `https://docs.google.com/spreadsheets/d/1MCmHqHMDHV4RT1EFL8LLaLeqnpKCWGVvwiCmBA9WVhs/export?format=csv&gid=688339807`.
- Scripts de rastreamento ativos em `client/index.html`: Nemu, Contentsquare e Meta Pixel (`fbq init 1064327147462690`).
- Comportamentos específicos? (Ex: "Botão só aparece após vídeo")
- Todos os CTAs principais abrem o modal (`EnrollmentModal`) via estado local (`isModalOpen`).
- Submit do modal exige `name`, `email`, `phone` e `experience`.
- Ao submeter: envia lead para webhook, injeta UTMs (`utm_*`, `gclid`, `fbclid`, `session_id`) + dados do usuário na URL de checkout e redireciona.
- Em falha no webhook, o fluxo ainda redireciona para checkout (fail-open para não perder venda).
- Data exibida no Hero vem de Google Sheets (`produto = PREPPG`); fallback fixo: `24/02 - 20h`.
