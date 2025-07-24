import { initLanguageToggle, translatePage } from './language.js';
import { initForm } from "./form-handler.js";

window.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle(); /* === setting up language switch === */
    initForm(); /* === initializang form === */
    translatePage(); /* === initial translation of the page === */
});