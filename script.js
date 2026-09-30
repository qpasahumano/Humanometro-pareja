const COLORS = Object.freeze({
  red: "red",
  yellow: "yellow",
  ice: "ice"
});


const segmentDefs = [
  { id: 1, name: "Trato" },
  { id: 2, name: "Comunicación" },
  { id: 3, name: "Conexión" },
  { id: 4, name: "Cuidado" },
  { id: 5, name: "Respeto" },
  { id: 6, name: "Aporte" },
  { id: 7, name: "Conflictos" },
  { id: 8, name: "Celos" },
  { id: 9, name: "Crisis" }
];


const questions = {

  1: [
    "¿Te sentís tratado/a con consideración dentro de tu vínculo?",
    "¿Sentís que existe reciprocidad en el trato cotidiano?",
    "¿Podés expresar lo que necesitás sin sentir que el otro te desvaloriza?"
  ],

  2: [
    "¿Sentís que pueden hablar de lo importante con libertad?",
    "¿Sentís que tu pareja escucha lo que querés comunicar?",
    "¿La comunicación entre ustedes suele ser clara?"
  ],

  3: [
    "¿Sentís cercanía emocional con tu pareja?",
    "¿Existe conexión más allá de la rutina?",
    "¿Sentís que pueden encontrarse emocionalmente?"
  ],

  4: [
    "¿Sentís que existe cuidado mutuo?",
    "¿Tu pareja tiene en cuenta cómo estás?",
    "¿Sentís que el vínculo contempla las necesidades de ambos?"
  ],

  5: [
    "¿Sentís respeto por tus límites?",
    "¿Podés ser vos mismo/a dentro de la relación?",
    "¿Las diferencias pueden expresarse sin perder el respeto?"
  ],

  6: [
    "¿Sentís que ambos aportan al vínculo?",
    "¿Percibís participación de ambos en la construcción de la relación?",
    "¿Sentís que tu presencia tiene un valor activo en la pareja?"
  ],

  7: [
    "¿Pueden atravesar los conflictos sin dañarse innecesariamente?",
    "¿Después de un conflicto logran volver a encontrarse?",
    "¿Sentís que existe voluntad de resolver y no solamente de ganar una discusión?"
  ],

  8: [
    "¿Sentís seguridad respecto de la confianza dentro del vínculo?",
    "¿Los celos interfieren con frecuencia en la relación?",
    "¿Podés vivir el vínculo sin sentir una vigilancia constante?"
  ],

  9: [
    "¿Cuando aparece una crisis pueden actuar como equipo?",
    "¿Sentís que existe disposición para atravesar momentos difíciles?",
    "¿Las crisis terminan alejándolos o pueden convertirse en una oportunidad de revisión?"
  ]

};


const state = {
  heartEnabled: false,
  unlockedSegment: 0,
  answers: Array.from(
    { length: 9 },
    () => Array(3).fill(null)
  ),
  colors: Array(9).fill(null)
};


const segmentHits =
  document.getElementById("segmentHits");

const segmentColors =
  document.getElementById("segmentColors");

const modal =
  document.getElementById("questionModal");

const modalContent =
  document.getElementById("modalContent");

const closeModal =
  document.getElementById("closeModal");


const CENTER_X = 512;
const CENTER_Y = 768;

const INNER_RADIUS = 150;
const OUTER_RADIUS = 430;

const SEGMENTS = 9;

const START_ANGLE = -110;
const STEP = 360 / SEGMENTS;


function point(cx, cy, radius, degrees) {

  const angle =
    degrees * Math.PI / 180;

  return [
    cx + radius * Math.cos(angle),
    cy + radius * Math.sin(angle)
  ];
}


function sectorPath(index) {

  const start =
    START_ANGLE + index * STEP;

  const end =
    start + STEP;

  const [x1, y1] =
    point(
      CENTER_X,
      CENTER_Y,
      INNER_RADIUS,
      start
    );

  const [x2, y2] =
    point(
      CENTER_X,
      CENTER_Y,
      OUTER_RADIUS,
      start
    );

  const [x3, y3] =
    point(
      CENTER_X,
      CENTER_Y,
      OUTER_RADIUS,
      end
    );

  const [x4, y4] =
    point(
      CENTER_X,
      CENTER_Y,
      INNER_RADIUS,
      end
    );

  return `
    M ${x1} ${y1}
    L ${x2} ${y2}
    A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 0 1 ${x3} ${y3}
    L ${x4} ${y4}
    A ${INNER_RADIUS} ${INNER_RADIUS} 0 0 0 ${x1} ${y1}
    Z
  `;
}


function buildSegmentHotspots() {

  segmentDefs.forEach(def => {

    const path =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

    path.classList.add(
      "segment-hit",
      "locked"
    );

    path.dataset.segment =
      String(def.id);

    path.setAttribute(
      "d",
      sectorPath(def.id - 1)
    );

    path.addEventListener(
      "click",
      () => openSegment(def.id)
    );

    segmentHits.appendChild(path);

  });

}


function resultColor(values) {

  const counts = {

    red: values.filter(
      value => value === COLORS.red
    ).length,

    yellow: values.filter(
      value => value === COLORS.yellow
    ).length,

    ice: values.filter(
      value => value === COLORS.ice
    ).length

  };

  if (counts.red === 3) {
    return COLORS.red;
  }

  if (counts.ice === 3) {
    return COLORS.ice;
  }

  return COLORS.yellow;
}


