document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("sendButton");

    // Añadir evento de clic al botón "Enviar"
    sendButton.addEventListener("click", sendMessage);
});

// Función para enviar mensaje
function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput === "") return; // No enviar si el input está vacío

    // Mostrar el mensaje del usuario en la pantalla
    displayMessage(userInput, "user-message");

    // Limpiar el campo de entrada
    document.getElementById("userInput").value = "";

    // Responder al mensaje del usuario
    getBotResponse(userInput);
}

// Función para enviar preguntas frecuentes
function sendFAQ(question) {
    displayMessage(question, "user-message"); // Mostrar la pregunta en el chat
    getBotResponse(question); // Obtener la respuesta del bot
}

// Mostrar el mensaje en el chat
function displayMessage(text, className) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);

    // Detectar si la respuesta es un enlace, para usar innerHTML
    if (className === "bot-message" && text.includes("<a")) {
        messageDiv.innerHTML = text;
    } else {
        messageDiv.innerText = text;
    }

    document.getElementById("messages").appendChild(messageDiv);
    scrollToBottom(); // Para mantener el chat scrollable
}

// Función para manejar la respuesta del bot
function getBotResponse(userInput) {
    let botResponse = "";

    // Respuestas básicas simuladas
    if (userInput.toLowerCase().includes("hola")) {
        botResponse = "¡Hola! ¿Cómo te puedo ayudar hoy?";
    } else if (userInput.toLowerCase().includes("adios")) {
        botResponse = "¡Adiós! ¡Que tengas un buen día!";
    } else if (userInput.toLowerCase().includes("¿qué es agroecología?")) {
        botResponse = 'La agroecología es un enfoque que busca optimizar la producción agrícola de manera sostenible, respetando el medio ambiente y promoviendo la biodiversidad. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else if (userInput.toLowerCase().includes("¿diferencias entre agroecología y productos comerciales?")) {
        botResponse = 'La agroecología se centra en prácticas sostenibles y respetuosas con el medio ambiente, mientras que los productos comerciales a menudo dependen de métodos industriales que pueden ser dañinos. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else if (userInput.toLowerCase().includes("¿beneficios?")) {
        botResponse = 'Los beneficios de la agroecología incluyen la mejora de la salud del suelo, la biodiversidad, y la resiliencia ante el cambio climático. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else if (userInput.toLowerCase().includes("¿información de verduras?")) {
        botResponse = 'Las verduras son esenciales en una dieta saludable, aportando vitaminas, minerales y fibra. Existen muchas variedades, cada una con sus propiedades nutritivas. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else if (userInput.toLowerCase().includes("¿qué es ococalli?")) {
        botResponse = 'Ococalli es una empresa dedicada a una agricultura enfocada en alimentos más sanos, con mayor densidad nutricional, libres de agroquímicos, buenos para el medio ambiente y la salud. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else if (userInput.toLowerCase().includes("¿cómo se cuida el suelo en la agroecología?")) {
        botResponse = 'El suelo se cuida mediante la rotación de cultivos, compostaje, y el uso de abonos orgánicos. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else if (userInput.toLowerCase().includes("¿qué tipos de abono se utilizan?")) {
        botResponse = 'En agroecología se utilizan abonos orgánicos como el compost, estiércol, y residuos vegetales para enriquecer el suelo. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else if (userInput.toLowerCase().includes("¿impacto en la salud?")) {
        botResponse = 'La agroecología promueve alimentos libres de químicos dañinos, mejorando la salud humana y reduciendo el riesgo de enfermedades relacionadas con pesticidas. ¿Deseas saber más? <a href="http://127.0.0.1:5500/index.html" target="_blank">Haz clic aquí</a>';
    } else {
        botResponse = "Lo siento, no entiendo tu mensaje.";
    }

    // Mostrar respuesta del bot después de un pequeño retraso
    setTimeout(() => {
        displayMessage(botResponse, "bot-message");
    }, 500);
}

// Función para borrar el chat
function clearChat() {
    document.getElementById("messages").innerHTML = ""; // Elimina todos los mensajes del chat
}

// Detectar la tecla Enter y enviar el mensaje
function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Hacer scroll automático hacia el último mensaje
function scrollToBottom() {
    let chatbox = document.getElementById("chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}
