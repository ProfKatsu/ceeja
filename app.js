const CONFIG = window.STEAM_GAME_CONFIG || {};
const STORAGE_KEY = "steam-ceeja-ranking";
const TOTAL_ROUNDS = 10;

const challenges = [
  {
    type: "STEAM",
    question: "Qual combinacao expressa melhor a essencia do STEAM?",
    scenario: "Em uma turma da CEEJA, estudantes querem entender o consumo de energia do bairro e propor melhorias.",
    options: [
      "Separar cada disciplina para evitar interferencias entre conteudos.",
      "Integrar ciencia, tecnologia, engenharia, artes e matematica para criar uma solucao contextualizada.",
      "Usar apenas tecnologia digital, pois STEAM e sinonimo de aplicativo.",
      "Priorizar matematica e deixar artes para o fechamento visual."
    ],
    answer: 1,
    explanation: "STEAM busca integracao de saberes para investigar, criar e resolver problemas reais."
  },
  {
    type: "ABP",
    question: "No ciclo da investigacao, qual acao deve vir primeiro?",
    scenario: "A escola quer transformar o patio em um espaco de aprendizagem e convivencia.",
    options: [
      "Entregar um produto final antes de ouvir os estudantes.",
      "Memorizar conceitos sobre urbanismo.",
      "Investigar o problema real, levantar necessidades e formular perguntas.",
      "Avaliar apenas a aparencia do produto."
    ],
    answer: 2,
    explanation: "Na ABP, a investigacao parte de uma situacao real e orienta as proximas escolhas."
  },
  {
    type: "Protagonismo",
    question: "Qual postura combina com STEAM e ABP?",
    scenario: "Um professor percebe que a turma tem experiencias profissionais diversas e muito repertorio de vida.",
    options: [
      "Professor como mediador e estudantes como investigadores ativos.",
      "Professor como unico detentor do saber e estudantes como receptores.",
      "Estudantes sem tomada de decisao para manter a aula previsivel.",
      "Atividades identicas para todos, sem relacao com a realidade."
    ],
    answer: 0,
    explanation: "O material destaca o protagonismo discente e o professor como mediador/facilitador."
  },
  {
    type: "Competencias",
    question: "Qual conjunto aparece como competencia para o futuro?",
    scenario: "A turma esta planejando uma campanha de seguranca alimentar para a comunidade.",
    options: [
      "Copia, silencio e respostas unicas.",
      "Pensamento critico, colaboracao, comunicacao, criatividade, inovacao e confianca.",
      "Velocidade de copia, repeticao e competicao individual permanente.",
      "Decoracao, padronizacao e passividade."
    ],
    answer: 1,
    explanation: "Essas competencias aparecem no infografico como resultados esperados para o seculo XXI."
  },
  {
    type: "Ciencia",
    question: "Quando a dimensao Ciencia esta mais presente?",
    scenario: "Estudantes investigam a qualidade da agua usada em casa e no trabalho.",
    options: [
      "Ao explorar, observar, levantar hipoteses e compreender o mundo via experimentacao.",
      "Ao escolher somente as cores do cartaz.",
      "Ao calcular notas do bimestre.",
      "Ao publicar fotos sem analisar evidencias."
    ],
    answer: 0,
    explanation: "Ciencia envolve exploracao, compreensao do mundo e experimentacao."
  },
  {
    type: "Tecnologia",
    question: "No STEAM, tecnologia deve ser entendida como:",
    scenario: "A turma vai registrar entrevistas e organizar dados de mobilidade do bairro.",
    options: [
      "Apenas computadores de ultima geracao.",
      "Ferramenta cognitiva para criacao, interacao e resolucao de problemas.",
      "Um premio usado so depois da atividade.",
      "Substituto da discussao coletiva."
    ],
    answer: 1,
    explanation: "Tecnologia amplia criacao, interacao e resolucao, nao e so equipamento."
  },
  {
    type: "Engenharia",
    question: "Qual tarefa representa melhor a Engenharia no projeto?",
    scenario: "Depois da pesquisa, a turma precisa diminuir desperdicio de agua nos banheiros da escola.",
    options: [
      "Desenhar, prototipar, testar e melhorar uma solucao.",
      "Copiar uma definicao do livro.",
      "Votar no cartaz mais bonito.",
      "Ignorar restricoes de custo e uso."
    ],
    answer: 0,
    explanation: "Engenharia aparece como design de solucoes criativas para problemas complexos."
  },
  {
    type: "Artes",
    question: "Qual e o papel das Artes no STEAM?",
    scenario: "A equipe quer apresentar uma proposta de coleta seletiva para envolver a comunidade.",
    options: [
      "Enfeitar um trabalho ja pronto, sem interferir na solucao.",
      "Humanizar a ciencia, favorecer design, comunicacao e sentidos para a solucao.",
      "Substituir a investigacao cientifica.",
      "Servir apenas como atividade livre."
    ],
    answer: 1,
    explanation: "Artes e design ajudam a humanizar, comunicar e dar forma significativa as solucoes."
  },
  {
    type: "Matematica",
    question: "Como a Matematica fortalece uma investigacao STEAM?",
    scenario: "A turma comparou contas de energia antes e depois de uma campanha de economia.",
    options: [
      "Organizando dados, calculando variacoes e sustentando conclusoes.",
      "Aparecendo apenas em formulas isoladas.",
      "Eliminando debate e criatividade.",
      "Definindo que toda resposta precisa ser individual."
    ],
    answer: 0,
    explanation: "Matematica ajuda a modelar, medir, comparar e justificar decisoes."
  },
  {
    type: "CEEJA",
    question: "Qual proposta dialoga melhor com a educacao de jovens e adultos?",
    scenario: "Estudantes trabalham em horarios diferentes e trazem experiencias de familia, trabalho e comunidade.",
    options: [
      "Projeto com problema real, escolhas de percurso e valorizacao dos saberes dos estudantes.",
      "Sequencia unica, sem conversa sobre experiencias.",
      "Atividade infantilizada para simplificar o conteudo.",
      "Avaliacao baseada somente em velocidade."
    ],
    answer: 0,
    explanation: "Na CEEJA, faz sentido conectar o curriculo a autonomia, experiencias e desafios concretos."
  },
  {
    type: "ABP",
    question: "Qual produto final e mais significativo em uma abordagem ABP?",
    scenario: "A turma investigou descarte incorreto de oleo de cozinha no entorno da escola.",
    options: [
      "Um resumo copiado, entregue apenas ao professor.",
      "Uma proposta testavel de coleta, comunicacao e acompanhamento com a comunidade.",
      "Uma prova surpresa sem relacao com a pesquisa.",
      "Uma lista de conceitos sem decisao pratica."
    ],
    answer: 1,
    explanation: "ABP culmina em produto significativo, conectado ao problema investigado."
  },
  {
    type: "Integracao",
    question: "O que significa superar o conhecimento fragmentado?",
    scenario: "A coordenacao quer planejar uma ATPC sobre STEAM.",
    options: [
      "Trabalhar conteudos isolados e sem conexao.",
      "Juntar professores para criar uma situacao em que diferentes areas contribuam para o mesmo desafio.",
      "Trocar todas as aulas por palestras.",
      "Fazer cada area repetir sua parte sem dialogo."
    ],
    answer: 1,
    explanation: "O infografico aponta a conexao entre saberes como caminho para desafios do mundo real."
  }
];

