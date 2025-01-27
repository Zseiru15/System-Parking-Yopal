function toggleAnswer(element) {
    const answer = element.nextElementSibling; // Selecciona la respuesta correspondiente
    const icon = element.querySelector('i');  // Selecciona el ícono dentro del elemento clicado

    // Cambia el estado de visible/oculto
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";         // Muestra la respuesta
        icon.classList.remove('fa-plus');      // Cambia el ícono de "+" a "-"
        icon.classList.add('fa-minus');
    } else {
        answer.style.display = "none";         // Oculta la respuesta
        icon.classList.remove('fa-minus');     // Cambia el ícono de "-" a "+"
        icon.classList.add('fa-plus');
    }
}

function comprarVIP() {
    alert("¡Felicitaciones por haberte unido! Ahora eres VIP.");
    window.location.href = "file:///C:/Users/mairo/OneDrive/Documents/repo_sena/System-Parking-Yopal/metodos%20de%20pagos%20parqueaderos/metodos%20de%20pagos%20(2).html";
}