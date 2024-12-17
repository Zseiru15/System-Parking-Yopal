let settingsSaved = false;
let history = [];

function saveSettings() {
    const currentDate = document.getElementById('current-date').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const ticket = document.getElementById('ticket').value || generateNewTicket();
    const plate = document.getElementById('plate').value;
    const brand = document.getElementById('brand').value;
    const month = document.getElementById('month').value;
    const address = document.getElementById('address').value;
    const rate = document.getElementById('rate').value;
    const cashier = document.getElementById('cashier').value;

    const entry = { currentDate, startTime, endTime, ticket, plate, brand, month, address, rate, cashier };
    history.push(entry);

    settingsSaved = true;
    alert('Datos guardados exitosamente.');
}

function showExtraButtons() {
    if (settingsSaved) {
        alert('Recibo listo para imprimir.');
    } else {
        alert('Guarde los datos antes de imprimir.');
    }
}

function generateNewTicket() {
    const newTicket = 'XDZ' + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    document.getElementById('ticket').value = newTicket;
    return newTicket;
}