let state = {
  player: "",
  score: 0,
  round: 0,
  streak: 0,
  startedAt: 0,
  timerId: null,
  selectedChallenges: []
};

const $ = (selector) => document.querySelector(selector);

const views = {
  home: $("#homeView"),
  game: $("#gameView"),
  result: $("#resultView"),
  ranking: $("#rankingView")
};

function showView(name) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[name].classList.add("active");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(state.timerId);
  state.startedAt = Date.now();
  state.timerId = setInterval(() => {
    $("#timerLabel").textContent = formatTime(Date.now() - state.startedAt);
  }, 500);
}

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

function startGame(player) {
  state = {
    player,
    score: 0,
    round: 0,
    streak: 0,
    startedAt: Date.now(),
    timerId: null,
    selectedChallenges: shuffle(challenges).slice(0, TOTAL_ROUNDS)
  };
  $("#playerNameLabel").textContent = player;
  $("#scoreLabel").textContent = "0";
  $("#timerLabel").textContent = "00:00";
  showView("game");
  startTimer();
  renderChallenge();
}

function renderChallenge() {
  const current = state.selectedChallenges[state.round];
  $("#roundLabel").textContent = `${state.round + 1}/${TOTAL_ROUNDS}`;
  $("#challengeType").textContent = current.type;
  $("#streakLabel").textContent = `sequencia ${state.streak}`;
  $("#questionText").textContent = current.question;
  $("#scenarioText").textContent = current.scenario;
  $("#feedbackText").textContent = "";

  const optionsList = $("#optionsList");
  optionsList.innerHTML = "";
  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => answerChallenge(index));
    optionsList.appendChild(button);
  });
}

