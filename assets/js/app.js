// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// light or dark theme //

function lightMode() {
    const element = document.body;
    const image = document.getElementById("theme-icon");
    element.classList.toggle("light-mode");

        if (image.getAttribute('src') === "assets/icons/icons8-light-on-96.png")
        {
            image.src = "assets/icons/icons8-light-96.png";
        }
        else
        {
            image.src = "assets/icons/icons8-light-on-96.png";
        }
}

// Animate when scrolling //

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If element is visible
        if (entry.isIntersecting) {
            // Anim class
            entry.target.classList.add('appear-anim');
        }
    });
});

// Which element the observer will track
observer.observe(document.querySelector('.hero'));
observer.observe(document.querySelector('.skills'));
observer.observe(document.querySelector('.projects-section'));
observer.observe(document.querySelector('.contact'));
observer.observe(document.querySelector('.CV-btn'));