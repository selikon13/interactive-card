import { translations } from './translation.js';

/* === current language === */

export let currentLanguage = 'en'; 

/* === translate all page === */

export function translatePage() {
    const lang = translations[currentLanguage];
    if (!lang) return;

/* === translate words === */

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = lang[key] || el.textContent;
    });

/* === translate input fields === */

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = lang[key] || el.placeholder;
    });

    translateFormErrors();
}

/* === translate errors words === */

export function translateFormErrors() {
    const lang = translations[currentLanguage];
    if (!lang) return;

    document.querySelectorAll('.error-message[data-error-key]').forEach(el => {
        const key = el.dataset.errorKey;
        el.textContent = lang[key] || '';
    });
}

/* === switch language === */

export function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    translatePage();
}

/* === intilizing language switch === */

export function initLanguageToggle() {
    const toggle = document.getElementById('ru-label');
    if (toggle) {
        toggle.addEventListener('click', toggleLanguage);
    }
}