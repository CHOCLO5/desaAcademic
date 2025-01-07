const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0; // Índice actual del carrusel

// Función para actualizar la posición del carrusel
function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula el desplazamiento en porcentaje
  carousel.style.transform = `translateX(${offset}%)`; // Desplaza el carrusel
}

// Evento para el botón "Siguiente"
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Avanza al siguiente elemento (bucle infinito)
  updateCarousel();
});

// Evento para el botón "Anterior"
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Retrocede al elemento anterior (bucle infinito)
  updateCarousel();
});