function clipForSegment(id) {

  const index = id - 1;

  const start =
    START_ANGLE + index * STEP;

  const end =
    start + STEP;

  const points = [

    point(
      CENTER_X,
      CENTER_Y,
      INNER_RADIUS,
      start
    ),

    point(
      CENTER_X,
      CENTER_Y,
      OUTER_RADIUS,
      start
    ),

    point(
      CENTER_X,
      CENTER_Y,
      OUTER_RADIUS,
      start + STEP / 2
    ),

    point(
      CENTER_X,
      CENTER_Y,
      OUTER_RADIUS,
      end
    ),

    point(
      CENTER_X,
      CENTER_Y,
      INNER_RADIUS,
      end
    )

  ];

  return `polygon(
    ${points
      .map(
        ([x, y]) =>
          `${x / 10.24}% ${y / 15.36}%`
      )
      .join(",")}
  )`;
}


function paintSegment(id, color) {

  let layer =
    document.getElementById(
      `segment-color-${id}`
    );

  if (!layer) {

    layer =
      document.createElement("div");

    layer.id =
      `segment-color-${id}`;

    segmentColors.appendChild(layer);

  }

  layer.className =
    `segment-color ${color} visible flash`;

  layer.style.clipPath =
    clipForSegment(id);

  window.setTimeout(
    () => {
      layer.classList.remove("flash");
    },
    1400
  );

}


function refreshUnlocks() {

  document
    .querySelectorAll(".segment-hit")
    .forEach(path => {

      const id =
        Number(path.dataset.segment);

      const unlocked =
        state.heartEnabled &&
        id === state.unlockedSegment;

      path.classList.toggle(
        "locked",
        !unlocked
      );

      path.classList.toggle(
        "ready",
        unlocked
      );

    });

}


function openSegment(id) {

  if (
    !state.heartEnabled ||
    id !== state.unlockedSegment
  ) {
    return;
  }

  const def =
    segmentDefs.find(
      item => item.id === id
    );

  const saved =
    state.answers[id - 1];

  const answers =
    [...saved];

  modalContent.innerHTML = `

    <h2
      id="modalTitle"
      class="modal-title">
      ${id}. ${def.name}
    </h2>

    <p class="modal-intro">
      Respondé las tres preguntas.
      Al completar este segmento,
      el bloque adoptará el color correspondiente.
    </p>

    ${questions[id]
      .map(
        (question, index) => `

          <div class="question">

            <p>
              ${index + 1}. ${question}
            </p>

            <div class="answers">

              <button
                class="answer-button"
                type="button"
                data-index="${index}"
                data-answer="red">
                Sí
              </button>

              <button
                class="answer-button"
                type="button"
                data-index="${index}"
                data-answer="yellow">
                Tal vez
              </button>

              <button
                class="answer-button"
                type="button"
                data-index="${index}"
                data-answer="ice">
                No
              </button>

            </div>

          </div>
        `
      )
      .join("")}

    <button
      id="saveSegment"
      class="complete-button"
      type="button"
      disabled>
      Completar bloque ${id}
    </button>
  `;

  const answerButtons =
    modalContent.querySelectorAll(
      ".answer-button"
    );

  const saveButton =
    modalContent.querySelector(
      "#saveSegment"
    );

  function refreshSaveButton() {

    saveButton.disabled =
      answers.some(
        value => value === null
      );

  }

  answerButtons.forEach(button => {

    const index =
      Number(button.dataset.index);

    if (
      answers[index] ===
      button.dataset.answer
    ) {
      button.classList.add("selected");
    }

    button.addEventListener(
      "click",
      () => {

        modalContent
          .querySelectorAll(
            `.answer-button[data-index="${index}"]`
          )
          .forEach(item => {
            item.classList.remove("selected");
          });

        button.classList.add("selected");

        answers[index] =
          button.dataset.answer;

        refreshSaveButton();

      }
    );

  });

  saveButton.addEventListener(
    "click",
    () => {

      if (
        answers.some(
          value => value === null
        )
      ) {
        return;
      }

      const color =
        resultColor(answers);

      state.answers[id - 1] =
        answers;

      state.colors[id - 1] =
        color;

      paintSegment(
        id,
        color
      );

      modal.hidden = true;

      if (
        id === state.unlockedSegment &&
        state.unlockedSegment < SEGMENTS
      ) {
        state.unlockedSegment += 1;
      }

      refreshUnlocks();

    }
  );

  modal.hidden = false;
}


document
  .getElementById("enableHeart")
  .addEventListener(
    "click",
    () => {

      state.heartEnabled = true;

      if (
        state.unlockedSegment === 0
      ) {
        state.unlockedSegment = 1;
      }

      document
        .getElementById("heartSymbol")
        .style.transform = "scale(1.12)";

      refreshUnlocks();

    }
  );


closeModal.addEventListener(
  "click",
  () => {
    modal.hidden = true;
  }
);


modal.addEventListener(
  "click",
  event => {

    if (
      event.target.classList.contains(
        "modal-backdrop"
      )
    ) {
      modal.hidden = true;
    }

  }
);


[
  ["paymentMercado", "Mercado Pago"],
  ["paymentPaypal", "PayPal"],
  ["paymentPayoneer", "Payoneer"]

].forEach(
  ([id, provider]) => {

    document
      .getElementById(id)
      .addEventListener(
        "click",
        () => {

          window.alert(
            `${provider}: botón preparado para conectar cuando se incorporen las credenciales reales.`
          );

        }
      );

  }
);


buildSegmentHotspots();
refreshUnlocks();
