/* ==========================================================================
   Arena RPG — JavaScript do FRONTEND (JÁ PRONTO, não precisa digitar em aula)
   --------------------------------------------------------------------------
   Este arquivo só conversa com o backend que VOCÊS vão construir.
   Ele faz 2 coisas:
     1) Busca a lista de personagens em  GET  /api/personagens
     2) Manda 2 personagens batalharem em POST /api/batalha
   Se o backend estiver certo, tudo aqui funciona sozinho.
   ========================================================================== */

const API = "http://localhost:3000/api";

// Guardamos a lista de personagens que veio do backend
let personagens = [];

// Elementos da tela
const select1 = document.getElementById("select-1");
const select2 = document.getElementById("select-2");
const ficha1 = document.getElementById("ficha-1");
const ficha2 = document.getElementById("ficha-2");
const btn = document.getElementById("btn-batalhar");
const logEl = document.getElementById("log");
const vencedorEl = document.getElementById("vencedor");

// ---- 1) Ao abrir a página, carrega os personagens do backend ----
async function carregarPersonagens() {
  try {
    const resp = await fetch(`${API}/personagens`);
    personagens = await resp.json();

    // Preenche os dois <select> com as opções
    for (const p of personagens) {
      select1.insertAdjacentHTML("beforeend", `<option value="${p.id}">${p.emoji} ${p.nome}</option>`);
      select2.insertAdjacentHTML("beforeend", `<option value="${p.id}">${p.emoji} ${p.nome}</option>`);
    }
    select2.selectedIndex = 1; // começa mostrando dois diferentes
    mostrarFicha();
  } catch (e) {
    vencedorEl.textContent = "⚠️ Backend offline. Rode o servidor!";
    console.error(e);
  }
}

// ---- Mostra a ficha (stats) do personagem escolhido em cada lado ----
function fichaHTML(p) {
  return `
    <span class="emoji">${p.emoji}</span>
    <span class="nome">${p.nome}</span>
    <span class="stat">Classe: ${p.classe}</span><br>
    <span class="stat">❤️ Vida: ${p.vida}</span><br>
    <span class="stat">⚔️ Ataque: ${p.ataque}</span><br>
    <span class="stat">🛡️ Defesa: ${p.defesa}</span>`;
}
function acharPorId(id) { return personagens.find((p) => p.id === Number(id)); }
function mostrarFicha() {
  ficha1.innerHTML = fichaHTML(acharPorId(select1.value));
  ficha2.innerHTML = fichaHTML(acharPorId(select2.value));
}
select1.addEventListener("change", mostrarFicha);
select2.addEventListener("change", mostrarFicha);

// ---- 2) Botão BATALHAR: manda os dois ids para o backend ----
btn.addEventListener("click", async () => {
  logEl.innerHTML = "";
  vencedorEl.textContent = "⏳ Lutando...";

  try {
    const resp = await fetch(`${API}/batalha`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id1: Number(select1.value), id2: Number(select2.value) }),
    });
    const resultado = await resp.json();

    // Mostra o log turno a turno, com um pequeno atraso pra dar emoção
    for (let i = 0; i < resultado.log.length; i++) {
      await esperar(350);
      const li = document.createElement("li");
      li.textContent = resultado.log[i];
      logEl.appendChild(li);
    }
    vencedorEl.textContent = `🏆 Vencedor: ${resultado.vencedor}`;
  } catch (e) {
    vencedorEl.textContent = "⚠️ Erro na batalha (backend?)";
    console.error(e);
  }
});

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

carregarPersonagens();
