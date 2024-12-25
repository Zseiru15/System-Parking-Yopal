const tableBody = document.getElementById("tableBody");
const actionButtons = document.getElementById("actionButtons");
const successMessage = document.getElementById("successMessage");

let isEditing = false;

// Añadir un nuevo registro vacío
function addRow() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 16);

    const newRow = `
        <tr>
            <td><input type="datetime-local" value="${formattedDate}" required></td>
            <td><input type="datetime-local" required></td>
            <td contenteditable="true">Placa</td>
            <td contenteditable="true">Celda</td>
            <td contenteditable="true">Vehículo</td>
            <td contenteditable="true">$0.00</td>
            <td contenteditable="true">$0.00</td>
            <td contenteditable="true">Usuario</td>
            <td contenteditable="true">Observaciones</td>
            <td contenteditable="true">$0.00</td>
        </tr>
    `;

    tableBody.insertAdjacentHTML("beforeend", newRow);
    showActionButtons();
}

// Mostrar botones de acción
function showActionButtons() {
    actionButtons.style.display = "block";
}

// Editar la tabla
function editTable() {
    isEditing = true;

    const rows = tableBody.getElementsByTagName("tr");
    for (const row of rows) {
        const cells = row.cells;
        for (let i = 0; i < cells.length; i++) {
            cells[i].setAttribute("contenteditable", "true");
        }
        const dateInputs = row.getElementsByTagName("input");
        for (const input of dateInputs) {
            input.disabled = false;
        }
    }
}

// Guardar los cambios
function saveTable() {
    const rows = tableBody.getElementsByTagName("tr");

    for (const row of rows) {
        const cells = row.cells;
        for (let i = 0; i < cells.length - 1; i++) {
            if (!cells[i].textContent.trim() && !cells[i].getElementsByTagName("input")[0]?.value) {
                alert("Por favor, llena todas las casillas antes de guardar.");
                return;
            }
            cells[i].setAttribute("contenteditable", "false");
        }
        const dateInputs = row.getElementsByTagName("input");
        for (const input of dateInputs) {
            input.disabled = true;
        }
    }

    isEditing = false;
    actionButtons.style.display = "none";
    showSuccessMessage();
}

// Cancelar edición
function cancelEdit() {
    if (!isEditing) return;

    const rows = tableBody.getElementsByTagName("tr");
    for (const row of rows) {
        const cells = row.cells;
        for (let i = 0; i < cells.length; i++) {
            cells[i].setAttribute("contenteditable", "false");
        }
        const dateInputs = row.getElementsByTagName("input");
        for (const input of dateInputs) {
            input.disabled = true;
        }
    }
    isEditing = false;
    actionButtons.style.display = "none";
}

// Borrar un registro
function deleteRow() {
    const rows = tableBody.getElementsByTagName("tr");
    if (rows.length > 0) {
        tableBody.removeChild(rows[rows.length - 1]);
    }
}

// Mostrar mensaje de éxito
function showSuccessMessage() {
    successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 2000);
}
