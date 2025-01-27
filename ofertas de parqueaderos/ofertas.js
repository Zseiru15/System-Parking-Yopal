// Manejar botones de reserva
document.querySelectorAll('.button.reserve').forEach(button => {
    button.addEventListener('click', (event) => {
        const offer = event.target.dataset.offer;
        alert(`Has reservado un espacio en ${offer}. ¡Gracias por usar nuestro servicio!`);
    });
});

// Redirigir al usuario a la página de detalles del pago al hacer clic en "Ver Pago"
document.querySelectorAll('.button.view-payment').forEach(button => {
    button.addEventListener('click', (event) => {
        const paymentId = event.target.dataset.payment;
        const paymentDate = event.target.dataset.date;
        // Redirigir con parámetros a la página de detalles
        window.location.href = `detalles-pago.html?payment=${paymentId}&date=${paymentDate}`;
    });
});

// Redirigir al usuario a la página de pagos al hacer clic en "Pagar"
document.querySelectorAll('.button.pay').forEach(button => {
    button.addEventListener('click', (event) => {
        const paymentId = event.target.dataset.payment;
        // Redirigir con parámetros a la página de pagos
        window.location.href = `pagar.html?payment=${paymentId}`;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const espaciosDisponiblesElement = document.getElementById('espacios-disponibles'); // Elemento para mostrar los espacios disponibles
    const botonEntrada = document.getElementById('boton-entrada'); // Botón para simular la entrada
    const botonSalida = document.getElementById('boton-salida'); // Botón para simular la salida

    function actualizarEspaciosDisponibles() {
        fetch('/api/parqueadero/1')
            .then(response => response.json())
            .then(data => {
                espaciosDisponiblesElement.textContent = `Espacios Disponibles: ${data.espaciosDisponibles}`;
            })
            .catch(error => {
                console.error("Error al obtener los espacios disponibles:", error);
                espaciosDisponiblesElement.textContent = "Error al cargar";
            });
    }

    botonEntrada.addEventListener('click', () => {
        fetch('/api/parqueadero/1/entrada', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                actualizarEspaciosDisponibles();
            }).catch(error=>{
                console.error("Error al registrar la entrada:", error)
            });
    });

    botonSalida.addEventListener('click', () => {
        fetch('/api/parqueadero/1/salida', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                actualizarEspaciosDisponibles();
            }).catch(error=>{
                console.error("Error al registrar la salida:", error)
            });
    });

    actualizarEspaciosDisponibles(); // Cargar los espacios disponibles al iniciar la página
});

// Manejar el botón "ver pago"
document.querySelectorAll('.button.view').forEach(button => {
    button.addEventListener('click', (event) => {
        const paymentId = event.target.dataset.payment;
        const paymentDate = event.target.previousElementSibling.textContent.replace('Fecha de pago: ', '');
        
        // Redirigir a la página de pagos con parámetros en la URL
        window.location.href = `pagos.html?paymentId=${paymentId}&paymentDate=${paymentDate}`;
    });
});
