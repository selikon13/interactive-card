/* === check name (not empty) === */

export function validateName(name) {
    return name.trim() !== '';
}

/* === Checking card number (16 numbers) === */

export function validateCartNumber(number) {
    const digits = number.replace(/\s/g, '');
    return digits.length === 16 && /^\d+$/.test(digits);
}

/* === check month (1-12) === */
export function validateMonth(month) {
    const m = parseInt(month, 10);
    return !isNaN(m) && m >= 1 && m <= 12;

}

/* === check year (not earlier than 25) === */
export function validateYear(year) {
    if (!year.trim()) return false;
    const y = parseInt(year, 10);
    const currentYear = new Date().getFullYear() % 100;
    return !isNaN(y) && y >= currentYear && y <= 99;
}

/* === check cvc (3 numbers) === */
export function validateCVC(cvc) {
    return /^\d{3}$/.test(cvc) && parseInt(cvc, 10) > 0;
}
