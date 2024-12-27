// Manejar botones de reserva
document.querySelectorAll('.button.reserve').forEach(button => {
    button.addEventListener('click', (event) => {
        const offer = event.target.dataset.offer;
        alert(`Has reservado un espacio en ${offer}. ¡Gracias por usar nuestro servicio!`);
    });
});

// Manejar botones de pago
document.querySelectorAll('.button.pay').forEach(button => {
    button.addEventListener('click', (event) => {
        const paymentId = event.target.dataset.payment;
        alert(`El pago de la reserva #${paymentId} se ha procesado correctamente.`);
    });
});
