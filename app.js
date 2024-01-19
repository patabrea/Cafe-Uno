const openButton = document.querySelector("#openBtn");
const closeButton = document.querySelector("#closeBtn");
const navContainer = document.querySelector("#navContainer");
const body = document.body;

openButton.addEventListener("click", function () {
    navContainer.style.left = "0";
    closeButton.style.display = "block";
    openButton.style.display = "none";
    body.style.overflow = "hidden"; // Disable scrolling
});

closeButton.addEventListener("click", function () {
    navContainer.style.left = "-100vw";
    closeButton.style.display = "none";
    openButton.style.display = "block";
    body.style.overflow = "auto"; // Enable scrolling
});
