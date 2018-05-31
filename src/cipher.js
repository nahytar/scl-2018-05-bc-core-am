window.cipher = {
  // funcion encode con prametros text y positions
  encode: (text, positions)=> {
    let charCode;
    // let result es una variable que se inicializa con un string vacio
    let result = "";
    // el buble for itera por cada letra del string "text"
    for(let i = 0; i < text.length; i++) {
      // el metodo charCodeAt me pasa la posicion del caracter i en el codigo ascii
      charCode = (text.charCodeAt(i) - 65 + positions) % 26 + 65;
      // concatena los caracteres en base charCode calculado
      result += String.fromCharCode(charCode);
    }
    // devuelve el string resultante
    return result;
  },
  decode: (text, positions) => {
    let charCode;
    let result = "";
    for (let i = 0; i < text.length; i++) {

      charCode = text.charCodeAt(i) - 65 - positions % 26 + 65;
      // si el charCode quedo antes que el rango alfabeto del codigo ascii se suma26 para volver a poderlo en rango
      if (charCode < 65) {
        charCode += 26;
      }
      result += String.fromCharCode(charCode);
    }

    return result;
  }
}