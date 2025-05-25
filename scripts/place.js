// Toggle menu visibility
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    menu.classList.toggle("hidden");
  });

  // Show current year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Show last modified date
  document.getElementById("lastModified").textContent = document.lastModified;

  // Wind chill calculation
  const temp = parseFloat(document.getElementById("temp").textContent);
  const speed = parseFloat(document.getElementById("speed").textContent);
  const windChill = calculateWindChill(temp, speed);
  document.getElementById("windchill").textContent = windChill;
});

function calculateWindChill(t, s) {
  if (t <= 10 && s > 4.8) {
    const chill = 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
    return chill.toFixed(1) + " °C";
  } else {
    return "N/A";
  }
}
