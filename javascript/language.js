import { translations } from './translation.js';

export let currentLanguage = 'en';

export function translatePage() {
    const lang = translations[currentLanguage];
    if (!lang) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = lang[key] || el.textContent;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        el.placeholder = lang[key] || el.placeholder;
    });

    translateFormErrors();
}

export function translateFormErrors() {
    const lang = translations[currentLanguage];
    if (!lang) return;

    document.querySelectorAll('.error-message[data-error-key]').forEach(el => {
        const key = el.dataset.errorKey;
        el.textContent = lang[key] || '';
    });
}

export function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    translatePage();
}

export function initLanguageToggle() {
    const toggle = document.getElementById('ru-label');
    if (toggle) {
        toggle.addEventListener('click', toggleLanguage);
    }
}