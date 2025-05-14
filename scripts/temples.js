// scripts/temples.js

// Mostrar el año actual
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Mostrar la última fecha de modificación
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
  const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short"
  });
  lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}
