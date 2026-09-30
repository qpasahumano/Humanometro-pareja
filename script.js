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
    "¿Existe entre ustedes un trato amable y considerado, especialmente cuando alguno necesita comprensión del otro?",
    "Cuando alguno atraviesa un momento de enojo o malestar, ¿pueden seguir tratándose con respeto?",
    "Cuando alguno necesita algo importante del otro, ¿el trato suele reflejar consideración por esa necesidad?"
  ],

  2: [
    "¿Pueden hablar entre ustedes de aquello que realmente les importa sin sentir que tienen que guardárselo?",
    "Cuando tu pareja te habla de algo que sabés que es importante para ella, ¿intentás comprender lo que quiere transmitir antes de responder?",
    "Cuando necesitan hablar de algo importante para la relación, ¿pueden hacerlo sin que alguno deje de escuchar, se cierre o evite la conversación?"
  ],

  3: [
    "Cuando uno de los dos necesita cercanía emocional, ¿el otro suele poder brindársela?",
    "¿Encuentran momentos que les permitan sentirse realmente conectados, más allá de las obligaciones cotidianas?",
    "Cuando atraviesan una etapa de distancia o desconexión, ¿suelen encontrar la manera de volver a acercarse?"
  ],

  4: [
    "Cuando tu pareja atraviesa algo que sabés que le afecta, ¿tenés en cuenta cómo se encuentra antes de actuar o decidir?",
    "Cuando tu pareja necesita apoyo, ¿procurás estar presente de una manera que realmente le resulte útil?",
    "¿Hay acciones concretas de tu parte que respondan a necesidades importantes de tu pareja?"
  ],

  5: [
    "Cuando tu pareja piensa o siente algo diferente de vos sobre un tema importante, ¿podés respetar su manera de verlo?",
    "Cuando tu pareja necesita espacio, tiempo o establece un límite, ¿podés respetarlo aunque no estés de acuerdo?",
    "Cuando existe un desacuerdo sobre algo importante, ¿podés defender tu posición sin descalificar ni menospreciar a tu pareja?"
  ],

  6: [
    "Cuando la relación necesita algo de vos, ¿procurás asumir tu parte para que el vínculo funcione?",
    "¿Destinás tiempo, atención o energía a aspectos de la relación que sabés que son importantes para tu pareja?",
    "Cuando tu pareja te señala algo que necesita de vos dentro de la relación, ¿procurás hacer algo concreto al respecto?"
  ],

  7: [
    "Cuando surge un conflicto por algo que realmente importa para alguno de los dos, ¿pueden abordarlo sin quedar atrapados en la misma discusión?",
    "Después de una discusión que los afecta emocionalmente, ¿pueden encontrar una manera de volver a acercarse?",
    "Cuando tienen un desacuerdo importante, ¿alguno de los dos suele priorizar comprender y resolver antes que demostrar que tiene razón?"
  ],

  8: [
    "Cuando una situación despierta celos o inseguridad en alguno de los dos, ¿pueden hablar de lo que ocurre sin convertirlo inmediatamente en una acusación?",
    "Cuando alguno necesita seguridad respecto del vínculo, ¿pueden hablar de esa necesidad sin que termine transformándose en control?",
    "Ante una situación que genera inseguridad, ¿pueden diferenciar lo que realmente ocurrió de aquello que cada uno imaginó o interpretó?"
  ],

  9: [
    "Cuando atraviesan una situación que pone a prueba la relación, ¿pueden enfrentarla como pareja en lugar de enfrentarse entre ustedes?",
    "Cuando uno de los dos atraviesa una dificultad importante, ¿el otro puede acompañarlo teniendo en cuenta lo que realmente necesita?",
    "Después de atravesar una situación difícil, ¿pueden reconocer lo aprendido y utilizarlo para fortalecer el vínculo?"
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


/*
  Geometría circular.
  El SVG ahora utiliza un viewBox cuadrado
  para impedir que la rueda se deforme.
*/

const CENTER_X = 512;
const CENTER_Y = 512;

const INNER_RADIUS = 150;
const OUTER_RADIUS = 450;

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
    A ${OUTER_RADIUS}
      ${OUTER_RADIUS}
      0 0 1
      ${x3} ${y3}
    L ${x4} ${y4}
    A ${INNER_RADIUS}
      ${INNER_RADIUS}
      0 0 0
      ${x1} ${y1}
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

    red:
      values.filter(
        value => value === COLORS.red
      ).length,

    yellow:
      values.filter(
        value => value === COLORS.yellow
      ).length,

    ice:
      values.filter(
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
          `${x / 10.24}% ${y / 10.24}%`
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

      layer.classList.remove(
        "flash"
      );

    },
    1500
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

      button.classList.add(
        "selected"
      );

    }


    button.addEventListener(
      "click",
      () => {

        modalContent
          .querySelectorAll(
            `.answer-button[data-index="${index}"]`
          )
          .forEach(item => {

            item.classList.remove(
              "selected"
            );

          });


        button.classList.add(
          "selected"
        );


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


      const heart =
        document.getElementById(
          "heartSymbol"
        );


      heart.style.transform =
        "scale(1.12)";


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
