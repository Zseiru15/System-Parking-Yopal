// Función que actualiza la hora y fecha en el HTML
function actualizarHora() {
    // Crear una nueva fecha
    const fecha = new Date();
    
    // Obtener la hora, minuto y segundo
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
  
    // Obtener el día, mes y año
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const año = fecha.getFullYear();
  
    // Crear una cadena con la hora y la fecha
    const horaCompleta = `${horas}:${minutos}:${segundos}`;
    const fechaCompleta = `${dia}/${mes}/${año}`;
    
    // Actualizar el contenido de los elementos con las id correspondientes
    document.getElementById("hora").textContent = horaCompleta;
    document.getElementById("fecha").textContent = fechaCompleta;
  
    // Actualizar el título de la página
    document.title = `spy - ${horaCompleta} - ${fechaCompleta}`;
  }
  
  // Actualiza la hora cada segundo
  setInterval(actualizarHora, 1000);
  