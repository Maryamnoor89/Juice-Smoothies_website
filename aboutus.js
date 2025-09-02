document.addEventListener("DOMContentLoaded", () => {
    const brandImg = document.querySelector(".brand-story img");

    window.addEventListener("scroll", () => {
        const rect = brandImg.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8) {
            brandImg.classList.add("show"); // fade in
        } else {
            brandImg.classList.remove("show"); // fade out if scroll back up
        }
    });
});
