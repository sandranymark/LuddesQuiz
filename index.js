/* =========================================================
   LJUSQUIZ – ÅK 8

   Frågebank:
   - Ljusets egenskaper
   - Reflektion
   - Speglar
   - Brytning
   - Linser
   - Ögat
   - Synfel
   - Färger
   - Spektrum
   - UV
   - Ozonskiktet
   - Elektromagnetisk strålning
   - Ljus i atomer
========================================================= */

/* =========================================================
   INSTÄLLNINGAR
========================================================= */

const QUESTIONS_PER_ROUND = 20;

/* =========================================================
   FRÅGEBANK
========================================================= */

const questionBank = [
  {
    category: "Ljusets egenskaper",

    question: "Vad måste finnas för att vi ska kunna se ett föremål?",

    answers: [
      "Ljus som når våra ögon från föremålet",
      "Ljudvågor som studsar mot föremålet",
      "Elektricitet som går genom ögat",
      "Värme som kommer från föremålet",
    ],

    correct: 0,

    explanation:
      "För att vi ska kunna se ett föremål måste ljus från en ljuskälla träffa föremålet och sedan reflekteras in i våra ögon.",
  },

  {
    category: "Ljusets egenskaper",

    question: "Vad kallas ett föremål som själv sänder ut synligt ljus?",

    answers: ["Ljuskälla", "Reflektor", "Lins", "Spegelbild"],

    correct: 0,

    explanation:
      "En ljuskälla är något som själv sänder ut ljus, till exempel solen, en lampa eller en låga.",
  },

  {
    category: "Ljusets egenskaper",

    question: "Vad händer med ljus när det träffar ett vanligt föremål?",

    answers: [
      "En del av ljuset kan reflekteras",
      "Ljuset försvinner alltid helt",
      "Ljuset blir automatiskt ljud",
      "Ljuset stannar alltid på föremålet",
    ],

    correct: 0,

    explanation:
      "När ljus träffar ett föremål kan en del av ljuset reflekteras. Det reflekterade ljuset kan sedan nå våra ögon.",
  },

  {
    category: "Reflektion",

    question: "Vad betyder det att ljus reflekteras?",

    answers: [
      "Att ljuset studsar tillbaka från en yta",
      "Att ljuset blir till ljud",
      "Att ljuset alltid bryts i två delar",
      "Att ljuset försvinner",
    ],

    correct: 0,

    explanation:
      "Reflektion betyder att ljusstrålar studsar mot en yta och ändrar riktning.",
  },

  {
    category: "Reflektion",

    question: "Vad är normalen vid en spegel?",

    answers: [
      "En tänkt linje som är vinkelrät mot spegeln",
      "En linje som ligger längs med spegeln",
      "Den reflekterade ljusstrålen",
      "Spegelns kant",
    ],

    correct: 0,

    explanation:
      "Normalen är en tänkt linje som går rakt ut från spegelytan, alltså 90 grader mot spegeln.",
  },

  {
    category: "Reflektion",

    question: "Vad säger reflektionslagen?",

    answers: [
      "Infallsvinkeln är lika stor som reflektionsvinkeln",
      "Reflektionsvinkeln är alltid dubbelt så stor",
      "Ljuset reflekteras alltid rakt bakåt",
      "Infallsvinkeln är alltid 90 grader",
    ],

    correct: 0,

    explanation:
      "Reflektionslagen säger att infallsvinkeln är lika stor som reflektionsvinkeln.",
  },

  {
    category: "Reflektion",

    question: "Vad mäts infallsvinkeln mot?",

    answers: [
      "Normalen",
      "Spegelns kant",
      "Den reflekterade strålen",
      "Marken",
    ],

    correct: 0,

    explanation:
      "Infallsvinkeln mäts mellan den infallande ljusstrålen och normalen.",
  },

  {
    category: "Plan spegel",

    question: "Var verkar bilden finnas när du tittar i en plan spegel?",

    answers: [
      "Lika långt bakom spegeln som föremålet är framför",
      "Precis på spegelytan",
      "Dubbelt så långt bakom spegeln",
      "Alltid ovanför spegeln",
    ],

    correct: 0,

    explanation:
      "I en plan spegel verkar bilden finnas lika långt bakom spegeln som föremålet befinner sig framför spegeln.",
  },

  {
    category: "Plan spegel",

    question: "Hur är en bild i en plan spegel jämfört med föremålet?",

    answers: [
      "Den är lika stor",
      "Den är alltid dubbelt så stor",
      "Den är alltid hälften så stor",
      "Den är alltid upp och ner",
    ],

    correct: 0,

    explanation:
      "En plan spegel ger en bild som är lika stor som föremålet. Bilden är också spegelvänd.",
  },

  {
    category: "Speglar",

    question: "Vad kallas en spegel som buktar utåt?",

    answers: [
      "Konvex spegel",
      "Konkav spegel",
      "Plan spegel",
      "Cylindrisk lins",
    ],

    correct: 0,

    explanation:
      "En konvex spegel buktar utåt, ungefär som utsidan av en kula.",
  },

  {
    category: "Speglar",

    question: "Vad kallas en spegel som buktar inåt?",

    answers: ["Konkav spegel", "Konvex spegel", "Plan spegel", "Platt lins"],

    correct: 0,

    explanation:
      "En konkav spegel buktar inåt, ungefär som insidan av en skål.",
  },

  {
    category: "Speglar",

    question:
      "Vilken typ av spegel kan ge ett större ansikte när man håller sig nära spegeln?",

    answers: [
      "Konkav spegel",
      "Konvex spegel",
      "Plan spegel",
      "Ingen spegel kan göra detta",
    ],

    correct: 0,

    explanation:
      "En konkav spegel kan förstora ett föremål när föremålet befinner sig nära spegeln.",
  },

  {
    category: "Speglar",

    question:
      "Varför används konvexa speglar ofta som backspeglar eller övervakningsspeglar?",

    answers: [
      "De ger ett större synfält",
      "De gör alltid bilden större",
      "De absorberar allt ljus",
      "De gör att ljuset slutar reflekteras",
    ],

    correct: 0,

    explanation:
      "Konvexa speglar sprider det reflekterade ljuset och ger därför ett större synfält.",
  },

  {
    category: "Brytning",

    question: "Vad menas med att ljus bryts?",

    answers: [
      "Ljuset ändrar riktning när det går mellan olika material",
      "Ljuset blir till ljud",
      "Ljuset försvinner",
      "Ljuset slutar att röra sig",
    ],

    correct: 0,

    explanation:
      "När ljus går från ett material till ett annat, till exempel från luft till glas, kan ljuset ändra riktning. Det kallas brytning.",
  },

  {
    category: "Brytning",

    question: "Varför kan en pinne som står delvis i vatten se böjd ut?",

    answers: [
      "Ljuset bryts när det går från vatten till luft",
      "Vattnet böjer själva pinnen",
      "Pinnen blir magnetisk",
      "Ögat slutar fungera under vatten",
    ],

    correct: 0,

    explanation:
      "Ljuset från den del av pinnen som är under vattnet bryts när det går från vatten till luft. Därför ser pinnen ut att ligga på en annan plats.",
  },

  {
    category: "Linser",

    question: "Vad gör en konvex lins med parallella ljusstrålar?",

    answers: [
      "Den samlar dem mot en brännpunkt",
      "Den sprider dem helt åt sidan",
      "Den stoppar dem",
      "Den gör dem till ljud",
    ],

    correct: 0,

    explanation:
      "En konvex lins är samlingslins. Parallella ljusstrålar kan samlas i en brännpunkt.",
  },

  {
    category: "Linser",

    question: "Vad gör en konkav lins med parallella ljusstrålar?",

    answers: [
      "Den sprider ljusstrålarna",
      "Den samlar alla strålar i en punkt",
      "Den reflekterar alla strålar tillbaka",
      "Den gör ljuset osynligt",
    ],

    correct: 0,

    explanation:
      "En konkav lins är en spridningslins och får parallella ljusstrålar att spridas.",
  },

  {
    category: "Ögat",

    question:
      "Vilken del av ögat är det ljuskänsliga skikt där en bild bildas?",

    answers: ["Näthinnan", "Pupillen", "Hornhinnan", "Iris"],

    correct: 0,

    explanation:
      "Näthinnan innehåller ljuskänsliga celler. Där bildas en bild som sedan bearbetas av hjärnan.",
  },

  {
    category: "Ögat",

    question: "Vad gör pupillen?",

    answers: [
      "Reglerar hur mycket ljus som kommer in i ögat",
      "Skickar signaler direkt till hjärnan",
      "Fungerar som ögats näthinna",
      "Producerar färger",
    ],

    correct: 0,

    explanation:
      "Pupillen är öppningen som släpper in ljus i ögat. Iris reglerar hur stor pupillen är.",
  },

  {
    category: "Synfel",

    question: "Vad innebär närsynthet?",

    answers: [
      "Man ser nära bra men har svårare att se långt bort",
      "Man ser långt bort bra men inte nära",
      "Man kan bara se svart och vitt",
      "Man kan inte se i dagsljus",
    ],

    correct: 0,

    explanation:
      "En närsynt person ser vanligtvis föremål på nära håll tydligare än föremål långt bort.",
  },

  {
    category: "Synfel",

    question:
      "Vilken typ av lins används normalt för att korrigera närsynthet?",

    answers: ["Konkav lins", "Konvex lins", "Plan spegel", "Konvex spegel"],

    correct: 0,

    explanation:
      "Närsynthet korrigeras normalt med en konkav, alltså spridande, lins.",
  },

  {
    category: "Synfel",

    question: "Vad innebär översynthet?",

    answers: [
      "Man har svårare att se nära",
      "Man har svårare att se långt bort",
      "Man ser bara färgen blå",
      "Man kan inte se ljus",
    ],

    correct: 0,

    explanation:
      "En översynt person har ofta lättare att se långt bort än nära och kan behöva hjälp med en konvex lins.",
  },

  {
    category: "Synfel",

    question:
      "Vilken typ av lins används normalt för att korrigera översynthet?",

    answers: ["Konvex lins", "Konkav lins", "Konvex spegel", "Plan spegel"],

    correct: 0,

    explanation:
      "Översynthet kan korrigeras med en konvex, alltså samlande, lins.",
  },

  {
    category: "Färger",

    question: "Vilka färger brukar man kunna se i det synliga spektrumet?",

    answers: [
      "Rött, orange, gult, grönt, blått, indigo och violett",
      "Bara rött och blått",
      "Svart, vitt och grått",
      "Bara grönt och gult",
    ],

    correct: 0,

    explanation:
      "Det synliga ljuset kan delas upp i färgerna rött, orange, gult, grönt, blått, indigo och violett.",
  },

  {
    category: "Färger",

    question: "Vad händer när vitt ljus passerar genom ett prisma?",

    answers: [
      "Det kan delas upp i olika färger",
      "Det försvinner",
      "Det blir bara rött",
      "Det blir ljud",
    ],

    correct: 0,

    explanation:
      "Ett prisma kan bryta olika våglängder olika mycket. Därför delas vitt ljus upp i ett spektrum av färger.",
  },

  {
    category: "Färger",

    question: "Varför ser ett rött äpple rött ut i vitt ljus?",

    answers: [
      "Äpplet reflekterar framför allt rött ljus till våra ögon",
      "Äpplet skapar alltid rött ljus ur ingenting",
      "Äpplet absorberar bara rött ljus",
      "Ögat gör alla föremål röda",
    ],

    correct: 0,

    explanation:
      "Ett rött föremål reflekterar framför allt rött ljus och absorberar mycket av de andra färgerna.",
  },

  {
    category: "UV",

    question: "Vad betyder UV-strålning?",

    answers: [
      "Ultraviolett strålning",
      "Ultra-värme",
      "Under-vattenstrålning",
      "Ultraljud",
    ],

    correct: 0,

    explanation:
      "UV står för ultraviolett. UV-strålning är elektromagnetisk strålning med kortare våglängd än synligt violett ljus.",
  },

  {
    category: "Ozonskiktet",

    question: "Vad är ozonskiktets viktigaste skyddande effekt?",

    answers: [
      "Det absorberar en stor del av solens skadliga UV-strålning",
      "Det stoppar allt synligt ljus",
      "Det gör jorden varmare",
      "Det skapar syre från ljus",
    ],

    correct: 0,

    explanation:
      "Ozonskiktet absorberar en stor del av den skadliga ultravioletta strålningen från solen.",
  },

  {
    category: "Elektromagnetisk strålning",

    question: "Vilket av följande är elektromagnetisk strålning?",

    answers: ["Radiovågor", "Ljudvågor", "Vattenvågor", "Vågor på ett rep"],

    correct: 0,

    explanation:
      "Radiovågor är elektromagnetisk strålning. Även mikrovågor, infraröd strålning, synligt ljus, UV, röntgen och gammastrålning är elektromagnetisk strålning.",
  },

  {
    category: "Elektromagnetiska spektrumet",

    question:
      "Vilken ordning går det elektromagnetiska spektrumet i från längre till kortare våglängd?",

    answers: [
      "Radiovågor → mikrovågor → infrarött → synligt ljus → UV → röntgen → gamma",
      "Gamma → röntgen → UV → synligt → radio",
      "Synligt → radio → gamma → UV",
      "UV → radio → infrarött → gamma",
    ],

    correct: 0,

    explanation:
      "Från längre till kortare våglängd kommer radiovågor, mikrovågor, infrarött, synligt ljus, UV, röntgen och gammastrålning.",
  },

  {
    category: "Ljus i atomer",

    question: "Hur kan en atom sända ut ljus?",

    answers: [
      "En elektron kan gå från en högre energinivå till en lägre och då avges energi som ljus",
      "Atomkärnan börjar alltid lysa",
      "Atomen omvandlas direkt till ljud",
      "Elektronen försvinner ur universum",
    ],

    correct: 0,

    explanation:
      "Elektroner i en atom kan befinna sig på olika energinivåer. När en elektron går från en högre till en lägre energinivå kan energi avges som en ljuspartikel, en foton.",
  },

  {
    category: "Elektromagnetisk strålning",

    question: "Vilken av dessa har högst energi?",

    answers: [
      "Gammastrålning",
      "Radiovågor",
      "Mikrovågor",
      "Infraröd strålning",
    ],

    correct: 0,

    explanation:
      "Gammastrålning har mycket kort våglängd och hög frekvens, vilket innebär hög energi.",
  },

  {
    category: "Elektromagnetisk strålning",

    question:
      "Vilken typ av elektromagnetisk strålning använder en vanlig fjärrkontroll ofta?",

    answers: [
      "Infraröd strålning",
      "Gammastrålning",
      "Röntgenstrålning",
      "UV-strålning",
    ],

    correct: 0,

    explanation:
      "Många fjärrkontroller använder infrarött ljus för att skicka signaler till apparaten.",
  },

  /* =====================================================
       RITFRÅGOR
    ===================================================== */

  {
    category: "Rita och tolka – reflektion",

    question: "Titta på bilden. Vilken vinkel är infallsvinkeln?",

    diagram: "reflection",

    answers: [
      "Vinkeln mellan den infallande strålen och normalen",
      "Vinkeln mellan den infallande strålen och spegeln",
      "Vinkeln mellan spegeln och normalen",
      "Vinkeln mellan de två strålarna och marken",
    ],

    correct: 0,

    explanation:
      "Infallsvinkeln mäts alltid mellan den infallande ljusstrålen och normalen – inte direkt mot spegelytan.",
  },

  {
    category: "Rita och tolka – reflektion",

    question:
      "En ljusstråle träffar en plan spegel med en infallsvinkel på 30°. Hur stor blir reflektionsvinkeln?",

    answers: ["30°", "60°", "90°", "15°"],

    correct: 0,

    explanation:
      "Enligt reflektionslagen är reflektionsvinkeln lika stor som infallsvinkeln. Alltså 30°.",
  },

  {
    category: "Rita och tolka – brytning",

    question:
      "Titta på bilden. Vad händer med ljusstrålen när den går från luft till glas?",

    diagram: "refraction",

    answers: [
      "Den bryts och ändrar riktning",
      "Den slutar existera",
      "Den blir till ljud",
      "Den reflekteras alltid helt tillbaka",
    ],

    correct: 0,

    explanation:
      "När ljus går mellan olika material, till exempel luft och glas, ändras ljusets hastighet och ljusstrålen kan därför brytas.",
  },

  {
    category: "Rita och tolka – lins",

    question: "Vilken lins visas på bilden?",

    diagram: "convexLens",

    answers: [
      "En konvex lins",
      "En konkav lins",
      "En plan spegel",
      "En konvex spegel",
    ],

    correct: 0,

    explanation:
      "En konvex lins är tjockare på mitten och fungerar som en samlingslins.",
  },

  {
    category: "Rita och tolka – speglar",

    question: "Vilken typ av spegel visas på bilden?",

    diagram: "concaveMirror",

    answers: ["Konkav spegel", "Konvex spegel", "Plan spegel", "Konkav lins"],

    correct: 0,

    explanation:
      "En konkav spegel buktar inåt, ungefär som insidan av en skål.",
  },
];

