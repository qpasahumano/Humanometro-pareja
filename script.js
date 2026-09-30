"use strict";

/*
  HUMANÓMETRO PAREJAS

  Escala:
  Sí      = 2
  A veces = 1
  No      = 0

  Cada bloque:
  2 o 3 Sí          -> ROJO
  2 o 3 No          -> CELESTE HIELO
  2 o 3 A veces     -> AMARILLO
  1 Sí + 1 A veces + 1 No
                    -> la tercera respuesta funciona como tendencia

  Resultado global:
  27–54 -> Vínculo estable
  18–26 -> Vínculo estable con aspectos a revisar
   9–17 -> Vínculo inestable
   0–8  -> Vínculo en alerta

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
      "Cuando alguno necesita algo importante del otro, ¿el trato suele reflejar consideración por esa necesidad?"
    ]
  },
  {
    number: 2,
    name: "COMUNICACIÓN",
    subtitle: "Percepción del vínculo",
    questions: [
      "¿Pueden hablar entre ustedes de aquello que realmente les importa sin sentir que tienen que guardárselo?",
      "Cuando tu pareja te habla de algo que sabés que es importante para ella, ¿intentás comprender lo que quiere transmitir antes de responder?",
      "Cuando necesitan hablar de algo importante para la relación, ¿pueden hacerlo sin que alguno deje de escuchar, se cierre o evite la conversación?"
    ]
  },
  {
    number: 3,
    name: "CONEXIÓN",
    subtitle: "Percepción del vínculo",
    questions: [
      "Cuando uno de los dos necesita cercanía emocional, ¿el otro suele poder brindársela?",
      "¿Encuentran momentos que les permitan sentirse realmente conectados, más allá de las obligaciones cotidianas?",
      "Cuando atraviesan una etapa de distancia o desconexión, ¿suelen encontrar la manera de volver a acercarse?"
    ]
  },
  {
    number: 4,
    name: "CUIDADO",
    subtitle: "Autopercepción en el vínculo",
    questions: [
      "Cuando tu pareja atraviesa algo que sabés que le afecta, ¿tenés en cuenta cómo se encuentra antes de actuar o decidir?",
      "Cuando tu pareja necesita apoyo, ¿procurás estar presente de una manera que realmente le resulte útil?",
      "¿Hay acciones concretas de tu parte que respondan a necesidades importantes de tu pareja?"
    ]
  },
  {
    number: 5,
    name: "RESPETO",
    subtitle: "Autopercepción en el vínculo",
    questions: [
      "Cuando tu pareja piensa o siente algo diferente de vos sobre un tema importante, ¿podés respetar su manera de verlo?",
      "Cuando tu pareja necesita espacio, tiempo o establece un límite, ¿podés respetarlo aunque no estés de acuerdo?",
      "Cuando existe un desacuerdo sobre algo importante, ¿podés defender tu posición sin descalificar ni menospreciar a tu pareja?"
    ]
  },
  {
    number: 6,
    name: "APORTE",
    subtitle: "Autopercepción en el vínculo",
    questions: [
      "Cuando la relación necesita algo de vos, ¿procurás asumir tu parte para que el vínculo funcione?",
      "¿Destinás tiempo, atención o energía a aspectos de la relación que sabés que son importantes para tu pareja?",
      "Cuando tu pareja te señala algo que necesita de vos dentro de la relación, ¿procurás hacer algo concreto al respecto?"
    ]
  },
  {
    number: 7,
    name: "CONFLICTOS",
    subtitle: "Vivencias reales",
    questions: [
      "Cuando surge un conflicto por algo que realmente importa para alguno de los dos, ¿pueden abordarlo sin quedar atrapados en la misma discusión?",
      "Después de una discusión que los afecta emocionalmente, ¿pueden encontrar una manera de volver a acercarse?",
      "Cuando tienen un desacuerdo importante, ¿alguno de los dos suele priorizar comprender y resolver antes que demostrar que tiene razón?"
    ]
  },
  {
    number: 8,
    name: "CELOS",
    subtitle: "Vivencias reales",
    questions: [
      "Cuando una situación despierta celos o inseguridad en alguno de los dos, ¿pueden hablar de lo que ocurre sin convertirlo inmediatamente en una acusación?",
      "Cuando alguno necesita seguridad respecto del vínculo, ¿pueden hablar de esa necesidad sin que termine transformándose en control?",
      "Ante una situación que genera inseguridad, ¿pueden diferenciar lo que realmente ocurrió de aquello que cada uno imaginó o interpretó?"
    ]
  },
  {
    number: 9,
    name: "CRISIS",
    subtitle: "Vivencias reales",
    questions: [
      "Cuando atraviesan una situación que pone a prueba la relación, ¿pueden enfrentarla como pareja en lugar de enfrentarse entre ustedes?",
      "Cuando uno de los dos atraviesa una dificultad importante, ¿el otro puede acompañarlo teniendo en cuenta lo que realmente necesita?",
      "Después de atravesar una situación difícil, ¿pueden reconocer lo aprendido y utilizarlo para fortalecer el vínculo?"
    ]
  }
];

const responseOptions = [
  {
    key: "yes",
    label: "Sí",
    value: 2
  },
  {
    key: "maybe",
    label: "A veces",
    value: 1
  },
  {
    key: "no",
    label: "No",
    value: 0
  }
];

const state = {
  started: false,
  currentBlock: 0,
  answers: Array.from({ length: 9 }, () => [null, null, null]),
  completed: Array(9).fill(false),
  segmentResults: Array(9).fill(null)
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

const generalResults = {
  stable: {
    title: "❤️ VÍNCULO ESTABLE",
    text: `
      <p>Las respuestas muestran una base sólida en la manera en que vivís el vínculo. Predominan experiencias de cercanía, consideración y reciprocidad.</p>
      <p>La relación parece contar con recursos para comunicarse, acompañarse y atravesar las situaciones cotidianas sin perder de vista al otro. También aparece una valoración del vínculo que se sostiene tanto en lo que comparten como en la manera en que participás dentro de la relación.</p>
      <p>Esto no significa que no existan diferencias, desacuerdos o momentos difíciles. La diferencia está en cómo esos momentos son transitados y en los recursos que aparecen en tus respuestas.</p>
      <p>La lectura de cada segmento del corazón permite observar dónde esa fortaleza se manifiesta con mayor claridad y dónde todavía existen pequeños espacios para seguir construyendo.</p>
    `
  },

  review: {
    title: "🟡 VÍNCULO ESTABLE CON ASPECTOS A REVISAR",
    text: `
      <p>Las respuestas muestran una base de vínculo que se encuentra presente, aunque aparecen algunos aspectos que no se manifiestan de manera sostenida.</p>
      <p>Hay áreas en las que aparece conexión y reciprocidad, mientras que otras parecen necesitar mayor atención. Esto puede estar relacionado con la comunicación, la manera de cuidarse, el respeto por las necesidades del otro o la forma en que atraviesan determinadas situaciones.</p>
      <p>Las diferencias entre lo que cada persona vive también forman parte de cualquier vínculo. Observarlas puede ayudar a reconocer aquello que necesita mayor atención.</p>
      <p>El corazón muestra dónde encontrás mayor estabilidad y dónde podría beneficiarse de una mirada más consciente.</p>
    `
  },

  unstable: {
    title: "🟠 VÍNCULO INESTABLE",
    text: `
      <p>Las respuestas muestran que el vínculo atraviesa diferentes niveles de conexión y que existen varios aspectos que no aparecen de manera sostenida.</p>
      <p>Pueden aparecer dificultades relacionadas con la comunicación, el cuidado, el respeto, la participación dentro de la relación o la manera de afrontar conflictos, celos y momentos de crisis.</p>
      <p>Este resultado no define a la pareja ni determina su futuro. Señala aspectos de tu experiencia del vínculo que merecen ser observados con mayor atención.</p>
      <p>La lectura de los nueve segmentos permite mirar con mayor precisión dónde aparecen esas señales.</p>
    `
  },

  alert: {
    title: "🧊 VÍNCULO EN ALERTA",
    text: `
      <p>Las respuestas muestran una presencia importante de dificultades, desconexiones o aspectos que pueden estar afectando la manera en que vivís la relación.</p>
      <p>La lectura puede involucrar distintos aspectos: comunicación, trato, conexión emocional, cuidado, respeto, aporte personal y la manera en que enfrentan conflictos, celos o situaciones de crisis.</p>
      <p>Este resultado no pretende etiquetar la relación ni decidir por ustedes. Es una invitación a detenerse, mirar lo que está ocurriendo y reconocer qué aspectos del vínculo necesitan mayor atención.</p>
    `
  }
};

function initialize() {
  segments.forEach((segment, index) => {
    segment.addEventListener("click", () => {
      if (!state.started && index !== 0) {
        return;
      }

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

  updateWheel();
}

function startTest() {
  if (state.started) {
    openBlock(state.currentBlock);
    return;
  }

  state.started = true;

  enableHeart.classList.add("enabled");
  enableHeart.querySelector("span:last-child").textContent = "CORAZÓN HABILITADO";

  journeyGuide.textContent =
    "El bloque 1 está disponible. Completá sus tres preguntas para continuar.";

  openBlock(0);
}

function openBlock(index) {
  if (!state.started) {
    return;
  }

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
    number.textContent = `PREGUNTA ${blockIndex * 3 + questionIndex + 1}`;

    const text = document.createElement("p");
    text.className = "question-text";
    text.textContent = question;

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
      });

      answers.appendChild(button);
    });

    card.appendChild(number);
    card.appendChild(text);
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

  if (!button) {
    return;
  }

  const complete = state.answers[blockIndex].every(answer => answer !== null);

  button.disabled = !complete;
}

function updateQuestionProgress(blockIndex) {
  const answered = state.answers[blockIndex].filter(
    answer => answer !== null
  ).length;

  questionProgressText.textContent = `Pregunta ${answered} de 3`;
  questionProgressBar.style.width = `${Math.max(33.33, answered / 3 * 100)}%`;
}

function completeCurrentBlock(index) {
  const answers = state.answers[index];

  if (!answers.every(answer => answer !== null)) {
    return;
  }

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
    journeyGuide.textContent =
      "Recorrido completo. Tu lectura del Humanómetro está lista.";

    updateWheel();

    setTimeout(showResults, 550);
  }
}

function calculateSegment(answerKeys) {
  const yesCount = answerKeys.filter(value => value === "yes").length;
  const maybeCount = answerKeys.filter(value => value === "maybe").length;
  const noCount = answerKeys.filter(value => value === "no").length;

  const score = answerKeys.reduce((total, key) => {
    const option = responseOptions.find(item => item.key === key);
    return total + option.value;
  }, 0);

  let color;

  if (yesCount >= 2) {
    color = "red";
  } else if (noCount >= 2) {
    color = "ice";
  } else if (maybeCount >= 2) {
    color = "yellow";
  } else {
    /*
      Una respuesta de cada tipo:
      la tercera respuesta funciona como tendencia diferenciadora.
    */
    const third = answerKeys[2];

    if (third === "yes") {
      color = "red";
    } else if (third === "no") {
      color = "ice";
    } else {
      color = "yellow";
    }
  }

  return {
    color,
    score,
    yesCount,
    maybeCount,
    noCount
  };
}

