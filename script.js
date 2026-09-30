/* =========================================================
   HUMANÓMETRO PAREJAS
   ========================================================= */


/* =========================================================
   BLOQUES Y PREGUNTAS
   ========================================================= */

const blocksData = [

  {
    title: "1. TRATO",

    subtitle: "Percepción del vínculo",

    questions: [

      "¿Existe entre ustedes un trato amable y considerado, especialmente cuando alguno necesita comprensión del otro?",

      "Cuando alguno atraviesa un momento de enojo o malestar, ¿pueden seguir tratándose con respeto?",

      "Cuando alguno necesita algo importante del otro, ¿el trato suele reflejar consideración por esa necesidad?"

    ]
  },


  {
    title: "2. COMUNICACIÓN",

    subtitle: "Percepción del vínculo",

    questions: [

      "¿Pueden hablar entre ustedes de aquello que realmente les importa sin sentir que tienen que guardárselo?",

      "Cuando tu pareja te habla de algo que sabés que es importante para ella, ¿intentás comprender lo que quiere transmitir antes de responder?",

      "Cuando necesitan hablar de algo importante para la relación, ¿pueden hacerlo sin que alguno deje de escuchar, se cierre o evite la conversación?"

    ]
  },


  {
    title: "3. CONEXIÓN",

    subtitle: "Percepción del vínculo",

    questions: [

      "Cuando uno de los dos necesita cercanía emocional, ¿el otro suele poder brindársela?",

      "¿Encuentran momentos que les permitan sentirse realmente conectados, más allá de las obligaciones cotidianas?",

      "Cuando atraviesan una etapa de distancia o desconexión, ¿suelen encontrar la manera de volver a acercarse?"

    ]
  },


  {
    title: "4. CUIDADO",

    subtitle: "Autopercepción en el vínculo",

    questions: [

      "Cuando tu pareja atraviesa algo que sabés que le afecta, ¿tenés en cuenta cómo se encuentra antes de actuar o decidir?",

      "Cuando tu pareja necesita apoyo, ¿procurás estar presente de una manera que realmente le resulte útil?",

      "¿Hay acciones concretas de tu parte que respondan a necesidades importantes de tu pareja?"

    ]
  },


  {
    title: "5. RESPETO",

    subtitle: "Autopercepción en el vínculo",

    questions: [

      "Cuando tu pareja piensa o siente algo diferente de vos sobre un tema importante, ¿podés respetar su manera de verlo?",

      "Cuando tu pareja necesita espacio, tiempo o establece un límite, ¿podés respetarlo aunque no estés de acuerdo?",

      "Cuando existe un desacuerdo sobre algo importante, ¿podés defender tu posición sin descalificar ni menospreciar a tu pareja?"

    ]
  },


  {
    title: "6. APORTE",

    subtitle: "Autopercepción en el vínculo",

    questions: [

      "Cuando la relación necesita algo de vos, ¿procurás asumir tu parte para que el vínculo funcione?",

      "¿Destinás tiempo, atención o energía a aspectos de la relación que sabés que son importantes para tu pareja?",

      "Cuando tu pareja te señala algo que necesita de vos dentro de la relación, ¿procurás hacer algo concreto al respecto?"

    ]
  },


  {
    title: "7. CONFLICTOS",

    subtitle: "Vivencias reales",

    questions: [

      "Cuando surge un conflicto por algo que realmente importa para alguno de los dos, ¿pueden abordarlo sin quedar atrapados en la misma discusión?",

      "Después de una discusión que los afecta emocionalmente, ¿pueden encontrar una manera de volver a acercarse?",

      "Cuando tienen un desacuerdo importante, ¿alguno de los dos suele priorizar comprender y resolver antes que demostrar que tiene razón?"

    ]
  },


  {
    title: "8. CELOS",

    subtitle: "Vivencias reales",

    questions: [

      "Cuando una situación despierta celos o inseguridad en alguno de los dos, ¿pueden hablar de lo que ocurre sin convertirlo inmediatamente en una acusación?",

      "Cuando alguno necesita seguridad respecto del vínculo, ¿pueden hablar de esa necesidad sin que termine transformándose en control?",

      "Ante una situación que genera inseguridad, ¿pueden diferenciar lo que realmente ocurrió de aquello que cada uno imaginó o interpretó?"

    ]
  },


  {
    title: "9. CRISIS",

    subtitle: "Vivencias reales",

    questions: [

      "Cuando atraviesan una situación que pone a prueba la relación, ¿pueden enfrentarla como pareja en lugar de enfrentarse entre ustedes?",

      "Cuando uno de los dos atraviesa una dificultad importante, ¿el otro puede acompañarlo teniendo en cuenta lo que realmente necesita?",

      "Después de atravesar una situación difícil, ¿pueden reconocer lo aprendido y utilizarlo para fortalecer el vínculo?"

    ]
  }

];


/* =========================================================
   DEVOLUCIONES GENERALES
   ========================================================= */

