/* =========================================================
   HUMANÓMETRO PAREJAS
   ========================================================= */

const blocks = [

  {
    id: 1,
    name: "TRATO",
    subtitle: "Percepción del vínculo",

    questions: [
      "¿Existe entre ustedes un trato amable y considerado, especialmente cuando alguno necesita comprensión del otro?",

      "Cuando alguno atraviesa un momento de enojo o malestar, ¿pueden seguir tratándose con respeto?",

      "Cuando alguno necesita algo importante del otro, ¿el trato suele reflejar consideración por esa necesidad?"
    ]
  },

  {
    id: 2,
    name: "COMUNICACIÓN",
    subtitle: "Percepción del vínculo",

    questions: [
      "¿Pueden hablar entre ustedes de aquello que realmente les importa sin sentir que tienen que guardárselo?",

      "Cuando tu pareja te habla de algo que sabés que es importante para ella, ¿intentás comprender lo que quiere transmitir antes de responder?",

      "Cuando necesitan hablar de algo importante para la relación, ¿pueden hacerlo sin que alguno deje de escuchar, se cierre o evite la conversación?"
    ]
  },

  {
    id: 3,
    name: "CONEXIÓN",
    subtitle: "Percepción del vínculo",

    questions: [
      "Cuando uno de los dos necesita cercanía emocional, ¿el otro suele poder brindársela?",

      "¿Encuentran momentos que les permitan sentirse realmente conectados, más allá de las obligaciones cotidianas?",

      "Cuando atraviesan una etapa de distancia o desconexión, ¿suelen encontrar la manera de volver a acercarse?"
    ]
  },

  {
    id: 4,
    name: "CUIDADO",
    subtitle: "Autopercepción en el vínculo",

    questions: [
      "Cuando tu pareja atraviesa algo que sabés que le afecta, ¿tenés en cuenta cómo se encuentra antes de actuar o decidir?",

      "Cuando tu pareja necesita apoyo, ¿procurás estar presente de una manera que realmente le resulte útil?",

      "¿Hay acciones concretas de tu parte que respondan a necesidades importantes de tu pareja?"
    ]
  },

  {
    id: 5,
    name: "RESPETO",
    subtitle: "Autopercepción en el vínculo",

    questions: [
      "Cuando tu pareja piensa o siente algo diferente de vos sobre un tema importante, ¿podés respetar su manera de verlo?",

      "Cuando tu pareja necesita espacio, tiempo o establece un límite, ¿podés respetarlo aunque no estés de acuerdo?",

      "Cuando existe un desacuerdo sobre algo importante, ¿podés defender tu posición sin descalificar ni menospreciar a tu pareja?"
    ]
  },

  {
    id: 6,
    name: "APORTE",
    subtitle: "Autopercepción en el vínculo",

    questions: [
      "Cuando la relación necesita algo de vos, ¿procurás asumir tu parte para que el vínculo funcione?",

      "¿Destinás tiempo, atención o energía a aspectos de la relación que sabés que son importantes para tu pareja?",

      "Cuando tu pareja te señala algo que necesita de vos dentro de la relación, ¿procurás hacer algo concreto al respecto?"
    ]
  },

  {
    id: 7,
    name: "CONFLICTOS",
    subtitle: "Vivencias reales",

    questions: [
      "Cuando surge un conflicto por algo que realmente importa para alguno de los dos, ¿pueden abordarlo sin quedar atrapados en la misma discusión?",

      "Después de una discusión que los afecta emocionalmente, ¿pueden encontrar una manera de volver a acercarse?",

      "Cuando tienen un desacuerdo importante, ¿alguno de los dos suele priorizar comprender y resolver antes que demostrar que tiene razón?"
    ]
  },

  {
    id: 8,
    name: "CELOS",
    subtitle: "Vivencias reales",

    questions: [
      "Cuando una situación despierta celos o inseguridad en alguno de los dos, ¿pueden hablar de lo que ocurre sin convertirlo inmediatamente en una acusación?",

      "Cuando alguno necesita seguridad respecto del vínculo, ¿pueden hablar de esa necesidad sin que termine transformándose en control?",

      "Ante una situación que genera inseguridad, ¿pueden diferenciar lo que realmente ocurrió de aquello que cada uno imaginó o interpretó?"
    ]
  },

  {
    id: 9,
    name: "CRISIS",
    subtitle: "Vivencias reales",

    questions: [
      "Cuando atraviesan una situación que pone a prueba la relación, ¿pueden enfrentarla como pareja en lugar de enfrentarse entre ustedes?",

      "Cuando uno de los dos atraviesa una dificultad importante, ¿el otro puede acompañarlo teniendo en cuenta lo que realmente necesita?",

      "Después de atravesar una situación difícil, ¿pueden reconocer lo aprendido y utilizarlo para fortalecer el vínculo?"
    ]
  }

];


