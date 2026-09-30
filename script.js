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


const wheel =
  document.getElementById("wheel");

const segmentColors =
  document.getElementById("segmentColors");

const segmentLines =
  document.getElementById("segmentLines");

const segmentContent =
  document.getElementById("segmentContent");

const modal =
  document.getElementById("questionModal");

const modalContent =
  document.getElementById("modalContent");

const closeModal =
  document.getElementById("closeModal");

const enableHeart =
  document.getElementById("enableHeart");

const heartShape =
  document.getElementById("heartShape");


const CENTER_X = 500;
const CENTER_Y = 500;

const INNER_RADIUS = 185;
const OUTER_RADIUS = 390;

const SEGMENTS = 9;

const STEP = 360 / SEGMENTS;


/*
  La referencia tiene el segmento 2 arriba.
  Por eso el centro angular del segmento 2
  comienza en -90 grados.
*/

function segmentCenterAngle(id) {

  return -90 + (id - 2) * STEP;

}


function point(
  cx,
  cy,
  radius,
  degrees
) {

  const angle =
    degrees * Math.PI / 180;

  return [
    cx + radius * Math.cos(angle),
    cy + radius * Math.sin(angle)
  ];

}


function sectorPath(id) {

  const center =
    segmentCenterAngle(id);

  const start =
    center - STEP / 2;

  const end =
    center + STEP / 2;

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


/*
  Posición del contenido interno
  de cada sector.
*/

function contentPosition(id) {

  const angle =
    segmentCenterAngle(id);

  const radius =
    285;

  return point(
    CENTER_X,
    CENTER_Y,
    radius,
    angle
  );

}


/*
  SVG helpers
*/

function svgElement(
  tag,
  attributes = {}
) {

  const element =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      tag
    );

  Object.entries(attributes)
    .forEach(
      ([key, value]) => {
        element.setAttribute(
          key,
          value
        );
      }
    );

  return element;

}


/*
  ÍCONOS
*/