/* =========================================================
   HÄMTA ELEMENT FRÅN HTML
========================================================= */

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const nextButton = document.getElementById("next-button");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");

const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");

const categoryElement = document.getElementById("category");
const questionText = document.getElementById("question-text");

const questionImage = document.getElementById("question-image");

const answersContainer = document.getElementById("answers");

const feedback = document.getElementById("feedback");

const finalScore = document.getElementById("final-score");
const finalTotal = document.getElementById("final-total");
const percentage = document.getElementById("percentage");

const resultMessage = document.getElementById("result-message");
const resultEmoji = document.getElementById("result-emoji");

/* =========================================================
   VARIABLER
========================================================= */

let quizQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let hasAnswered = false;

/* =========================================================
   SLUMPA ARRAY
========================================================= */

function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    /*
            Här använder vi Math.floor(Math.random())
            precis som du bad om.
        */

    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/* =========================================================
   SKAPA NY QUIZOMGÅNG
========================================================= */

function createNewQuiz() {
  /*
        Vi blandar hela frågebanken och tar de första
        20 frågorna.

        Det innebär att samma fråga inte kan förekomma
        två gånger under samma omgång.
    */

  quizQuestions = shuffle(questionBank)
    .slice(0, QUESTIONS_PER_ROUND)
    .map((question) => {
      return {
        ...question,

        /*
                    Svaren blandas också.
                    Vi sparar texten på det rätta svaret
                    istället för bara indexet.
                */

        correctAnswer: question.answers[question.correct],

        shuffledAnswers: shuffle(question.answers),
      };
    });

  currentQuestionIndex = 0;

  score = 0;

  scoreElement.textContent = score;

  totalQuestions.textContent = quizQuestions.length;
}

