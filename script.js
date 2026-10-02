"use strict";

// HUMANÓMETRO PAREJAS — actualización 02/10/2026

/*
HUMANÓMETRO PAREJAS

NUEVO MODELO DE INTERPRETACIÓN

Preguntas 1 y 2:
→ experiencia / percepción propia

Pregunta 3:
→ recepción del otro

La tercera respuesta NO se suma como una tercera respuesta
equivalente a las dos primeras.

Cada bloque conserva:
- ownTrend
- received
- relation
- colorState

La lectura final integra los 9 bloques mediante:
- coherencias
- contradicciones
- grises
- patrones repetidos
- cambios de contexto
- diferencias entre percepción y recepción

El test es individual.
No cruza respuestas entre integrantes.
*/


const blocks = [
  {
    number: 1,
    name: "TRATO",
    subtitle: "Percepción del vínculo",
    questions: [
      "¿Existe entre ustedes un trato amable y considerado, especialmente cuando alguno necesita comprensión del otro?",
      "Cuando alguno atraviesa un momento de enojo o malestar, ¿pueden seguir tratándose con respeto?",
      "¿Te agrada el trato que recibís de tu pareja?"
    ],
    clarifications: [
      "Observa la consideración en el trato cotidiano.",
      "Observa cómo se sostiene el trato en momentos de tensión.",
      "Observa cómo vivís el trato que recibís."
    ]
  },
  {
    number: 2,
    name: "COMUNICACIÓN",
    subtitle: "Percepción del vínculo",
    questions: [
      "¿Pueden hablar entre ustedes de aquello que realmente les importa sin sentir que tienen que guardárselo?",
      "Cuando tu pareja te habla de algo que sabés que es importante para ella, ¿intentás comprender lo que quiere transmitir antes de responder?",
      "Recibís comunicación ( charlan?) fluida?"
    ],
    clarifications: [
      "Observa la apertura para hablar de lo importante.",
      "Observa la disposición para escuchar y comprender.",
      "Observa la comunicación que recibís del otro."
    ]
  },
  {
    number: 3,
    name: "CONEXIÓN",
    subtitle: "Percepción del vínculo",
    questions: [
      "Cuando uno de los dos necesita cercanía emocional, ¿el otro suele poder brindársela?",
      "¿Encuentran momentos que les permitan sentirse realmente conectados, más allá de las obligaciones cotidianas?",
      "¿Cuando se ven, sentís que conecta en algún momento con vos?"
    ],
    clarifications: [
      "Observa la disponibilidad ante la necesidad emocional.",
      "Observa la presencia de momentos de conexión.",
      "Observa la conexión que percibís del otro."
    ]
  },
  {
    number: 4,
    name: "CUIDADO",
    subtitle: "Autopercepción en el vínculo",
    questions: [
      "Cuando tu pareja atraviesa algo que sabés que le afecta, ¿tenés en cuenta cómo se encuentra antes de actuar o decidir?",
      "Cuando tu pareja necesita apoyo, ¿procurás estar presente de una manera que realmente le resulte útil?",
      "Te ha cuidado en momentos claves ?"
    ],
    clarifications: [
      "Observa la consideración hacia el estado del otro.",
      "Observa la forma de acompañar al otro.",
      "Observa el cuidado que recibís del otro."
    ]
  },
  {
    number: 5,
    name: "RESPETO",
    subtitle: "Autopercepción en el vínculo",
    questions: [
      "Cuando tu pareja piensa o siente algo diferente de vos sobre un tema importante, ¿podés respetar su manera de verlo?",
      "Cuando tu pareja necesita espacio, tiempo o establece un límite, ¿podés respetarlo aunque no estés de acuerdo?",
      "¿Te brinda respeto en todo momento?"
    ],
    clarifications: [
      "Observa el respeto frente a las diferencias.",
      "Observa el respeto por los límites del otro.",
      "Observa el respeto que recibís del otro."
    ]
  },
  {
    number: 6,
    name: "APORTE",
    subtitle: "Autopercepción en el vínculo",
    questions: [
      "Cuando la relación necesita algo de vos, ¿procurás asumir tu parte para que el vínculo funcione?",
      "¿Destinás tiempo, atención o energía a aspectos de la relación que sabés que son importantes para tu pareja?",
      "¿ aporta al vínculo de manera equivocada  a vos?"
    ],
    clarifications: [
      "Observa tu responsabilidad dentro del vínculo.",
      "Observa tu dedicación concreta al vínculo.",
      "Observa cómo percibís el aporte que recibís."
    ]
  },
  {
    number: 7,
    name: "CONFLICTOS",
    subtitle: "Vivencias reales",
    questions: [
      "Cuando surge un conflicto por algo que realmente importa para alguno de los dos, ¿pueden abordarlo sin quedar atrapados en la misma discusión?",
      "Después de una discusión que los afecta emocionalmente, ¿pueden encontrar una manera de volver a acercarse?",
      "¿Cuando tienen un conflicto, recibís de  una disposición que ayude a resolverlo?"
    ],
    clarifications: [
      "Observa la capacidad de abordar el conflicto.",
      "Observa la capacidad de reparar después del conflicto.",
      "Observa la disposición que recibís para resolver."
    ]
  },
  {
    number: 8,
    name: "CELOS",
    subtitle: "Vivencias reales",
    questions: [
      "Cuando una situación despierta celos o inseguridad en alguno de los dos, ¿pueden hablar de lo que ocurre sin convertirlo inmediatamente en una acusación?",
      "Cuando alguno necesita seguridad respecto del vínculo, ¿pueden hablar de esa necesidad sin que termine transformándose en control?",
      "¿Sentís que tiene/hace comportamientos que fragmentan tu seguridad?"
    ],
    clarifications: [
      "Observa cómo se expresan los celos y la inseguridad.",
      "Observa cómo se gestiona la necesidad de seguridad.",
      "Observa lo que recibís que afecta tu seguridad."
    ]
  },
  {
    number: 9,
    name: "CRISIS",
    subtitle: "Vivencias reales",
    questions: [
      "Cuando atraviesan una situación que pone a prueba la relación, ¿pueden enfrentarla como pareja en lugar de enfrentarse entre ustedes?",
      "Cuando uno de los dos atraviesa una dificultad importante, ¿el otro puede acompañarlo teniendo en cuenta lo que realmente necesita?",
      "¿En los momentos de crisis, encontrás en tu pareja el acompañamiento que necesitás?"
    ],
    clarifications: [
      "Observa cómo afrontan juntos una crisis.",
      "Observa el acompañamiento ante una dificultad.",
      "Observa el acompañamiento que recibís."
    ]
  }
];


