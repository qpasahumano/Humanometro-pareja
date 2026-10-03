"use strict";

// HUMANÓMETRO PAREJAS — actualización 03/10/2026

/*
HUMANÓMETRO PAREJAS

NUEVO MODELO DE INTERPRETACIÓN

Preguntas 1 y 2:
→ experiencia / percepción propia

Pregunta 3:
→ recepción del otro

La tercera respuesta NO se suma como una tercera respuesta
equivalente a las dos primeras.

LÓGICA VISUAL DE RECIPROCIDAD:

Sí + Sí + Sí
→ ROJO

No + No + No
→ CELESTE

Cualquier combinación en la que exista diferencia entre
lo que se vive/proyecta y lo que se recibe:
→ INTERMITENCIA / AMARILLO

Ejemplos:
Sí + Sí + No
→ INTERMITENCIA

No + No + Sí
→ INTERMITENCIA

Sí + No + Sí
→ INTERMITENCIA

No + Sí + No
→ INTERMITENCIA

Las respuestas "A veces" también permanecen dentro
de la zona intermedia / amarilla.

La lógica busca representar que una respuesta positiva
de un solo lado no equivale a reciprocidad plena.

Cada bloque conserva:
- ownTrend
- received
- relation
- colorState
- intermittent

La lectura final integra los 9 bloques mediante:
- coherencias
- contradicciones
- intermitencias
- grises
- patrones repetidos
- cambios de contexto
- diferencias entre percepción y recepción
- reciprocidad

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
      "¿ aporta al vínculo de manera equilibrada a vos?"
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

  /*
  CERRAR debe cerrar la lectura y devolver el Humanómetro
  a su estado inicial para poder comenzar nuevamente.
  */
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
    text.style.fontSize = "1.18em";
    text.textContent = question;

    const clarification = document.createElement("div");
    clarification.className = "question-clarification";
    clarification.style.fontSize = "0.88em";
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
          item.classList.remove("ice-feedback");

          const existingIce =
            item.querySelector(".ice-feedback-icon");

          if (existingIce) {
            existingIce.remove();
          }
        });

        button.classList.add("selected");

        if (option.key === "no") {
          const ice = document.createElement("span");

          ice.className = "ice-feedback-icon";
          ice.textContent = "❄";
          ice.setAttribute("aria-hidden", "true");

          button.appendChild(ice);
          button.classList.add("ice-feedback");

          setTimeout(() => {
            button.classList.remove("ice-feedback");

            if (ice.parentNode) {
              ice.remove();
            }
          }, 1000);
        }

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

  if (result.intermittent) {
    if (
      result.answers &&
      result.answers[0] === "yes" &&
      result.answers[1] === "yes" &&
      result.answers[2] === "no"
    ) {
      return `En ${block.name.toLowerCase()}, aparece una experiencia propia positiva, pero aquello que recibís de tu pareja no coincide completamente. Por eso el resultado se expresa como intermitencia: existe una respuesta positiva desde tu lado, pero no aparece la misma reciprocidad en lo que recibís.`;
    }

    if (
      result.answers &&
      result.answers[0] === "no" &&
      result.answers[1] === "no" &&
      result.answers[2] === "yes"
    ) {
      return `En ${block.name.toLowerCase()}, aparece una experiencia propia difícil, mientras que reconocés recibir algo positivo de tu pareja. Esa diferencia se expresa como intermitencia: las experiencias de ambos lados no están coincidiendo en esta dimensión.`;
    }

    return `En ${block.name.toLowerCase()}, las respuestas muestran una experiencia que no se sostiene de la misma manera en ambos lados. Por eso aparece una señal de intermitencia: hay una diferencia entre lo que vivís o expresás y aquello que recibís de tu pareja.`;
  }

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

  const allYes =
    answerKeys[0] === "yes" &&
    answerKeys[1] === "yes" &&
    answerKeys[2] === "yes";

  const allNo =
    answerKeys[0] === "no" &&
    answerKeys[1] === "no" &&
    answerKeys[2] === "no";

  const intermittent =
    !allYes &&
    !allNo;

  let color = "yellow";

  if (allYes) {
    color = "red";
  } else if (allNo) {
    color = "ice";
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
    intermittent,
    allYes,
    allNo,
    answers: [...answerKeys],
    answerKey: answerKeys.join("-"),
    feedback: getBlockInterpretation(
      blocks[state.currentBlock],
      {
        ownTrend,
        received,
        relation,
        intermittent,
        answers: [...answerKeys]
      }
    )
  };
}


