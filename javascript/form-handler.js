import {
    validateName,
    validateCartNumber,
    validateMonth,
    validateYear,
    validateCVC
} from './validation.js';

import {
    currentLanguage,
    translatePage,
    translateFormErrors
} from './language.js';

/* === update map UI when entering data === */

const updateCardUI = () => {
    document.getElementById('name-user').textContent = (nameInput.value || 'JANE APPLESEED').toUpperCase();
    document.getElementById('number-card').textContent = numberInput.value || '0000 0000 0000 0000';
    document.getElementById('date-card').textContent = `${monthInput.value || '00'}/${yearInput.value || '00'}`;
    document.getElementById('cvc-card').textContent = cvcInput.value || '000';
};

let nameInput, numberInput, monthInput, yearInput, cvcInput, confirmBtn;

/* === initializing form === */

export function initForm() {

/* === getting DOM elements === */

    nameInput = document.getElementById('cardholder-name-input');
    numberInput = document.getElementById('card-number-input');
    monthInput = document.getElementById('expiry-month-input');
    yearInput = document.getElementById('expiry-year-input');
    cvcInput = document.getElementById('cvc-input');
    confirmBtn = document.querySelector('.confirm-button');

    const nameError = document.getElementById('error-name');
    const numberError = document.getElementById('error-number');
    const dateError = document.getElementById('error-date');
    const cvcError = document.getElementById('error-cvc');

    function showError(input, key, errorEl) {
        input.classList.add('invalid');
        errorEl.dataset.errorKey = key;
        translateFormErrors(); // Update all form errors
    }

    function clearError(input, errorEl) {
        input.classList.remove('invalid');
        delete errorEl.dataset.errorKey;
        errorEl.textContent = '';
        translateFormErrors(); // Update all form errors
    }

    /* === event handlers for input fields === */

    nameInput.addEventListener('input', () => {
        nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, '').slice(0, 20);
        updateCardUI();
    });

    cvcInput.addEventListener('input', () => {
        cvcInput.value = cvcInput.value.replace(/\D/g, '').slice(0, 3);
        updateCardUI();
    });

    numberInput.addEventListener('input', () => {
        const raw = numberInput.value.replace(/\D/g, '').slice(0, 16);
        numberInput.value = raw.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
        updateCardUI();
    });

    [monthInput, yearInput].forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '').slice(0, 2);
            updateCardUI();
        });
    });

/* === validation form submission === */

    confirmBtn.addEventListener('click', e => {
        e.preventDefault();

        clearError(nameInput, nameError);
        clearError(numberInput, numberError);
        clearError(monthInput, dateError);
        clearError(yearInput, dateError);
        clearError(cvcInput, cvcError);

        /* === checking all fields === */

        let isValid = true;

        if (!validateName(nameInput.value)) {
            showError(nameInput, 'error-name-blank', nameError);
            isValid = false;
        }

        if (!validateCartNumber(numberInput.value)) {
            showError(numberInput, 'error-number-wrong-format', numberError);
            isValid = false;
        }

        if (!validateMonth(monthInput.value)) {
            showError(monthInput, 'error-month-invalid', dateError);
            isValid = false;
        }

        if (!validateYear(yearInput.value)) {
            showError(yearInput, 'error-year-invalid', dateError);
            isValid = false;
        }

        if (!validateCVC(cvcInput.value)) {
            showError(cvcInput, 'error-cvc-invalid', cvcError);
            isValid = false;
        }

        /* === success message === */

        if (isValid) {
            document.querySelector('.input-fields').style.display = 'none';
            const thankYouSection = document.getElementById('thk-text');
            thankYouSection.classList.add('active');

            const continueBtn = thankYouSection.querySelector('.continue-btn');
            continueBtn.addEventListener('click', () => {
                location.reload()
            });
        }
    });

    updateCardUI();
}