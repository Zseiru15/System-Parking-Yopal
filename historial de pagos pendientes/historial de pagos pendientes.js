function marcarComoPagado(elemento) {
    elemento.classList.remove("bg-green-200", "text-green-800");
    elemento.classList.add("bg-gray-200", "text-gray-800");
    elemento.innerText = "Pagado (confirmado)";
}

function redirigirPagos() {
    window.location.href = "pagos-confirmados.html";
}

document.querySelectorAll(".btn-pagado").forEach(function(boton) { 
    boton.addEventListener("click", function() {
        marcarComoPagado(boton);
    });
});

function mostrarDetalles(nombre, placa, hora, fecha, monto, vehiculo) {
    document.getElementById("detalleNombre").textContent = `Nombre: ${nombre}`;
    document.getElementById("detallePlaca").textContent = `Placa: ${placa}`;
    document.getElementById("detalleHora").textContent = `Hora: ${hora}`;
    document.getElementById("detalleFecha").textContent = `Fecha: ${fecha}`;
    document.getElementById("detalleMonto").textContent = `Monto: ${monto}`;
    document.getElementById("detalleVehiculo").textContent = `Vehículo: ${vehiculo}`;
    document.getElementById("detalleModal").classList.remove("hidden");
}

function cerrarModal() {
    document.getElementById("detalleModal").classList.add("hidden");
}

function marcarComoPagado(statusId) {
    const plataformaFuncionando = true; // Cambiar a false para probar el error
    if (plataformaFuncionando) {
        document.getElementById("notificacion").classList.remove("hidden");
        // Eliminar los botones y agregar el mensaje "Pago completo"
        const statusDiv = document.getElementById(statusId);
        statusDiv.innerHTML = `
            <div class="complete bg-green-200 text-green-800 px-4 py-2 rounded">Pago completo</div>
        `;
    } else {
        document.getElementById("error").classList.remove("hidden");
    }
}

function cerrarNotificacion() {
    document.getElementById("notificacion").classList.add("hidden");
}

