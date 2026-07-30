// ============================================================================
//  Mago.js  —  Outra classe FILHA de Personagem (mais herança)
//  O Mago gasta MANA para lançar magias que ignoram a defesa.
// ============================================================================

// PASSO 1 — Importe a classe base:
//   import { Personagem } from "./Personagem.js";


// PASSO 2 — export class Mago extends Personagem { ... }

  // PASSO 3 — constructor(nome, vida, ataque, defesa, mana = 30, emoji = "🧙")
  //   super(nome, vida, ataque, defesa, emoji);
  //   this.classe = "Mago";
  //   this.mana = mana;


  // PASSO 4 — Método lancarMagia(alvo):
  //   const custo = 10;
  //   se this.mana < custo -> sem mana: retorne
  //       `${this.nome} está sem mana e ataca com o cajado... ${super.atacar(alvo)}`
  //   senão:
  //       this.mana -= custo;
  //       const dano = this.ataque + 5;
  //       alvo.vida = Math.max(0, alvo.vida - dano);   // dano direto, ignora defesa
  //       retorne `🔮 ${this.nome} lançou uma magia em ${alvo.nome}: ${dano} de dano! (mana: ${this.mana})`


  // PASSO 5 — Override do resetar():
  //   super.resetar();
  //   this.mana = 40;


  // PASSO 6 — Override do atacar(alvo):
  //   if (this.mana >= 10) return this.lancarMagia(alvo);
  //   return super.atacar(alvo);


  // PASSO 7 — MÉTODO ESTÁTICO criarAprendiz(nome):
  //   static criarAprendiz(nome) { return new Mago(nome, 80, 18, 3, 40, "🧙"); }
  //   (cria um mago pronto SEM precisar lembrar todos os números)
