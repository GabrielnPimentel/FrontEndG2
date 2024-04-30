const cards = document.querySelectorAll('.circle-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('is-flipped');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('is-flipped');
    });
});