function calculateGlobalScore() {
  return state.answers.flat().reduce((total, answerKey) => {
    const option = responseOptions.find(item => item.key === answerKey);
    return total + option.value;
  }, 0);
}

function getGeneralResult(score) {
  if (score >= 27) {
    return generalResults.stable;
  }

  if (score >= 18) {
    return generalResults.review;
  }

  if (score >= 9) {
    return generalResults.unstable;
  }

  return generalResults.alert;
}

function showResults() {
  const score = calculateGlobalScore();
  const result = getGeneralResult(score);

  resultTitle.textContent = result.title;
  resultScore.textContent = `Puntaje de tu recorrido: ${score} / 54`;

  resultGeneral.innerHTML = result.text;

  renderSegmentResults();

  resultsPanel.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  resultsPanel.scrollTop = 0;
}

function renderSegmentResults() {
  segmentResults.innerHTML = "";

  blocks.forEach((block, index) => {
    const result = state.segmentResults[index];

    if (!result) {
      return;
    }

    const article = document.createElement("article");
    article.className = `segment-result ${result.color}`;

    const header = document.createElement("div");
    header.className = "segment-result-header";

    const title = document.createElement("div");
    title.className = "segment-result-title";
    title.textContent = `${block.number}. ${block.name}`;

    const mark = document.createElement("div");
    mark.className = "segment-result-mark";

    if (result.color === "red") {
      mark.textContent = "🔴";
    } else if (result.color === "yellow") {
      mark.textContent = "🟡";
    } else {
      mark.textContent = "🧊";
    }

    const description = document.createElement("p");

    if (result.color === "red") {
      description.textContent =
        "Tus respuestas muestran una tendencia positiva en este aspecto del vínculo.";
    } else if (result.color === "yellow") {
      description.textContent =
        "Tus respuestas muestran una tendencia intermedia. Este aspecto puede observarse con mayor atención.";
    } else {
      description.textContent =
        "Tus respuestas muestran una señal que merece especial atención dentro de tu experiencia del vínculo.";
    }

    header.appendChild(title);
    header.appendChild(mark);

    article.appendChild(header);
    article.appendChild(description);

    segmentResults.appendChild(article);
  });
}

function updateWheel() {
  segments.forEach((segment, index) => {
    segment.classList.remove("locked", "available", "completed", "active");
    segment.classList.remove("red", "yellow", "ice");

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
      }

      return;
    }

    if (index === state.currentBlock) {
      segment.classList.add("available", "active");
      return;
    }

    segment.classList.add("locked");
  });
}

function closeQuestionPanel() {
  questionPanel.classList.add("hidden");
  document.body.style.overflow = "";
  updateWheel();
}

function restartTest() {
  state.started = false;
  state.currentBlock = 0;
  state.answers = Array.from({ length: 9 }, () => [null, null, null]);
  state.completed = Array(9).fill(false);
  state.segmentResults = Array(9).fill(null);

  resultsPanel.classList.add("hidden");
  questionPanel.classList.add("hidden");

  enableHeart.classList.remove("enabled");
  enableHeart.querySelector("span:last-child").textContent =
    "HABILITAR CORAZÓN";

  journeyGuide.textContent =
    "Empezá por el bloque 1. Completá sus tres preguntas para habilitar el siguiente.";

  journeyGuide.classList.remove("completed");

  document.body.style.overflow = "";

  updateWheel();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

initialize();
