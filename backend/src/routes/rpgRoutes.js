// ============================================================================
//  rpgRoutes.js  —  As ROTAS da API (o que o frontend chama)
// ============================================================================

// PASSO 1 — Importe o que precisamos:
//   import { Router } from "express";
//   import { personagens } from "../models/personagens.js";
//   import { Personagem } from "../models/Personagem.js";
//   import { simularBatalha } from "../batalha.js";


// PASSO 2 — const router = Router();


// PASSO 3 — GET /personagens: devolve a lista formatada.
//   router.get("/personagens", (req, res) => {
//     res.json(Personagem.paraLista(personagens));   // <- método ESTÁTICO
//   });


// PASSO 4 — POST /batalha: recebe { id1, id2 } e devolve { vencedor, log }.
//   router.post("/batalha", (req, res) => {
//     const { id1, id2 } = req.body;
//     const lutador1 = personagens[id1];
//     const lutador2 = personagens[id2];
//     if (!lutador1 || !lutador2) return res.status(400).json({ erro: "Personagem inválido" });
//     if (id1 === id2) return res.status(400).json({ erro: "Escolha dois personagens diferentes" });
//     lutador1.resetar();          // repõe vida/mana antes de lutar
//     lutador2.resetar();
//     res.json(simularBatalha(lutador1, lutador2));
//   });


// PASSO 5 — Exporte o router no final:
//   export default router;
