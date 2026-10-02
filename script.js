"use strict";

// HUMANÓMETRO PAREJAS — actualización 02/10/2026

/*
HUMANÓMETRO PAREJAS

Escala:
Sí      = 2
A veces = 1
No      = 0

Cada bloque:
Predominan Sí       -> ROJO
Predominan A veces  -> AMARILLO
Predominan No       -> CELESTE HIELO
1 Sí + 1 A veces + 1 No
-> AMARILLO INTERMITENTE

El color de cada bloque depende exclusivamente de sus
tres respuestas.

Resultado global:
27–54 -> Vínculo estable
18–26 -> Vínculo estable con aspectos a revisar
9–17  -> Vínculo inestable
0–8   -> Vínculo en alerta

Color general del corazón:
Predominan respuestas Sí      -> ROJO
Predominan respuestas No      -> CELESTE HIELO
Predominan respuestas A veces -> AMARILLO
Sin predominancia única        -> AMARILLO

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

const generalResults = {
  stable: {
    title: "❤️ VÍNCULO ESTABLE",
    text: `
      <p>Las respuestas muestran una base sólida en la manera en que vivís el vínculo. Predominan experiencias de cercanía, consideración y reciprocidad.</p>
      <p>La relación parece contar con recursos para comunicarse, acompañarse y atravesar las situaciones cotidianas sin perder de vista al otro.</p>
      <p>Esto no significa que no existan diferencias, desacuerdos o momentos difíciles. La lectura de los nueve segmentos permite observar dónde esa estabilidad aparece con mayor claridad.</p>
    `
  },

  review: {
    title: "🟡 VÍNCULO ESTABLE CON ASPECTOS A REVISAR",
    text: `
      <p>Las respuestas muestran una base de vínculo presente, aunque algunos aspectos no aparecen de manera sostenida.</p>
      <p>Hay áreas en las que aparece conexión y reciprocidad, mientras que otras parecen necesitar mayor atención o una mirada más consciente.</p>
      <p>Los nueve segmentos permiten observar con mayor precisión dónde encontrás estabilidad y dónde aparecen diferencias.</p>
    `
  },

  unstable: {
    title: "🟠 VÍNCULO INESTABLE",
    text: `
      <p>Las respuestas muestran diferentes niveles de conexión y varios aspectos que no aparecen de manera sostenida en tu experiencia del vínculo.</p>
      <p>Pueden aparecer diferencias relacionadas con la comunicación, el cuidado, el respeto, la participación o la manera de atravesar situaciones difíciles.</p>
      <p>Este resultado no define a la pareja ni determina su futuro. Señala aspectos de tu experiencia que merecen ser observados con mayor atención.</p>
    `
  },

  alert: {
    title: "🧊 VÍNCULO EN ALERTA",
    text: `
      <p>Las respuestas muestran una presencia importante de dificultades, desconexiones o aspectos que pueden estar afectando la manera en que vivís la relación.</p>
      <p>La lectura puede involucrar distintos aspectos del vínculo y permite detenerse en cada uno de ellos por separado.</p>
      <p>Este resultado no pretende etiquetar la relación ni decidir por ustedes. Es una invitación a observar qué aspectos necesitan mayor atención.</p>
    `
  }
};

const segmentFeedback = {
  "yes-yes-yes": "Las tres respuestas muestran una percepción sostenida de presencia y disponibilidad en este aspecto del vínculo.",
  "yes-yes-maybe": "Dos respuestas reflejan una experiencia positiva y una tercera introduce un matiz. El aspecto aparece presente, aunque no de manera completamente uniforme.",
  "yes-yes-no": "Dos respuestas señalan una experiencia favorable, mientras que una marca una diferencia concreta que conviene observar dentro de este aspecto.",
  "yes-maybe-yes": "La primera y la tercera respuesta muestran una experiencia positiva, mientras que la respuesta intermedia señala un punto que puede variar según la situación.",
  "yes-maybe-maybe": "Aparece una respuesta positiva junto con dos experiencias que no se sostienen siempre. Este aspecto parece depender bastante de las circunstancias.",
  "yes-maybe-no": "Las tres respuestas expresan experiencias diferentes: aparece una vivencia positiva, una intermedia y otra negativa. Hay diversidad dentro de este aspecto.",
  "yes-no-yes": "La primera y la tercera respuesta muestran una experiencia favorable, mientras que la segunda señala una dificultad puntual que diferencia esta parte del vínculo.",
  "yes-no-maybe": "La respuesta positiva convive con una dificultad concreta y una situación intermedia. El aspecto presenta una experiencia cambiante.",
  "yes-no-no": "Una respuesta muestra una experiencia favorable, mientras que dos señalan dificultades. La diferencia entre ellas merece una observación particular.",

  "maybe-yes-yes": "Las dos últimas respuestas muestran una experiencia favorable, mientras que la primera introduce un matiz que puede aparecer según la situación.",
  "maybe-yes-maybe": "Una respuesta positiva queda acompañada por dos experiencias intermedias. El aspecto aparece disponible, pero con cierta variabilidad.",
  "maybe-yes-no": "Las tres respuestas son diferentes y muestran que este aspecto puede vivirse de maneras distintas según el momento o la situación.",
  "maybe-maybe-yes": "Dos respuestas muestran una experiencia intermedia y la tercera una experiencia positiva. El aspecto parece tener una base favorable, aunque todavía variable.",
  "maybe-maybe-maybe": "Las tres respuestas coinciden en una experiencia intermedia. Este aspecto no aparece completamente consolidado y puede ser observado con mayor atención.",
  "maybe-no-yes": "La experiencia comienza de manera intermedia, aparece una dificultad concreta y termina con una respuesta favorable. Hay variación dentro del aspecto.",
  "maybe-no-maybe": "Dos respuestas muestran una experiencia intermedia y una señala una dificultad. El aspecto parece necesitar atención especialmente en determinadas situaciones.",
  "maybe-no-no": "Una respuesta muestra una experiencia intermedia y dos señalan dificultades. La tendencia sugiere que este aspecto no se sostiene de manera regular.",

  "no-yes-yes": "La primera respuesta señala una dificultad, mientras que las dos siguientes muestran una experiencia favorable. El aspecto parece haber encontrado recursos en parte del vínculo.",
  "no-yes-maybe": "Una dificultad inicial convive con una respuesta favorable y otra intermedia. La experiencia de este aspecto parece depender del contexto.",
  "no-yes-no": "Las respuestas muestran una dificultad, una experiencia favorable y nuevamente una dificultad. El aspecto presenta una oscilación clara.",
  "no-maybe-yes": "La primera respuesta señala una dificultad, seguida de una experiencia intermedia y una favorable. Hay señales de variación dentro de este aspecto.",
  "no-maybe-maybe": "Una dificultad aparece junto con dos respuestas intermedias. Este aspecto parece requerir atención para dejar de depender tanto de las circunstancias.",
  "no-maybe-no": "Dos respuestas señalan dificultades y una queda en un punto intermedio. La experiencia muestra una tendencia que merece ser observada.",
  "no-no-yes": "Las dos primeras respuestas señalan dificultades, mientras que la tercera muestra una experiencia favorable. Existe una diferencia concreta dentro de este aspecto.",
  "no-no-maybe": "Dos respuestas muestran dificultades y una experiencia intermedia. Este aspecto aparece con poca estabilidad en las respuestas.",
  "no-no-no": "Las tres respuestas señalan dificultades en este aspecto. Es uno de los puntos que merece mayor atención dentro de la lectura."
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

function calculateSegment(answerKeys) {
  const yesCount =
    answerKeys.filter(value => value === "yes").length;

  const maybeCount =
    answerKeys.filter(value => value === "maybe").length;

  const noCount =
    answerKeys.filter(value => value === "no").length;

  const score = answerKeys.reduce((total, key) => {
    const option = responseOptions.find(item => item.key === key);
    return total + option.value;
  }, 0);

  let color = "yellow";
  let intermittent = false;

  if (yesCount > maybeCount && yesCount > noCount) {
    color = "red";
  } else if (noCount > yesCount && noCount > maybeCount) {
    color = "ice";
  } else if (
    yesCount === 1 &&
    maybeCount === 1 &&
    noCount === 1
  ) {
    color = "yellow";
    intermittent = true;
  } else if (maybeCount > yesCount && maybeCount > noCount) {
    color = "yellow";
  }

  return {
    color,
    intermittent,
    score,
    yesCount,
    maybeCount,
    noCount,
    answerKey: answerKeys.join("-"),
    feedback: getSegmentFeedback(answerKeys)
  };
}

function getSegmentFeedback(answerKeys) {
  const key = answerKeys.join("-");

  return (
    segmentFeedback[key] ||
    "Las respuestas muestran una combinación particular de experiencias en este aspecto del vínculo."
  );
}

function calculateOverallColor() {
  const allAnswers = state.answers.flat();

  const yesCount =
    allAnswers.filter(value => value === "yes").length;

  const maybeCount =
    allAnswers.filter(value => value === "maybe").length;

  const noCount =
    allAnswers.filter(value => value === "no").length;

  if (yesCount > maybeCount && yesCount > noCount) {
    return "red";
  }

  if (noCount > yesCount && noCount > maybeCount) {
    return "ice";
  }

  if (maybeCount > yesCount && maybeCount > noCount) {
    return "yellow";
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

function getGeneralResult(score) {
  if (score >= 27) return generalResults.stable;
  if (score >= 18) return generalResults.review;
  if (score >= 9) return generalResults.unstable;
  return generalResults.alert;
}

function showResults() {
  const score = calculateGlobalScore();
  const result = getGeneralResult(score);

  state.overallColor = calculateOverallColor();
  applyOverallHeartColor();

  resultTitle.textContent = result.title;
  resultScore.textContent =
    `Puntaje de tu recorrido: ${score} / 54`;

  resultGeneral.innerHTML = result.text;

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

  blocks.forEach((block, index) => {
    const result = state.segmentResults[index];

    if (!result) return;

    const article = document.createElement("article");

    article.className =
      `segment-result ${result.color}`;

    const header = document.createElement("div");

    header.className =
      "segment-result-header";

    const title = document.createElement("div");

    title.className =
      "segment-result-title";

    title.textContent =
      `${block.number}. ${block.name}`;

    const mark = document.createElement("div");

    mark.className =
      "segment-result-mark";

    if (result.color === "red") {
      mark.textContent = "🔴";
    } else if (result.color === "yellow") {
      mark.textContent = "🟡";
    } else {
      mark.textContent = "🧊";
    }

    const description = document.createElement("p");

    description.textContent = result.feedback;

    header.appendChild(title);
    header.appendChild(mark);

    article.appendChild(header);
    article.appendChild(description);

    segmentResults.appendChild(article);
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

  return "transparent";
}

function getWheelSegmentLineColor(color) {
  if (color === "red") return "#ff0055";
  if (color === "yellow") return "#fff200";
  if (color === "ice") return "#00eaff";
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
          result.intermittent
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
