// ============================================================================
//  server.js  —  Ponto de partida do backend (Express + Módulos ES)
//  Rode com:  npm start
// ============================================================================

// PASSO 1 — Importe o express e as rotas:
//   import express from "express";
//   import rpgRoutes from "./src/routes/rpgRoutes.js";


// PASSO 2 — Crie o app e defina a porta:
//   const app = express();
//   const PORTA = 3000;


// PASSO 3 — CORS simples (deixa o frontend conversar com a API):
//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     res.header("Access-Control-Allow-Methods", "GET, POST");
//     next();
//   });


// PASSO 4 — Middlewares:
//   app.use(express.json());              // entende JSON no corpo
//   app.use(express.static("../frontend"));// serve o frontend pronto


// PASSO 5 — Conecte as rotas com prefixo /api:
//   app.use("/api", rpgRoutes);


// PASSO 6 — Suba o servidor:
//   app.listen(PORTA, () => {
//     console.log(`✅ Arena RPG rodando em http://localhost:${PORTA}`);
//   });