const responseOptions = [
  { key: "yes", label: "Sí", value: 2 },
  { key: "maybe", label: "A veces", value: 1 },
  { key: "no", label: "No", value: 0 }
];


const state = {
  started: false,
  currentBlock: 0,
  answers: Array.from({ length: 9 }, () => [null, null, null]),
  completed: Array(9).fill(false),
  segmentResults: Array(9).fill(null),
  overallColor: null
};


const enableHeart = document.getElementById("enableHeart");
const journeyGuide = document.getElementById("journeyGuide");
const questionPanel = document.getElementById("questionPanel");
const closeQuestion = document.getElementById("closeQuestion");
const questionKicker = document.getElementById("questionKicker");
const questionTitle = document.getElementById("questionTitle");
const questionSubtitle = document.getElementById("questionSubtitle");
const questionProgressText = document.getElementById("questionProgressText");
const questionProgressBar = document.getElementById("questionProgressBar");
const questionsContainer = document.getElementById("questionsContainer");
const resultsPanel = document.getElementById("resultsPanel");
const resultTitle = document.getElementById("resultTitle");
const resultScore = document.getElementById("resultScore");
const resultGeneral = document.getElementById("resultGeneral");
const segmentResults = document.getElementById("segmentResults");
const restartButton = document.getElementById("restartButton");
const segments = [...document.querySelectorAll(".segment")];
const resultsInner = document.querySelector(".results-inner");
const resultsScrollIndicator = document.getElementById("resultsScrollIndicator");


const blockRelations = {
  TRATO: ["RESPETO", "CONFLICTOS"],
  COMUNICACIÓN: ["CONFLICTOS", "CRISIS", "CELOS"],
  CONEXIÓN: ["CUIDADO", "APORTE", "CELOS"],
  CUIDADO: ["CONEXIÓN", "CRISIS", "APORTE"],
  RESPETO: ["TRATO", "CONFLICTOS", "CELOS"],
  APORTE: ["CUIDADO", "CONEXIÓN", "CONFLICTOS"],
  CONFLICTOS: ["COMUNICACIÓN", "TRATO", "RESPETO", "CRISIS"],
  CELOS: ["COMUNICACIÓN", "CONEXIÓN", "RESPETO"],
  CRISIS: ["COMUNICACIÓN", "CUIDADO", "CONFLICTOS"]
};


const relationDefinitions = {
  coherence: {
    label: "COHERENCIA",
    colorState: "positive"
  },
  attention: {
    label: "ZONA DE ATENCIÓN",
    colorState: "positive-intermediate"
  },
  contradiction: {
    label: "GRIS / CONTRADICCIÓN",
    colorState: "gray"
  },
  receivedResource: {
    label: "RECURSO RECIBIDO",
    colorState: "intermediate-resource"
  },
  variability: {
    label: "VARIABILIDAD",
    colorState: "intermediate"
  },
  fragility: {
    label: "FRAGILIDAD",
    colorState: "intermediate-negative"
  },
  perceptionReceptionDifference: {
    label: "DIFERENCIA ENTRE PERCEPCIÓN Y RECEPCIÓN",
    colorState: "gray"
  },
  partialDifference: {
    label: "DIFERENCIA PARCIAL",
    colorState: "gray-intermediate"
  },
  coincidentDifficulty: {
    label: "DIFICULTAD COINCIDENTE",
    colorState: "negative"
  }
};