/* =========================================================
   VALORES DE RESPUESTA
   ========================================================= */

const ANSWER_VALUES = {
  si: 2,
  tal: 1,
  no: 0
};


/* =========================================================
   ESTADO
   ========================================================= */

const state = {

  enabled: false,

  currentBlock: 1,

  completed: {},

  answers: {}

};


/* =========================================================
   ELEMENTOS
   ========================================================= */

const wheelLayer =
  document.getElementById("wheelLayer");

const enableHeart =
  document.getElementById("enableHeart");

const guidance =
  document.getElementById("guidance");

const questionModal =
  document.getElementById("questionModal");

const finalModal =
  document.getElementById("finalModal");

const questionForm =
  document.getElementById("questionForm");

const questionsContainer =
  document.getElementById("questions");

const modalTitle =
  document.getElementById("modalTitle");

const modalSubtitle =
  document.getElementById("modalSubtitle");

const closeModal =
  document.getElementById("closeModal");

const closeFinal =
  document.getElementById("closeFinal");

const finalResult =
  document.getElementById("finalResult");


/* =========================================================
   GEOMETRÍA DE LA RUEDA
   ========================================================= */

const CX = 512;
const CY = 704;

const INNER_R = 122;
const OUTER_R = 316;

const START_ANGLE = -110;
const STEP = 40;


function polar(radius, degrees) {

  const angle =
    degrees * Math.PI / 180;

  return {

    x:
      CX + radius * Math.cos(angle),

    y:
      CY + radius * Math.sin(angle)

  };

}


function sectorPath(start, end) {

  const a =
    polar(OUTER_R, start);

  const b =
    polar(OUTER_R, end);

  const c =
    polar(INNER_R, end);

  const d =
    polar(INNER_R, start);

  return `
    M ${a.x} ${a.y}

    A ${OUTER_R}
      ${OUTER_R}
      0 0 1
      ${b.x} ${b.y}

    L ${c.x} ${c.y}

    A ${INNER_R}
      ${INNER_R}
      0 0 0
      ${d.x} ${d.y}

    Z
  `;
}


/* =========================================================
   CONSTRUIR LOS 9 SEGMENTOS
   ========================================================= */

function buildWheel() {

  wheelLayer.innerHTML =
    blocks.map(block => {

      const center =
        START_ANGLE +
        (block.id - 1) * STEP +
        STEP / 2;

      const start =
        START_ANGLE +
        (block.id - 1) * STEP +
        1.2;

      const end =
        START_ANGLE +
        block.id * STEP -
        1.2;

      return `
        <path
          class="segment-hit"
          data-block="${block.id}"
          d="${sectorPath(start, end)}"
          tabindex="0"
          role="button"
          aria-label="${block.id}. ${block.name}"
          style="--center-angle:${center}deg">
        </path>
      `;

    }).join("");


  wheelLayer
    .querySelectorAll(".segment-hit")
    .forEach(segment => {

      segment.addEventListener(
        "click",
        () => {

          openBlock(
            Number(segment.dataset.block)
          );

        }
      );


      segment.addEventListener(
        "keydown",
        event => {

          if (
            event.key === "Enter" ||
            event.key === " "
          ) {

            event.preventDefault();

            openBlock(
              Number(segment.dataset.block)
            );

          }

        }
      );

    });

}


/* =========================================================
   BLOQUES
   ========================================================= */

function getBlock(id) {

  return blocks.find(
    block => block.id === id
  );

}


