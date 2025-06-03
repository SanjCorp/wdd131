function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  // Fecha actual y última modificación
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastmodified").textContent = document.lastModified;

  // Cálculo de windchill
  const temp = parseFloat(document.getElementById("temperature").textContent);
  const speed = parseFloat(document.getElementById("windspeed").textContent);
  const windchill = document.getElementById("windchill");

  if (temp <= 10 && speed > 4.8) {
    windchill.textContent = calculateWindChill(temp, speed) + " °C";
  } else {
    windchill.textContent = "N/A";
  }
});
