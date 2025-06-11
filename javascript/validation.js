export function validateName(name) {
    return name.trim() !== '';
}

export function validateCartNumber(number) {
    const digits = number.replace(/\s/g, '');
    return digits.length === 16 && /^\d+$/.test(digits);
}

export function validateMonth(month) {
    const m = parseInt(month, 10);
    return !isNaN(m) && m >= 1 && m <= 12;

}

export function validateYear(year) {
    if (!year.trim()) return false;
    const y = parseInt(year, 10);
    const currentYear = new Date().getFullYear() % 100;
    return !isNaN(y) && y >= currentYear && y <= 99;
}

export function validateCVC(cvc) {
    return /^\d{3}$/.test(cvc) && parseInt(cvc, 10) > 0;
}
