// Función que muestra el cuadro de confirmación
function confirmarCompra(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace/botón
  const confirmar = window.confirm("¿Estás seguro de que quieres comprar?");
  
  if (confirmar) {
    // Redirigir a la página de método de pago
    window.location.href = "/escoger-metodo-de-pago.html"; // Cambia la URL según sea necesario
  } else {
    // Si se cancela, no hace nada
    console.log("Compra cancelada.");
  }
}

// Asignar evento a los botones "Comprar"
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-premium-1').addEventListener('click', confirmarCompra);
  document.getElementById('btn-premium-2').addEventListener('click', confirmarCompra);
});

// Función que actualiza la hora y fecha en el HTML
function actualizarHora() {
  const fecha = new Date();
  const horas = String(fecha.getHours()).padStart(2, '0');
  const minutos = String(fecha.getMinutes()).padStart(2, '0');
  const segundos = String(fecha.getSeconds()).padStart(2, '0');

  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const año = fecha.getFullYear();

  const horaCompleta = `${horas}:${minutos}:${segundos}`;
  const fechaCompleta = `${dia}/${mes}/${año}`;
  
  document.getElementById("hora").textContent = horaCompleta;
  document.getElementById("fecha").textContent = fechaCompleta;

  document.title = `spy - ${horaCompleta} - ${fechaCompleta}`;
}

// Actualiza la hora cada segundo
setInterval(actualizarHora, 1000);
