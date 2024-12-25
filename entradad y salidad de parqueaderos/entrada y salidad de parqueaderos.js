function addVehicle() {
    const table = document.getElementById("vehicleTable");
    const row = table.insertRow();
    const cells = Array.from({ length: 11 }, () => row.insertCell());
    const now = new Date();

    cells[0].innerHTML = now.toLocaleDateString();
    cells[1].innerHTML = document.getElementById("plate").value;
    cells[2].innerHTML = document.getElementById("brand").value;
    cells[3].innerHTML = document.getElementById("model").value;
    cells[4].innerHTML = document.getElementById("color").value;
    cells[5].innerHTML = document.getElementById("year").value;
    cells[6].innerHTML = document.getElementById("owner").value;
    cells[7].innerHTML = document.getElementById("phone").value;
    cells[8].innerHTML = document.getElementById("email").value;
    cells[9].innerHTML = document.getElementById("entryTime").value;
    cells[10].innerHTML = document.getElementById("exitTime").value;

    const observation = document.getElementById("Observaciones").value;
    if (observation.trim() !== "") {
        addObservation(observation);
    } else {
        alert("Por favor, ingrese una observación.");
    }

    alert("Vehículo agregado al registro.");
}

function addObservation(observationText) {
    const observationTable = document.getElementById("observationTable");
    const row = observationTable.insertRow();
    const dateCell = row.insertCell(0);
    const observationCell = row.insertCell(1);
    const now = new Date();

    dateCell.textContent = now.toLocaleString(); // Fecha y hora completa
    observationCell.innerHTML = `<textarea>${observationText}</textarea>`;
}
