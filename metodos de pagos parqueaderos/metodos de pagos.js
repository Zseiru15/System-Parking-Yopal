const bankSelect = document.getElementById('bank-select');
const bankDetails = document.getElementById('bank-details');
const termsCheckbox = document.getElementById('terms-checkbox');
const submitButton = document.getElementById('submit-button');
const termsModal = document.getElementById('terms-modal');
const viewTermsButton = document.getElementById('view-terms');
const closeModalButton = document.getElementById('close-modal');

// Mostrar campos adicionales al seleccionar un banco
bankSelect.addEventListener('change', () => {
    if (bankSelect.value) {
        bankDetails.classList.remove('hidden');
    } else {
        bankDetails.classList.add('hidden');
    }
});

// Habilitar el botón de compra solo si se aceptan los términos
termsCheckbox.addEventListener('change', () => {
    submitButton.disabled = !termsCheckbox.checked;
});

// Mostrar el modal de términos y condiciones
viewTermsButton.addEventListener('click', () => {
    termsModal.classList.remove('hidden');
});

// Cerrar el modal de términos y condiciones
closeModalButton.addEventListener('click', () => {
    termsModal.classList.add('hidden');
});

