document.getElementById("menu").addEventListener("click", function () {
  document.querySelector(".navigation").classList.toggle("show");
});

document.getElementById("lastModified").textContent = document.lastModified;
