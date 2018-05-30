window.cipher = {
  encode: (text, positions)=> {
    let charCode;
    let result = "";
    for(let i = 0; i < text.length; i++) {
      charCode = (text.charCodeAt(i) - 65 + positions) % 26 + 65;
      result += String.fromCharCode(charCode);
    }

    return result;
  },
  decode: (text, positions) => {
    let charCode;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      charCode = (text.charCodeAt(i) - 65 - positions) % 26 + 65;
      result += String.fromCharCode(charCode);
    }

    return result;
  }
}