function initialize() {
  segments.forEach((segment, index) => {
    segment.addEventListener("click", () => {
      if (!state.started && index !== 0) return;

      if (state.completed[index]) {
        openBlock(index);
        return;
      }

      if (index === state.currentBlock) {
        openBlock(index);
      }
    });
  });

  enableHeart.addEventListener("click", startTest);
  closeQuestion.addEventListener("click", closeQuestionPanel);
  restartButton.addEventListener("click", restartTest);

  if (resultsInner) {
    resultsInner.addEventListener("scroll", updateResultsScrollIndicator);
  }

  updateWheel();
}


function startTest() {
  if (state.started) {
    openBlock(state.currentBlock);
    return;
  }

  state.started = true;

  enableHeart.classList.add("enabled");
  enableHeart.querySelector("span:last-child").textContent =
    "CORAZÓN HABILITADO";

  journeyGuide.textContent =
    "El bloque 1 está disponible. Completá sus tres preguntas para continuar.";

  openBlock(0);
}


function openBlock(index) {
  if (!state.started) return;

  if (index > 0 && !state.completed[index - 1] && !state.completed[index]) {
    return;
  }

  state.currentBlock = index;

  const block = blocks[index];

  questionKicker.textContent = `BLOQUE ${block.number}`;
  questionTitle.textContent = block.name;
  questionSubtitle.textContent = block.subtitle;

  renderQuestions(index);

  questionPanel.classList.remove("hidden");
  resultsPanel.classList.add("hidden");
  document.body.style.overflow = "hidden";

  updateWheel();
}


function renderQuestions(blockIndex) {
  const block = blocks[blockIndex];

  questionsContainer.innerHTML = "";

  block.questions.forEach((question, questionIndex) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const number = document.createElement("div");
    number.className = "question-number";
    number.textContent =
      `PREGUNTA ${blockIndex * 3 + questionIndex + 1}`;

    const text = document.createElement("p");
    text.className = "question-text";
    text.textContent = question;

    const clarification = document.createElement("div");
    clarification.className = "question-clarification";
    clarification.textContent = block.clarifications[questionIndex];

    const answers = document.createElement("div");
    answers.className = "answer-options";

    responseOptions.forEach(option => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = `answer ${option.key}`;
      button.textContent = option.label;

      if (state.answers[blockIndex][questionIndex] === option.key) {
        button.classList.add("selected");
      }

      button.addEventListener("click", () => {
        state.answers[blockIndex][questionIndex] = option.key;

        answers.querySelectorAll(".answer").forEach(item => {
          item.classList.remove("selected");
        });

        button.classList.add("selected");

        updateQuestionButton(blockIndex);
        updateQuestionProgress(blockIndex);
      });

      answers.appendChild(button);
    });

    card.appendChild(number);
    card.appendChild(text);
    card.appendChild(clarification);
    card.appendChild(answers);

    questionsContainer.appendChild(card);
  });

  const continueButton = document.createElement("button");

  continueButton.type = "button";
  continueButton.className = "continue-question";
  continueButton.id = "continueQuestion";

  continueButton.textContent =
    blockIndex === blocks.length - 1
      ? "FINALIZAR Y VER MI LECTURA"
      : "COMPLETAR BLOQUE";

  continueButton.addEventListener("click", () => {
    completeCurrentBlock(blockIndex);
  });

  questionsContainer.appendChild(continueButton);

  updateQuestionProgress(blockIndex);
  updateQuestionButton(blockIndex);
}


function updateQuestionButton(blockIndex) {
  const button = document.getElementById("continueQuestion");

  if (!button) return;

  const complete = state.answers[blockIndex].every(
    answer => answer !== null
  );

  button.disabled = !complete;
}


function updateQuestionProgress(blockIndex) {
  const answered = state.answers[blockIndex].filter(
    answer => answer !== null
  ).length;

  questionProgressText.textContent =
    `Pregunta ${answered} de 3`;

  questionProgressBar.style.width =
    `${Math.max(33.33, answered / 3 * 100)}%`;
}


function completeCurrentBlock(index) {
  const answers = state.answers[index];

  if (!answers.every(answer => answer !== null)) return;

  const result = calculateSegment(answers);

  state.segmentResults[index] = result;
  state.completed[index] = true;

  questionPanel.classList.add("hidden");
  document.body.style.overflow = "";

  const nextIndex = index + 1;

  if (nextIndex < blocks.length) {
    state.currentBlock = nextIndex;

    journeyGuide.textContent =
      `Bloque ${index + 1} completado. El bloque ${nextIndex + 1} está habilitado.`;

    journeyGuide.classList.add("completed");

    updateWheel();

    setTimeout(() => {
      const next = segments[nextIndex];

      next.classList.add("active");

      setTimeout(() => {
        next.classList.remove("active");
      }, 1400);
    }, 100);

  } else {
    state.currentBlock = index;

    journeyGuide.textContent =
      "Recorrido completo. Tu lectura del Humanómetro está lista.";

    state.overallColor = calculateOverallColor();

    updateWheel();

    setTimeout(showResults, 550);
  }
}


