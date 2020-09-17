//Con la ayudita de Lucho 


let texto = "Hola Mundo.";
let i = 0;
let palabras = "";

while (texto[i] != ".") {
  while (texto[i] == " ") {i++}
  while (texto[i] != "." && texto[i] != " " ) {
    if (i % 2 === 0) {
      palabras = palabras + texto[i];
    } else  {
      palabras = palabras + texto.charCodeAt(i);
    }
    i++
    if(texto[i] === ' '){
      palabras = palabras + ' '
    }
  }
  
}

console.log(palabras)
