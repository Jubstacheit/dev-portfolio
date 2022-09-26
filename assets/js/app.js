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
    element.classList.toggle("light-mode");
    element.classList.toggle("light-mode2")
}