// ============================================================================
//  batalha.js  —  A LÓGICA da luta
//  Aqui vemos POLIMORFISMO: chamamos p.atacar(alvo) e cada classe
//  (Herói, Mago, Personagem) responde do SEU jeito.
// ============================================================================

// PASSO 1 — Declare e exporte a função:
//   export function simularBatalha(lutador1, lutador2) { ... }

  // Dentro dela:
  // PASSO 2 — const log = [];
  //   log.push(`⚔️ ${lutador1.nome} (${lutador1.classe}) VS ${lutador2.nome} (${lutador2.classe})!`);

  // PASSO 3 — let turno = 1;
  //   while (lutador1.estaVivo() && lutador2.estaVivo() && turno <= 30) {
  //     log.push(`— Turno ${turno} —`);
  //     log.push(lutador1.atacar(lutador2));
  //     if (!lutador2.estaVivo()) break;
  //     log.push(lutador2.atacar(lutador1));
  //     turno++;
  //   }

  // PASSO 4 — Decida o vencedor (quem tem mais vida) e finalize:
  //   const vencedor = lutador1.vida >= lutador2.vida ? lutador1 : lutador2;
  //   log.push(`💀 ${lutador1.nome}: ${lutador1.vida} HP | ${lutador2.nome}: ${lutador2.vida} HP`);
  //   return { vencedor: `${vencedor.emoji} ${vencedor.nome}`, log };