function calculateOverallColor() {
  const results = state.segmentResults.filter(Boolean);

  if (results.length === 0) {
    return "yellow";
  }

  const allRed =
    results.length === 9 &&
    results.every(result => result.color === "red");

  const allIce =
    results.length === 9 &&
    results.every(result => result.color === "ice");

  if (allRed) {
    return "red";
  }

  if (allIce) {
    return "ice";
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

  if (result.intermittent) {
    return 1;
  }

  if (
    result.relation === "contradiction" ||
    result.relation === "perceptionReceptionDifference"
  ) {
    return 2;
  }

  if (result.relation === "partialDifference") {
    return 3;
  }

  if (result.relation === "fragility") {
    return 4;
  }

  if (result.relation === "coincidentDifficulty") {
    return 5;
  }

  if (result.relation === "attention") {
    return 6;
  }

  if (result.relation === "variability") {
    return 7;
  }

  if (result.relation === "receivedResource") {
    return 8;
  }

  return 9;
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
      "La comunicación parece tener un lugar en tu experiencia cotidiana, aunque esa posibilidad de hablar no necesariamente se mantiene igual cuando el vínculo atraviesa momentos difíciles. Puede haber una diferencia entre poder comunicarse cuando todo está relativamente tranquilo y encontrar esa misma apertura cuando lo que está en juego genera tensión o incertidumbre.",
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
      "Sentirte conectado con tu pareja no necesariamente significa que esa cercanía se transforme siempre en el tipo de cuidado que necesitás. En tu recorrido aparecen ambas experiencias separadas, y puede ser interesante observar qué sucede entre sentirse cerca emocionalmente y sentirse realmente acompañado cuando hace falta.",
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
      "Hay algo que merece atención en la manera en que el vínculo atraviesa los momentos de mayor presión. Las dificultades no aparecen solamente cuando surge una diferencia puntual, sino también cuando una situación exige sostenerse como pareja. Esto puede llevar la mirada hacia cómo se encuentran, se escuchan y se acompañan cuando las cosas dejan de ser sencillas.",
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
      "El modo cotidiano de tratarse puede sentirse positivo y, sin embargo, aparecer otra experiencia cuando entran en juego las diferencias, los límites o aquello que cada uno necesita defender para sí. No necesariamente son experiencias opuestas: pueden convivir y mostrar que la relación cambia según la situación que están atravesando.",
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
      "En tu experiencia hay señales de conexión y de cuidado en momentos cotidianos, pero ese modo de acompañarse parece transformarse cuando aparece una crisis. Es una diferencia interesante porque sugiere que no necesariamente falta cercanía o intención de cuidado; puede haber algo particular en la forma en que ambos enfrentan las situaciones que más los desbordan.",
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
      "Sentís que existe una participación concreta dentro del vínculo, aunque esa disposición no parece trasladarse con la misma facilidad a los momentos de conflicto. Puede ser que aportar a la relación y resolver aquello que genera tensión requieran de recursos diferentes, y esa diferencia aparece en tu recorrido.",
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
      "Podés sentir conexión con tu pareja y, al mismo tiempo, experimentar dificultades relacionadas con la seguridad dentro del vínculo. Ambas cosas pueden coexistir. Sentirse cerca no siempre elimina las dudas o inseguridades, y observar esa diferencia puede ayudar a comprender mejor qué parte de la experiencia necesita ser escuchada.",
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
      "La posibilidad de hablar parece estar presente, aunque eso no garantiza que las conversaciones difíciles terminen ayudando a resolver lo que ocurre. Hay una diferencia entre poder expresar lo que uno siente y encontrar, en medio del desacuerdo, una manera de avanzar juntos.",
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
      "La comunicación aparece como un recurso disponible, pero las situaciones relacionadas con inseguridad parecen abrir otra zona de la experiencia. Esto puede indicar que hablar no siempre alcanza para recuperar tranquilidad, especialmente cuando detrás de la conversación hay miedo, dudas o necesidad de seguridad.",
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
      "El cuidado parece formar parte de la experiencia cotidiana, aunque cuando la situación adquiere mayor intensidad ese acompañamiento puede resultar más difícil de sostener. A veces una relación funciona de una manera en lo cotidiano y revela otra dinámica cuando aparece una dificultad que exige más presencia emocional.",
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

  const intermittentCount =
    state.segmentResults.filter(
      result => result && result.intermittent
    ).length;

  if (intermittentCount >= 5) {
    patterns.push(
      "En una parte importante de tu recorrido aparece intermitencia entre aquello que vivís o expresás y aquello que sentís que recibís de tu pareja. Cuando esta diferencia se repite en varios aspectos del vínculo, puede ser especialmente significativo observar la reciprocidad: no alcanza solamente con que algo exista desde un lado si del otro lado no se siente, no se recibe o no se sostiene de una manera parecida. La reciprocidad no significa que ambos tengan que responder exactamente igual, sino que aquello que se ofrece pueda encontrar algún tipo de correspondencia en la experiencia del otro."
    );
  } else if (intermittentCount > 0) {
    patterns.push(
      `En ${intermittentCount} de los 9 aspectos aparece cierta intermitencia entre lo que vivís o expresás y aquello que sentís que recibís de tu pareja. Una diferencia aislada no define el vínculo completo, pero puede ser interesante observarla porque la reciprocidad también forma parte de cómo una persona se siente dentro de una relación.`
    );
  }

  if ((relations.contradiction || 0) >= 2) {
    patterns.push(
      "En distintos momentos de la lectura aparece una distancia entre aquello que vos vivís de manera positiva y aquello que sentís que recibís del otro. Que esa diferencia se repita no explica por sí sola por qué ocurre, pero sí puede señalar una experiencia que atraviesa más de un aspecto del vínculo."
    );
  }

  if ((relations.perceptionReceptionDifference || 0) >= 2) {
    patterns.push(
      "Hay más de un lugar en el que tu propia experiencia y lo que reconocés recibir parecen ir por caminos diferentes. Esa distancia puede resultar especialmente interesante para vos, porque habla de una relación que quizás se está viviendo de maneras distintas según desde dónde se la observe."
    );
  }

  if ((relations.coincidentDifficulty || 0) >= 3) {
    patterns.push(
      "Varias dimensiones coinciden en una experiencia difícil y, al mismo tiempo, en la sensación de no recibir del otro aquello que podría aliviarla. Cuando una misma sensación aparece en diferentes partes del vínculo, puede valer la pena mirar no solamente cada situación por separado, sino también aquello que tienen en común."
    );
  }

  if ((relations.variability || 0) >= 3) {
    patterns.push(
      "En distintos aspectos aparece una experiencia que no termina de mantenerse siempre de la misma manera. Hay momentos en los que algo parece estar, y otros en los que cambia. Esa variación puede ser tan significativa como una respuesta claramente positiva o negativa, especialmente si depende de determinados momentos, estados emocionales o circunstancias."
    );
  }

  if ((relations.fragility || 0) >= 2) {
    patterns.push(
      "En más de un aspecto aparece cierta dificultad propia junto con la sensación de no recibir suficiente apoyo en esa misma dimensión. La combinación puede hacer que algunas situaciones se sientan más pesadas, porque aquello que ya te cuesta internamente tampoco parece encontrar un sostén claro desde el otro lado."
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
      item.result.relation === "coherence" &&
      !item.result.intermittent
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
      ) &&
      !item.result.intermittent
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
        `Al mirar tu recorrido completo, hay algo que aparece con bastante claridad en ${names[0]}. Lo vivís de una manera positiva y, además, sentís que ese aspecto también está presente en lo que recibís de tu pareja. Cuando ambas experiencias coinciden, suele sentirse como una parte del vínculo en la que no necesitás hacer demasiado esfuerzo para reconocer lo que está pasando.`
      );
    } else {
      paragraphs.push(
        `A lo largo de tus respuestas aparecen varios lugares en los que parece haber una sensación compartida entre lo que vivís y aquello que recibís de tu pareja: ${joinNatural(names)}. No se trata solamente de respuestas positivas aisladas; en esas dimensiones aparece una coincidencia que puede formar parte de la manera en que hoy estás viviendo el vínculo.`
      );
    }
  }

  const intermittentResults =
    state.segmentResults.filter(
      result => result && result.intermittent
    );

  if (intermittentResults.length > 0) {
    const intermittentNames = blocks
      .map((block, index) => ({
        block,
        result: state.segmentResults[index]
      }))
      .filter(item =>
        item.result &&
        item.result.intermittent
      )
      .map(item => item.block.name.toLowerCase());

    if (intermittentResults.length >= 5) {
      paragraphs.push(
        `Una parte importante de tu recorrido aparece marcada por la intermitencia: ${joinNatural(intermittentNames.slice(0, 6))}. Esto no significa necesariamente que exista un problema general en el vínculo, pero sí muestra que en varias dimensiones hay una diferencia entre aquello que vos vivís o expresás y aquello que sentís que recibís. La reciprocidad puede ser importante para sentirse bien dentro de un vínculo: no implica que ambos tengan que sentir o responder exactamente igual, sino que lo que una persona ofrece pueda encontrar algún tipo de correspondencia en la experiencia del otro.`
      );
    } else {
      paragraphs.push(
        `En ${joinNatural(intermittentNames)} aparece una señal de intermitencia. En esos aspectos existe una diferencia entre aquello que vivís o expresás y aquello que sentís que recibís de tu pareja. Una intermitencia aislada no define el vínculo completo, pero puede ser interesante observar qué ocurre allí con la reciprocidad y si esa diferencia aparece solamente en determinadas circunstancias.`
      );
    }
  }

  if (contrasts.length > 0) {
    const first = contrasts[0];
    const blockName = first.block.name.toLowerCase();

    if (first.result.relation === "contradiction") {
      paragraphs.push(
        `Al mismo tiempo, en ${blockName} aparece una experiencia diferente. Para vos ese aspecto puede estar presente o incluso sentirse bien, pero cuando mirás aquello que recibís de tu pareja la respuesta cambia. Esa distancia no necesita ser resuelta desde una única explicación: puede haber diferencias en expectativas, maneras de expresar afecto, formas de interpretar lo que sucede o simplemente experiencias que no están siendo vividas de la misma manera.`
      );
    } else if (
      first.result.relation === "perceptionReceptionDifference"
    ) {
      paragraphs.push(
        `También hay un contraste en ${blockName}. Lo que vos experimentás en esa dimensión no coincide con lo que reconocés recibir de tu pareja. Es posible que ambos estén mirando una misma situación desde lugares diferentes, y justamente por eso la diferencia puede ser más interesante que intentar decidir quién tiene razón. Tu experiencia habla de cómo lo estás viviendo hoy; la recepción habla de aquello que alcanzás a reconocer desde el otro lado.`
      );
    } else {
      paragraphs.push(
        `En ${blockName} la experiencia tampoco aparece completamente definida en una sola dirección. Hay una diferencia entre lo que vivís y aquello que sentís que recibís, como si una parte de la experiencia estuviera presente pero no terminara de sostenerse de la misma manera. Este tipo de zona intermedia puede cambiar mucho según el momento y merece ser observada sin convertirla automáticamente en algo positivo o negativo.`
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
      `También quedan algunas zonas que no aparecen completamente definidas: ${joinNatural(names)}. Más que señalar un problema por sí mismas, estas respuestas hablan de aspectos que pueden cambiar según el momento, la situación o la manera en que ambos están atravesando lo que sucede. Observar cuándo cambian puede darte una lectura más profunda que quedarte solamente con una respuesta puntual.`
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
      "Tu recorrido no queda concentrado en una única experiencia. Hay aspectos que parecen sostenerse, otros que cambian y otros en los que aquello que vivís no coincide completamente con lo que sentís que recibís. Más que buscar una conclusión rápida, la lectura invita a mirar cómo se relacionan todas esas experiencias dentro de tu manera actual de vivir el vínculo."
    );
  }

  paragraphs.push(
    "Hay algo importante en esta lectura: una relación no se vive de manera idéntica en todos sus momentos. Lo que ocurre cuando están tranquilos puede no ser igual a lo que ocurre durante una discusión, una crisis, una etapa de distancia o una situación que despierta inseguridad. Por eso, las diferencias que aparecen entre tus respuestas no necesariamente representan una contradicción de la relación completa; pueden estar mostrando distintos momentos de una misma experiencia."
  );

  paragraphs.push(
    "También puede haber una distancia entre lo que una persona intenta ofrecer y aquello que la otra alcanza a recibir. Esa diferencia no permite afirmar automáticamente que exista una falta de amor, de interés o de compromiso. Puede hablar de necesidades diferentes, formas distintas de expresar lo que se siente o de algo que uno cree estar dando y el otro no llega a percibir de la misma manera."
  );

  paragraphs.push(
    "Lo que aparece en tu Humanómetro pertenece a tu experiencia. No representa la versión de tu pareja ni pretende definir quién está bien o quién está equivocado. Si alguna de estas diferencias te llama especialmente la atención, puede ser justamente ahí donde exista una conversación que todavía no tuvieron, una necesidad que no fue expresada claramente o algo que ambos están viviendo de manera diferente."
  );

  paragraphs.push(
    "Al final, la lectura no busca decirte qué hacer con tu relación. Busca devolverte una mirada más amplia sobre cómo la estás viviendo hoy: qué sentís que funciona, dónde encontrás sostén, qué cosas cambian según las circunstancias y en qué lugares tu experiencia parece separarse de aquello que recibís. Lo que hagas con esa mirada queda en tus manos."
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
  Se conservan las nueve devoluciones de los segmentos.
  Se muestran dentro del mismo results-inner para que formen
  parte del recorrido continuo de lectura hasta CERRAR.
  */

  blocks.forEach((block, index) => {
    const result = state.segmentResults[index];

    if (!result) return;

    const card = document.createElement("article");
    card.className = "segment-result-card";

    const header = document.createElement("div");
    header.className = "segment-result-header";

    const number = document.createElement("span");
    number.className = "segment-result-number";
    number.textContent = `BLOQUE ${block.number}`;

    const title = document.createElement("h3");
    title.className = "segment-result-title";
    title.textContent = block.name;

    header.appendChild(number);
    header.appendChild(title);

    const stateLabel = document.createElement("div");
    stateLabel.className =
      `segment-result-state ${result.color} ${result.intermittent ? "intermittent" : ""}`;

    if (result.allYes) {
      stateLabel.textContent = "RECIPROCIDAD POSITIVA";
    } else if (result.allNo) {
      stateLabel.textContent = "DIFICULTAD COINCIDENTE";
    } else if (result.intermittent) {
      stateLabel.textContent = "INTERMITENCIA";
    } else {
      stateLabel.textContent = result.relationLabel;
    }

    const feedback = document.createElement("p");
    feedback.className = "segment-result-feedback";
    feedback.textContent = result.feedback;

    card.appendChild(header);
    card.appendChild(stateLabel);
    card.appendChild(feedback);

    segmentResults.appendChild(card);
  });
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
            result.intermittent ||
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


function closeResults() {
  resultsPanel.classList.add("hidden");
  document.body.style.overflow = "";

  if (resultsInner) {
    resultsInner.scrollTop = 0;
  }

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