const resultTexts = {

  1: {

    icon: "❤️",

    title: "RESULTADO 1 — VÍNCULO ESTABLE",

    text:
      "Las respuestas muestran una base sólida en la manera en que ambos viven el vínculo. Predominan experiencias de cercanía, consideración y reciprocidad, y existe una correspondencia importante entre las percepciones de ambos. La relación parece contar con recursos para comunicarse, acompañarse y atravesar las situaciones cotidianas sin perder de vista al otro. Esto no significa que no existan diferencias, desacuerdos o momentos difíciles. La diferencia está en cómo esos momentos son transitados y en la capacidad que ambos muestran para volver a encontrarse."

  },


  2: {

    icon: "🟡",

    title: "RESULTADO 2 — VÍNCULO ESTABLE CON ASPECTOS A REVISAR",

    text:
      "Las respuestas muestran una base de vínculo que se encuentra presente, aunque aparecen algunos aspectos que no son vividos de la misma manera por ambos o que se manifiestan de forma intermitente. Hay áreas en las que existe conexión y reciprocidad, mientras que otras parecen necesitar mayor atención. Las diferencias entre lo que cada uno percibe también forman parte de la lectura."

  },


  3: {

    icon: "🟠",

    title: "RESULTADO 3 — VÍNCULO INESTABLE",

    text:
      "Las respuestas muestran que el vínculo atraviesa diferentes niveles de conexión y que existen varios aspectos que no están siendo experimentados de manera sostenida por ambos. Pueden aparecer dificultades relacionadas con la comunicación, el cuidado, el respeto, la participación dentro de la relación o la manera de afrontar conflictos, celos y momentos de crisis. Este resultado no define a la pareja ni determina su futuro. Señala aspectos del vínculo que merecen ser observados con mayor atención."

  },


  4: {

    icon: "🧊",

    title: "RESULTADO 4 — VÍNCULO EN ALERTA",

    text:
      "Las respuestas muestran una presencia importante de dificultades, desconexiones o percepciones que pueden estar afectando la manera en que ambos viven la relación. La lectura puede involucrar distintos aspectos: comunicación, trato, conexión emocional, cuidado, respeto, aporte personal y la manera en que enfrentan conflictos, celos o situaciones de crisis. Este resultado no pretende etiquetar la relación ni decidir por ustedes. Es una invitación a detenerse, mirar lo que está ocurriendo y reconocer qué aspectos del vínculo necesitan mayor atención."

  }

};


/* =========================================================
   RESPUESTAS
   ========================================================= */

const answers = [

  "Nunca / Casi nunca",

  "A veces",

  "Frecuentemente",

  "Casi siempre"

];


/* =========================================================
   ESTADO
   ========================================================= */

const state = {

  currentBlock: 0,

  responses: Array.from(
    {
      length: 27
    },
    () => null
  )

};


/* =========================================================
   ELEMENTOS
   ========================================================= */

const home =
  document.getElementById("home");

const test =
  document.getElementById("test");

const result =
  document.getElementById("result");

const blocksEl =
  document.getElementById("blocks");

const progressText =
  document.getElementById("progressText");

const guidedHint =
  document.getElementById("guidedHint");


/* =========================================================
   ABRIR TEST
   ========================================================= */

function showTest() {

  home.classList.add("hidden");

  result.classList.add("hidden");

  test.classList.remove("hidden");

  renderBlocks();

  scrollTop();

}


/* =========================================================
   RENDERIZAR BLOQUES
   ========================================================= */