function answerChallenge(index) {
  const current = state.selectedChallenges[state.round];
  const buttons = [...document.querySelectorAll(".option-button")];
  buttons.forEach((button) => {
    button.disabled = true;
  });

  const isCorrect = index === current.answer;
  buttons[current.answer].classList.add("correct");
  if (!isCorrect) {
    buttons[index].classList.add("wrong");
    state.streak = 0;
    $("#feedbackText").textContent = `Quase: ${current.explanation}`;
  } else {
    state.streak += 1;
    const speedBonus = Math.max(0, 60 - Math.floor((Date.now() - state.startedAt) / 1000));
    const streakBonus = Math.min(state.streak * 8, 40);
    const points = 100 + speedBonus + streakBonus;
    state.score += points;
    $("#scoreLabel").textContent = state.score;
    $("#feedbackText").textContent = `Boa! +${points} pontos. ${current.explanation}`;
  }

  window.setTimeout(() => {
    state.round += 1;
    if (state.round >= TOTAL_ROUNDS) {
      finishGame();
    } else {
      renderChallenge();
    }
  }, 1800);
}

function finishGame() {
  stopTimer();
  const elapsed = Date.now() - state.startedAt;
  const timePenalty = Math.floor(elapsed / 2500);
  const final = Math.max(0, state.score - timePenalty);
  state.score = final;
  $("#finalScore").textContent = final;
  $("#resultTitle").textContent = `${state.player}, sua equipe concluiu a missao`;
  $("#resultMessage").textContent = `Tempo: ${formatTime(elapsed)}. A pontuacao considera acertos, sequencia e ritmo de resposta.`;
  $("#nameInput").value = state.player;
  showView("result");
}

function getLocalScores() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function setLocalScores(scores) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores.slice(0, 50)));
}

function hasSupabase() {
  return Boolean(CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY);
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: CONFIG.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${CONFIG.SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    throw new Error(`Supabase respondeu ${response.status}`);
  }
  return response.json();
}

async function saveScore(name, score) {
  const entry = {
    name: name.trim().slice(0, 28),
    score,
    created_at: new Date().toISOString()
  };

  if (hasSupabase()) {
    await supabaseRequest("steam_scores", {
      method: "POST",
      body: JSON.stringify(entry)
    });
  }

  const localScores = getLocalScores();
  localScores.push(entry);
  localScores.sort((a, b) => b.score - a.score);
  setLocalScores(localScores);
}

async function loadScores() {
  if (hasSupabase()) {
    return supabaseRequest("steam_scores?select=name,score,created_at&order=score.desc,created_at.asc&limit=20");
  }
  return getLocalScores().slice(0, 20);
}

async function renderRanking() {
  showView("ranking");
  const rankingList = $("#rankingList");
  const status = $("#rankingStatus");
  rankingList.innerHTML = "";
  status.textContent = "Carregando ranking...";

  try {
    const scores = await loadScores();
    if (!scores.length) {
      status.textContent = "Ainda nao ha pontuacoes salvas. Comece um novo jogo para inaugurar o ranking.";
      return;
    }

    scores.forEach((entry, index) => {
      const item = document.createElement("li");
      const date = entry.created_at ? new Date(entry.created_at).toLocaleDateString("pt-BR") : "";
      item.innerHTML = `
        <span class="rank-number">${index + 1}</span>
        <span>
          <span class="rank-name">${escapeHtml(entry.name || "Jogador")}</span>
          <span class="rank-meta">${date}</span>
        </span>
        <strong>${Number(entry.score || 0)}</strong>
      `;
      rankingList.appendChild(item);
    });

    status.textContent = hasSupabase()
      ? "Ranking online conectado ao Supabase."
      : "Ranking local neste navegador. Configure o Supabase para ranking online entre jogadores.";
  } catch (error) {
    status.textContent = `Nao foi possivel carregar o ranking online. Usando ranking local. ${error.message}`;
    getLocalScores().slice(0, 20).forEach((entry, index) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <span class="rank-number">${index + 1}</span>
        <span><span class="rank-name">${escapeHtml(entry.name || "Jogador")}</span></span>
        <strong>${Number(entry.score || 0)}</strong>
      `;
      rankingList.appendChild(item);
    });
  }
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

$("#newGameButton").addEventListener("click", () => {
  $("#playerDialog").showModal();
  $("#playerInput").focus();
});

$("#rankingButton").addEventListener("click", renderRanking);
$("#refreshRankingButton").addEventListener("click", renderRanking);

$("#playerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const player = $("#playerInput").value.trim();
  if (!player) return;
  $("#playerDialog").close();
  startGame(player);
});

$("#cancelPlayerButton").addEventListener("click", () => {
  $("#playerDialog").close();
});

$("#saveScoreForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = event.submitter;
  button.disabled = true;
  button.textContent = "Salvando...";
  try {
    await saveScore($("#nameInput").value || state.player, state.score);
    await renderRanking();
  } catch (error) {
    $("#resultMessage").textContent = `Nao foi possivel salvar online: ${error.message}. A pontuacao foi mantida localmente.`;
  } finally {
    button.disabled = false;
    button.textContent = "Salvar";
  }
});

$("#openGuideButton").addEventListener("click", () => $("#guideDialog").showModal());
$("#closeGuideButton").addEventListener("click", () => $("#guideDialog").close());