/* =========================================================
   STARTA QUIZ
========================================================= */

function startQuiz() {
  createNewQuiz();

  startScreen.classList.add("hidden");

  resultScreen.classList.add("hidden");

  quizScreen.classList.remove("hidden");

  showQuestion();
}

/* =========================================================
   VISA FRÅGA
========================================================= */

function showQuestion() {
  hasAnswered = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionNumber.textContent = currentQuestionIndex + 1;

  totalQuestions.textContent = quizQuestions.length;

  scoreElement.textContent = score;

  categoryElement.textContent = currentQuestion.category;

  questionText.textContent = currentQuestion.question;

  /* Progress */

  const progress = (currentQuestionIndex / quizQuestions.length) * 100;

  progressBar.style.width = `${progress}%`;

  /* Ta bort gammal bild */

  questionImage.innerHTML = "";

  /* Lägg till eventuell bild */

  if (currentQuestion.diagram) {
    questionImage.innerHTML = createDiagram(currentQuestion.diagram);
  }

  /* Ta bort gamla svar */

  answersContainer.innerHTML = "";

  /* Dölj feedback */

  feedback.className = "feedback hidden";

  feedback.innerHTML = "";

  /* Dölj nästa-knappen */

  nextButton.classList.add("hidden");

  /*
        Skapa knappar för svaren
    */

  currentQuestion.shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");

    button.className = "answer-button";

    button.textContent = answer;

    button.addEventListener("click", () =>
      selectAnswer(button, answer, currentQuestion)
    );

    answersContainer.appendChild(button);
  });
}

