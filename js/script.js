console.log("hello world!");
let imageOn = document.querySelector(".section__imageOn");
let button = document.querySelector(".js-button");
let image = document.querySelector(".section__image");


button.addEventListener("click", () => {
    image.classList.toggle("section__imageOn");

    button.innerText = image.classList.contains("section__imageOn")
        ? "Ukryj zdjęcie"
        : "Pokaż zdjęcie";

});
