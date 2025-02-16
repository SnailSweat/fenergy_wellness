document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active')); // Hide all slides
        slides[index].classList.add('active'); // Show the slide at 'index'
    }

    function updateNavigationButtons() {
        if (currentSlideIndex === 0) {
            prevButton.disabled = true; // Disable "Previous" button on first slide
        } else {
            prevButton.disabled = false;
        }

        if (currentSlideIndex === slides.length - 1) {
            nextButton.disabled = true; // Disable "Next" button on last slide
        } else {
            nextButton.disabled = false;
        }
    }

    function goToPrevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1; // Loop to the last slide
        }
        showSlide(currentSlideIndex);
        updateNavigationButtons();
    }

    function goToNextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0; // Loop back to the first slide
        }
        showSlide(currentSlideIndex);
        updateNavigationButtons();
    }

    // Initial setup
    showSlide(currentSlideIndex); // Show the first slide initially
    updateNavigationButtons();

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
});
