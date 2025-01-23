document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Cierra cualquier otra tarjeta abierta
        document.querySelectorAll('.card').forEach(c => c.classList.remove('open'));
        // Alterna la clase 'open' en la tarjeta actual
        card.classList.toggle('open');
    });
});

const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel(position) {
    track.style.transform = `translateX(${position}px)`;
}

function moveToCard(index) {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const position = -cardWidth * index;
    updateCarousel(position);
    currentIndex = index;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        moveToCard(currentIndex + 1);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToCard(currentIndex - 1);
    }
});