function calculateOwnTrend(first, second) {
  if (first === "yes" && second === "yes") {
    return "positive";
  }

  if (first === "no" && second === "no") {
    return "negative";
  }

  if (
    (first === "yes" && second === "maybe") ||
    (first === "maybe" && second === "yes")
  ) {
    return "intermediate-positive";
  }

  if (
    (first === "no" && second === "maybe") ||
    (first === "maybe" && second === "no")
  ) {
    return "intermediate-negative";
  }

  if (
    (first === "yes" && second === "no") ||
    (first === "no" && second === "yes")
  ) {
    return "intermediate";
  }

  return "intermediate";
}


function normalizeOwnTrend(ownTrend) {
  if (
    ownTrend === "intermediate-positive" ||
    ownTrend === "intermediate-negative"
  ) {
    return "intermediate";
  }

  return ownTrend;
}


function calculateRelation(ownTrend, received) {
  const normalizedTrend = normalizeOwnTrend(ownTrend);

  if (normalizedTrend === "positive") {
    if (received === "yes") {
      return "coherence";
    }

    if (received === "maybe") {
      return "attention";
    }

    return "contradiction";
  }

  if (normalizedTrend === "intermediate") {
    if (received === "yes") {
      return "receivedResource";
    }

    if (received === "maybe") {
      return "variability";
    }

    return "fragility";
  }

  if (normalizedTrend === "negative") {
    if (received === "yes") {
      return "perceptionReceptionDifference";
    }

    if (received === "maybe") {
      return "partialDifference";
    }

    return "coincidentDifficulty";
  }

  return "variability";
}


function getColorState(relation) {
  const definition = relationDefinitions[relation];

  return definition
    ? definition.colorState
    : "intermediate";
}


function getRelationLabel(relation) {
  const definition = relationDefinitions[relation];

  return definition
    ? definition.label
    : "VARIABILIDAD";
}


function getOwnTrendLabel(ownTrend) {
  if (ownTrend === "positive") {
    return "experiencia propia positiva";
  }

  if (ownTrend === "negative") {
    return "experiencia propia negativa";
  }

  if (ownTrend === "intermediate-positive") {
    return "experiencia propia intermedia con orientación positiva";
  }

  if (ownTrend === "intermediate-negative") {
    return "experiencia propia intermedia con orientación negativa";
  }

  return "experiencia propia intermedia";
}


function getReceivedLabel(received) {
  if (received === "yes") {
    return "recepción positiva";
  }

  if (received === "no") {
    return "recepción negativa";
  }

  return "recepción intermitente";
}


function getBlockInterpretation(block, result) {
  const own = normalizeOwnTrend(result.ownTrend);

  if (result.relation === "coherence") {
    return `En ${block.name.toLowerCase()}, tus respuestas muestran una experiencia positiva y además reconocés recibir este aspecto de tu pareja.`;
  }

  if (result.relation === "attention") {
    return `En ${block.name.toLowerCase()}, aparece una experiencia positiva, aunque aquello que recibís de tu pareja no parece sostenerse completamente.`;
  }

  if (result.relation === "contradiction") {
    return `En ${block.name.toLowerCase()}, percibís positivamente este aspecto, pero declarás no recibirlo de tu pareja.`;
  }

  if (result.relation === "receivedResource") {
    return `En ${block.name.toLowerCase()}, tu experiencia todavía presenta cierta variabilidad, pero reconocés recibir este aspecto de tu pareja.`;
  }

  if (result.relation === "variability") {
    return `En ${block.name.toLowerCase()}, tanto tu experiencia como aquello que recibís aparecen con cierta variabilidad.`;
  }

  if (result.relation === "fragility") {
    return `En ${block.name.toLowerCase()}, tu experiencia presenta cierta dificultad y además declarás no recibir este aspecto de tu pareja.`;
  }

  if (result.relation === "perceptionReceptionDifference") {
    return `En ${block.name.toLowerCase()}, vivís este aspecto de manera negativa, aunque reconocés recibirlo de tu pareja. La diferencia merece ser observada sin asumir que una percepción invalida la otra.`;
  }

  if (result.relation === "partialDifference") {
    return `En ${block.name.toLowerCase()}, tu experiencia es negativa mientras que aquello que recibís aparece solamente de manera intermitente.`;
  }

  if (result.relation === "coincidentDifficulty") {
    return `En ${block.name.toLowerCase()}, tu experiencia y aquello que recibís coinciden en una valoración negativa.`;
  }

  return `En ${block.name.toLowerCase()}, aparece una experiencia ${own} y una ${getReceivedLabel(result.received)}.`;
}


