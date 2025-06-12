const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/c0b097e48b46162d62e947823e6b23a603ca09c2/full/!320%2C224/0/default"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/640%2C/0/default"
  },
  {
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/640%2C/0/default"
  },
  {
    name: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/2dbb637a01da374959e9b50dd072294645917ea4/full/640%2C/0/default"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52124,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/640%2C/0/default"
  },
  {
    name: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955-09-11",
    area: 35455,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/a2c415301c7991e2e10059b5ec588a28785917b0/full/640%2C/0/default"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/640%2C/0/default"
  },
  {
    name: "Cebu City Philippines Temple",
    location: "Cebu City, Philippines",
    dedicated: "2010-06-13",
    area: 29958,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/1b2c438fbf03dce153643292f31889fcc54dd95a/full/640%2C/0/default"
  },
  {
    name: "Fortaleza Brazil Temple",
    location: "Fortaleza, Brazil",
    dedicated: "2019-06-02",
    area: 36000,
    imageUrl: "https://churchofjesuschrist.org/imgs/e2a28dbb2b14f5f71d79b359cf9f7b88dc480144/full/640%2C/0/default"
  },
  {
    name: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019-12-15",
    area: 38990,
    imageUrl: "https://churchofjesuschrist.org/imgs/55f6c59ce8f9c093a9c689067f8674335de544e2/full/640%2C/0/default"
  }
];

const displayTemples = (filteredTemples) => {
  const container = document.getElementById("temples");
  container.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.name}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);
  });
};

const filterTemples = (filter) => {
  let filtered = [];
  switch (filter) {
    case "small":
      filtered = temples.filter(t => t.area < 30000);
      break;
    case "medium":
      filtered = temples.filter(t => t.area >= 30000 && t.area <= 100000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 100000);
      break;
    default:
      filtered = temples;
      break;
  }

  // Actualiza el estado del nav
  document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
  document.querySelector(`nav a[onclick="filterTemples('${filter}')"]`)?.classList.add("active");

  displayTemples(filtered);
};

// Mostrar todos al cargar
window.addEventListener("load", () => {
  filterTemples("all");
});
