// Manejar el botón de guardar
document.getElementById('saveButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message'); // Selecciona el elemento para mostrar mensajes
    if (navigator.onLine) { // Verifica si hay conexión a Internet
        messageDiv.textContent = 'Guardado con éxito'; // Muestra mensaje de éxito
        messageDiv.className = 'text-green-500'; // Aplica estilo al mensaje
    } else {
        messageDiv.textContent = 'Error: No hay conexión a Internet'; // Muestra mensaje de error
        messageDiv.className = 'text-red-500'; // Aplica estilo al mensaje
    }
});

// Manejar el botón de cancelar
document.getElementById('cancelButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message'); // Selecciona el elemento para mostrar mensajes
    messageDiv.textContent = ''; // Limpia el mensaje
});
