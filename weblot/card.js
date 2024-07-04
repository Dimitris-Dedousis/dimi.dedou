const prevButton = document.querySelector('.slide-prev');
const nextButton = document.querySelector('.slide-next');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slides .card');

let currentIndex = 0;
let slideWidth = slideContainer.clientWidth;
const totalSlides = slides.length;

// Έλεγχος αν υπάρχει αποθηκευμένο currentIndex στο localStorage
if (localStorage.getItem('currentIndex')) {
    currentIndex = parseInt(localStorage.getItem('currentIndex'));
}

function updateSliderPosition() {
    const slideOffset = slides[currentIndex].offsetLeft;
    slideContainer.style.transform = `translateX(-${slideOffset}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSliderPosition();
    // Αποθήκευση του currentIndex στο localStorage
    localStorage.setItem('currentIndex', currentIndex.toString());
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
    // Αποθήκευση του currentIndex στο localStorage
    localStorage.setItem('currentIndex', currentIndex.toString());
});

// Ανανέωση του slideWidth στην αλλαγή του μεγέθους του παραθύρου
window.addEventListener('resize', () => {
    slideWidth = slideContainer.clientWidth;
    updateSliderPosition();
});


