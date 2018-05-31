window.onload = function () {
  // toma del HTML el numero de posiciones que el usuario quiere desplazar
  let inputPosiciones = document.getElementById("inputPosiciones");
  let areaDecodificado = document.getElementById("areaDecodificado");
  let areaCodificado = document.getElementById("areaCodificado");
  // el keyup es el evento que se dispara cuando la tecla sube
  inputPosiciones.addEventListener("keyup", function (event) {
    // parseInt toma solo los numero enteros que el usuario escribe
    let positions = parseInt(inputPosiciones.value);
    // isNaN dice si es NaN, entonces cuando positions no es un numero se escribe 0.
    if (isNaN(positions)) {
      inputPosiciones.value = 0;
    } else if (positions > 100) {
      inputPosiciones.value = 100;
    } else {
      inputPosiciones.value = positions;
    }
  });
  // espera el evento que se dispara cuando se levanta una tecla
  areaDecodificado.addEventListener("keyup", function (event) {
    // toma el valor del area decodificado lo pasa a mayuscula y lo vuelve a asignar
    areaDecodificado.value = areaDecodificado.value.toUpperCase();
    //  se lee el valor actual del offset y el parseInt lo convierte al tipo
    let positions = parseInt(inputPosiciones.value);
    // se llama a encode con el texto del area decodificada para asignarlo en el area codificada
    areaCodificado.value = cipher.encode(areaDecodificado.value, positions);
  })

  areaCodificado.addEventListener("keyup", function (event) {
    areaCodificado.value = areaCodificado.value.toUpperCase();
    let positions = parseInt(inputPosiciones.value);
    areaDecodificado.value = cipher.decode(areaCodificado.value, positions);
  })
}