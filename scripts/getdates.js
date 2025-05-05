const yearSpan = document.getElementById('year');
const lastModified = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModified.textContent = `Last Modified: ${document.lastModified}`;