function createIcon(
  group,
  id
) {

  const icon =
    svgElement(
      "g",
      {
        class: "segment-icon"
      }
    );

  /*
    TRATO
  */

  if (id === 1) {

    icon.innerHTML = `
      <circle cx="-28" cy="-2" r="10"/>
      <circle cx="28" cy="-2" r="10"/>

      <path d="M-42 25 C-42 6 -14 6 -14 25"/>
      <path d="M14 25 C14 6 42 6 42 25"/>

      <path d="M-7 -2 Q0 -13 7 -2 Q0 9 -7 -2"/>
    `;

  }


  /*
    COMUNICACIÓN
  */

  if (id === 2) {

    icon.innerHTML = `
      <path d="M-42 -10
               C-42 -32 -15 -43 7 -36
               C28 -29 35 -8 22 8
               C12 20 -5 23 -20 18
               L-34 29
               L-31 12
               C-39 5 -42 -2 -42 -10 Z"/>

      <circle
        cx="-19"
        cy="-9"
        r="3"
        fill="#fff"
        stroke="none"/>

      <circle
        cx="-4"
        cy="-9"
        r="3"
        fill="#fff"
        stroke="none"/>

      <circle
        cx="11"
        cy="-9"
        r="3"
        fill="#fff"
        stroke="none"/>

      <path d="M7 10
               C22 4 42 10 42 25
               C42 35 34 41 25 43
               L27 53
               L17 44
               C5 45 -4 39 -6 30"/>
    `;

  }


  /*
    CONEXIÓN
  */

  if (id === 3) {

    icon.innerHTML = `
      <path d="
        M0 42
        C-9 34 -45 13 -45 -11
        C-45 -28 -25 -38 -12 -25
        C-6 -19 -3 -13 0 -8
        C3 -13 6 -19 12 -25
        C25 -38 45 -28 45 -11
        C45 13 9 34 0 42 Z
      "/>

      <path d="M0 -53 L0 -69"/>
      <path d="M-20 -50 L-29 -64"/>
      <path d="M20 -50 L29 -64"/>
      <path d="M-34 -34 L-49 -43"/>
      <path d="M34 -34 L49 -43"/>
    `;

  }


  /*
    CUIDADO
  */

  if (id === 4) {

    icon.innerHTML = `
      <circle cx="-23" cy="-14" r="10"/>
      <path d="M-39 23 C-39 1 -7 1 -7 23"/>

      <path d="
        M25 31
        C17 24 -2 13 3 1
        C7 -8 18 -5 25 2
        C32 -5 43 -8 47 1
        C52 13 32 24 25 31 Z
      "/>
    `;

  }


  /*
    RESPEITO
  */

  if (id === 5) {

    icon.innerHTML = `
      <circle cx="-22" cy="-14" r="10"/>
      <path d="M-39 24 C-39 1 -6 1 -6 24"/>

      <path d="
        M21 -10
        C25 -22 43 -20 44 -7
        C45 4 31 14 21 21
        C11 14 -3 4 -2 -7
        C0 -20 17 -22 21 -10 Z
      "/>

      <path d="M30 33 L40 21"/>
      <path d="M35 28 L45 28"/>
    `;

  }


  /*
    APORTE
  */

  if (id === 6) {

    icon.innerHTML = `
      <circle cx="-24" cy="-14" r="10"/>
      <path d="M-41 24 C-41 1 -7 1 -7 24"/>

      <path d="M25 31
               C17 21 7 12 10 2
               C13 -6 22 -5 27 2
               C31 -5 40 -6 43 2
               C46 12 36 21 25 31 Z"/>

      <path d="M36 32 L45 21"/>
      <path d="M40 28 L49 28"/>
    `;

  }


  /*
    CONFLICTOS
  */

  if (id === 7) {

    icon.innerHTML = `
      <circle cx="-27" cy="-13" r="10"/>
      <circle cx="27" cy="-13" r="10"/>

      <path d="M-44 25 C-44 2 -10 2 -10 25"/>
      <path d="M10 25 C10 2 44 2 44 25"/>

      <path d="
        M0 -42
        L-12 -19
        L0 -19
        L-9 2
        L15 -27
        L3 -27
        Z
      "/>
    `;

  }


  /*
    CELOS
  */

  if (id === 8) {

    icon.innerHTML = `
      <circle cx="-27" cy="-4" r="10"/>
      <circle cx="27" cy="-4" r="10"/>

      <path d="M-44 30 C-44 6 -10 6 -10 30"/>
      <path d="M10 30 C10 6 44 6 44 30"/>

      <path d="
        M-39 -20
        Q0 -48 39 -20
        Q0 7 -39 -20 Z
      "/>

      <circle
        cx="0"
        cy="-21"
        r="7"
        fill="#fff"
        stroke="none"/>

      <path d="M-53 -34 L-43 -29"/>
      <path d="M53 -34 L43 -29"/>
    `;

  }


  /*
    CRISIS
  */

  if (id === 9) {

    icon.innerHTML = `
      <circle cx="-27" cy="10" r="10"/>
      <circle cx="27" cy="10" r="10"/>

      <path d="M-44 43 C-44 20 -10 20 -10 43"/>
      <path d="M10 43 C10 20 44 20 44 43"/>

      <path d="
        M0 -47
        L-13 -22
        L0 -22
        L-9 0
        L17 -31
        L4 -31
        Z
      "/>

      <path d="M-31 -58 Q0 -72 31 -58"/>
    `;

  }

  group.appendChild(icon);

}


/*
  Construcción de los 9 sectores.
*/

function buildWheel() {

  segmentLines.innerHTML = "";
  segmentContent.innerHTML = "";

  segmentDefs.forEach(def => {

    const path =
      svgElement(
        "path",
        {
          class:
            "segment-line locked",

          "data-segment":
            String(def.id),

          d:
            sectorPath(def.id)
        }
      );

    path.addEventListener(
      "click",
      () => openSegment(def.id)
    );

    segmentLines.appendChild(path);


    const group =
      svgElement(
        "g",
        {
          "data-content":
            String(def.id)
        }
      );

    const [
      x,
      y
    ] =
      contentPosition(def.id);


    const content =
      svgElement(
        "g",
        {
          transform:
            `translate(${x} ${y})`
        }
      );


    const number =
      svgElement(
        "text",
        {
          class:
            "segment-number",

          x:
            "0",

          y:
            "-58"
        }
      );

    number.textContent =
      String(def.id);


    const name =
      svgElement(
        "text",
        {
          class:
            "segment-name",

          x:
            "0",

          y:
            "-30"
        }
      );

    name.textContent =
      def.name.toUpperCase();


    content.appendChild(number);
    content.appendChild(name);

    createIcon(
      content,
      def.id
    );

    group.appendChild(content);

    segmentContent.appendChild(group);

  });

}


