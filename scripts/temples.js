// scripts/temples.js

// Muestra la fecha de la última modificación del documento en el footer
const lastModifiedElement = document.getElementById("lastModified");

if (lastModifiedElement) {
  const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short"
  });
  lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}
