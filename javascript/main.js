import { initLanguageToggle, translatePage } from './language.js';
import { initForm } from "./form-handler.js";

window.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initForm();
    translatePage();
});