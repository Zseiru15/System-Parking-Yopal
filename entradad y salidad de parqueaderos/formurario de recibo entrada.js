// Actualiza la tarifa automáticamente según el tipo de vehículo seleccionado
function actualizarTarifa() {
    const rate = document.getElementById("vehicle").value;
    document.getElementById("rate").value = `$${parseInt(rate).toLocaleString("es-CO")}`;

    // Generar un nuevo ticket cuando se selecciona un tipo de vehículo
    generarCodigoTicket(rate);
}

// Genera un código de ticket basado en tres números aleatorios y los últimos dígitos de la tarifa
function generarCodigoTicket(rate) {
    const random = Math.floor(Math.random() * 900) + 100; // Generar un número aleatorio entre 100 y 999
    const lastDigits = rate.slice(-3); // Últimos tres dígitos de la tarifa
    const ticketCode = `${random}${lastDigits}`;
    document.getElementById("ticket").value = ticketCode;
}

// Guardar ajustes y mostrar ventana emergente para impresión
function guardarAjustes() {
    const datetimeEntry = document.getElementById("datetime-entry").value;
    const plate = document.getElementById("plate").value.toUpperCase();
    const vehicle = document.getElementById("vehicle").options[document.getElementById("vehicle").selectedIndex].text;
    const rate = document.getElementById("rate").value;
    const cashier = document.getElementById("cashier").value;
    const observations = document.getElementById("observations").value;
    const ticketCode = document.getElementById("ticket").value;

    if (!datetimeEntry || !plate || !cashier) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Registro completo
    const registro = {
        datetimeEntry,
        plate,
        vehicle,
        rate,
        cashier,
        observations,
        ticketCode,
    };

    // Mostrar ventana emergente para imprimir el recibo
    mostrarVentanaImprimir(registro);
}

// Ventana emergente con datos del recibo
function mostrarVentanaImprimir(registro) {
    const contenido = `
        <h2>Recibo de Parqueadero</h2>
        <p><strong>Ticket:</strong> ${registro.ticketCode}</p>
        <p><strong>Fecha y Hora de Ingreso:</strong> ${registro.datetimeEntry}</p>
        <p><strong>Placa:</strong> ${registro.plate}</p>
        <p><strong>Tipo de Vehículo:</strong> ${registro.vehicle}</p>
        <p><strong>Tarifa:</strong> ${registro.rate}</p>
        <p><strong>Cajero:</strong> ${registro.cashier}</p>
        <p><strong>Observaciones:</strong> ${registro.observations || "Ninguna"}</p>
        <button onclick="window.print()">Imprimir Recibo</button>
    `;

    const ventana = window.open("", "Imprimir Recibo", "width=400,height=600");
    ventana.document.write(`
        <html>
            <head>
                <title>Recibo</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                    h2 { color: #333; }
                    p { margin: 10px 0; }
                    button {
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        padding: 10px 15px;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                </style>
            </head>
            <body>
                ${contenido}
            </body>
        </html>
    `);
    ventana.document.close();
}
