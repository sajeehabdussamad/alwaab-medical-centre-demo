function toggleMenu() {
    const nav = document.getElementById('navOverlay');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('toggle');
}

const filterButtons = document.querySelectorAll('.filter-btn');
const doctorCards = document.querySelectorAll('.doctor-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove "active" class from all buttons and add to the clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. Get the category to filter (e.g., "Dental", "ENT")
        const filterValue = button.textContent.toLowerCase();

        doctorCards.forEach(card => {
            // Find the tag inside the card
            const cardTag = card.querySelector('.dept-tag').textContent.toLowerCase();

            if (filterValue === 'all specialists' || cardTag.includes(filterValue)) {
                card.style.display = 'block'; // Show
            } else {
                card.style.display = 'none'; // Hide
            }
        });
    });
});