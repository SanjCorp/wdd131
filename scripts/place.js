// Footer dynamic content
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");
yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Wind Chill Calculation
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const windchillSpan = document.getElementById("windchill");

function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
  windchillSpan.textContent = `${calculateWindChill(temp, speed)}°C`;
} else {
  windchillSpan.textContent = "N/A";
}