/* =========================================================
   PUNTAJE
   ========================================================= */

function getBlockScore(id) {

  const answers =
    state.answers[id] || [];

  return answers.reduce(
    (sum, value) => sum + value,
    0
  );

}


/* =========================================================
   ESTADO VISUAL DEL SEGMENTO
   ========================================================= */

function getBlockState(id) {

  const score =
    getBlockScore(id);

  if (score >= 5) {
    return "passion";
  }

  if (score >= 3) {
    return "intermittent";
  }

  return "distance";

}


/* =========================================================
   ACTUALIZAR RUEDA
   ========================================================= */

function refreshWheel() {

  wheelLayer
    .querySelectorAll(".segment-hit")
    .forEach(segment => {

      const id =
        Number(segment.dataset.block);

      segment.classList.remove(
        "active",
        "completed",
        "passion",
        "intermittent",
        "distance"
      );


      if (state.completed[id]) {

        segment.classList.add(
          "completed",
          state.completed[id].state
        );

      }


      if (
        state.enabled &&
        id === state.currentBlock &&
        !state.completed[id]
      ) {

        segment.classList.add(
          "active"
        );

      }

    });

}


/* =========================================================
   GUÍA
   ========================================================= */

function showGuidance(message) {

  guidance.textContent =
    message;

  guidance.hidden =
    false;

  guidance.classList.remove(
    "show"
  );

  requestAnimationFrame(
    () => {

      guidance.classList.add(
        "show"
      );

    }
  );

}


/* =========================================================
   ABRIR BLOQUE
   ========================================================= */

function openBlock(blockId) {

  if (
    !state.enabled ||
    blockId !== state.currentBlock ||
    state.completed[blockId]
  ) {

    return;

  }


  const block =
    getBlock(blockId);


  modalTitle.textContent =
    `${block.id}. ${block.name}`;


  modalSubtitle.textContent =
    block.subtitle;


  questionsContainer.innerHTML =
    block.questions.map(
      (question, index) => `

        <article class="question-item">

          <p class="question-text">

            <span>
              ${index + 1}.
            </span>

            ${question}

          </p>


          <div
            class="answers"
            role="radiogroup"
            aria-label="Respuesta ${index + 1}">

            <label>

              <input
                type="radio"
                name="q${index + 1}"
                value="si"
                required>

              <span>
                SÍ
              </span>

            </label>


            <label>

              <input
                type="radio"
                name="q${index + 1}"
                value="tal">

              <span>
                A VECES
              </span>

            </label>


            <label>

              <input
                type="radio"
                name="q${index + 1}"
                value="no">

              <span>
                NO
              </span>

            </label>

          </div>

        </article>

      `
    ).join("");


  questionModal.hidden =
    false;

  document.body.classList.add(
    "modal-open"
  );

}


/* =========================================================
   CERRAR PREGUNTAS
   ========================================================= */

