const boton_div = document.querySelector("div");

boton_div.addEventListener("click", function () {
    if (event.target !== boton) {
        alert("Hola! Soy el div");
    }
});