function renderBlocks() {

  blocksEl.innerHTML = "";


  blocksData.forEach(
    (block, bi) => {

      const el =
        document.createElement("article");


      el.className =
        "block" +
        (
          bi === state.currentBlock
            ? " active"
            : " locked"
        );


      el.id =
        `block-${bi}`;


      /* -------------------------
         TÍTULO
         ------------------------- */

      const h =
        document.createElement("h2");

      h.textContent =
        block.title;


      /* -------------------------
         SUBTÍTULO
         ------------------------- */

      const sub =
        document.createElement("div");

      sub.className =
        "subtitle";

      sub.textContent =
        block.subtitle;


      el.append(
        h,
        sub
      );


      /* -------------------------
         PREGUNTAS
         ------------------------- */

      block.questions.forEach(
        (q, qi) => {

          const global =
            bi * 3 + qi;


          const qEl =
            document.createElement("div");

          qEl.className =
            "question";


          const p =
            document.createElement("p");

          p.textContent =
            `${global + 1}. ${q}`;


          qEl.appendChild(p);


          /* -------------------------
             RESPUESTAS
             ------------------------- */

          const ans =
            document.createElement("div");

          ans.className =
            "answers";


          answers.forEach(
            (label, value) => {

              const b =
                document.createElement("button");

              b.className =
                "answer";

              b.type =
                "button";

              b.textContent =
                label;


              if (
                state.responses[global] === value
              ) {

                b.classList.add(
                  "selected"
                );

              }


              b.addEventListener(
                "click",
                () => {

                  state.responses[global] =
                    value;

                  renderBlocks();

                }
              );


              ans.appendChild(b);

            }
          );


          qEl.appendChild(ans);

          el.appendChild(qEl);

        }
      );


      /* =====================================================
         BOTÓN PARA AVANZAR
         ===================================================== */

      if (
        bi === state.currentBlock
      ) {

        const next =
          document.createElement("button");


        next.className =
          "next-block";


        next.type =
          "button";


        next.disabled =
          !blockComplete(bi);


        next.textContent =
          bi === 8
            ? "VER MI LECTURA"
            : "COMPLETAR BLOQUE Y CONTINUAR";


        next.addEventListener(
          "click",
          () => {

            advance(bi);

          }
        );


        el.appendChild(next);

      }


      blocksEl.appendChild(el);

    }
  );


  /* =====================================================
     PROGRESO
     ===================================================== */

  progressText.textContent =
    `${state.currentBlock + 1} / 9`;


  /* =====================================================
     MENSAJE GUIADO
     ===================================================== */

  guidedHint.querySelector(
    "strong"
  ).textContent =

    state.currentBlock === 8

      ? "Último bloque."

      : `Bloque ${state.currentBlock + 1} activo.`;


  guidedHint.querySelector(
    "span"
  ).textContent =

    state.currentBlock === 8

      ? "Completá sus tres preguntas para acceder a tu lectura."

      : "Completá sus tres preguntas. Al terminar, el siguiente bloque se ilumina.";


  /* =====================================================
     LLEVAR AL BLOQUE ACTIVO
     ===================================================== */

  setTimeout(
    () => {

      const active =
        document.getElementById(
          `block-${state.currentBlock}`
        );


      if (active) {

        active.scrollIntoView(
          {
            behavior: "smooth",
            block: "start"
          }
        );

      }

    },
    60
  );

}


/* =========================================================
   COMPROBAR BLOQUE
   ========================================================= */

function blockComplete(bi) {

  return state.responses
    .slice(
      bi * 3,
      bi * 3 + 3
    )
    .every(
      value => value !== null
    );

}


/* =========================================================
   AVANZAR
   ========================================================= */

function advance(bi) {

  if (
    !blockComplete(bi)
  ) {

    return;

  }


  if (
    bi < 8
  ) {

    state.currentBlock++;

    renderBlocks();

  }

  else {

    showResult();

  }

}


/* =========================================================
   RESULTADO
   ========================================================= */

function showResult() {

  test.classList.add(
    "hidden"
  );

  result.classList.remove(
    "hidden"
  );


  /* =====================================================
     PUNTAJES POR SEGMENTO
     ===================================================== */

  const scores =
    blocksData.map(
      (_, i) => {

        const vals =
          state.responses.slice(
            i * 3,
            i * 3 + 3
          );


        return (
          vals.reduce(
            (a, b) => a + b,
            0
          ) / 3
        );

      }
    );


  /* =====================================================
     RESULTADO GENERAL
     ===================================================== */

  const total =
    scores.reduce(
      (a, b) => a + b,
      0
    ) / 9;


  let level = 1;


  if (
    total < 1
  ) {

    level = 4;

  }

  else if (
    total < 2
  ) {

    level = 3;

  }

  else if (
    total < 2.8
  ) {

    level = 2;

  }


  const r =
    resultTexts[level];


  document.getElementById(
    "resultGeneral"
  ).innerHTML =

    `
      <div class="result-card">

        <h1>
          ${r.icon}
          ${r.title}
        </h1>

        <p>
          ${r.text}
        </p>

      </div>
    `;


  /* =====================================================
     LECTURA DE LOS 9 SEGMENTOS
     ===================================================== */

  document.getElementById(
    "segmentReadings"
  ).innerHTML =

    scores
      .map(
        (score, i) => {

          const status =

            score >= 3

              ? "Percepción positiva"

              : score >= 2

                ? "Aspecto a observar"

                : "Aspecto que merece atención";


          return `

            <div class="segment-card">

              <h3>
                ${i + 1}.
                ${blocksData[i].title.replace(
                  /^\d+\.\s*/,
                  ""
                )}
              </h3>

              <div class="status">
                ${status}
              </div>

              <p>
                La lectura de este segmento se
                construye a partir de las respuestas
                registradas en sus tres preguntas.
              </p>

            </div>

          `;

        }
      )
      .join("");


  scrollTop();

}


/* =========================================================
   VOLVER ARRIBA
   ========================================================= */

function scrollTop() {

  window.scrollTo(
    {
      top: 0,
      behavior: "instant"
    }
  );

}


/* =========================================================
   BOTONES DE LA PORTADA
   ========================================================= */

document
  .getElementById("activateHeart")
  .addEventListener(
    "click",
    showTest
  );


document
  .getElementById("payMercado")
  .addEventListener(
    "click",
    showTest
  );


document
  .getElementById("payPaypal")
  .addEventListener(
    "click",
    showTest
  );


document
  .getElementById("payPayoneer")
  .addEventListener(
    "click",
    showTest
  );
