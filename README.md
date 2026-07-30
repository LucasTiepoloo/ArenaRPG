# ⚔️ Arena RPG — Aula de Classes em JavaScript

Batalha de heróis para aprender **Classes, Herança, Métodos Estáticos, Módulos e Strict Mode**.
O **frontend já está pronto**. Você vai construir o **backend** junto com o professor. 💪

## 🚀 Como começar

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>
cd arena-rpg

# 2. Entre no backend e instale as dependências
cd backend
npm install

# 3. Depois de digitar o código, rode o servidor
npm start

# 4. Abra no navegador
http://localhost:3000
```

Enquanto o backend não estiver pronto, a página abre mas mostra
"⚠️ Backend offline". Isso é normal — vamos construí-lo passo a passo!

## 🗂️ Estrutura

```
arena-rpg/
├── frontend/            ← PRONTO (não precisa mexer)
│   ├── index.html
│   ├── style.css
│   └── app.js
└── backend/             ← VOCÊ VAI DIGITAR AQUI
    ├── package.json
    ├── server.js
    └── src/
        ├── batalha.js
        ├── models/
        │   ├── Personagem.js    (classe base)
        │   ├── Heroi.js         (extends + super)
        │   ├── Mago.js          (extends + super)
        │   └── personagens.js   (cria os objetos com new)
        └── routes/
            └── rpgRoutes.js     (as rotas da API)
```

## 🧭 Ordem de construção (siga os `// PASSO` nos arquivos)

1. `models/Personagem.js` — a classe base
2. `models/Heroi.js` — herança com `extends` e `super`
3. `models/Mago.js` — mais herança + método estático
4. `models/personagens.js` — criar os objetos com `new`
5. `batalha.js` — a lógica da luta (polimorfismo)
6. `routes/rpgRoutes.js` — as rotas `GET /personagens` e `POST /batalha`
7. `server.js` — subir o Express

## 🎯 Conceitos praticados
- **Classe**: `class`, `constructor`, `this`, métodos
- **Herança**: `extends`, `super(...)`, `super.metodo()`, override
- **Método estático**: `static` (chamado pela classe, não pelo objeto)
- **Módulos ES**: `import` / `export` (`"type": "module"` no package.json)
- **Strict Mode**: ligado automaticamente porque usamos módulos ES
