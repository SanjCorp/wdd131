document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById("year");
  const lastModified = document.getElementById("lastModified");
  year.textContent = new Date().getFullYear();
  lastModified.textContent = document.lastModified;

  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windchillEl = document.getElementById("windchill");

  function calculateWindChill(tempC, windKmh) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
  }

  if (temp <= 10 && wind > 4.8) {
    windchillEl.textContent = `${calculateWindChill(temp, wind)} °C`;
  } else {
    windchillEl.textContent = "N/A";
  }
});
