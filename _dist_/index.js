import { registerImage } from './lazy.js'

//1 crear imagen
//2 agregar imagen
const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const content = document.createElement("div")
    content.className = "p-4";

    const imagen = document.createElement("img")
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);
    content.appendChild(imageWrapper);
    
    appendedImages++;
    printLog();

    return content;
};

const mountNode = document.getElementById("images");

const addButton = document.querySelector('button')

const cleanButton = document.querySelector("#clean");

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

const cleanImages = () => {

    console.log(mountNode.childNodes);

    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 

};

addButton.addEventListener("click", addImage)
cleanButton.addEventListener("click", cleanImages)