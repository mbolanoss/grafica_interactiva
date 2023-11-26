function gestionarLago(svg) {
  // Se busca el icono de GPS del Lago de Como
  let iconoLago = svg.getElementById("icono-lago");

  // Se añade un listener para cuando se clickee
  iconoLago.addEventListener("click", () => {
    let infoLago = document.getElementById("info-lago");

    // Se quita esta clase para mostrar la seccion
    infoLago.classList.remove("info-oculta");
  });

  // Se cambia el cursor al pasar el mouse por encima
  iconoLago.style.cursor = "pointer";
}

function gestionarTorre(svg) {
  let iconoTorre = svg.getElementById("icono-torre-pisa");

  // Se añade un listener para cuando se clickee
  iconoTorre.addEventListener("click", () => {
    let infoTorre = document.getElementById("info-torre");

    // Se quita esta clase para ocultar la seccion
    infoTorre.classList.remove("info-oculta");
  });

  // Se cambia el cursor al pasar el mouse por encima
  iconoTorre.style.cursor = "pointer";
}

function gestionarGaleria(svg) {
  let iconoGaleria = svg.getElementById("icono-galeria");

  // Se añade un listener para cuando se clickee
  iconoGaleria.addEventListener("click", () => {
    let infoGaleria = document.getElementById("info-galeria");

    // Se quita esta clase para ocultar la seccion
    infoGaleria.classList.remove("info-oculta");
  });

  // Se cambia el cursor al pasar el mouse por encima
  iconoGaleria.style.cursor = "pointer";
}

function gestionarCosta(svg) {
  let iconoCosta = svg.getElementById("icono-costa");

  // Se añade un listener para cuando se clickee
  iconoCosta.addEventListener("click", () => {
    let infoCosta = document.getElementById("info-costa");

    // Se quita esta clase para ocultar la seccion
    infoCosta.classList.remove("info-oculta");
  });

  // Se cambia el cursor al pasar el mouse por encima
  iconoCosta.style.cursor = "pointer";
}

function ocultarLago() {
  let infoLago = document.getElementById("info-lago");

  // Se añade esta clase para ocultar la seccion
  infoLago.classList.add("info-oculta");
}
function ocultarTorre() {
  let infoTorre = document.getElementById("info-torre");

  // Se añade esta clase para ocultar la seccion
  infoTorre.classList.add("info-oculta");
}
function ocultarGaleria() {
  let infoGaleria = document.getElementById("info-galeria");

  // Se añade esta clase para ocultar la seccion
  infoGaleria.classList.add("info-oculta");
}
function ocultarCosta() {
  let infoCosta = document.getElementById("info-costa");

  // Se añade esta clase para ocultar la seccion
  infoCosta.classList.add("info-oculta");
}

document.addEventListener("DOMContentLoaded", (event) => {
  let svgObject = document.getElementById("svg");

  svgObject.onload = () => {
    let svg = svgObject.contentDocument;

    gestionarLago(svg);
    gestionarTorre(svg);
    gestionarGaleria(svg);
    gestionarCosta(svg);
  };
});
