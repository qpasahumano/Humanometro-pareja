"use strict";

// HUMANÓMETRO PAREJAS — actualización 30/09/2026

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
      "Cuando uno de los dos atraviesa una dificultad importante, ¿el otro puede acompañarlo teniendo en cuenta lo que
