function ordenar() {
    const table = document.getElementById('parking-table');
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));
        return priceA - priceB;
    });
    rows.forEach(row => table.tBodies[0].appendChild(row));
}

function filtrar() {
    const table = document.getElementById('parking-table');
    const rows = Array.from(table.rows).slice(1);
    rows.forEach(row => {
        const rating = parseInt(row.getAttribute('data-rating'));
        row.style.display = rating >= 4 ? '' : 'none';
    });
}

function buscar() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const table = document.getElementById('parking-table');
    const rows = Array.from(table.rows).slice(1);
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
    });
}

// Escuchar el evento click del botón
document.getElementById('vipButton').addEventListener('click', function () {
    // Mostrar mensaje emergente
    alert("Bienvenido al sistema de parqueadero VIP");

    // Redirigir a otra página
    window.location.href = "file:///C:/Users/mairo/OneDrive/Documents/repo_sena/System-Parking-Yopal/busuqeda%20de%20parqueaderos/buscar%20parqueadero%20vip.html" // Cambia esta URL por la página deseada
});