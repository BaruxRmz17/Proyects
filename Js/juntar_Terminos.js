// Diccionario de términos y definiciones
const allTerms = [
    { term: "Biodiversidad", definition: "Diversidad biológica en un sistema agrícola" },
    { term: "Rotación de cultivos", definition: "Práctica de alternar los cultivos en un mismo campo" },
    { term: "Compostaje", definition: "Uso de residuos orgánicos para mejorar el suelo" },
    { term: "Agroforestería", definition: "Integración de árboles y arbustos en sistemas agrícolas" },
    { term: "Permacultura", definition: "Diseño de sistemas agrícolas sostenibles y autosuficientes" },
    { term: "Abono verde", definition: "Cultivo de plantas para ser incorporadas al suelo como abono" },
    { term: "Cobertura del suelo", definition: "Uso de plantas para proteger el suelo de la erosión" },
    { term: "Conservación de agua", definition: "Prácticas para retener agua en el suelo y evitar el desperdicio" },
    { term: "Control biológico", definition: "Uso de organismos vivos para controlar plagas" },
    { term: "Policultivo", definition: "Cultivo de diferentes plantas en la misma parcela" },
    { term: "Monocultivo", definition: "Cultivo de una sola especie de planta en una gran área" },
    { term: "Agrosilvicultura", definition: "Práctica de combinar la agricultura con la silvicultura" },
    { term: "Soberanía alimentaria", definition: "Derecho de los pueblos a alimentos saludables y culturalmente apropiados" },
    { term: "Agricultura orgánica", definition: "Método de producción que excluye el uso de productos químicos sintéticos" },
    { term: "Suelos vivos", definition: "Suelo con biodiversidad, lleno de microorganismos y materia orgánica" },
    { term: "Agroecología", definition: "Aplicación de principios ecológicos al diseño de sistemas agrícolas" },
    { term: "Intercultura", definition: "Cultivo simultáneo de dos o más cultivos en la misma parcela" },
    { term: "Agua de lluvia", definition: "Técnicas para capturar y almacenar agua de lluvia para el riego" }
];

// Variables globales
let correctAnswers = {};
let userAnswers = {};
let selectedTerms = [];

// Función para obtener un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Función para barajar un array (Fisher-Yates Shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para generar aleatoriamente 5 términos y sus definiciones
function generateRandomTerms() {
    // Baraja los términos disponibles
    shuffle(allTerms);
    
    // Selecciona los primeros 5 términos
    selectedTerms = allTerms.slice(0, 5);
    
    // Limpia los contenedores de términos y definiciones
    document.getElementById('terms').innerHTML = '';
    document.getElementById('definitions').innerHTML = '';
    
    // Baraja las definiciones para que no coincidan con los términos
    const shuffledDefinitions = [...selectedTerms];
    shuffle(shuffledDefinitions);
    
    // Guarda las respuestas correctas
    correctAnswers = {};
    userAnswers = {};

    // Agrega los términos y definiciones al DOM
    selectedTerms.forEach((item, index) => {
        const termElement = document.createElement('div');
        termElement.id = `term-${index}`;
        termElement.className = 'term';
        termElement.draggable = true;
        termElement.ondragstart = drag;
        termElement.textContent = item.term;
        document.getElementById('terms').appendChild(termElement);
        
        const defElement = document.createElement('div');
        defElement.id = `def-${index}`;
        defElement.className = 'definition';
        defElement.ondrop = drop;
        defElement.ondragover = allowDrop;
        defElement.textContent = shuffledDefinitions[index].definition;
        document.getElementById('definitions').appendChild(defElement);
        
        // Asigna la respuesta correcta
        correctAnswers[`term-${index}`] = shuffledDefinitions[index].definition;
    });
}

// Funciones de arrastrar y soltar
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let termId = ev.dataTransfer.getData("text");
    let definitionElement = ev.target;

    // Mueve el término dentro de la definición
    let termElement = document.getElementById(termId);
    definitionElement.appendChild(termElement);

    // Guarda la respuesta del usuario
    userAnswers[termId] = definitionElement.textContent;
}

// Función para revisar las respuestas
function checkAnswers() {
    let correctCount = 0;
    for (let termId in correctAnswers) {
        if (userAnswers[termId] === correctAnswers[termId]) {
            correctCount++;
        }
    }

    let messageElement = document.getElementById("message");
    if (correctCount === Object.keys(correctAnswers).length) {
        messageElement.textContent = "¡Felicidades! Emparejaste todo correctamente.";
    } else {
        messageElement.textContent = "Has emparejado " + correctCount + " correctamente. Intenta de nuevo.";
    }

    document.getElementById("restartButton").style.display = "block";
}

// Función para reiniciar el juego
function restartGame() {
    generateRandomTerms();
    document.getElementById("message").textContent = '';
    document.getElementById("restartButton").style.display = 'none';
}

// Inicia el juego al cargar la página
window.onload = function() {
    generateRandomTerms();
};