function closeQuestionModal() {

  questionModal.hidden =
    true;

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   COMPLETAR BLOQUE
   ========================================================= */

function completeCurrentBlock() {

  const formData =
    new FormData(questionForm);


  const raw =
    [1, 2, 3].map(
      n =>
        formData.get(`q${n}`)
    );


  if (
    raw.some(
      value => !value
    )
  ) {

    return;

  }


  const values =
    raw.map(
      value =>
        ANSWER_VALUES[value]
    );


  const id =
    state.currentBlock;


  const blockState =
    getBlockStateFromValues(
      values
    );


  state.answers[id] =
    values;


  state.completed[id] = {

    values,

    state:
      blockState

  };


  closeQuestionModal();


  if (id < 9) {

    state.currentBlock =
      id + 1;


    showGuidance(
      `Bloque ${id} completo. Ahora el brillo guía el ${state.currentBlock}: ${getBlock(state.currentBlock).name}.`
    );

  }

  else {

    state.currentBlock =
      10;


    showGuidance(
      "Los 9 segmentos están completos. Tu lectura ya está disponible."
    );


    setTimeout(
      openFinalResult,
      450
    );

  }


  refreshWheel();

}


/* =========================================================
   ESTADO DEL BLOQUE
   ========================================================= */

function getBlockStateFromValues(values) {

  const score =
    values.reduce(
      (sum, value) =>
        sum + value,
      0
    );


  if (score >= 5) {

    return "passion";

  }


  if (score >= 3) {

    return "intermittent";

  }


  return "distance";

}


/* =========================================================
   DEVOLUCIONES GENERALES
   ========================================================= */

const generalReadings = {

  1: {

    icon: "❤️",

    title:
      "VÍNCULO ESTABLE",

    text:
      "Las respuestas muestran una base sólida en la manera en que ambos viven el vínculo. Predominan experiencias de cercanía, consideración y reciprocidad, y existe una correspondencia importante entre las percepciones de ambos. La relación parece contar con recursos para comunicarse, acompañarse y atravesar las situaciones cotidianas sin perder de vista al otro. También aparece una valoración del vínculo que se sostiene tanto en lo que comparten como en la manera en que cada uno participa dentro de la relación. Esto no significa que no existan diferencias, desacuerdos o momentos difíciles. La diferencia está en cómo esos momentos son transitados y en la capacidad que ambos muestran para volver a encontrarse. La lectura de cada segmento del corazón permite observar dónde esa fortaleza se manifiesta con mayor claridad y dónde todavía existen pequeños espacios para seguir construyendo."

  },


  2: {

    icon: "🟡",

    title:
      "VÍNCULO ESTABLE CON ASPECTOS A REVISAR",

    text:
      "Las respuestas muestran una base de vínculo que se encuentra presente, aunque aparecen algunos aspectos que no son vividos de la misma manera por ambos o que se manifiestan de forma intermitente. Hay áreas en las que existe conexión y reciprocidad, mientras que otras parecen necesitar mayor atención. Esto puede estar relacionado con la comunicación, la manera de cuidarse, el respeto por las necesidades del otro o la forma en que atraviesan determinadas situaciones. Las diferencias entre lo que cada uno percibe también forman parte de la lectura. Cuando dos personas viven una misma relación de manera diferente, conocer esa diferencia puede ser tan importante como conocer aquello en lo que coinciden. El corazón muestra dónde el vínculo encuentra estabilidad y dónde podría beneficiarse de una mayor atención de ambos."

  },


  3: {

    icon: "🟠",

    title:
      "VÍNCULO INESTABLE",

    text:
      "Las respuestas muestran que el vínculo atraviesa diferentes niveles de conexión y que existen varios aspectos que no están siendo experimentados de manera sostenida por ambos. Pueden aparecer dificultades relacionadas con la comunicación, el cuidado, el respeto, la participación dentro de la relación o la manera de afrontar conflictos, celos y momentos de crisis. También resulta importante observar cuánto coinciden las percepciones. Cuando existe una diferencia marcada entre lo que uno vive y lo que el otro percibe, puede generarse una distancia que no siempre resulta evidente dentro de la relación. Este resultado no define a la pareja ni determina su futuro. Señala aspectos del vínculo que merecen ser observados con mayor atención."

  },


  4: {

    icon: "🧊",

    title:
      "VÍNCULO EN ALERTA",

    text:
      "Las respuestas muestran una presencia importante de dificultades, desconexiones o percepciones que pueden estar afectando la manera en que ambos viven la relación. La lectura puede involucrar distintos aspectos: comunicación, trato, conexión emocional, cuidado, respeto, aporte personal y la manera en que enfrentan conflictos, celos o situaciones de crisis. Cuando estas señales aparecen en varios segmentos del corazón, resulta especialmente importante observar no solamente qué respondió cada uno, sino también cuánto coinciden o se diferencian sus experiencias. Este resultado no pretende etiquetar la relación ni decidir por ustedes. Es una invitación a detenerse, mirar lo que está ocurriendo y reconocer qué aspectos del vínculo necesitan mayor atención."

  }

};


/* =========================================================
   CRITERIO GENERAL
   =========================================================

   IMPORTANTE:
   Los umbrales matemáticos definitivos de Resultado 1–4
   todavía no fueron incorporados porque no corresponde
   inventarlos.

   La estructura queda preparada para incorporarlos.
   ========================================================= */

function provisionalGeneralResult() {

  return null;

}


/* =========================================================
   ICONOS DE SEGMENTOS
   ========================================================= */

function segmentLabel(stateName) {

  return {

    passion: "🔴",

    intermittent: "🟡",

    distance: "🧊"

  }[stateName];

}


/* =========================================================
   CONSTRUIR RESULTADO
   ========================================================= */

function buildFinalResult() {

  const resultNumber =
    provisionalGeneralResult();


  const result =
    resultNumber
      ? generalReadings[resultNumber]
      : null;


  const segments =
    blocks.map(
      block => {

        const entry =
          state.completed[block.id];


        const score =
          entry.values.reduce(
            (sum, value) =>
              sum + value,
            0
          );


        return `

          <div class="result-segment">

            <div>

              <strong>
                ${block.id}. ${block.name}
              </strong>

              <span>
                ${segmentLabel(entry.state)}
              </span>

            </div>

            <small>
              ${score}/6 puntos
            </small>

          </div>

        `;

      }
    ).join("");


  return `

    <div class="result-box">

      ${
        result

        ?

        `

          <div class="result-heading">

            ${result.icon}
            ${result.title}

          </div>

          <p>
            ${result.text}
          </p>

        `

        :

        `

          <div class="result-heading">

            Lectura de los 9 segmentos

          </div>

          <p>

            Los nueve bloques fueron completados.
            Cada segmento conserva su puntaje individual
            de 0 a 6 y su estado visual.

          </p>

        `
      }

    </div>


    <div class="segments-result">

      <h3>
        Lectura de los 9 segmentos
      </h3>

      ${segments}

    </div>


    <div class="result-box invitation-box">

      <h3>
        ¿Y si tu pareja también se hace el Humanómetro?
      </h3>


      <div class="invitation-scroll">

        <p>

          Cada persona vive una relación desde su propia
          experiencia. Por eso, es posible que ambos obtengan
          resultados diferentes. No significa necesariamente
          que alguien esté equivocado: pueden existir distintas
          percepciones, necesidades, experiencias o maneras de
          interpretar lo que sucede dentro del vínculo.

        </p>


        <p>

          Si ambos quieren hacerlo, pueden compartir sus
          resultados y conversar sobre aquello en lo que
          coinciden y aquello que perciben de manera diferente.
          A veces, descubrir esa diferencia también es una
          forma de conocerse mejor.

        </p>


        <p>

          <strong>

            Invitala/o a hacer su propio Humanómetro y
            descubran cuánto coinciden en la forma de vivir
            su vínculo.

          </strong>

        </p>

      </div>

    </div>

  `;

}


/* =========================================================
   ABRIR RESULTADO
   ========================================================= */

function openFinalResult() {

  finalResult.innerHTML =
    buildFinalResult();


  finalModal.hidden =
    false;


  document.body.classList.add(
    "modal-open"
  );

}


/* =========================================================
   CERRAR RESULTADO
   ========================================================= */

function closeFinalModal() {

  finalModal.hidden =
    true;

  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   INICIO DEL TEST
   ========================================================= */

enableHeart.addEventListener(
  "click",
  () => {

    state.enabled =
      true;


    enableHeart.disabled =
      true;


    enableHeart.classList.add(
      "used"
    );


    showGuidance(
      "Empezá por el bloque 1. Completá sus tres preguntas y el brillo te va a guiar al siguiente."
    );


    refreshWheel();

  }
);


/* =========================================================
   ENVÍO DE PREGUNTAS
   ========================================================= */

questionForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    completeCurrentBlock();

  }
);


/* =========================================================
   CIERRES
   ========================================================= */

closeModal.addEventListener(
  "click",
  closeQuestionModal
);


closeFinal.addEventListener(
  "click",
  closeFinalModal
);


document
  .querySelectorAll(".modal-backdrop")
  .forEach(backdrop => {

    backdrop.addEventListener(
      "click",
      () => {

        if (
          backdrop.parentElement ===
          questionModal
        ) {

          closeQuestionModal();

        }


        if (
          backdrop.parentElement ===
          finalModal
        ) {

          closeFinalModal();

        }

      }
    );

  });


/* =========================================================
   ARRANQUE
   ========================================================= */

buildWheel();

refreshWheel();
