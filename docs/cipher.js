window.cipher = {
  // funcion encode con prametros text y positions
  encode: (text, positions) => {
    let charCode;
    // let result es una variable que se inicializa con un string vacio
    let result = "";
    // se convierte el texto de minuscula a mayuscula
    text = text.toUpperCase();
    // el buble for itera por cada letra del string "text"
    for (let i = 0; i < text.length; i++) {
      // se pregunta si el caracter esta fuera del rango de las letras desde 65 hasta 90
      if (text.charCodeAt(i) < 65 || text.charCodeAt(i) > 90) {
        // si esta fuera del rango se concatena el mismo caracter sin procesar
        result += text[i];
        // si esta dentro del rango se codifica el caracter
      } else {
        // el metodo charCodeAt me pasa la posicion del caracter i en el codigo ascii
        charCode = (text.charCodeAt(i) - 65 + positions) % 26 + 65;
        // concatena los caracteres en base charCode calculado
        result += String.fromCharCode(charCode);
      }
    }
    // devuelve el string resultante
    return result;
  },
  decode: (text, positions) => {
    let charCode;
    let result = "";
    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) < 65 || text.charCodeAt(i) > 90) {
        result += text[i];
      } else {
        charCode = text.charCodeAt(i) - 65 - positions % 26 + 65;
        // si el charCode quedo antes que el rango alfabeto del codigo ascii se suma 26 para volver a poderlo en rango
        if (charCode < 65) {
          charCode += 26;
        }
        result += String.fromCharCode(charCode);
      }
    }

    return result;
  }
}