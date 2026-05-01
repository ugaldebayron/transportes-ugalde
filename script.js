let imagenes = [
    "imagenes/1.jpeg",
    "imagenes/2.jpeg",
    "imagenes/3.jpeg",
    "imagenes/4.jpeg",
    "imagenes/5.jpeg",
    "imagenes/6.jpeg",
    "imagenes/7.jpeg"
];
let indice = 0;

function cambiarImagen() {
    let imagen = document.getElementById("carousel-image");

    imagen.style.opacity = 0;

    setTimeout(() => {
        imagen.src = imagenes[indice];
        imagen.style.opacity = 1;
    }, 400);
}

function siguiente() {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    cambiarImagen();
}

function anterior() {
    indice--;
    if (indice < 0) {
        indice = imagenes.length - 1;
    }
    cambiarImagen();
}

setInterval(siguiente, 3000);