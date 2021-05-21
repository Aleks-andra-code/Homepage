{
    const welcome = () => {
        console.log("hello world!");
    }

    const showImage = () => {
        const image = document.querySelector(".js-image");
        const button = document.querySelector(".js-button");
        image.classList.toggle("js-imageOn");
        button.innerText = image.classList.contains("js-imageOn")
            ? "Ukryj zdjęcie"
            : "Pokaż zdjęcie";
    }
    
    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", showImage);
    }

    welcome();
    init();
}