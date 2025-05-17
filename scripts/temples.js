// Año actual
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Última modificación
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
