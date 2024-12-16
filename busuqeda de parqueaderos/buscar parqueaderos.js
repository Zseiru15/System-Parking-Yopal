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
