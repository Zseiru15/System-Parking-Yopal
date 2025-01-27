function generarRegistro() {
    const datetimeEntry = document.getElementById("datetime-entry").value;
    const plate = document.getElementById("plate").value;
    const vehicle = document.getElementById("vehicle").value;
    const rate = document.getElementById("rate").value;
    const cashier = document.getElementById("cashier").value;

    if (!datetimeEntry || !plate || !cashier) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Generar código único para el ticket
    const ticketCode = `TKT-${Date.now()}`;

    // Guardar información del registro en el almacenamiento local
    const registro = {
        datetimeEntry,
        plate,
        vehicle,
        rate: parseInt(rate),
        cashier,
        ticketCode,
    };
    localStorage.setItem(ticketCode, JSON.stringify(registro));

    alert(`Registro generado con éxito. Código del Ticket: ${ticketCode}`);
}

function registrarSalida() {
    const ticketCode = prompt("Ingrese el código del ticket:");

    if (!ticketCode) {
        alert("Debe ingresar un código de ticket válido.");
        return;
    }

    // Recuperar información del registro
    const registro = JSON.parse(localStorage.getItem(ticketCode));
    if (!registro) {
        alert("Código de ticket no encontrado.");
        return;
    }

    // Obtener datos de salida
    const datetimeExit = new Date().toISOString();
    const datetimeEntry = new Date(registro.datetimeEntry);
    const horasEstacionadas = Math.ceil((new Date(datetimeExit) - datetimeEntry) / (1000 * 60 * 60));
    const totalPagar = horasEstacionadas * registro.rate;

    // Generar ventana con información de salida
    const salidaInfo = `
        Vehículo: ${registro.vehicle}
        Placa: ${registro.plate}
        Cajero: ${registro.cashier}
        Código del Ticket: ${registro.ticketCode}
        Fecha y Hora de Ingreso: ${registro.datetimeEntry}
        Fecha y Hora de Salida: ${datetimeExit}
        Tarifa por Hora: $${registro.rate}
        Total a Pagar: $${totalPagar}
    `;

    alert(`Registro de Salida:\n\n${salidaInfo}`);
    localStorage.removeItem(ticketCode); // Eliminar el registro del almacenamiento local
}
