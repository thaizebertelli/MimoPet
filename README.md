# MimoPet Web

Aplicação web desenvolvida em **React** e **Vite** para simulação de um fluxo completo de checkout (carrinho, formulário de pagamento com validação e telas de conclusão) de um e-commerce pet.  
O sistema permite ao usuário gerenciar os itens no carrinho, preencher dados de pagamento em tempo real com máscaras e validações, e receber o resultado do processamento (aprovação ou detecção de fraude).

---

## Objetivo

O projeto foi desenvolvido como Projeto Final do Módulo de Front-end / React.  
O objetivo foi construir uma SPA (Single Page Application) responsiva, aplicando conceitos avançados de estado local, validação de formulários com Zod e React Hook Form, simulação assíncrona e boas práticas de Git, sem a utilização de estado global (Redux/Context API).

---

## Funcionalidades

- **Gerenciamento do Carrinho**: Visualização de produtos, alteração de quantidades e remoção de itens com atualização dinâmica do resumo do pedido.
- **Header Dinâmico**: Indicador visual de etapas do checkout e contador de itens na sacola.
- **Formulário de Pagamento com Máscaras e Filtros**:
  - Máscara para número de cartão com limitação de 16 dígitos e separação visual a cada 4 números.
  - Filtro para data de validade (`MM/AA`) com formatação automática da barra `/`.
  - Limitação do CVV para 3 dígitos numéricos.
  - Limitação do nome do titular para apenas letras e até 50 caracteres.
- **Detecção de Fraude (Regra de Negócio)**: Identificação automática de cartões com 16 dígitos idênticos (ex: `1111 1111 1111 1111`), direcionando para a tela de erro.
- **Simulação Assíncrona de Compra**: Hook customizado com estado de carregamento e spinner visual antes da finalização.
- **Telas de Conclusão**: Telas exclusivas para "Compra Aprovada" e "Tentativa de Golpe" com direcionamento correto de navegação.
- **Interface Responsiva (Mobile-First)**: Layout adaptado para smartphones, tablets e desktops.

---

## Tecnologias Utilizadas

- **React** (Vite)
- **React Router Dom** (Navegação SPA)
- **React Hook Form** (Gerenciamento de formulários)
- **Zod** & **@hookform/resolvers** (Validação de esquemas e dados)
- **CSS3** (Variáveis globais, Flexbox, CSS Grid, Mídia Queries)
- **SVGs nativos** (Ícones vetoriais em todas as telas)

---

## Conceitos Aplicados

- Componentização e reuso de componentes UI
- Hooks nativos (`useState`, `useEffect`) e Custom Hooks (`usePagamento`)
- Manipulação e transformação de dados em formulários
- Validação de esquemas com Zod (`regex`, `transform`, `refine`)
- Estilização com CSS modularizado e variáveis de ambiente
- Roteamento declarativo com React Router Dom
- Gitflow e fluxo de branches (`feature/*`, `develop`, `main`)
- HTML Semântico e Acessibilidade (atributos `aria-label`)

---

## Estrutura do Projeto

```text
mimopet/
│
├── index.html
├── package.json
├── vite.config.js
├── README.md
│
└── src/
    ├── assets/
    │   ├── img/
    │   └── styles/
    │       └── index.css
    │
    ├── components/
    │   ├── Header.jsx
    │   ├── ItemCarrinho.jsx
    │   └── ResumoCompra.jsx
    │
    ├── data/
    │   └── produtos.js
    │
    ├── hooks/
    │   └── usePagamento.js
    │
    ├── pages/
    │   ├── Carrinho.jsx
    │   ├── Pagamento.jsx
    │   ├── Sucesso.jsx
    │   └── Falha.jsx
    │
    ├── App.jsx
    └── main.jsx
```
---

## Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/thaizebertelli/MimoPet.git](https://github.com/thaizebertelli/MimoPet.git)

   1. Acesse a pasta da aplicação:
   cd mimopet

   2.Instale as dependências:
   npm install

   3.Inicie o servidor de desenvolvimento:
   npm run dev

   3.Abra a URL informada no terminal (ex: http://localhost:5173) no navegador.

---

## Funcionamento da Aplicação

O usuário visualiza os produtos no Carrinho e pode alterar a quantidade ou remover itens.

Ao clicar em "Continuar para pagamento", é direcionado para a tela de Pagamento.

O usuário preenche os dados do cartão, formatados automaticamente em tempo real.

O formulário valida os dados utilizando Zod:

Cartões com 16 dígitos diferentes aprovam a transação.

Cartões com 16 dígitos idênticos são identificados como fraude.

O sistema exibe um estado visual de processamento (spinner).

O usuário é redirecionado para a tela de Sucesso ("Compra Aprovada!") ou Falha ("tentativa de golpe").

---

## Organização Kanban

O projeto foi organizado utilizando a metodologia Kanban através do Trello.

As tarefas foram separadas nas colunas:

- Backlog
- A fazer
- Em andamento
- Concluído

Link do quadro Kaban:
https://trello.com/b/xfOOOYPZ/mimopet

---

## Controle de Versão

O repositório foi organizado utilizando Git e GitHub, seguindo a estratégia de branches:

main: Versão final e estável do projeto.

develop: Branch de integração das funcionalidades.

feature/*: Branches dedicadas para telas e refinamentos específicos (ex: feature/tela-carrinho, feature/tela-pagamento, feature/telas-resultado).

## Vídeo de Apresentação

O vídeo de demonstração do projeto pode ser acessado pelo link abaixo:

Assistir vídeo de apresentação (Em breve)

## Desenvolvido por

Thaize de Paula Bertelli

Mini Projeto — Desenvolvimento Front-End / React

Setembro • 2026
