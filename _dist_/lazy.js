//1 funcion registrar imagen

const isIntersecting = (entry) => {
    return entry.isIntersecting
};

const loadImage = (entry) => {
    const content = entry.target;
    const imagen = content.querySelector("img");
    const url = imagen.dataset.src;
    imagen.src = url;

    loadedImages++;
    printLog();

    //desregistra la imagen, unlisten
    observer.unobserve(content);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen)
};