/*
  Resultado de cada bloque.
*/

function resultColor(values) {

  const counts = {

    red:
      values.filter(
        value =>
          value === COLORS.red
      ).length,

    yellow:
      values.filter(
        value =>
          value === COLORS.yellow
      ).length,

    ice:
      values.filter(
        value =>
          value === COLORS.ice
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


/*
  Pintado del sector.
*/

function paintSegment(
  id,
  color
) {

  let layer =
    document.getElementById(
      `segment-color-${id}`
    );


  if (!layer) {

    layer =
      svgElement(
        "path",
        {
          id:
            `segment-color-${id}`,

          class:
            `segment-painted ${color}`,

          d:
            sectorPath(id)
        }
      );

    segmentColors.appendChild(layer);

  }


  layer.setAttribute(
    "class",
    `segment-painted ${color} visible`
  );


  const line =
    segmentLines.querySelector(
      `[data-segment="${id}"]`
    );


  if (line) {

    line.classList.remove(
      "ready"
    );

    line.classList.add(
      "completed"
    );

  }

}


/*
  Desbloqueo progresivo.
*/

function refreshUnlocks() {

  document
    .querySelectorAll(
      ".segment-line"
    )
    .forEach(path => {

      const id =
        Number(
          path.dataset.segment
        );

      const unlocked =
        state.heartEnabled &&
        id === state.unlockedSegment;

      path.classList.toggle(
        "locked",
        !unlocked &&
        !state.colors[id - 1]
      );

      path.classList.toggle(
        "ready",
        unlocked
      );

    });

}


/*
  Modal de preguntas.
*/

function openSegment(id) {

  if (
    !state.heartEnabled ||
    id !== state.unlockedSegment
  ) {
    return;
  }


  const def =
    segmentDefs.find(
      item =>
        item.id === id
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
        value =>
          value === null
      );

  }


  answerButtons.forEach(
    button => {

      const index =
        Number(
          button.dataset.index
        );


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
            .forEach(
              item => {
                item.classList.remove(
                  "selected"
                );
              }
            );


          button.classList.add(
            "selected"
          );


          answers[index] =
            button.dataset.answer;


          refreshSaveButton();

        }
      );

    }
  );


  saveButton.addEventListener(
    "click",
    () => {

      if (
        answers.some(
          value =>
            value === null
        )
      ) {
        return;
      }


      const color =
        resultColor(
          answers
        );


      state.answers[id - 1] =
        answers;


      state.colors[id - 1] =
        color;


      paintSegment(
        id,
        color
      );


      modal.hidden =
        true;


      if (
        id ===
          state.unlockedSegment &&
        state.unlockedSegment <
          SEGMENTS
      ) {

        state.unlockedSegment += 1;

      }


      refreshUnlocks();

    }
  );


  modal.hidden =
    false;

}


/*
  Habilitar corazón.
*/

enableHeart.addEventListener(
  "click",
  () => {

    state.heartEnabled =
      true;


    if (
      state.unlockedSegment === 0
    ) {

      state.unlockedSegment =
        1;

    }


    heartShape.classList.add(
      "enabled"
    );


    enableHeart.classList.add(
      "enabled"
    );


    refreshUnlocks();

  }
);


/*
  Cerrar modal.
*/

closeModal.addEventListener(
  "click",
  () => {

    modal.hidden =
      true;

  }
);


/*
  Cerrar tocando el fondo.
*/

modal.addEventListener(
  "click",
  event => {

    if (
      event.target.classList.contains(
        "modal-backdrop"
      )
    ) {

      modal.hidden =
        true;

    }

  }
);


/*
  Medios de pago.
*/

[
  [
    "paymentMercado",
    "Mercado Pago"
  ],

  [
    "paymentPaypal",
    "PayPal"
  ],

  [
    "paymentPayoneer",
    "Payoneer"
  ]

].forEach(
  ([id, provider]) => {

    const button =
      document.getElementById(id);


    if (!button) {
      return;
    }


    button.addEventListener(
      "click",
      () => {

        window.alert(
          `${provider}: botón preparado para conectar cuando se incorporen las credenciales reales.`
        );

      }
    );

  }
);


/*
  Inicialización.
*/

buildWheel();
refreshUnlocks();
