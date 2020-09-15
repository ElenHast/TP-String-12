/*Hacer una funcion que dado un string y un caracter, devuelva una cadena de caracteres con todas las palabras que comienzan y terminan con ese caracter. */

function palabrasconA(texto){
  let i = 0;
  let palabrasconA = "";
  let palabras;
  while(texto[i] != "."){
    while (texto[i] == " "){
      i++;
    }
    palabras = "";
    while(texto[i]!=" " && texto[i]!="."){
      palabras = palabras+texto[i];
      i++;
    }
    if (palabras.startsWith("a")== true && palabras.endsWith("a")== true){
      palabrasconA = palabrasconA +" "+palabras;
    }
  }
  return palabrasconA;
}

console.log(palabrasconA("Comiendo papas estaba ana analia anama el papa amigo de mi Papa."));
