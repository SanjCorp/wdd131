// Menu toggle
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

// Footer dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Last modified
document.getElementById('lastModified').textContent = document.lastModified;