function calculateSegment(answerKeys) {
  const ownAnswers = answerKeys.slice(0, 2);
  const received = answerKeys[2];

  const yesCount =
    answerKeys.filter(value => value === "yes").length;

  const maybeCount =
    answerKeys.filter(value => value === "maybe").length;

  const noCount =
    answerKeys.filter(value => value === "no").length;

  const ownScore = ownAnswers.reduce((total, key) => {
    const option = responseOptions.find(item => item.key === key);
    return total + option.value;
  }, 0);

  const receivedScore =
    responseOptions.find(item => item.key === received).value;

  const score = ownScore + receivedScore;

  const ownTrend = calculateOwnTrend(
    ownAnswers[0],
    ownAnswers[1]
  );

  const relation = calculateRelation(
    ownTrend,
    received
  );

  const colorState = getColorState(relation);

  let color = "yellow";

  if (
    relation === "contradiction" ||
    relation === "perceptionReceptionDifference" ||
    relation === "partialDifference"
  ) {
    color = "gray";
  } else if (
    relation === "coincidentDifficulty"
  ) {
    color = "ice";
  } else if (
    relation === "coherence"
  ) {
    color = "red";
  } else if (
    relation === "attention" ||
    relation === "receivedResource" ||
    relation === "variability" ||
    relation === "fragility"
  ) {
    color = "yellow";
  }

  return {
    color,
    colorState,
    ownTrend,
    received,
    relation,
    relationLabel: getRelationLabel(relation),
    score,
    ownScore,
    receivedScore,
    yesCount,
    maybeCount,
    noCount,
    answerKey: answerKeys.join("-"),
    feedback: getBlockInterpretation(
      blocks[state.currentBlock],
      {
        ownTrend,
        received,
        relation
      }
    )
  };
}


function calculateOverallColor() {
  const results = state.segmentResults.filter(Boolean);

  const positive = results.filter(
    result => result.relation === "coherence"
  ).length;

  const negative = results.filter(
    result => result.relation === "coincidentDifficulty"
  ).length;

  const contradictions = results.filter(
    result =>
      result.relation === "contradiction" ||
      result.relation === "perceptionReceptionDifference" ||
      result.relation === "partialDifference"
  ).length;

  if (contradictions > 0) {
    return "gray";
  }

  if (negative > positive) {
    return "ice";
  }

  if (positive > negative) {
    return "red";
  }

  return "yellow";
}


function applyOverallHeartColor() {
  const heartGradient =
    document.getElementById("heartGradient");

  if (!heartGradient || !state.overallColor) return;

  const stops = [...heartGradient.querySelectorAll("stop")];

  let colors;

  if (state.overallColor === "red") {
    colors = [
      "#ffffff",
      "#ff9f9f",
      "#ff3838",
      "#ff1717",
      "#ff5656",
      "#ffffff"
    ];
  } else if (state.overallColor === "gray") {
    colors = [
      "#ffffff",
      "#d8dce2",
      "#aeb5bf",
      "#858d98",
      "#c4c9d0",
      "#ffffff"
    ];
  } else if (state.overallColor === "yellow") {
    colors = [
      "#ffffff",
      "#fff3a0",
      "#ffe226",
      "#ffd000",
      "#ffe65c",
      "#ffffff"
    ];
  } else {
    colors = [
      "#ffffff",
      "#a8f4ff",
      "#55e8ff",
      "#20cfff",
      "#76efff",
      "#ffffff"
    ];
  }

  stops.forEach((stop, index) => {
    stop.setAttribute("stop-color", colors[index]);
  });
}


function calculateGlobalScore() {
  return state.answers.flat().reduce((total, answerKey) => {
    const option = responseOptions.find(
      item => item.key === answerKey
    );

    return total + option.value;
  }, 0);
}


function getRelationPriority(result) {
  if (!result) return 99;

  if (
    result.relation === "contradiction" ||
    result.relation === "perceptionReceptionDifference"
  ) {
    return 1;
  }

  if (result.relation === "partialDifference") {
    return 2;
  }

  if (result.relation === "fragility") {
    return 3;
  }

  if (result.relation === "coincidentDifficulty") {
    return 4;
  }

  if (result.relation === "attention") {
    return 5;
  }

  if (result.relation === "variability") {
    return 6;
  }

  if (result.relation === "receivedResource") {
    return 7;
  }

  return 8;
}


function getBlockResult(name) {
  return state.segmentResults.find(
    result => result && result.blockName === name
  );
}


function getResultByBlockName(name) {
  const index = blocks.findIndex(
    block => block.name === name
  );

  return index >= 0
    ? state.segmentResults[index]
    : null;
}


function addPattern(patterns, names, text, priority = 5) {
  const results = names.map(name =>
    getResultByBlockName(name)
  );

  if (results.some(result => !result)) {
    return;
  }

  patterns.push({
    names,
    text,
    priority
  });
}


