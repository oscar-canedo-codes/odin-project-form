document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll("[data-carousel-button]");

    // SET the event listener
    // HANDLE button clicks
    // FIND the carousel and slides
    // IDENTIFY the active slide
    // CALCULATE the new index
    // HANDLE index boundaries
    // UPDATE active slide

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("Button clicked!"); // Debugging line
            /*  'offset' determines the direction in which the carousel should move, (1 = next ; -1 = previous): */
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button
                /* .closest() -> Finds the nearest ancestor element with the attribute, because the button is inside the carousel and we need to find the slides within the specific carousel that the button belongs to. */
                .closest("[data-carousel]")
                .querySelector("[data-slides]");
            console.log(slides); // Debugging line
            const activeSlide = slides.querySelector("[data-active]");
            console.log(activeSlide); // Debugging line
            /* [...slides.children] converts this HTMLCollection into an array. */
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            /* slides.children gives us an HTMLCollection of all slide elements. */
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            console.log("New Index:", newIndex); // Debugging line
            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
});

