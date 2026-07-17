# Study of Physics

Um experimento visual em HTML, CSS e JavaScript para estudar, de forma simples, a criação de objetos na tela e uma simulação básica de gravidade no navegador.

O projeto permite gerar bolas coloridas em posições aleatórias, acompanhar a quantidade de objetos ativos e observar uma queda com colisão simples no limite inferior da janela.

## Demonstração

Abra o arquivo `index.html` no navegador e clique em **Make a Ball** para criar uma nova bola.

Cada bola:

- nasce no topo da tela;
- recebe uma cor aleatória;
- cai com aceleração simulada;
- quica ao tocar a parte inferior da janela;
- pode ser removida com um clique.

O botão **Clear** remove todas as bolas da tela e reinicia o contador.

## Tecnologias

- HTML5 para a estrutura da página;
- CSS3 para layout, tipografia, botões e estilo das bolas;
- JavaScript puro para manipulação do DOM, contador e animação;
- `requestAnimationFrame` para atualizar a simulação de movimento;
- Google Fonts para a fonte visual da interface.

## Como executar

Não há etapa de build nem instalação de dependências.

1. Clone o repositório:

   ```bash
   git clone https://github.com/lucassPedrozo/Study-of-Physics.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Study-of-Physics
   ```

3. Abra `index.html` diretamente no navegador.

Se preferir executar com um servidor local simples:

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

## Estrutura do projeto

```text
Study-of-Physics/
├── assets/
│   ├── icon.png
│   └── icon.old.jpg
├── index.html
├── script.js
├── style.css
└── Js and Physics/
    ├── assets/
    ├── index.html
    ├── script.js
    └── style.css
```

Arquivos principais:

- `index.html`: define a página, os botões, o contador e os links para CSS/JS.
- `style.css`: centraliza a interface, estiliza os botões, contador e bolas.
- `script.js`: cria as bolas, controla o contador, limpa a tela e aplica a simulação de gravidade.
- `assets/icon.png`: ícone usado como favicon.

A pasta `Js and Physics/` contém uma cópia dos mesmos arquivos da raiz. Para manutenção, a raiz deve ser tratada como a entrada principal do projeto.

## Como funciona

O fluxo principal começa na função `actionClick()`:

1. Um elemento `div` é criado dinamicamente.
2. A classe `ball` é aplicada ao elemento.
3. Uma cor RGB aleatória é definida por `randColor()`.
4. A bola recebe uma posição horizontal aleatória.
5. O contador é incrementado.
6. A função `applyGravity()` inicia a animação.

A animação usa uma velocidade vertical, uma constante de gravidade e um fator de quique. A cada frame, a posição da bola é atualizada. Quando ela atinge a base da janela, a velocidade é invertida e reduzida para simular perda de energia.

## Funcionalidades atuais

- Criação dinâmica de bolas coloridas.
- Posição horizontal aleatória.
- Movimento vertical animado.
- Colisão simples com o chão da viewport.
- Remoção individual ao clicar em uma bola.
- Contador de bolas ativas.
- Limpeza geral da tela.
- Layout centralizado e responsivo.

## Possíveis melhorias

- Ajustar o título e o texto principal da página, que ainda usam conteúdo placeholder.
- Remover a duplicação entre a raiz e a pasta `Js and Physics/`.
- Adicionar controles para gravidade, tamanho, elasticidade e quantidade de bolas.
- Melhorar a física com colisão entre bolas, atrito e massa.
- Pausar e retomar a simulação.
- Adicionar uma captura de tela ou GIF de demonstração ao README.
- Publicar a página com GitHub Pages.

## Status

Projeto experimental e didático, adequado para estudos de DOM, eventos, animação com JavaScript e conceitos iniciais de simulação física em ambiente web.

## Hook para portfólio

**Categoria do projeto:** Experimento web

**Breve descrição:** Simulação interativa em HTML, CSS e JavaScript que cria bolas coloridas na tela e aplica uma lógica simples de gravidade, queda e quique dentro da janela do navegador.

**Contexto:** O projeto foi desenvolvido como um estudo prático de manipulação do DOM, eventos de clique, animação com `requestAnimationFrame` e conceitos iniciais de simulação física em uma interface web simples.

**Resultado:** Uma página estática funcional em que o usuário pode gerar múltiplas bolas, acompanhar a quantidade de objetos ativos, remover elementos individualmente e limpar toda a cena com um botão dedicado.

**Destaques:**

- Criação dinâmica de elementos visuais com JavaScript puro.
- Cores aleatórias para cada bola criada.
- Simulação básica de gravidade e colisão com o chão da viewport.
- Contador em tempo real de objetos ativos.
- Remoção individual por clique e limpeza geral da tela.
- Estrutura leve, sem frameworks e sem etapa de build.

**Stacks:**

- HTML5
- CSS3
- JavaScript
- DOM API
- `requestAnimationFrame`

**Imagens:**

- `assets/[project_images]/img1.jpg`
- `assets/[project_images]/img2.jpg`