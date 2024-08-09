const preguntas = [

    {
        pregunta: "¿Quién canta la canción ¨Art Deco¨?",
        respuestas: ["Lana del Rey", "Sia", "Coldplay", "Taylor Swift"],
        correcta: 0
    },

    {
        pregunta: "¿Cuál de estas canciones le pertenece a Sia?",
        respuestas: ["Snow Flower", "Snowfall", "Snowman", "snowdrop"],
        correcta: 2
    },

    {
        pregunta: "¿A qué cantante le pertenece la canción ¨Despacito¨?",
        respuestas: ["Ozuna", "Daddy Yankee", "Pablo Alborán", "Luis Fonsi"],
        correcta: 3
    },

    {
        pregunta: "¿A quién le pertence la canción ¨Me Rehúso¨?",
        respuestas: ["Pitbull", "Danny Ocean", "Sebastián Yatra", "Pedro Capo"],
        correcto: 1
    },
];

let indice_aleatorio = 0;

let pregunta_txt = "";

let interval;

window.onload = iniciar();

function iniciar() {
    loadQuestions();
    if (localStorage.getItem("SCORE") != null) {
        localStorage.removeItem("SCORE");
    }
    }


function iniciarCronometro() {
    const contador = 15; cronometroDisplay = document.getElementById("cronometro")

    iniciarTiempo(contador, cronometroDisplay)

}

function iniciarTiempo(duracion, componente) {
    interval = setInterval (() => {
    if (duracion === 0) {

        componente.innerHTML = "Se acabó el tiempo";

        clearInterval(interval);

        loadQuestions()

    } else {

        duracion = duracion < 10 ? "0" + duracion : duracion;

        componente.textContent = "00:" + duracion;

        duracion--;
    }
    },1000)
}

function loadQuestions() {
    iniciarCronometro();

    if (preguntas.length > 0) {

        indice_aleatorio = Math.floor(Math.random() * preguntas.length);

        pregunta_txt = "";

        pregunta_txt += '<p class= "pregungta">' + preguntas[indice_aleatorio].pregunta + '</p>';
        pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';
        pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';

        pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';

        pregunta_txt += '<button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[3] + '</button>';

        document.getElementById("pregunta").innerHTML = pregunta_txt;

        preguntas.splice(indice_aleatorio, 1);

    } else {
        window.location.href = "../html/puntajeobtenido.html";
    }
}
    
let puntos = 0;

function verificarRespuestaCorrecta(indice, correcta) {
    if (correcta === indice) {
        puntos = puntos + 5;      
    }
    
    localStorage.setItem("SCORE", puntos);
     
    document.getElementById("opcion0").disabled = true;
    document.getElementById("opcion1").disabled = true;
    document.getElementById("opcion2").disabled = true;
    document.getElementById("opcion3").disabled = true;
}

document.getElementById("siguienteTrivia").addEventListener("click", () => { clearInterval(interval), loadQuestions() });