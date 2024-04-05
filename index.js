var contenedor = document.querySelector(".slider"),
  btnIzquierdo = document.getElementById("btn-izquierda"),
  btnDerecho = document.getElementById("btn-derecha");

btnDerecho.addEventListener("click", function () {
  contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});
