function checkAnswers() {
    let score = 0;
    const totalQuestions = 5;

    // Recolectar respuestas seleccionadas
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    // Contar respuestas correctas
    answers.forEach(answer => {
        if (answer.value === "correct") {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');

    // Mostrar resultados y botón para descargar PDF si las respuestas correctas son 4 o más
    if (score >= 4) {
        resultDiv.innerHTML = `<h2>¡Felicidades! Has obtenido un reconocimiento.</h2>
                               <button id="downloadPdf" onclick="downloadPDF()">Descargar PDF</button>`;
    } else {
        resultDiv.innerHTML = `<h2 class="fail">Lo siento, has acertado ${score} de ${totalQuestions} preguntas. Inténtalo de nuevo.</h2>`;
    }

    // Mostrar botón de reinicio
    resetBtn.style.display = 'block';
}

function resetQuiz() {
    // Limpiar el formulario
    const form = document.getElementById('quizForm');
    form.reset();

    // Ocultar resultados y botón de reinicio
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.style.display = 'none';
}

// Función para descargar el PDF
function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'pdf/reconocimiento.pdf';  // Ruta al archivo PDF en tu proyecto local
    link.download = 'reconocimiento.pdf';
    link.click();
}