/* =========================================================
   SVARA
========================================================= */

function selectAnswer(clickedButton, selectedAnswer, currentQuestion) {
  /*
        Om man redan har svarat ska det inte gå att
        svara igen.
    */

  if (hasAnswered) {
    return;
  }

  hasAnswered = true;

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  /*
        Hämta alla svarsknappar
        och lås dem.
    */

  const allButtons = document.querySelectorAll(".answer-button");

  allButtons.forEach((button) => {
    button.disabled = true;

    /*
            Markera alltid det riktiga svaret grönt.
        */

    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    score++;

    scoreElement.textContent = score;

    clickedButton.classList.add("correct");

    feedback.className = "feedback correct-feedback";

    feedback.innerHTML = `
            <strong>✅ Rätt!</strong>
            ${currentQuestion.explanation}
        `;
  } else {
    clickedButton.classList.add("wrong");

    feedback.className = "feedback wrong-feedback";

    feedback.innerHTML = `
            <strong>❌ Inte riktigt!</strong>

            <p>
                Rätt svar är:
                <strong>
                    ${currentQuestion.correctAnswer}
                </strong>
            </p>

            <p>
                ${currentQuestion.explanation}
            </p>
        `;
  }

  /*
        Visa nästa-knappen
    */

  nextButton.classList.remove("hidden");
}

/* =========================================================
   NÄSTA FRÅGA
========================================================= */

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= quizQuestions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

/* =========================================================
   RESULTAT
========================================================= */

function showResult() {
  quizScreen.classList.add("hidden");

  resultScreen.classList.remove("hidden");

  finalScore.textContent = score;

  finalTotal.textContent = quizQuestions.length;

  const percent = Math.round((score / quizQuestions.length) * 100);

  percentage.textContent = `${percent} %`;

  if (percent >= 90) {
    resultEmoji.textContent = "🏆";

    resultMessage.textContent =
      "Fantastiskt! Du verkar ha riktigt bra koll på ljus och reflektioner!";
  } else if (percent >= 75) {
    resultEmoji.textContent = "🎉";

    resultMessage.textContent =
      "Mycket bra! Du kan det mesta, men träna lite extra på de frågor du hade fel på.";
  } else if (percent >= 60) {
    resultEmoji.textContent = "👍";

    resultMessage.textContent =
      "Bra jobbat! Du har koll på mycket, men några områden behöver lite mer träning.";
  } else if (percent >= 40) {
    resultEmoji.textContent = "📚";

    resultMessage.textContent =
      "Du är på gång! Läs igenom kapitlen och försök sedan köra quizet igen.";
  } else {
    resultEmoji.textContent = "💪";

    resultMessage.textContent =
      "Det är bara träning! Gå tillbaka till boken och försök igen. Nästa gång kan du slå resultatet!";
  }
}

/* =========================================================
   RITBILDER
========================================================= */

function createDiagram(type) {
  /* -----------------------------------------
       REFLEKTION
    ----------------------------------------- */

  if (type === "reflection") {
    return `
        <svg
            class="question-diagram"
            viewBox="0 0 700 350"
            xmlns="http://www.w3.org/2000/svg"
        >

            <!-- Spegel -->
            <line
                x1="100"
                y1="250"
                x2="600"
                y2="250"
                stroke="#222"
                stroke-width="8"
            />

            <text
                x="500"
                y="285"
                font-size="20"
            >
                Spegel
            </text>


            <!-- Normal -->
            <line
                x1="350"
                y1="80"
                x2="350"
                y2="320"
                stroke="#777"
                stroke-width="3"
                stroke-dasharray="10 8"
            />

            <text
                x="365"
                y="110"
                font-size="20"
            >
                Normal
            </text>


            <!-- Infallande stråle -->
            <line
                x1="150"
                y1="70"
                x2="350"
                y2="250"
                stroke="#e11d48"
                stroke-width="6"
            />

            <polygon
                points="340,238 350,250 334,246"
                fill="#e11d48"
            />


            <!-- Reflekterad stråle -->
            <line
                x1="350"
                y1="250"
                x2="550"
                y2="70"
                stroke="#2563eb"
                stroke-width="6"
            />

            <polygon
                points="550,70 535,75 545,84"
                fill="#2563eb"
            />


            <text
                x="160"
                y="60"
                font-size="20"
            >
                Infallande stråle
            </text>

            <text
                x="440"
                y="60"
                font-size="20"
            >
                Reflekterad stråle
            </text>

        </svg>
        `;
  }

  /* -----------------------------------------
       BRYTNING
    ----------------------------------------- */

  if (type === "refraction") {
    return `
        <svg
            class="question-diagram"
            viewBox="0 0 700 400"
            xmlns="http://www.w3.org/2000/svg"
        >

            <!-- Luft -->
            <rect
                x="0"
                y="0"
                width="700"
                height="200"
                fill="#eef8ff"
            />

            <!-- Glas -->
            <rect
                x="0"
                y="200"
                width="700"
                height="200"
                fill="#dbeafe"
            />

            <text
                x="30"
                y="45"
                font-size="24"
            >
                Luft
            </text>

            <text
                x="30"
                y="245"
                font-size="24"
            >
                Glas
            </text>


            <!-- Gränsyta -->
            <line
                x1="0"
                y1="200"
                x2="700"
                y2="200"
                stroke="#334155"
                stroke-width="4"
            />


            <!-- Normal -->
            <line
                x1="350"
                y1="80"
                x2="350"
                y2="330"
                stroke="#777"
                stroke-width="3"
                stroke-dasharray="10 8"
            />


            <!-- Infallande -->
            <line
                x1="180"
                y1="50"
                x2="350"
                y2="200"
                stroke="#e11d48"
                stroke-width="6"
            />

            <!-- Bruten -->
            <line
                x1="350"
                y1="200"
                x2="450"
                y2="330"
                stroke="#2563eb"
                stroke-width="6"
            />


            <circle
                cx="350"
                cy="200"
                r="8"
                fill="#111827"
            />

        </svg>
        `;
  }

  /* -----------------------------------------
       KONVEX LINS
    ----------------------------------------- */

  if (type === "convexLens") {
    return `
        <svg
            class="question-diagram"
            viewBox="0 0 700 350"
            xmlns="http://www.w3.org/2000/svg"
        >

            <!-- Lins -->
            <path
                d="
                    M 320 50
                    Q 390 175 320 300
                    Q 280 175 320 50
                    Z
                "
                fill="#bfdbfe"
                stroke="#2563eb"
                stroke-width="4"
            />

            <path
                d="
                    M 380 50
                    Q 310 175 380 300
                    Q 420 175 380 50
                    Z
                "
                fill="#bfdbfe"
                stroke="#2563eb"
                stroke-width="4"
            />


            <!-- Parallella strålar -->
            <line
                x1="40"
                y1="100"
                x2="320"
                y2="100"
                stroke="#e11d48"
                stroke-width="5"
            />

            <line
                x1="40"
                y1="175"
                x2="320"
                y2="175"
                stroke="#e11d48"
                stroke-width="5"
            />

            <line
                x1="40"
                y1="250"
                x2="320"
                y2="250"
                stroke="#e11d48"
                stroke-width="5"
            />


            <!-- Samlande strålar -->
            <line
                x1="380"
                y1="100"
                x2="580"
                y2="175"
                stroke="#2563eb"
                stroke-width="5"
            />

            <line
                x1="380"
                y1="175"
                x2="580"
                y2="175"
                stroke="#2563eb"
                stroke-width="5"
            />

            <line
                x1="380"
                y1="250"
                x2="580"
                y2="175"
                stroke="#2563eb"
                stroke-width="5"
            />

            <text
                x="285"
                y="330"
                font-size="22"
            >
                Konvex lins
            </text>

        </svg>
        `;
  }

  /* -----------------------------------------
       KONKAV SPEGEL
    ----------------------------------------- */

  if (type === "concaveMirror") {
    return `
        <svg
            class="question-diagram"
            viewBox="0 0 700 350"
            xmlns="http://www.w3.org/2000/svg"
        >

            <!-- Konkav spegel -->
            <path
                d="
                    M 500 50
                    Q 300 175 500 300
                "
                fill="none"
                stroke="#334155"
                stroke-width="12"
            />

            <!-- Ljusstrålar -->
            <line
                x1="70"
                y1="100"
                x2="500"
                y2="100"
                stroke="#e11d48"
                stroke-width="5"
            />

            <line
                x1="70"
                y1="175"
                x2="500"
                y2="175"
                stroke="#e11d48"
                stroke-width="5"
            />

            <line
                x1="70"
                y1="250"
                x2="500"
                y2="250"
                stroke="#e11d48"
                stroke-width="5"
            />

            <text
                x="100"
                y="60"
                font-size="22"
            >
                Ljusstrålar
            </text>

            <text
                x="470"
                y="330"
                font-size="22"
            >
                Spegel
            </text>

        </svg>
        `;
  }

  return "";
}

/* =========================================================
   EVENT LISTENERS
========================================================= */

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", startQuiz);

/* =========================================================
   KLART
========================================================= */

console.log(
  "Ljusquiz laddat! Antal frågor i frågebanken:",
  questionBank.length
);
