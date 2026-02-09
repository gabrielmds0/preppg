# Ideias de Design - Pré Especialização em Paciente Grave

## Abordagem Escolhida: Minimalismo Médico com Ênfase em Urgência

### Design Movement
**Modernismo Crítico** - Uma abordagem que combina a clareza do design minimalista com a urgência visual característica de ambientes médicos críticos. Inspirado na estética do site de referência (Liberdade Médica), mas adaptado para transmitir a seriedade e importância do conteúdo.

### Core Principles

1. **Clareza Hierárquica**: Cada elemento tem um propósito claro. Headlines em branco sobre fundo escuro, com destaques em vermelho para palavras-chave que indicam urgência e importância.

2. **Espaço Respirável**: Uso generoso de whitespace para evitar sobrecarga visual. Seções bem definidas com padding generoso criam uma sensação de profissionalismo e confiança.

3. **Contraste Intencional**: Preto/azul escuro como base, branco para texto principal, vermelho/coral para CTAs e destaques. Este contraste cria uma hierarquia visual clara e direciona a atenção.

4. **Movimento Propositado**: Transições suaves entre seções, hover effects nos botões, e animações de entrada que reforçam a importância do conteúdo sem distrair.

### Color Philosophy

A paleta de cores foi escolhida para transmitir confiança, urgência e profissionalismo:

- **Preto/Azul Escuro (#0F172A ou similar)**: Fundo principal que evoca seriedade, estabilidade e profissionalismo. Ideal para ambientes médicos críticos.
- **Branco (#FFFFFF)**: Texto principal que garante legibilidade máxima e contraste contra o fundo escuro.
- **Vermelho/Coral (#FF6B35 ou similar)**: Destaques, CTAs e palavras-chave que indicam urgência e ação. Transmite energia e importância.
- **Cinza Escuro (#1F2937)**: Cards e elementos secundários para criar profundidade sem quebrar a hierarquia.

### Layout Paradigm

**Assimétrico com Ênfase em Fluxo Vertical**: Em vez de um layout centrado genérico, cada seção tem uma estrutura única que guia o olho do usuário de forma natural. A primeira seção é hero com imagem de fundo e overlay, seguida por seções alternadas com conteúdo à esquerda/direita, criando ritmo visual.

- Seção 1: Hero com imagem de fundo (intubação) e texto grande em branco
- Seção 2: Texto centrado com ênfase na mensagem de urgência
- Seção 3: Grid de conteúdo com cards para os três pilares do método RPP
- Seção 4: Card com foto e informações do professor (fundo escuro)
- Seção 5: Preço em destaque com CTA

### Signature Elements

1. **Linha Vermelha Divisória**: Um elemento visual recorrente que separa seções, reforçando a identidade visual e criando ritmo.

2. **Cards com Bordas Sutis**: Cards com borda vermelha/coral e fundo semi-transparente (glassmorphism) para destacar informações importantes.

3. **Números em Destaque**: Estatísticas e preços em tamanho grande, com fonte bold, para criar impacto visual e facilitar a leitura rápida.

### Interaction Philosophy

- **CTAs em Coral**: Botões com cor coral que se destacam do fundo escuro. Hover effects com sombra e mudança de cor para indicar interatividade.
- **Scroll Suave**: Transições suaves entre seções ao fazer scroll, com fade-in de elementos.
- **Feedback Visual**: Hover effects em cards e elementos interativos para indicar que são clicáveis.

### Animation

- **Fade-in ao Scroll**: Elementos aparecem gradualmente conforme o usuário faz scroll, criando uma sensação de movimento e engajamento.
- **Hover Effects**: Botões e cards ganham sombra e mudança de cor ao passar o mouse.
- **Transições Suaves**: Todas as mudanças de cor e tamanho são suaves (0.3s), nunca abruptas.

### Typography System

- **Headlines (H1, H2, H3)**: Fonte bold (peso 700+), tamanho grande (32px-48px em desktop), branco com destaques em vermelho.
- **Subheadlines**: Fonte regular (peso 400), tamanho médio (16px-20px), branco ou cinza claro.
- **Body Text**: Fonte regular (peso 400), tamanho pequeno (14px-16px), branco ou cinza claro.
- **Font Pairing**: Usar uma fonte moderna e profissional (ex: Poppins, Montserrat, ou similar) para headlines, e uma fonte legível para body text (ex: Inter, Roboto).

---

## Implementação

Esta abordagem será implementada usando React + Vite + Tailwind CSS, com componentes reutilizáveis e um design system coeso que garante consistência visual em toda a página.
