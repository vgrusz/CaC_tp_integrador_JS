function resumenOnclick() {
  let inputCantidad = document.getElementById("inputCantidad");
  let selectCategoria = document.getElementById("selectCategoria");
  let porcentajeAPagar = [0.2, 0.5, 0.85];

  let total = porcentajeAPagar[selectCategoria.value] * 200 * inputCantidad.value;

  let labelPrecio = document.getElementById("labelPrecio");
  labelPrecio.innerText = "Total a pagar $ " + total;
}
