window.onload = function () {
    // toma del HTML el numero de posiciones que el usuario quiere desplazar
    let inputPosiciones = document.getElementById("inputPosiciones");
    // el keyup es el evento que se dispara cuando la tecla sube
    inputPosiciones.addEventListener("keyup" , function (event) {
        // parseInt toma solo los numero enteros que el usuario escribe
        let positions = parseInt(inputPosiciones.value);
        // isNaN dice si es NaN, entonces cuando positions no es un numero se escribe 0.
        if (isNaN (positions) ) {
            inputPosiciones.value = 0;            
        } else if (positions > 100){
            inputPosiciones.value = 100;
        } else {
            inputPosiciones.value = positions;
        }
    });
}