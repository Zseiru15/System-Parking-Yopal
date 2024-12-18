let totalMonthlyViews = 0;
let totalDailyViews = 0; // Visitas del día

// Función para redirigir a la oferta
function redirigirOferta(url) {
    // Incrementar visitas mensuales y diarias
    totalMonthlyViews++;
    totalDailyViews++;

    document.getElementById("total-monthly-views").textContent = totalMonthlyViews;
    document.getElementById("total-daily-views").textContent = totalDailyViews;

    // Redirigir al URL
    window.open(url, "_blank");
}

// Función para mostrar el modal
function mostrarModal(modalType) {
    if (modalType === 'addOffer') {
        document.getElementById("addOfferModal").style.display = "block";
    } else if (modalType === 'stats') {
        document.getElementById("statsModal").style.display = "block";
        mostrarFechaYHora();
    }
}

// Función para cerrar los modales
function cerrarModal() {
    document.getElementById("addOfferModal").style.display = "none";
    document.getElementById("statsModal").style.display = "none";
}

// Confirmar oferta y agregarla a las recientes
function confirmarOferta() {
    const name = document.getElementById("offer-name").value;
    const description = document.getElementById("offer-description").value;
    const image = document.getElementById("offer-image").files[0];

    if (!name || !description || !image) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const recentOffers = document.getElementById("recent-offers");

        const newOffer = document.createElement("div");
        newOffer.className = "offer-item";
        newOffer.innerHTML = `
            <img src="${e.target.result}" alt="${name}">
            <div class="text">
                <h2>${name}</h2>
                <p>${description}</p>
                <p class="views">Visitas: 0</p>
            </div>
        `;
        newOffer.setAttribute("onclick", `redirigirOferta('https://maps.google.com/?q=Parqueadero+Unicentro+Yopal')`);
        recentOffers.appendChild(newOffer);

        cerrarModal();
    };
    reader.readAsDataURL(image);
}

// Mostrar fecha y hora actual en las estadísticas
function mostrarFechaYHora() {
    const currentDateTime = new Date();
    document.getElementById("current-datetime").textContent = currentDateTime.toLocaleString();
}

// Versículo diario
const versiculos = [
    "El Señor es mi pastor, nada me faltará. - Salmos 23:1",
    "Todo lo puedo en Cristo que me fortalece. - Filipenses 4:13",
    "El amor todo lo soporta, todo lo cree, todo lo espera, todo lo soporta. - 1 Corintios 13:7",
];
document.getElementById("daily-verse").textContent = versiculos[new Date().getDate() % versiculos.length];

// Reinicio mensual de vistas
const currentMonth = new Date().getMonth();
setInterval(() => {
    const now = new Date();
    if (now.getMonth() !== currentMonth) {
        alert(`Reiniciando visitas mensuales. Total del mes pasado: ${totalMonthlyViews}`);
        totalMonthlyViews = 0;
        totalDailyViews = 0;
        document.getElementById("total-monthly-views").textContent = totalMonthlyViews;
        document.getElementById("total-daily-views").textContent = totalDailyViews;

        // Reiniciar contador en cada oferta
        document.querySelectorAll(".views").forEach(view => view.textContent = "Visitas: 0");
    }
}, 86400000); // Verificar diariamente
