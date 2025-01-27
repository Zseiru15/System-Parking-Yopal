// Función para mostrar las secciones y ocultar las demás
function showSection(sectionId) {
    const sections = document.querySelectorAll('.vip-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Oculta todas las secciones
    });
    document.getElementById(sectionId).style.display = 'block'; // Muestra la sección seleccionada
}

// Función para mostrar un mensaje de éxito al enviar el formulario
function showSuccessMessage(event) {
    event.preventDefault(); // Previene el envío del formulario
    alert('Reserva exitosa. Gracias por preferirnos.'); // Muestra un mensaje de éxito
}

// Al cargar el documento, se muestra la sección 'reservar' por defecto
document.addEventListener('DOMContentLoaded', function() {
    showSection('reservar');
});

function mostrarCampoCedula() {
    // Obtener el valor seleccionado
    const tipoDocumento = document.getElementById('tipo_documento').value;

    // Mostrar u ocultar el campo según el tipo de documento seleccionado
    if (tipoDocumento === 'c.c' || tipoDocumento === 'pasaporte' || tipoDocumento === 'ti') {
        document.getElementById('campo_numero').style.display = 'block';
    } else {
        document.getElementById('campo_numero').style.display = 'none';
    }
}

// Función para actualizar el campo de la hora con la hora actual
function setHoraActual() {
    // Obtener la hora y los minutos actuales
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    // Asegurarse de que los minutos y horas tengan dos dígitos
    if (horas < 10) {
        horas = '0' + horas;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }

    // Establecer el valor del campo de hora
    const horaInput = document.getElementById('hora');
    horaInput.value = horas + ':' + minutos;
}

// Llamar a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', setHoraActual);

// Función para validar que solo se ingresen letras
function validarSoloLetras(input) {
    const soloLetrasRegex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
    return soloLetrasRegex.test(input.value.trim());
}

// Función que maneja el envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    const nombreInput = document.getElementById('nombre-membresia');
    const apellidoInput = document.getElementById('apellido-membresia');
    const errorMessage = document.getElementById('error-message');

    // Verificar que el nombre y apellido solo contengan letras
    if (!validarSoloLetras(nombreInput) || !validarSoloLetras(apellidoInput)) {
        // Mostrar mensaje de error y prevenir el envío del formulario
        errorMessage.style.display = 'block';
        event.preventDefault(); // Evitar que el formulario se envíe
    } else {
        // Si la validación es correcta, ocultar mensaje de error
        errorMessage.style.display = 'none';
    }
});

//Mostrar y Ocultar las Políticas al Marcar el Checkbox
function togglePoliticas() {
    var politicasDiv = document.getElementById("politicas");
    var privacidadCheckbox = document.getElementById("privacidad");

    // Si el checkbox está marcado, mostrar las políticas
    if (privacidadCheckbox.checked) {
        politicasDiv.style.display = "block";
    } else {
        politicasDiv.style.display = "none";
    }
}
//Mostrar/Ocultar Secciones Según el Método de Pago Seleccionado
function mostrarMetodosPago() {
    var metodoPago = document.getElementById('plata').value;
}
    // Ocultar todas las secciones de métodos de pago
    var seccionesPago = document.querySelectorAll('.metodo-pago');
    seccionesPago.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección correspondiente según la selección
    // Muestra u oculta las secciones de métodos de pago
function mostrarMetodosPago() {
    var metodoPago = document.getElementById('plata').value;
    
    // Ocultar todas las secciones de métodos de pago
    var seccionesPago = document.querySelectorAll('.metodo-pago');
    seccionesPago.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección correspondiente según la selección
    if (metodoPago === 'efectivo') {
        document.getElementById('efectivo').style.display = 'block';
    } else if (metodoPago === 'tarjeta') {
        document.getElementById('tarjeta').style.display = 'block';
    } else if (metodoPago === 'nequi') {
        document.getElementById('nequi').style.display = 'block';
    } else if (metodoPago === 'daviplata') {
        document.getElementById('daviplata').style.display = 'block';
    } else if (metodoPago === 'bancolombia') {
        document.getElementById('bancolombia').style.display = 'block';
    }
}

// Enviar el formulario y redirigir al banco correspondiente
document.getElementById('form-pago').addEventListener('submit', function(event) {
    event.preventDefault();

    var metodoPago = document.getElementById('plata').value;
}, false);
    // Dependiendo del método de pago seleccionado, redirigir al banco correspondiente
   // Muestra u oculta las secciones de métodos de pago
function mostrarMetodosPago() {
    var metodoPago = document.getElementById('plata').value;

    // Ocultar todas las secciones de métodos de pago
    var seccionesPago = document.querySelectorAll('.metodo-pago');
    seccionesPago.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección correspondiente según la selección
    if (metodoPago === 'efectivo') {
        document.getElementById('efectivo').style.display = 'block';
    } else if (metodoPago === 'tarjeta') {
        document.getElementById('tarjeta').style.display = 'block';
    } else if (metodoPago === 'nequi') {
        document.getElementById('nequi').style.display = 'block';
    } else if (metodoPago === 'daviplata') {
        document.getElementById('daviplata').style.display = 'block';
    } else if (metodoPago === 'bancolombia') {
        document.getElementById('bancolombia').style.display = 'block';
    }
}

// Enviar el formulario y redirigir al banco correspondiente
document.getElementById('form-pago').addEventListener('submit', function(event) {
    event.preventDefault();

    var metodoPago = document.getElementById('plata').value;

    // Dependiendo del método de pago seleccionado, redirigir al banco correspondiente
    if (metodoPago === 'efectivo') {
        // Puedes redirigir a una página de pago con instrucciones para Efectivo
        alert('Por favor, paga en el punto de Efectivo más cercano.');
    } else if (metodoPago === 'tarjeta') {
        // Redirigir a una página de pago de tarjetas de crédito (ejemplo de pago en línea)
        window.location.href = 'https://www.pagoinlinea.com/tarjeta';
    } else if (metodoPago === 'nequi') {
        // Redirigir al sistema de pagos de Nequi
        window.location.href = 'https://www.nequi.com.co';
    } else if (metodoPago === 'daviplata') {
        // Redirigir a Daviplata
        window.location.href = 'https://www.daviplata.com';
    } else if (metodoPago === 'bancolombia') {
        // Redirigir a Bancolombia para realizar el pago
        window.location.href = 'https://www.bancolombia.com.co';
    }
});
 // Obtener el botón por su ID
document.getElementById('vipButton').addEventListener('click', function() {
    // Redirigir a la página de inicio
    window.location.href = "file:///C:/Users/mairo/OneDrive/Documents/repo_sena/System-Parking-Yopal/busqueda%20de%20parqueaderos/buscar%20parqueaderos.html";
});