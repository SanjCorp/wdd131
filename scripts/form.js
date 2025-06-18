const products = [
  { id: "prod001", name: "Smartphone X" },
  { id: "prod002", name: "Tablet Pro" },
  { id: "prod003", name: "Smartwatch Elite" },
  { id: "prod004", name: "Laptop Z" }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("product");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
});
