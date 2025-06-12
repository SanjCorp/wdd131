document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const figures = document.querySelectorAll('.temples-grid figure');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Quitar active a todos
      navLinks.forEach(l => l.classList.remove('active'));
      // Poner active al clickeado
      link.classList.add('active');

      const filter = link.getAttribute('data-filter');

      figures.forEach(figure => {
        switch(filter) {
          case 'all':
            figure.style.display = 'block';
            break;
          case 'small':
          case 'medium':
          case 'large':
            if(figure.getAttribute('data-size') === filter) {
              figure.style.display = 'block';
            } else {
              figure.style.display = 'none';
            }
            break;
          case 'recent':
            // Muestra templos con año mayor o igual a 2015
            if (parseInt(figure.getAttribute('data-year'), 10) >= 2015) {
              figure.style.display = 'block';
            } else {
              figure.style.display = 'none';
            }
            break;
          default:
            figure.style.display = 'block';
        }
      });
    });
  });
});
