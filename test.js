

let texto = "Hola como andas.";
let i = 0;
let palabras = "";
while (texto[i] != ".") {
  while (texto[i] == " ") {
    i++;
  }
  palabras = "";
  while (texto[i] != "." && texto[i] != " " ) {
    if (texto.charCodeAt(i)%2==0) {
      palabras = palabras + texto[i];
      i++;
      console.log("par",texto[i])
    } else {
      palabras = palabras + texto.charCodeAt(i);
      i++;
      console.log("impar",texto[i])
    }
  }
  
}




function isOdd(num) { return num % 2;}
console.log("1 is " + isOdd(1));
console.log("2 is " + isOdd(2));
console.log("3 is " + isOdd(3));
console.log("4 is " + isOdd(4));


palabras = palabras + texto[i];
i++;
console.log(texto[i])