function buildCrossBlockPatterns() {
  const patterns = [];

  const communication = getResultByBlockName("COMUNICACIÓN");
  const crisis = getResultByBlockName("CRISIS");
  const connection = getResultByBlockName("CONEXIÓN");
  const care = getResultByBlockName("CUIDADO");
  const conflicts = getResultByBlockName("CONFLICTOS");
  const treatment = getResultByBlockName("TRATO");
  const respect = getResultByBlockName("RESPETO");
  const contribution = getResultByBlockName("APORTE");
  const jealousy = getResultByBlockName("CELOS");

  if (
    communication &&
    crisis &&
    communication.ownTrend === "positive" &&
    crisis.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["COMUNICACIÓN", "CRISIS"],
      "La comunicación aparece presente en tu experiencia cotidiana, pero cuando el vínculo atraviesa una situación crítica parece no sostenerse de la misma manera. Quizás el desafío no esté en hablar, sino en poder hablar cuando más lo necesitan.",
      1
    );
  }

  if (
    connection &&
    care &&
    connection.ownTrend === "positive" &&
    care.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["CONEXIÓN", "CUIDADO"],
      "La conexión aparece presente en tu experiencia, aunque existe una diferencia cuando observás cómo esa conexión se transforma en cuidado. Podés sentir cercanía y, al mismo tiempo, no recibirla en forma de acompañamiento cuando la necesitás.",
      2
    );
  }

  if (
    conflicts &&
    crisis &&
    conflicts.ownTrend === "negative" &&
    crisis.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["CONFLICTOS", "CRISIS"],
      "Las dificultades aparecen tanto al atravesar los conflictos como en situaciones de mayor intensidad para el vínculo. Ese patrón merece una mirada atenta sobre cómo se acompañan cuando algo realmente los pone a prueba.",
      2
    );
  }

  if (
    treatment &&
    respect &&
    treatment.ownTrend === "positive" &&
    respect.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["TRATO", "RESPETO"],
      "El trato cotidiano puede sentirse cuidado, pero aparece una diferencia cuando entran en juego opiniones distintas, límites o desacuerdos. Es un contraste que puede resultar importante observar.",
      3
    );
  }

  if (
    connection &&
    care &&
    crisis &&
    connection.ownTrend === "positive" &&
    care.ownTrend === "positive" &&
    crisis.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["CONEXIÓN", "CUIDADO", "CRISIS"],
      "Hay conexión y cuidado reconocibles en tu experiencia cotidiana, pero cuando el vínculo entra en una zona de crisis ese acompañamiento parece no sostenerse de la misma manera. El contraste merece ser observado.",
      1
    );
  }

  if (
    contribution &&
    conflicts &&
    contribution.ownTrend === "positive" &&
    conflicts.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["APORTE", "CONFLICTOS"],
      "Existe una percepción de participación y aporte dentro del vínculo, aunque esa disposición parece encontrar una dificultad cuando llega el momento de resolver diferencias.",
      3
    );
  }

  if (
    jealousy &&
    connection &&
    jealousy.ownTrend === "negative" &&
    connection.ownTrend === "positive"
  ) {
    addPattern(
      patterns,
      ["CELOS", "CONEXIÓN"],
      "La conexión aparece presente, pero al mismo tiempo existe una dificultad relacionada con la seguridad dentro del vínculo. Esto muestra que sentirse conectado y sentirse seguro no necesariamente aparecen como la misma experiencia.",
      2
    );
  }

  if (
    communication &&
    conflicts &&
    communication.ownTrend === "positive" &&
    conflicts.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["COMUNICACIÓN", "CONFLICTOS"],
      "La comunicación aparece presente en tu experiencia, pero cuando surgen diferencias importantes parece costar más trasladar esa capacidad de hablar hacia una forma de resolver.",
      3
    );
  }

  if (
    communication &&
    jealousy &&
    communication.ownTrend === "positive" &&
    jealousy.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["COMUNICACIÓN", "CELOS"],
      "La comunicación aparece presente en tu experiencia, aunque las situaciones relacionadas con inseguridad parecen introducir una dificultad diferente. El contraste merece ser observado.",
      4
    );
  }

  if (
    care &&
    crisis &&
    care.ownTrend === "positive" &&
    crisis.ownTrend === "negative"
  ) {
    addPattern(
      patterns,
      ["CUIDADO", "CRISIS"],
      "El cuidado aparece presente en tu experiencia cotidiana, pero cuando llega una situación de mayor intensidad parece resultar más difícil sostener ese acompañamiento.",
      3
    );
  }

  return patterns.sort(
    (a, b) => a.priority - b.priority
  );
}


function getRepeatedPatterns() {
  const patterns = [];

  const relations = {};

  state.segmentResults.forEach(result => {
    if (!result) return;

    relations[result.relation] =
      (relations[result.relation] || 0) + 1;
  });

  if ((relations.contradiction || 0) >= 2) {
    patterns.push(
      "Aparecen varias diferencias claras entre aquello que vivís positivamente y aquello que declarás recibir del otro. No indican por sí mismas una causa: muestran una separación repetida que merece ser observada."
    );
  }

  if ((relations.perceptionReceptionDifference || 0) >= 2) {
    patterns.push(
      "En más de un aspecto, tu experiencia aparece de una manera mientras que reconocés recibir algo diferente. La repetición de esta diferencia puede ser una de las zonas más significativas de tu recorrido."
    );
  }

  if ((relations.coincidentDifficulty || 0) >= 3) {
    patterns.push(
      "Varias dimensiones presentan coincidencia entre una experiencia propia negativa y una recepción también negativa. Esto muestra una dificultad repetida en diferentes aspectos del vínculo."
    );
  }

  if ((relations.variability || 0) >= 3) {
    patterns.push(
      "Aparecen varios aspectos que no terminan de sostenerse de manera constante. La variabilidad atraviesa distintas dimensiones y puede ser útil observar en qué situaciones cambia."
    );
  }

  if ((relations.fragility || 0) >= 2) {
    patterns.push(
      "Más de un aspecto combina una experiencia propia intermedia con una recepción negativa. Esto marca zonas donde la experiencia ya presenta cierta dificultad y además falta un recurso percibido del otro."
    );
  }

  return patterns;
}


