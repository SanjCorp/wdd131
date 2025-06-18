const products = [
  { id: "f001", name: "Flexible Tripod" },
  { id: "f002", name: "Camera Lens" },
  { id: "f003", name: "LED Light Panel" },
  { id: "f004", name: "Microphone" }
];

const selectElement = document.querySelector("#productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  selectElement.appendChild(option);
});
