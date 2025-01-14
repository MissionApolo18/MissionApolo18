document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Cierra cualquier otra tarjeta abierta
        document.querySelectorAll('.card').forEach(c => c.classList.remove('open'));
        // Alterna la clase 'open' en la tarjeta actual
        card.classList.toggle('open');
    });
});