function getPositiveCoherences() {
  return blocks
    .map((block, index) => ({
      block,
      result: state.segmentResults[index]
    }))
    .filter(item =>
      item.result &&
      item.result.relation === "coherence"
    );
}


function getAttentionAreas() {
  return blocks
    .map((block, index) => ({
      block,
      result: state.segmentResults[index]
    }))
    .filter(item =>
      item.result &&
      (
        item.result.relation === "attention" ||
        item.result.relation === "fragility" ||
        item.result.relation === "variability"
      )
    )
    .sort(
      (a, b) =>
        getRelationPriority(a.result) -
        getRelationPriority(b.result)
    );
}


function getContrasts() {
  return blocks
    .map((block, index) => ({
      block,
      result: state.segmentResults[index]
    }))
    .filter(item =>
      item.result &&
      (
        item.result.relation === "contradiction" ||
        item.result.relation === "perceptionReceptionDifference" ||
        item.result.relation === "partialDifference"
      )
    )
    .sort(
      (a, b) =>
        getRelationPriority(a.result) -
        getRelationPriority(b.result)
    );
}


function buildIntegratedReading() {
  const coherences = getPositiveCoherences();
  const contrasts = getContrasts();
  const attention = getAttentionAreas();
  const crossPatterns = buildCrossBlockPatterns();
  const repeatedPatterns = getRepeatedPatterns();

  const paragraphs = [];

  if (coherences.length > 0) {
    const names = coherences
      .slice(0, 4)
      .map(item => item.block.name.toLowerCase());

    if (names.length === 1) {
      paragraphs.push(
        `En tu recorrido aparece una experiencia positiva que parece sostenerse especialmente en ${names[0]}. Además, reconocés recibir ese aspecto de tu pareja, por lo que ambas dimensiones muestran coherencia.`
      );
    } else {
      paragraphs.push(
        `En tu recorrido aparecen aspectos que parecen sostenerse: ${joinNatural(names)}. En ellos, tu experiencia positiva coincide con aquello que declarás recibir de tu pareja.`
      );
    }
  }

  if (contrasts.length > 0) {
    const first = contrasts[0];
    const blockName = first.block.name.toLowerCase();

    if (first.result.relation === "contradiction") {
      paragraphs.push(
        `Al mismo tiempo, aparece una diferencia importante en ${blockName}: percibís positivamente este aspecto, pero declarás no recibirlo de tu pareja. Acá aparece un gris claro entre tu experiencia y la recepción del otro.`
      );
    } else if (
      first.result.relation === "perceptionReceptionDifference"
    ) {
      paragraphs.push(
        `También aparece una diferencia en ${blockName}: tu experiencia es negativa, aunque reconocés recibir ese aspecto de tu pareja. La diferencia no permite afirmar que una percepción sea correcta y la otra incorrecta; muestra que ambas dimensiones no están coincidiendo.`
      );
    } else {
      paragraphs.push(
        `En ${blockName} aparece una diferencia parcial entre lo que vivís y aquello que declarás recibir. Es un aspecto que no parece presentarse de la misma manera en ambas dimensiones.`
      );
    }
  }

  if (crossPatterns.length > 0) {
    const selectedPatterns = crossPatterns.slice(0, 2);

    selectedPatterns.forEach(pattern => {
      paragraphs.push(pattern.text);
    });
  }

  if (
    crossPatterns.length === 0 &&
    repeatedPatterns.length > 0
  ) {
    paragraphs.push(repeatedPatterns[0]);
  }

  if (
    attention.length > 0 &&
    paragraphs.length < 5
  ) {
    const names = attention
      .slice(0, 3)
      .map(item => item.block.name.toLowerCase());

    paragraphs.push(
      `Entre las zonas que merecen mayor atención aparecen ${joinNatural(names)}. No necesariamente representan una dificultad global: muestran aspectos donde tus respuestas presentan variabilidad, fragilidad o falta de continuidad.`
    );
  }

  if (
    repeatedPatterns.length > 0 &&
    paragraphs.length < 6
  ) {
    const existing = paragraphs.join(" ");

    const availablePattern =
      repeatedPatterns.find(
        pattern => !existing.includes(pattern)
      );

    if (availablePattern) {
      paragraphs.push(availablePattern);
    }
  }

  if (paragraphs.length === 0) {
    paragraphs.push(
      "Tus respuestas muestran un recorrido sin un único patrón dominante. Aparecen distintas formas de vivir y recibir los aspectos del vínculo, por lo que la lectura adquiere sentido especialmente al observar dónde esas experiencias coinciden y dónde cambian."
    );
  }

  paragraphs.push(
    "Las diferencias que aparecen no determinan por sí mismas qué significa tu relación ni hacia dónde debería ir. Simplemente muestran dónde tu experiencia parece coincidir con lo que recibís y dónde ambas cosas se separan."
  );

  paragraphs.push(
    "Humanómetro Parejas no dice cómo es tu relación. Muestra cómo estás percibiendo lo que vivís, qué recibís del otro y dónde ambas cosas coinciden o se separan."
  );

  return paragraphs
    .map(text => `<p>${text}</p>`)
    .join("");
}


