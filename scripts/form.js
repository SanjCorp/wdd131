const productArray = [
  { id: "product1", name: "SuperWidget" },
  { id: "product2", name: "MegaWidget" },
  { id: "product3", name: "UltraWidget" },
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  productArray.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
