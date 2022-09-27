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