function joinNatural(items) {
  if (items.length === 0) return "";

  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return `${items[0]} y ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
}


function showResults() {
  state.overallColor = calculateOverallColor();
  applyOverallHeartColor();

  resultTitle.textContent =
    "LECTURA DE TU VÍNCULO";

  if (resultScore) {
    resultScore.textContent = "";
    resultScore.classList.add("hidden");
  }

  resultGeneral.innerHTML =
    buildIntegratedReading();

  renderSegmentResults();

  const wheelShell = document.querySelector(".wheel-shell");

  if (wheelShell) {
    wheelShell.insertAdjacentElement(
      "afterend",
      resultsPanel
    );
  }

  resultsPanel.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (resultsInner) {
    resultsInner.scrollTop = 0;
  }

  updateResultsScrollIndicator();
}


function renderSegmentResults() {
  segmentResults.innerHTML = "";

  /*
  Los nueve análisis siguen disponibles internamente para la matriz,
  pero la pantalla final NO presenta nueve devoluciones independientes.
  La lectura integral se muestra únicamente en resultGeneral.
  */
}


function getWheelSegmentColor(color) {
  if (color === "red") {
    return "rgba(255, 38, 38, .72)";
  }

  if (color === "yellow") {
    return "rgba(255, 226, 35, .70)";
  }

  if (color === "ice") {
    return "rgba(108, 238, 255, .64)";
  }

  if (color === "gray") {
    return "rgba(150, 155, 165, .58)";
  }

  return "transparent";
}


function getWheelSegmentLineColor(color) {
  if (color === "red") return "#ff0055";
  if (color === "yellow") return "#fff200";
  if (color === "ice") return "#00eaff";
  if (color === "gray") return "#aeb5bf";
  return "#00eaff";
}


function updateWheel() {
  const wheel = document.querySelector(".segment-wheel");

  if (wheel) {
    for (let index = 1; index <= 9; index++) {
      wheel.style.setProperty(
        `--seg${index}-color`,
        "transparent"
      );

      wheel.style.setProperty(
        `--seg${index}-line`,
        "#00eaff"
      );
    }

    state.segmentResults.forEach((result, index) => {
      if (!result) return;

      wheel.style.setProperty(
        `--seg${index + 1}-color`,
        getWheelSegmentColor(result.color)
      );

      wheel.style.setProperty(
        `--seg${index + 1}-line`,
        getWheelSegmentLineColor(result.color)
      );
    });
  }

  segments.forEach((segment, index) => {
    segment.classList.remove(
      "locked",
      "available",
      "completed",
      "active",
      "red",
      "yellow",
      "ice",
      "gray",
      "yellow-blink"
    );

    if (!state.started) {
      if (index === 0) {
        segment.classList.add("available");
      } else {
        segment.classList.add("locked");
      }

      return;
    }

    if (state.completed[index]) {
      segment.classList.add("completed");

      const result = state.segmentResults[index];

      if (result) {
        segment.classList.add(result.color);

        if (
          result.color === "yellow" &&
          (
            result.relation === "attention" ||
            result.relation === "variability" ||
            result.relation === "fragility" ||
            result.relation === "receivedResource"
          )
        ) {
          segment.classList.add("yellow-blink");
        }
      }

      return;
    }

    if (index === state.currentBlock) {
      segment.classList.add(
        "available",
        "active"
      );

      return;
    }

    segment.classList.add("locked");
  });

  if (state.overallColor) {
    applyOverallHeartColor();
  }
}


function updateResultsScrollIndicator() {
  if (!resultsInner || !resultsScrollIndicator) return;

  const canScroll =
    resultsInner.scrollHeight >
    resultsInner.clientHeight + 2;

  if (!canScroll) {
    resultsScrollIndicator.classList.add("hidden");
    return;
  }

  resultsScrollIndicator.classList.remove("hidden");

  const atBottom =
    resultsInner.scrollTop +
    resultsInner.clientHeight >=
    resultsInner.scrollHeight - 4;

  resultsScrollIndicator.textContent =
    atBottom
      ? "↑ DESLIZÁ PARA SUBIR"
      : "↓ DESLIZÁ PARA VER MÁS";
}


function closeQuestionPanel() {
  questionPanel.classList.add("hidden");
  document.body.style.overflow = "hidden";
  updateWheel();
}


function restartTest() {
  state.started = false;
  state.currentBlock = 0;

  state.answers =
    Array.from(
      { length: 9 },
      () => [null, null, null]
    );

  state.completed =
    Array(9).fill(false);

  state.segmentResults =
    Array(9).fill(null);

  state.overallColor = null;

  resultsPanel.classList.add("hidden");
  questionPanel.classList.add("hidden");

  enableHeart.classList.remove("enabled");

  enableHeart.querySelector("span:last-child").textContent =
    "HABILITAR CORAZÓN";

  journeyGuide.textContent =
    "Empezá por el bloque 1. Completá sus tres preguntas para habilitar el siguiente.";

  journeyGuide.classList.remove("completed");

  document.body.style.overflow = "hidden";

  if (resultsInner) {
    resultsInner.scrollTop = 0;
  }

  updateWheel();
}


initialize();
